// 文章数据
const articles = [
    {
        id: 1,
        title: "Using Python for Data Analysis - A Beginner's Guide",
        date: "January 20, 2025",
        summary: "Recently began learning to use Python for data analysis and discovered it to be a very powerful and practical skill. Today I want to share my learning insights. Python has unique advantages in the data analysis field including concise syntax, rich ecosystem, and active community.",
        url: "posts/example.html"
    },
    {
        id: 71,
        title: "轻量级引擎架构设计的深度思考与实践",
        date: "April 20, 2025",
        summary: "在GIM Pro项目的开发过程中，为实现大规模复杂资产模型在不同终端与网络环境下的高性能呈现和响应式交互，我们需要构建具备轻量化加载能力、智能资源调度机制与多模态集成能力的可视化引擎模块。这个挑战促使我深入思考轻量级引擎架构的设计原理和实现方案。",
        url: "posts/post070.html"
    },
    {
        id: 70,
        title: "GIM Pro项目中的多模态数据集成技术探索",
        date: "April 5, 2025",
        summary: "在参与GIM Pro项目的开发过程中，多模态数据集成一直是我们面临的核心技术挑战之一。系统需支持异构数据解析、几何代数空间表达与关系运算，能够在空间基元的形态表达与关联构建中引入微分算子或空间代数表达式，实现核心构件的参数化、组合化与拓扑表达。",
        url: "posts/post069.html"
    },
    {
        id: 69,
        title: "数据库优化实战：从慢查询到高性能",
        date: "March 18, 2025",
        summary: "数据库性能优化是后端开发中的重要技能，也是系统性能提升的关键环节。最近在优化一个电商系统的数据库性能时，积累了很多实战经验。从最初的慢查询频发到现在的高性能稳定运行，这个过程让我对数据库优化有了更深的理解。",
        url: "posts/post068.html"
    },
    {
        id: 68,
        title: "容器化技术在企业级应用中的实践之路",
        date: "March 2, 2025",
        summary: "从Docker的兴起到Kubernetes的普及，容器化技术已经成为现代应用部署的标准选择。作为一名从传统虚拟化环境转向容器化的架构师，我想分享一下在企业级应用中实施容器化的完整实践经验。",
        url: "posts/post067.html"
    },
    {
        id: 67,
        title: "前端性能优化的深度实践",
        date: "February 15, 2025",
        summary: "作为一名全栈开发者，我深知前端性能对用户体验的重要性。一个页面加载速度的差异可能直接影响用户的留存率和转化率。最近几个月，我在多个项目中实践了各种前端性能优化技术，今天想系统地分享这些经验。",
        url: "posts/post066.html"
    },
    {
        id: 66,
        title: "深入理解分布式系统中的一致性问题",
        date: "January 8, 2025",
        summary: "分布式系统的一致性问题一直是系统设计中的核心挑战之一。最近在重构一个分布式交易系统时，深刻体会到了一致性设计的复杂性和重要性。今天想系统地梳理一下分布式一致性的相关概念和实践经验。",
        url: "posts/post065.html"
    },
    {
        id: 63,
        title: "技术会议参与感悟：从听众到演讲者的转变",
        date: "December 25, 2024",
        summary: "技术会议是开发者成长的重要平台，它不仅是学习新技术的场所，更是建立人脉、分享经验、展示自我的舞台。我的技术会议之旅始于三年前，从一个紧张的听众成长为自信的演讲者，这个过程充满了挑战和收获。本文将分享我在技术会议参与过程中的经历和感悟。 我的第一次技术会议经历是参加QCon上海站。当时的我带着满满的期待和一丝紧张走进会场。",
        url: "posts/post062.html"
    },
    {
        id: 62,
        title: "Building Scalable APIs: From Monolith to Microservices",
        date: "December 12, 2024",
        summary: "A comprehensive guide documenting our journey from a monolithic API serving 100,000+ users to a scalable microservices architecture. Covers the challenges we faced, migration strategies like the Strangler Fig pattern, implementation of API gateways, event-driven architecture, and the lessons learned throughout the transformation process.",
        url: "posts/post061.html"
    },
    {
        id: 52,
        title: "开源项目贡献指南：从使用者到贡献者的进阶之路",
        date: "December 10, 2024",
        summary: "作为一名开发者，我在开源世界中从最初的纯粹使用者，逐步成长为活跃的贡献者和项目维护者。这个过程不仅提升了我的技术能力，更重要的是让我理解了开源精神的真谛。今天想分享我的开源贡献经历，希望能帮助更多开发者踏上这条充实而有意义的道路。",
        url: "posts/post051.html"
    },
    {
        id: 65,
        title: "DevOps实践中的自动化部署经验分享",
        date: "December 3, 2024",
        summary: "作为一名从传统运维转向DevOps的工程师，我深深体会到自动化部署对团队效率和产品质量的巨大提升。今天想分享一些在DevOps实践中关于自动化部署的经验和思考。",
        url: "posts/post064.html"
    },
    {
        id: 51,
        title: "Mastering GraphQL: Building Efficient APIs for Modern Applications",
        date: "November 28, 2024",
        summary: "A deep dive into GraphQL implementation, from solving REST API limitations like over-fetching to building production-ready GraphQL servers. Covers schema design, resolver optimization, DataLoader for N+1 problem solutions, custom directives, subscriptions, caching strategies, and performance monitoring.",
        url: "posts/post050.html"
    },
    {
        id: 61,
        title: "开源贡献之旅：从用户到维护者的成长历程",
        date: "November 28, 2024",
        summary: "开源软件是现代软件开发的基石，几乎每个开发者都在某种程度上依赖开源项目。然而，从单纯的开源软件使用者转变为积极的贡献者，再到项目维护者，这是一个充满挑战和成长的旅程。本文将分享我在开源世界中的经历和感悟。 我的开源之旅开始于一个简单的需求：我需要一个React组件库来快速搭建UI。当时我选择了一个名为`react-awesome-ui`的项目，它提供了我需要的大部分组件。",
        url: "posts/post060.html"
    },
    {
        id: 50,
        title: "全栈工程师的成长之路：技术栈选择与项目实战经验",
        date: "November 15, 2024",
        summary: "作为一名从前端开发转向全栈工程师的程序员，我深深体会到全栈开发既有技术广度的挑战，也有项目完整性的满足感。在这个过程中，我不仅需要掌握前后端技术，还要理解产品设计、用户体验、系统架构等多个维度。今天想分享我在全栈开发路上的一些思考和实践经验。 三年前，我是一名专职的前端开发工程师，主要使用React和Vue构建用户界面：",
        url: "posts/post049.html"
    },
    {
        id: 60,
        title: "Debugging War Stories: Tales from the Trenches",
        date: "November 15, 2024",
        summary: "Real-world debugging adventures including the case of disappearing users due to Redis session failures, memory leaks that weren't traditional leaks but buffer fragmentation, race conditions in payment processing, and complex spatial data integration challenges. Each story includes investigation methods, root cause analysis, and solutions.",
        url: "posts/post059.html"
    },
    {
        id: 64,
        title: "系统架构设计中的性能优化实践",
        date: "November 15, 2024",
        summary: "最近在负责一个大型分布式系统的架构设计，深深感受到性能优化在系统设计中的重要性。今天想分享一些在系统架构层面进行性能优化的实践经验。",
        url: "posts/post063.html"
    },
    {
        id: 49,
        title: "Building Resilient Systems: A Deep Dive into Chaos Engineering",
        date: "November 2, 2024",
        summary: "A comprehensive exploration of chaos engineering principles and practices. Details how to build resilient systems by deliberately introducing failures, implementing chaos experiments, monitoring system behavior, and using tools like Gremlin and custom chaos testing frameworks to improve system reliability.",
        url: "posts/post048.html"
    },
    {
        id: 59,
        title: "代码审查实践：提升团队代码质量的系统化方法",
        date: "November 2, 2024",
        summary: "代码审查是软件开发过程中最重要的质量保障环节之一。在我参与的项目中，实施系统化的代码审查流程不仅显著提升了代码质量，还促进了团队知识分享和技术成长。本文将分享我们团队在代码审查实践中的经验和心得。",
        url: "posts/post058.html"
    },
    {
        id: 48,
        title: "容器化部署实践：从Docker到Kubernetes的演进之路",
        date: "October 18, 2024",
        summary: "三年前，我们的应用还运行在传统的虚拟机上，部署一次需要2小时，回滚更是让人头疼的操作。如今，通过容器化和Kubernetes编排，我们实现了秒级扩容、蓝绿部署、自动回滚等云原生能力。这篇文章将分享我们从单体应用到云原生架构的完整演进过程。",
        url: "posts/post047.html"
    },
    {
        id: 58,
        title: "Learning Machine Learning: My Journey into AI Development",
        date: "October 18, 2024",
        summary: "Six months ago, I was a traditional web developer working primarily with React and Node.js. While I enjoyed building user interfaces and APIs, I kept hearing about the transformative potential of...",
        url: "posts/post057.html"
    },
    {
        id: 47,
        title: "Building a Real-Time Data Pipeline: From Kafka to Analytics Dashboard",
        date: "October 5, 2024",
        summary: "A detailed guide to building scalable real-time data pipelines using Apache Kafka. Covers the transition from batch processing to streaming, implementing event-driven architectures, handling millions of events per day, and creating real-time analytics dashboards for business operations.",
        url: "posts/post046.html"
    },
    {
        id: 57,
        title: "DevOps自动化实践：从手动部署到CI/CD流水线",
        date: "October 5, 2024",
        summary: "在软件开发的早期阶段，手动部署似乎是一个可以接受的选择。然而，随着项目规模的扩大和发布频率的提高，手动部署的弊端逐渐显现：容易出错、耗时、不可重复、难以回滚。本文将分享我们团队从手动部署转向全自动化CI/CD流水线的实践经验。",
        url: "posts/post056.html"
    },
    {
        id: 46,
        title: "技术会议演讲经历：从听众到讲者的转变",
        date: "September 22, 2024",
        summary: "两年前，我还是技术会议上那个坐在最后一排、默默做笔记的听众。如今，我已经在QCon、ArchSummit等知名技术会议上做过多次分享。这个从听众到讲者的转变过程，不仅提升了我的技术影响力，更重要的是让我深度思考和梳理了自己的技术经验。",
        url: "posts/post045.html"
    },
    {
        id: 56,
        title: "Building a Real-time Data Pipeline with Apache Kafka: Lessons from Production",
        date: "September 22, 2024",
        summary: "A production case study of implementing a high-throughput data pipeline with Apache Kafka processing 100,000+ events per second. Covers architecture design, event streaming patterns, maintaining sub-second latency, zero data loss strategies, and scaling for peak traffic loads.",
        url: "posts/post055.html"
    },
    {
        id: 45,
        title: "Database Migration at Scale: Lessons from Zero-Downtime PostgreSQL Upgrade",
        date: "September 10, 2024",
        summary: "A comprehensive case study of migrating a 2TB PostgreSQL database from version 11 to 14 with zero downtime while serving 50,000+ concurrent users. Covers migration strategies, testing approaches, rollback procedures, and performance optimization techniques for large-scale database upgrades.",
        url: "posts/post044.html"
    },
    {
        id: 55,
        title: "数据库索引优化实战：从慢查询到毫秒响应",
        date: "September 10, 2024",
        summary: "在现代Web应用开发中，数据库性能往往是系统瓶颈的主要来源。一个设计良好的索引策略可以将查询性能提升几个数量级，而错误的索引设计则可能导致系统性能急剧下降。本文将分享我在实际项目中进行数据库索引优化的经验和心得。",
        url: "posts/post054.html"
    },
    {
        id: 44,
        title: "移动端开发最佳实践：打造高性能原生应用",
        date: "August 28, 2024",
        summary: "作为一名全栈开发者，我在过去两年中深度参与了公司移动端应用的开发，从React Native到原生iOS/Android，积累了不少经验教训。今天想分享一些关于移动端开发的最佳实践，特别是如何在保证用户体验的同时提升应用性能。",
        url: "posts/post043.html"
    },
    {
        id: 54,
        title: "My Journey with React Performance Optimization: A Developer's Diary",
        date: "August 28, 2024",
        summary: "A personal diary-style journey through React performance optimization. Covers identifying performance bottlenecks, eliminating unnecessary re-renders, implementing React.memo and useMemo, code splitting strategies, and transforming a sluggish dashboard into a responsive application.",
        url: "posts/post053.html"
    },
    {
        id: 43,
        title: "Building a Scalable API Gateway: Design Patterns and Implementation",
        date: "August 15, 2024",
        summary: "A comprehensive guide to building scalable API gateways for microservices architectures. Covers design patterns, implementation strategies, handling service discovery, authentication, rate limiting, monitoring, and managing the transition from monolithic to distributed API management.",
        url: "posts/post042.html"
    },
    {
        id: 53,
        title: "深入理解微服务架构中的事件驱动模式",
        date: "August 15, 2024",
        summary: "在现代软件开发中，微服务架构已经成为构建大型分布式系统的主流方式。然而，随着服务数量的增加，服务间的通信和协调变得越来越复杂。事件驱动架构作为一种有效的解决方案，为微服务间的松耦合通信提供了强大的支持。",
        url: "posts/post052.html"
    },
    {
        id: 42,
        title: "职场成长复盘：从初级开发者到技术Leader的五年历程",
        date: "August 2, 2024",
        summary: "回顾五年前刚入职时的自己，青涩、焦虑、充满不确定性。如今作为一名技术团队的Leader，我想复盘这段成长历程，分享一些心得和思考，希望能给正在成长路上的同行一些启发。",
        url: "posts/post041.html"
    },
    {
        id: 28,
        title: "个人成长复盘：从代码搬运工到技术架构师的进阶之路",
        date: "July 26, 2024",
        summary: "回顾自己的技术成长历程，从刚入行时的迷茫到现在能够独当一面设计技术架构，这个过程充满了挑战和收获。今天想深度复盘一下这段成长经历，希望能给正在路上的同学一些参考和启发。",
        url: "posts/post027.html"
    },
    {
        id: 41,
        title: "Building Resilient Systems: Chaos Engineering in Practice",
        date: "July 20, 2024",
        summary: "Lessons learned from implementing chaos engineering after a Black Friday outage. Covers building resilient systems through proactive failure testing, implementing chaos experiments, using tools like Gremlin, and developing a culture of reliability engineering in production environments.",
        url: "posts/post040.html"
    },
    {
        id: 27,
        title: "AI辅助编程实践：从ChatGPT到Copilot的开发效率革命",
        date: "July 19, 2024",
        summary: "AI技术的快速发展正在深刻改变软件开发的方式。作为一个每天都在使用各种AI编程工具的开发者，我想分享一下这段时间在AI辅助编程方面的实践经验，包括工具选择、使用技巧以及对开发流程的影响。",
        url: "posts/post026.html"
    },
    {
        id: 26,
        title: "微服务架构设计实战：从单体到分布式的演进路径",
        date: "July 12, 2024",
        summary: "最近参与了公司一个大型单体应用向微服务架构的迁移项目，这个过程让我对微服务架构有了更深入的理解。从架构设计、服务拆分、到部署运维，每个环节都有很多值得分享的经验和踩过的坑。",
        url: "posts/post025.html"
    },
    {
        id: 40,
        title: "技术写作的艺术：从代码注释到技术博客",
        date: "July 8, 2024",
        summary: "作为一名开发者，我花了很长时间才意识到写作能力对技术职业发展的重要性。从最初害怕写代码注释，到现在定期发表技术博客，这个过程不仅提升了我的沟通能力，更重要的是帮助我更深入地理解技术概念。今天想分享一些关于技术写作的心得和实践经验。",
        url: "posts/post039.html"
    },
    {
        id: 25,
        title: "现代JavaScript深度解析：ES2024新特性与最佳实践",
        date: "July 5, 2024",
        summary: "JavaScript语言在近几年发展迅速，从ES6开始几乎每年都有重要的新特性发布。作为一个前端开发者，跟上JavaScript的发展步伐对于写出现代化、高效的代码至关重要。今天我想深入分析一下ES2024的新特性，以及在实际项目中如何应用这些现代JavaScript技术。",
        url: "posts/post024.html"
    },
    {
        id: 24,
        title: "现代前端状态管理演进：从Redux到Zustand的架构选择",
        date: "June 28, 2024",
        summary: "前端状态管理一直是React应用开发中的核心话题。从早期的Flux架构到Redux的兴起，再到现在Zustand、Jotai等轻量级方案的流行，我在不同项目中都有深度实践。今天分享一下对现代前端状态管理的思考和选择策略。",
        url: "posts/post023.html"
    },
    {
        id: 39,
        title: "Machine Learning in Production: From Jupyter Notebooks to Scalable Systems",
        date: "June 25, 2024",
        summary: "A detailed journey of deploying machine learning models from research notebooks to production systems. Covers MLOps practices, model serving infrastructure, data pipeline automation, monitoring ML systems, A/B testing frameworks, and scaling recommendation systems for millions of users.",
        url: "posts/post038.html"
    },
    {
        id: 23,
        title: "数据库设计模式与性能优化实战：从关系型到NoSQL的演进之路",
        date: "June 21, 2024",
        summary: "最近公司的几个项目都遇到了数据库性能瓶颈问题，从传统的关系型数据库到现代的NoSQL解决方案，我在这个过程中积累了不少实战经验。今天想系统性地总结一下数据库设计模式和性能优化的最佳实践。",
        url: "posts/post022.html"
    },
    {
        id: 22,
        title: "Web性能优化深度实践：从毫秒级优化到用户体验提升",
        date: "June 14, 2024",
        summary: "性能优化是前端开发中永恒的话题。最近花了几个月时间对公司的主要Web应用进行深度性能优化，从加载时间到交互响应，每一个毫秒的提升都意味着更好的用户体验。今天分享一下这次优化的完整过程和收获。",
        url: "posts/post021.html"
    },
    {
        id: 38,
        title: "代码审查文化建设：从个人技能到团队标准",
        date: "June 10, 2024",
        summary: "一年前，当我开始在新公司担任技术负责人时，发现团队的代码审查流程形同虚设。大部分PR都是草草通过，缺乏实质性的反馈。经过一年的努力，我们建立了一套完善的代码审查文化，不仅提高了代码质量，更重要的是促进了团队的技术成长。",
        url: "posts/post037.html"
    },
    {
        id: 21,
        title: "DevOps实践：从手动部署到全自动化CI/CD流水线",
        date: "June 7, 2024",
        summary: "今天想分享一下我们团队在DevOps实践方面的演进历程。从最初的手动部署到现在的全自动化CI/CD流水线，这个过程充满了挑战和收获。",
        url: "posts/post020.html"
    },
    {
        id: 20,
        title: "个人反思：程序员如何在快速变化的技术世界中保持竞争力",
        date: "May 31, 2024",
        summary: "最近参加了几场技术会议，也和不少同行聊了聊职业发展的话题。在这个技术日新月异的时代，如何保持自己的技术竞争力成了一个越来越重要的问题。今天想分享一些我的思考和感悟。",
        url: "posts/post019.html"
    },
    {
        id: 37,
        title: "Building a Real-Time Analytics Dashboard: WebSockets, Redis, and React",
        date: "May 28, 2024",
        summary: "A comprehensive guide to building real-time analytics dashboards using WebSockets, Redis, and React. Covers handling thousands of concurrent users, implementing sub-second data updates, system architecture design, and displaying live user behavior, system metrics, and business KPIs.",
        url: "posts/post036.html"
    },
    {
        id: 19,
        title: "Kubernetes生产环境最佳实践与踩坑总结",
        date: "May 24, 2024",
        summary: "最近在公司负责将几个核心服务迁移到Kubernetes平台，在这个过程中积累了不少生产环境的最佳实践经验，也踩了不少坑。今天整理一下这些经验，希望能帮助到其他正在或准备使用K8s的同学。 apiVersion: kubeadm.k8s.io/v1beta3 kind: ClusterConfiguration",
        url: "posts/post018.html"
    },
    {
        id: 18,
        title: "今日开发记录：实现一个高性能的虚拟滚动组件",
        date: "May 17, 2024",
        summary: "今天接到一个任务，需要优化一个包含上万条数据的列表页面。现有的实现方式是直接渲染所有DOM元素，导致页面卡顿严重。决定实现一个虚拟滚动组件来解决这个问题。",
        url: "posts/post017.html"
    },
    {
        id: 36,
        title: "深入理解Node.js内存管理与性能优化",
        date: "May 15, 2024",
        summary: "作为一名Node.js开发者，内存管理一直是我最关注的话题之一。最近在优化一个高并发API服务时，遇到了严重的内存泄漏问题，这促使我深入研究了Node.js的内存管理机制。今天想分享一些实践经验和解决方案。 我们的API服务在生产环境中运行了几个月，突然开始出现内存使用量不断增长的问题。监控显示内存使用从正常的200MB逐渐增长到2GB，最终导致服务崩溃。",
        url: "posts/post035.html"
    },
    {
        id: 17,
        title: "前端状态管理演进：从Redux到Zustand的实践之路",
        date: "May 10, 2024",
        summary: "前端状态管理一直是复杂应用开发中的核心挑战。从早期的jQuery时代到现在的React生态，状态管理方案不断演进。今天想分享我在状态管理方案选择和实践中的心路历程。 刚开始接触Redux时，被它的单向数据流和可预测性深深吸引，但也被它的繁琐语法所困扰： // Action Types const INCREMENT = 'counter/increment';",
        url: "posts/post016.html"
    },
    {
        id: 16,
        title: "GraphQL API设计与性能优化实战",
        date: "May 3, 2024",
        summary: "随着前端应用复杂度的增加，传统的REST API开始暴露出一些限制。GraphQL作为一种新的API查询语言，为我们提供了更灵活的数据获取方式。今天分享一下我在GraphQL API设计和性能优化方面的实践经验。 const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList,...",
        url: "posts/post015.html"
    },
    {
        id: 35,
        title: "Team Leadership in Tech: Lessons from Managing a Distributed Development Team",
        date: "May 2, 2024",
        summary: "Insights from leading a distributed development team of 15 engineers across four time zones. Covers technical leadership challenges, remote team management strategies, communication frameworks, building team cohesion, and transitioning from individual contributor to people manager.",
        url: "posts/post034.html"
    },
    {
        id: 15,
        title: "技术学习感悟：从CRUD到系统架构师的成长路径",
        date: "April 26, 2024",
        summary: "作为一名技术人，回顾自己从初级开发者到架构师的成长历程，有很多感悟想要分享。技术成长不仅仅是代码能力的提升，更是思维模式和解决问题能力的转变。",
        url: "posts/post014.html"
    },
    {
        id: 14,
        title: "Building Scalable WebSocket Applications with Node.js",
        date: "April 19, 2024",
        summary: "A comprehensive guide to building scalable WebSocket applications with Node.js. Covers real-time communication fundamentals, implementing chat systems, collaborative editing tools, live dashboards, handling connection management, and scaling WebSocket servers for high concurrency.",
        url: "posts/post013.html"
    },
    {
        id: 34,
        title: "我的开源贡献之路：从bug修复到核心维护者",
        date: "April 18, 2024",
        summary: "回顾过去三年的开源贡献历程，从一个偶然的bug修复到现在成为两个知名开源项目的核心维护者，这个过程充满了挑战、学习和成长。今天想分享这段经历，希望能鼓励更多开发者参与到开源社区中来。 2021年3月，我在使用一个React组件库时遇到了一个奇怪的问题。这个库的DatePicker组件在某些时区下会显示错误的日期。作为一个普通的使用者，我最初只是想寻找解决方案，没有想过要贡献代码。",
        url: "posts/post033.html"
    },
    {
        id: 13,
        title: "工作日志：解决线上MySQL死锁问题的完整过程",
        date: "April 12, 2024",
        summary: "今天遇到了一个比较棘手的MySQL死锁问题，花了大半天时间才彻底解决。记录一下整个排查和解决的过程，希望能对遇到类似问题的同学有所帮助。 早上9点左右，监控系统开始报警，显示数据库连接池耗尽，应用响应时间急剧上升。通过日志发现大量的死锁错误： 2024-04-12 09:15:32 [ERROR] Deadlock found when trying to get lock; try...",
        url: "posts/post012.html"
    },
    {
        id: 12,
        title: "深度学习在前端智能化中的应用探索",
        date: "April 5, 2024",
        summary: "随着人工智能技术的快速发展，深度学习不再只是后端和算法工程师的专利。前端开发也开始融入更多智能化的元素。今天想分享一下我在前端智能化方面的一些探索和实践。 // 安装TensorFlow.js // npm install @tensorflow/tfjs import * as tf from '@tensorflow/tfjs';",
        url: "posts/post011.html"
    },
    {
        id: 33,
        title: "Learning Journey: From Monolith to Microservices",
        date: "April 5, 2024",
        summary: "A personal learning journey documenting the transition from a monolithic Ruby on Rails application to microservices architecture. Covers the challenges, decision-making process, implementation strategies, team transformation, and lessons learned during a complex architectural migration.",
        url: "posts/post032.html"
    },
    {
        id: 11,
        title: "系统架构设计中的分布式数据一致性挑战",
        date: "March 29, 2024",
        summary: "在设计分布式系统时，数据一致性一直是最复杂和关键的挑战之一。最近在项目中深度参与了分布式数据一致性的设计和实现，想分享一些实践经验和思考。 为支撑该模型在实际业务中的灵活部署和高效运行，项目提出设计一套多模态轻量级引擎。该引擎需支持异构数据解析、几何代数空间表达与关系运算，能够在空间基元的形态表达与关联构建中引入微分算子或空间代数表达式，实现核心构件的参数化、组合化与拓扑表达。这样的复杂系统对数据...",
        url: "posts/post010.html"
    },
    {
        id: 10,
        title: "工作中遇到的经典算法问题与解决思路",
        date: "March 22, 2024",
        summary: "作为一名软件工程师，虽然日常工作中不会直接编写复杂的算法，但算法思维在解决实际问题时却非常重要。今天想分享几个工作中遇到的算法问题和解决思路。 在一个用户数据整合项目中，我们需要将来自多个系统的用户数据进行合并。这些数据可能存在重复，需要根据特定规则进行去重和合并。 // 示例数据 const users = [",
        url: "posts/post009.html"
    },
    {
        id: 32,
        title: "DevOps流水线自动化：从代码到生产环境的完整实践",
        date: "March 22, 2024",
        summary: "在现代软件开发中，DevOps已经成为提高开发效率和产品质量的关键实践。最近，我主导了公司核心产品的DevOps流水线改造项目，将原本需要2-3天的发布周期缩短到了30分钟内的自动化部署。今天想分享这个完整的实践过程。 我们的项目是一个微服务架构的电商平台，包含了20多个服务，每个服务都有不同的技术栈和部署要求。原有的部署流程存在以下问题：",
        url: "posts/post031.html"
    },
    {
        id: 9,
        title: "Docker容器化部署最佳实践：从开发到生产",
        date: "March 15, 2024",
        summary: "最近在项目中大量使用Docker进行应用部署，积累了不少经验和踩过的坑。今天想系统地总结一下Docker容器化部署的最佳实践，希望能够帮助到正在学习或使用Docker的朋友们。",
        url: "posts/post008.html"
    },
    {
        id: 31,
        title: "前端性能优化实战：从首屏加载到用户体验",
        date: "March 10, 2024",
        summary: "作为一个前端开发者，我经常面对的问题就是如何让我们的应用加载得更快，运行得更流畅。最近参与了一个大型React项目的性能优化工作，从首屏加载时间6秒优化到了1.2秒，用户体验得到了显著提升。今天想分享一下这个过程中的经验和思考。 这是一个B2B电商平台的前端项目，使用React + TypeScript +...",
        url: "posts/post030.html"
    },
    {
        id: 8,
        title: "周末技术实验：构建一个轻量级的Web组件框架",
        date: "March 8, 2024",
        summary: "这个周末闲来无事，决定尝试构建一个轻量级的Web组件框架。虽然市面上已经有很多成熟的框架，但自己动手实现一个能帮助我更好地理解现代前端框架的工作原理。 最近在项目中使用React和Vue时，经常会思考这些框架的底层实现原理。与其仅仅停留在理论层面，不如自己动手实现一个简单的版本，通过实践来加深理解。",
        url: "posts/post007.html"
    },
    {
        id: 7,
        title: "Database Design Patterns for Modern Web Applications",
        date: "February 28, 2024",
        summary: "Essential database design patterns for modern web applications. Covers traditional relational design, NoSQL approaches, hybrid solutions, normalization strategies, indexing best practices, and choosing the right database architecture for scalability and performance.",
        url: "posts/post006.html"
    },
    {
        id: 30,
        title: "Deep Dive into Database Query Optimization: A Real-World Case Study",
        date: "February 28, 2024",
        summary: "A comprehensive case study of optimizing critical database queries that were causing 8-12 second page load times. Covers performance analysis techniques, index optimization, query restructuring, and advanced SQL tuning strategies to achieve sub-2-second response times.",
        url: "posts/post029.html"
    },
    {
        id: 6,
        title: "个人成长感悟：从代码小白到技术架构师的蜕变之路",
        date: "February 20, 2024",
        summary: "回顾过去几年的技术成长历程，感慨良多。从刚入行时的懵懵懂懂，到现在能够独立设计和实现复杂系统，这个过程中有太多的收获和感悟想要分享。 记得刚开始工作的时候，面对复杂的业务逻辑和庞大的代码库，经常感到不知所措。那时候的我： - 对设计模式一知半解 - 写代码只求功能实现，不考虑可维护性 - 遇到问题就是各种百度和复制粘贴",
        url: "posts/post005.html"
    },
    {
        id: 29,
        title: "微服务架构中的分布式事务实践",
        date: "February 15, 2024",
        summary: "在现代软件架构中，微服务已经成为主流的设计模式。然而，随着系统复杂性的增加，分布式事务的处理变得尤为重要。今天我想分享一些在实际项目中处理分布式事务的经验和思考。 在我们的电商平台项目中，订单创建涉及多个服务：用户服务、库存服务、支付服务、物流服务等。传统的ACID事务在分布式环境中变得复杂，我们需要在一致性、可用性和分区容错性之间做出权衡。",
        url: "posts/post028.html"
    },
    {
        id: 5,
        title: "Understanding Modern JavaScript: From ES6 to ES2023",
        date: "February 12, 2024",
        summary: "A comprehensive overview of modern JavaScript evolution from ES6 to ES2023. Covers key features like arrow functions, destructuring, async/await, modules, optional chaining, nullish coalescing, and the latest language additions that have transformed JavaScript development.",
        url: "posts/post004.html"
    },
    {
        id: 4,
        title: "从零开始构建高性能时空数据建模系统",
        date: "February 5, 2024",
        summary: "最近接触到一个关于时空数据建模的项目，需要构建一个面向资产全生命的全时空对象一体化建模及轻量级引擎。这个项目让我对空间数据处理和可视化有了更深入的理解。 本项目面向能源资产在规划、设计、施工、运维等阶段所需的统一数据建模需求，旨在构建一种具备全时空表达能力的信息模型——GIM Pro。该模型需具备对象、网络、场景等要素的统一表达能力，满足从二维结构到三维实体、从静态结构到动态演化的全要素、全过程建...",
        url: "posts/post003.html"
    },
    {
        id: 3,
        title: "今日开发记录：React Hook 优化与性能调优实践",
        date: "January 22, 2024",
        summary: "今天花了一整天时间优化项目中的React组件性能，遇到了一些有趣的问题和收获。记录一下今天的工作流程和思考。 早上刚到公司，QA同事就反映说用户反馈系统在某些页面上操作比较卡顿，特别是在数据量大的列表页面。我立即打开Chrome DevTools开始分析。 使用React DevTools Profiler进行性能分析时，发现了几个关键问题：",
        url: "posts/post002.html"
    },
    {
        id: 2,
        title: "深入探索微服务架构设计模式与最佳实践",
        date: "January 15, 2024",
        summary: "作为一名软件工程师，我在过去的几年里深度参与了多个微服务架构项目的设计与实现。今天想分享一些关于微服务架构设计模式的深度思考和实践经验。 微服务架构作为一种分布式系统设计方法，其核心价值在于通过服务的拆分和解耦，实现系统的高可用性、高扩展性和技术栈的多样性。在我参与的项目中，我们通过合理的服务划分，将原本庞大的单体应用拆分成了多个独立的服务单元。",
        url: "posts/post001.html"
    }
];

// 全局变量存储过滤后的文章
let filteredArticles = articles;

// 搜索功能
function searchArticles(query) {
    if (!query.trim()) {
        filteredArticles = articles;
    } else {
        const searchTerm = query.toLowerCase();
        filteredArticles = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.summary.toLowerCase().includes(searchTerm) ||
            article.date.toLowerCase().includes(searchTerm)
        );
    }
    renderArticles();
}

// 渲染文章列表
function renderArticles() {
    const articleList = document.getElementById('articleList');
    if (!articleList) return;
    
    // 清空现有内容
    articleList.innerHTML = '';
    
    if (filteredArticles.length === 0) {
        articleList.innerHTML = '<p class="no-results">No articles found matching your search.</p>';
        return;
    }
    
    filteredArticles.forEach(article => {
        const articleItem = document.createElement('div');
        articleItem.className = 'article-item';
        articleItem.onclick = () => {
            window.location.href = article.url;
        };
        
        articleItem.innerHTML = `
            <h3 class="article-title">${article.title}</h3>
            <p class="article-date">${article.date}</p>
            <p class="article-summary">${article.summary}</p>
        `;
        
        articleList.appendChild(articleItem);
    });
}

// 加载文章列表（保持向后兼容）
function loadArticles() {
    renderArticles();
}

// 设置搜索事件监听器
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    
    if (searchInput) {
        // 实时搜索（输入时）
        searchInput.addEventListener('input', (e) => {
            searchArticles(e.target.value);
        });
        
        // 回车搜索
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchArticles(e.target.value);
            }
        });
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchInput ? searchInput.value : '';
            searchArticles(query);
        });
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
            }
            searchArticles('');
        });
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    setupSearch();
});