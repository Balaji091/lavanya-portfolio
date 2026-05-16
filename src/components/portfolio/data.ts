export const personal = {
  name: "Lavanya Mallela",
  tagline: "Building AI-driven solutions using Machine Learning, Generative AI, and Python.",
  intro:
    "Computer Science student with hands-on experience in AI/ML through internships and real-world projects. Passionate about Generative AI, LLMs, Machine Learning, and solving practical problems using AI technologies.",
  email: "lavanyamallela@example.com",
  phone: "+91 8074163248",
  github: "https://github.com/mallelalavanya/",
  linkedin: "https://www.linkedin.com/in/lavanya-mallela-544b0b299",
  resume: "/Lavanya_Mallela_Resume.pdf",
  roles: [
    "AI/ML Engineer",
    "Generative AI Enthusiast",
    "Python Developer",
    "Data Science Enthusiast",
  ],
};

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 78 },
      { name: "C", level: 75 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "CNN", level: 85 },
      { name: "TensorFlow", level: 82 },
      { name: "Scikit-learn", level: 88 },
      { name: "Pandas / NumPy", level: 92 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "LLMs", level: 85 },
      { name: "Prompt Engineering", level: 88 },
      { name: "LangChain", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "RAG", level: 82 },
      { name: "OpenAI APIs", level: 85 },
      { name: "Vector Databases", level: 78 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 92 },
      { name: "GitHub Copilot", level: 85 },
      { name: "Codex", level: 80 },
    ],
  },
];

export const codingProfiles = [
  { platform: "LeetCode", count: "200+", note: "Problems Solved" },
  { platform: "HackerRank", count: "70+", note: "Problems Solved" },
  { platform: "GeeksforGeeks", count: "70+", note: "Problems Solved" },
];

export const experience = [
  {
    role: "AI/ML Intern",
    company: "HeyBobo",
    period: "July 2025 – March 2026",
    points: [
      "Developed an AI-powered Workout Plan Generator using LLMs, experimenting with Qwen-7B, Qwen-14B, and other Hugging Face models — focused on model experimentation, prompt design, and response optimization to generate personalized fitness plans based on user inputs and goals.",
      "Designed and implemented a scalable Health Module with allergy management, medical hub, reminders, and vaccination scheduling using structured data pipelines; built an OCR pipeline using PaddleOCR with Tesseract fallback for reliable medical document processing.",
      "Built real-time pose estimation pipelines using MediaPipe (22 keypoints) to analyze workout posture from live and recorded videos; developed 5+ pose analysis modules and ran experimentation with 50+ pose models to improve accuracy, tracking, and performance.",
      "Used LangGraph for multi-step workflow orchestration across complex AI pipelines; contributed to debugging, validation, and issue resolution of core system workflows, improving reliability and robustness.",
    ],
  },
  {
    role: "Project Intern — Smart Seed Drying System",
    company: "JNTU Kakinada",
    period: "Internship",
    points: [
      "Contributed to a smart agriculture system for seed drying optimization.",
      "Hands-on exposure to AI/IoT integration concepts.",
      "Solved practical problems combining hardware sensing with intelligent decisioning.",
    ],
  },
];

export const projects = [
  {
    title: "RAG-Based PDF Query Assistant",
    description:
      "LLM-powered assistant that lets users upload PDFs and ask natural-language questions with source number citations, powered by Retrieval-Augmented Generation. Currently working on adding quiz analysis features.",
    tech: ["Python", "LangChain", "OpenAI API", "FastAPI", "FAISS", "ChromaDB"],
    icon: "Sparkles",
    featured: true,
    
  },
  {
    title: "Bidirectional Sign Language Translator",
    description:
      "Accessibility-focused system that converts sign gestures into text/speech and text into sign outputs using deep learning.",
    tech: ["Python", "OpenCV", "Deep Learning", "CNN", "LSTM"],
    icon: "Languages",
    featured: true,
    url:"https://github.com/mallelalavanya/Indian-sign-language-Recognition-bidirectional.git"
  },
  {
    title: "Blood Cells Classification",
    description:
      "Deep learning image classification model for identifying blood cell categories using ResNet-50 and transformer architectures.",
    tech: ["Python", "TensorFlow", "Keras", "ResNet-50", "Transformers", "OpenCV"],
    icon: "Microscope",
    url:"https://github.com/mallelalavanya/blood_classification.git"
  },
  {
    title: "Loan Default Prediction",
    description:
      "Machine learning model that predicts loan default risks using customer and financial data.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    icon: "LineChart",
    url:"https://github.com/mallelalavanya/loan_default.git"
  },
  {
    title: "Handwritten Digit Recognition (GUI)",
    description:
      "Real-time handwritten digit recognition system with an interactive GUI for live drawing and prediction.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy", "Matplotlib"],
    icon: "PenTool",
    url:"https://github.com/mallelalavanya/handwritten_project.git"
  },
  {
    title: "Traffic Pattern Analysis",
    description:
      "Analyzed smart city traffic datasets to identify patterns, peak windows, and movement trends.",
    tech: ["Python", "Pandas", "NumPy", "Time Series Analysis", "ARIMA/LSTM", "Scikit-learn", "Matplotlib"],
    icon: "Activity",
    url:"k:https://github.com/mallelalavanya/smartcity_project.git"
    
  },
  {
    title: "Smart Seed Drying System",
    description:
      "Intelligent smart-agriculture system focused on seed drying monitoring and optimization with AI/IoT concepts.",
    tech: ["Python", "AI/IoT"],
    icon: "Leaf",
    url:"https://github.com/mallelalavanya/smartcity_project.git"
  },
];

export const certifications = [
  "Microsoft Foundation Course",
  "Deep Learning — NPTEL",
  "Data Science with Python — Workshop by Brainovision Solutions",
  "HTML & CSS for Beginners — Microsoft",
  "Apsche Internship Certificate",
  "HeyBobo Internship Certificate",
  "JNTU Kakinada Internship Certificate",
];

export const achievements = [
  "Solved 200+ problems on LeetCode",
  "70+ problems each on HackerRank and GeeksforGeeks",
  "Hands-on AI/ML internship experience at HeyBobo",
  "Built 7+ AI/ML and GenAI projects across CV, NLP and tabular ML",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
