export const resume = {
  education: [
    {
      period: "Sep 2025 – Aug 2026",
      title: {
        en: "M.Eng. in Electrical and Computer Engineering",
        zh: "电子与计算机工程 硕士"
      },
      institution: {
        en: "University of Waterloo",
        zh: "滑铁卢大学"
      },
      description: {
        en: [
          "GPA 3.9",
          "Coursework: Software Engineering, Neural Networks & Deep Learning, Distributed Systems."
        ],
        zh: ["GPA 3.9", "课程：软件工程、神经网络与深度学习、分布式系统。"]
      }
    },
    {
      period: "Sep 2020 – May 2025",
      title: {
        en: "Honours B.Sc. in Computer Science",
        zh: "计算机科学 本科（荣誉）"
      },
      institution: {
        en: "University of Toronto",
        zh: "多伦多大学"
      },
      description: {
        en: [
          "cGPA 3.6",
          "Coursework: Algorithms, Data Structures, OS, Databases, ML, NLP, Networks, HCI."
        ],
        zh: ["cGPA 3.6", "课程：算法、数据结构、操作系统、数据库、机器学习、NLP、网络、HCI。"]
      }
    }
  ],
  experience: [
    {
      period: "May 2023 – Aug 2024",
      title: {
        en: "Software Engineer in Test Intern",
        zh: "测试开发工程师（实习）"
      },
      company: {
        en: "Xero, Toronto",
        zh: "Xero，多伦多"
      },
      description: {
        en: [
          "Developed E2E and API automated tests using TypeScript, Playwright, and Jest, improving test coverage and system reliability.",
          "Led test scoping and planning for new features, reducing test flakiness and maintenance overhead.",
          "Maintained and debugged CI/CD pipelines in TeamCity, resolving build failures.",
          "Implemented load testing with k6 to evaluate performance under peak traffic.",
          "Introduced MSW-based integration and component testing using C#, .NET, WireMock, and Docker, reducing dependency on shared environments."
        ],
        zh: [
          "使用 TypeScript、Playwright、Jest 开发端到端与接口自动化测试，提升覆盖率与系统可靠性。",
          "负责新功能测试范围评估与规划，降低测试不稳定与维护成本。",
          "维护并排查 TeamCity CI/CD 流水线问题，解决构建失败。",
          "使用 k6 进行性能测试，评估高峰流量下的表现。",
          "引入基于 MSW 的集成与组件测试（C#、.NET、WireMock、Docker），降低对共享环境的依赖。"
        ]
      }
    }
  ],
  skills: [
    {
      category: { en: "Languages", zh: "语言" },
      items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C", "HTML", "CSS"]
    },
    {
      category: { en: "Web & Backend", zh: "Web 与后端" },
      items: ["React", "Node.js", "Django", ".NET", "PostgreSQL"]
    },
    {
      category: { en: "Testing & DevOps", zh: "测试与 DevOps" },
      items: ["Playwright", "Jest", "k6", "Docker", "Linux"]
    },
    {
      category: { en: "ML & Data", zh: "机器学习与数据" },
      items: ["scikit-learn", "NumPy", "pandas"]
    }
  ]
};
