export const contact = {
  email: 'harikapuchalapalli@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harika-p-622557288/',
  github: 'https://github.com/Harika-tech412',
  resume: '/Harika_Resume.pdf',
};

export const education = [
  {
    school: 'Mahindra University, Hyderabad',
    degree: 'B.Tech in Artificial Intelligence',
    score: 'CGPA: 9.30 / 10',
    period: 'Aug 2023 – Aug 2027',
  },
  {
    school: 'Sri Venkateswara Junior College, Visakhapatnam',
    degree: 'Intermediate (MPC)',
    score: '94.5%',
    period: 'Apr 2021 – May 2023',
  },
  {
    school: 'The Presidential School, Visakhapatnam',
    degree: 'Class X (CBSE)',
    score: '95.8%',
    period: 'Apr 2020 – Apr 2021',
  },
];

export const experience = [
  {
    role: 'AI Engineering Intern',
    company: 'Centific',
    period: 'Jun 2026 – Sept 2026',
    note: "Offer earned by winning Centific's hackathon",
    points: [
      'Built a Market Research Agent that automates multi-step market analysis using LangGraph, cutting manual research effort',
      'Implemented persistent conversation history with Cosmos DB so analysts can pause and resume research threads across sessions',
      'Designed Azure event-driven processing (Azure Event Hub) to run long analysis steps asynchronously and reliably',
    ],
    tools: ['LangGraph', 'Cosmos DB', 'Azure Event Hub', 'Python'],
  },
  {
    role: 'AI Engineering Intern',
    company: 'Vassar Labs',
    period: 'Dec 2025 – Jan 2026',
    points: [
      'Built and deployed an end-to-end RAG-based QA system covering document ingestion, chunking, embeddings, semantic retrieval, and RESTful APIs',
      'Integrated Milvus DB, containerized services with Docker and docker-compose, and validated all endpoints using Postman',
    ],
    tools: ['RAG', 'Milvus', 'Docker', 'docker-compose', 'REST APIs', 'Postman'],
  },
];

export const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL'] },
  {
    category: 'ML Lifecycle',
    items: ['Data Preprocessing', 'Feature Engineering', 'Model Training', 'Hyperparameter Tuning', 'Cross-Validation', 'Evaluation', 'Retraining', 'Fine-Tuning'],
  },
  {
    category: 'AI / GenAI',
    items: ['Deep Learning', 'NLP', 'LLMs', 'RAG', 'Agentic AI', 'LangGraph', 'Embeddings', 'Vector Search', 'SHAP', 'Prompt Engineering'],
  },
  {
    category: 'Libraries',
    items: ['PyTorch', 'Hugging Face Transformers', 'Sentence-Transformers', 'Scikit-learn', 'XGBoost', 'NumPy', 'Pandas'],
  },
  {
    category: 'Web & Tools',
    items: ['React', 'FastAPI', 'Node.js', 'REST APIs', 'HTML/CSS', 'PostgreSQL/pgvector', 'SQLite', 'Milvus', 'Docker', 'Git', 'Postman', 'Azure (Cosmos DB, Event Hub)'],
  },
];

export const awards = [
  {
    title: 'Winner, Centific Hackathon',
    detail: 'Ranked 1st among 15,000+ applicants in a 14-day hackathon for a medical scribe agent; won an internship',
    period: 'May 2026',
  },
  {
    title: 'Merit Scholarship (2 × INR 1,00,000)',
    detail: 'Mahindra University, for academic excellence',
    period: 'Apr 2023 – Apr 2025',
  },
];

export const leadership = [
  {
    title: 'Finance Member, Sakhi Club (Women Empowerment Club)',
    org: 'Mahindra University',
    period: 'Aug 2025 – Present',
    detail: 'Managed club finances and budgets, and coordinated awareness initiatives supporting women empowerment programs',
  },
];

export const projects = [
  {
    title: 'Aegis: Multi-Layer, Explainable Fraud Detection Platform',
    tag: 'Fraud Detection · Explainable AI · Agents',
    period: 'Aug 2026 – Sept 2026',
    color: '#8b5cf6',
    highlights: [
      'Designed a two-layer detection pipeline: XGBoost for known fraud patterns plus Isolation Forest for novel anomalies, reaching PR-AUC 0.97 on imbalanced data with calibrated fraud probabilities',
      'Built a RAG-based LangGraph investigation agent that retrieves similar past cases from pgvector, reasons conditionally, and uses SHAP to explain in plain language why each transaction was flagged',
      'Enabled privacy-preserving cross-institution signal sharing with salted cryptographic hashes, letting banks share fraud signals without exposing customer data',
      'Built the investigator dashboard in React + TypeScript to review alerts, explanations, and agent findings',
    ],
    tools: ['Python', 'XGBoost', 'Isolation Forest', 'SHAP', 'LangGraph', 'PostgreSQL/pgvector', 'React', 'TypeScript'],
    link: 'https://github.com/Harika-tech412/Aegis',
  },
  {
    title: 'EduAgent: Personalized Agentic AI Tutoring System',
    tag: 'Agentic AI · RAG · Fine-tuning',
    period: 'Mar 2026 – May 2026',
    color: '#06b6d4',
    highlights: [
      "Built an adaptive AI tutor for AI/ML learners that remembers each student's level, weak concepts, and progress across sessions",
      'Fine-tuned DistilBERT to classify queries as beginner/intermediate/advanced (97.92% accuracy), routing each learner to the right teaching depth',
      "Implemented two-pass personalized RAG with MiniLM embeddings, retrieving both relevant content and the learner's weak concepts; used Llama-3.3-70B (Groq) as an evaluator to track mastery",
    ],
    tools: ['Python', 'DistilBERT', 'Sentence-Transformers (MiniLM)', 'Llama-3.3-70B', 'Groq', 'SQLite'],
    link: 'https://github.com/Sneha-260805/TutorWeave',
  },
  {
    title: 'Unified Multilingual NLP Model for Indian Languages',
    tag: 'NLP · LLM · Fine-tuning',
    period: 'Oct 2025 – Dec 2025',
    color: '#f472b6',
    highlights: [
      'Built one unified model for three tasks: transliteration (22 languages), text normalization (12), and punctuation restoration (23)',
      'Created a large, high-quality multilingual dataset by combining real native-language data with Gemini 2.0 Flash synthetic data',
      'Supervised fine-tuned Gemma-3-1B-PT with multi-task instruction learning; benchmarked against Sarvam on BLEU, CER, WER, and chrF++',
    ],
    tools: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Gemma-3', 'Gemini 2.0 Flash'],
    link: 'https://github.com/Sneha-260805/NPT',
  },
  {
    title: 'Hybrid Predictive Maintenance, NASA CMAPSS',
    tag: 'ML · Time Series · Ensemble',
    period: 'Mar 2025 – May 2025',
    color: '#22c55e',
    highlights: [
      'Converted unlabeled engine sensor time-series into health-stage labels using weighted K-Means and PCA',
      'Trained classifiers and regressors to predict health stage and Remaining Useful Life, combining both into a risk score for proactive alerts',
    ],
    tools: ['Python', 'Scikit-learn', 'K-Means', 'PCA', 'XGBoost', 'Random Forest'],
    link: 'https://drive.google.com/file/d/1ilKgxmbVb-bSBGwE0do_Unu4tAlkMJC_/view?usp=sharing',
    linkLabel: 'View Project',
  },
  {
    title: 'Medical Scribe Agent',
    tag: 'Healthcare AI · Agents',
    period: 'Jun 2026 – Present',
    inProgress: true,
    color: '#f59e0b',
    highlights: [
      "Currently developing an AI medical scribe agent, extending my Centific hackathon-winning solution, that converts doctor–patient conversations into structured clinical notes",
    ],
    tools: ['Python', 'LangGraph', 'LLMs'],
    link: 'https://github.com/Harika-tech412/Doctor-Dashboard-Hackathon',
  },
];
