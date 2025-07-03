#!/usr/bin/env python3
"""
Markdown to HTML converter for blog posts
将Markdown文件批量转换为博客文章HTML格式
"""

import os
import re
from datetime import datetime
import argparse

# 尝试导入markdown库
try:
    import markdown
except ImportError:
    print("正在安装 markdown 库...")
    import subprocess
    subprocess.check_call(['pip', 'install', 'markdown'])
    import markdown

def extract_title_and_date(md_content):
    """从Markdown内容中提取标题和日期"""
    lines = md_content.strip().split('\n')
    
    # 默认值
    title = "未命名文章"
    date = datetime.now().strftime("%Y年%m月%d日")
    
    # 查找第一个标题作为文章标题
    for line in lines:
        if line.startswith('# '):
            title = line[2:].strip()
            break
    
    # 尝试从内容中查找日期（格式：2025年1月15日 或 2025-01-15）
    date_pattern1 = r'(\d{4})年(\d{1,2})月(\d{1,2})日'
    date_pattern2 = r'(\d{4})-(\d{1,2})-(\d{1,2})'
    
    for line in lines[:10]:  # 只在前10行查找日期
        match1 = re.search(date_pattern1, line)
        match2 = re.search(date_pattern2, line)
        
        if match1:
            date = match1.group(0)
            break
        elif match2:
            year, month, day = match2.groups()
            date = f"{year}年{month}月{day}日"
            break
    
    return title, date

def convert_markdown_to_html(md_content, title, date):
    """将Markdown内容转换为HTML"""
    # 配置markdown扩展
    md = markdown.Markdown(extensions=['extra', 'nl2br'])
    
    # 移除标题和日期行（如果存在）
    lines = md_content.strip().split('\n')
    filtered_lines = []
    skip_next = False
    
    for i, line in enumerate(lines):
        if i == 0 and line.startswith('# '):
            continue  # 跳过第一个标题
        if '年' in line and '月' in line and '日' in line and len(line) < 20:
            continue  # 跳过日期行
        filtered_lines.append(line)
    
    cleaned_content = '\n'.join(filtered_lines)
    
    # 转换内容
    html_content = md.convert(cleaned_content)
    
    # 创建完整的HTML文档
    html_template = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - 我的博客</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <header>
        <h1 class="slogan">记录思考，分享生活</h1>
    </header>
    
    <main>
        <div class="container">
            <a href="../index.html" class="back-link">← 返回首页</a>
            
            <article class="article-page">
                <div class="article-header">
                    <h1>{title}</h1>
                    <p class="article-date">{date}</p>
                </div>
                
                <div class="article-content">
                    {html_content}
                </div>
            </article>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2025 我的博客. All rights reserved.</p>
    </footer>
</body>
</html>"""
    
    return html_template

def process_markdown_file(md_file_path, output_dir):
    """处理单个Markdown文件"""
    print(f"处理文件: {md_file_path}")
    
    # 读取Markdown文件
    with open(md_file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # 提取标题和日期
    title, date = extract_title_and_date(md_content)
    
    # 转换为HTML
    html_content = convert_markdown_to_html(md_content, title, date)
    
    # 生成输出文件名
    base_name = os.path.basename(md_file_path)
    html_file_name = base_name.replace('.md', '.html')
    output_path = os.path.join(output_dir, html_file_name)
    
    # 写入HTML文件
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"  → 已转换为: {output_path}")
    
    return {
        'title': title,
        'date': date,
        'filename': html_file_name,
        'summary': extract_summary(md_content)
    }

def extract_summary(md_content):
    """从Markdown内容中提取摘要（前100个字符）"""
    lines = md_content.strip().split('\n')
    
    # 跳过标题和日期
    content_lines = []
    for line in lines:
        # 跳过标题行
        if line.startswith('#'):
            continue
        # 跳过日期行
        if '年' in line and '月' in line and '日' in line and len(line) < 20:
            continue
        # 跳过空行
        if not line.strip():
            continue
        content_lines.append(line)
    
    # 合并内容
    text = ' '.join(content_lines)
    
    # 移除Markdown标记
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    text = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', text)
    text = re.sub(r'`(.+?)`', r'\1', text)
    
    # 获取前100个字符作为摘要
    summary = text.strip()[:100]
    if len(text.strip()) > 100:
        summary += '...'
    
    return summary

def generate_article_list(articles):
    """生成文章列表的JavaScript代码"""
    js_code = "// 更新 script.js 中的 articles 数组\nconst articles = [\n"
    
    for i, article in enumerate(articles):
        js_code += f"""    {{
        id: {i + 1},
        title: "{article['title']}",
        date: "{article['date']}",
        summary: "{article['summary']}",
        url: "posts/{article['filename']}"
    }}"""
        if i < len(articles) - 1:
            js_code += ","
        js_code += "\n"
    
    js_code += "];\n"
    
    return js_code

def main():
    parser = argparse.ArgumentParser(description='批量将Markdown文件转换为博客HTML文件')
    parser.add_argument('input', nargs='?', default='markdown', 
                        help='输入目录或Markdown文件路径 (默认: markdown)')
    parser.add_argument('-o', '--output', default='posts', 
                        help='输出目录 (默认: posts)')
    parser.add_argument('-u', '--update-js', action='store_true',
                        help='同时更新script.js中的文章列表')
    
    args = parser.parse_args()
    
    # 确保输出目录存在
    os.makedirs(args.output, exist_ok=True)
    
    # 收集要处理的Markdown文件
    md_files = []
    if os.path.isfile(args.input) and args.input.endswith('.md'):
        md_files.append(args.input)
    elif os.path.isdir(args.input):
        for filename in os.listdir(args.input):
            if filename.endswith('.md'):
                md_files.append(os.path.join(args.input, filename))
    else:
        print(f"错误: {args.input} 不是有效的文件或目录")
        return
    
    if not md_files:
        print("未找到任何Markdown文件")
        return
    
    # 处理所有Markdown文件
    articles = []
    for md_file in sorted(md_files):
        article_info = process_markdown_file(md_file, args.output)
        articles.append(article_info)
    
    print(f"\n总计转换了 {len(articles)} 个文件")
    
    # 如果需要更新JavaScript文件
    if args.update_js:
        # 读取现有的script.js文件
        script_path = 'script.js'
        if os.path.exists(script_path):
            with open(script_path, 'r', encoding='utf-8') as f:
                script_content = f.read()
            
            # 获取现有的文章数据
            import json
            existing_articles = []
            articles_match = re.search(r'const articles = \[(.*?)\];', script_content, re.DOTALL)
            if articles_match:
                # 尝试解析现有文章
                try:
                    # 简单的解析，假设格式规范
                    articles_text = articles_match.group(1)
                    # 这里简化处理，直接合并新旧文章
                except:
                    pass
            
            # 直接生成完整文章列表
            js_code = generate_article_list(articles)
            print("\n生成的文章列表JavaScript代码:")
            print(js_code)
            print("\n请将以上代码更新到 script.js 文件中")
        else:
            js_code = generate_article_list(articles)
            print("\n生成的文章列表JavaScript代码:")
            print(js_code)
            print("\n请将以上代码更新到 script.js 文件中")

if __name__ == "__main__":
    main()