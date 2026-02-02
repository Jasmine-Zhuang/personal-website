export const projectTags = [
  { key: "ml", label: { en: "Machine Learning", zh: "机器学习" } },
  { key: "fullstack", label: { en: "Full Stack", zh: "前后端" } }
];

export const projects = [
  {
    id: "multi-model-food-classifier",
    title: { en: "Multi-Model Food Classifier", zh: "多模型食物分类器" },
    description: {
      en: "Built Logistic Regression, Naive Bayes, Random Forest, and Neural Network models with a full ML pipeline and ~90% validation accuracy.",
      zh: "构建逻辑回归、朴素贝叶斯、随机森林与神经网络模型，搭建完整 ML 流水线并达到约 90% 验证准确率。"
    },
    tagKeys: ["ml"],
    githubUrl: "https://github.com/Jasmine-Zhuang/multi-model-food-classifier",
    demoUrl: ""
  },
  {
    id: "fitness-club-web-app",
    title: { en: "Fitness Club Web Application", zh: "健身俱乐部 Web 应用" },
    description: {
      en: "Designed Django REST APIs for classes, enrollment, search, filtering, and pagination; integrated a React frontend.",
      zh: "使用 Django 设计 REST API（课程、报名、搜索、筛选、分页），并集成 React 前端。"
    },
    tagKeys: ["fullstack"],
    githubUrl: "https://github.com/Jasmine-Zhuang/TFCGymWeb",
    demoUrl: ""
  }
];
