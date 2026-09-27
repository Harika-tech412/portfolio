export const contact = {
  email: 'harikapuchalapalli@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harika-p-622557288/',
  github: 'https://github.com/Harika-tech412',
  resume: '/Harika_Resume.pdf',
};

export const proof = [
  { value: '1st', label: 'of 15,000+ applicants in the Centific Hackathon' },
  { value: '0.97', label: 'PR-AUC for fraud detection on an independent holdout' },
  { value: '97.92%', label: 'accuracy routing learners by level (DistilBERT)' },
  { value: '22', label: 'Indian languages transliterated by one fine-tuned model' },
];

export const experience = [
  {
    role: 'AI Engineering Intern',
    company: 'Centific',
    period: 'Jun 2026 – Sept 2026',
    color: 'linear-gradient(135deg, #a597ff, #6d5dfc)',
    badge: 'Offer earned by winning the hackathon',
    points: [
      'Built a Market Research Agent in LangGraph that automates multi-step market analysis end to end, cutting manual research effort for analysts',
      'Implemented persistent conversation history on Azure Cosmos DB so analysts can pause a research thread and resume it in a later session',
      'Designed event-driven processing on Azure Event Hub so long-running analysis steps execute asynchronously and reliably instead of blocking the user',
    ],
    tools: ['LangGraph', 'Python', 'Azure Cosmos DB', 'Azure Event Hub', 'LLMs'],
  },
  {
    role: 'AI Engineering Intern',
    company: 'Vassar Labs',
    period: 'Dec 2025 – Jan 2026',
    color: 'linear-gradient(135deg, #67e8f9, #0ea5e9)',
    points: [
      'Built and deployed an end-to-end RAG question-answering system: document ingestion, chunking, embeddings, semantic retrieval, and RESTful APIs',
      'Integrated Milvus as the vector database, containerized every service with Docker and docker-compose, and validated all endpoints with Postman',
    ],
    tools: ['RAG', 'Embeddings', 'Milvus', 'REST APIs', 'Docker', 'docker-compose', 'Postman'],
  },
];

export const projects = [
  {
    slug: 'aegis',
    short: 'Aegis',
    title: 'Aegis: Multi-Layer, Explainable Fraud Detection Platform',
    category: 'Fraud detection · Explainable AI · Agents',
    period: 'Aug 2026 – Sept 2026',
    accent: '#8b7cff',
    tagline:
      'Fraud screening for digital loan applications that catches known and novel fraud, explains every decision in plain language, and never auto-declines a customer without a human.',
    metrics: [
      { value: '0.97', label: 'PR-AUC on an independent holdout' },
      { value: '11.6×', label: 'fraud lift from ring detection' },
      { value: '0%', label: 'fraud in the auto-approve band (test)' },
    ],
    flow: ['XGBoost + Isolation Forest', 'Ring graph', 'LangGraph agent', 'SHAP'],
    stack: ['Python', 'XGBoost', 'Isolation Forest', 'SHAP', 'LangGraph', 'PostgreSQL / pgvector', 'FastAPI', 'React', 'TypeScript', 'Docker'],
    repo: 'https://github.com/Harika-tech412/Aegis',
    links: [{ label: 'Live demo', url: 'https://aegis-ten-nu.vercel.app' }],
    context: 'Built for the Synchrony Hackathon 2026.',
    overview:
      'Aegis is a seven-layer trust platform for digital lending. A calibrated ML ensemble scores each application, graph and document checks catch coordinated and reused-identity fraud, and a LangGraph agent investigates the borderline cases, turning SHAP attributions, similar past cases, and fraud-ring evidence into an explanation an investigator (or a regulator) can act on.',
    problem:
      'Rule-based and single-model fraud systems miss new attack patterns, block too many honest applicants, and cannot explain their decisions to regulators. The hardest case is a patient impersonator applying with a victim\'s genuine ID documents, where every individual field looks legitimate.',
    architecture: [
      { title: 'Calibrated two-model ensemble', short: 'XGBoost + Isolation Forest, isotonic calibration', detail: 'XGBoost learns known fraud patterns while Isolation Forest flags novel anomalies. Scores are blended 0.7 / 0.3 and isotonically calibrated so outputs are true fraud probabilities, not arbitrary scores.' },
      { title: 'Fraud-ring detection', short: 'Device / IP relationship graph', detail: 'Applications are linked through shared devices and IPs; connected components expose coordinated rings. Ring membership is a disclosed rule-layer signal rather than a raw model feature, which keeps decisions auditable.' },
      { title: 'Document & identity checks', short: 'OCR + perceptual hashing, step-up challenge', detail: 'Dual-path OCR with skew correction reads ID documents, perceptual hashes catch the same ID photo reused under different names, and an identity-continuity check triggers an out-of-band step-up challenge on mismatch.' },
      { title: 'LangGraph investigation agent', short: 'Conditional branching, RAG over past cases', detail: 'The agent triages each case: clean cases exit in one step with zero LLM calls, while suspicious ones walk through ring evidence, investigator memory, similar past cases (pgvector), and drift checks before synthesizing a narrative.' },
      { title: 'Explanations & privacy-preserving sharing', short: 'SHAP + counterfactuals, salted SHA-256 signals', detail: 'SHAP top factors and counterfactuals explain why a transaction was flagged. Banks share fraud signals only as salted cryptographic hashes, so no raw customer identifiers ever cross institutions.' },
    ],
    highlights: [
      'Three decision bands tuned on validation data: the flag cutoff holds false positives at 3% or below and the approve cutoff holds missed fraud at 2% or below. Nothing is auto-declined.',
      'The LLM only writes the narrative; it never makes the approve, review, or flag decision. It has a 5-second timeout and a deterministic template fallback.',
      'Stress-tested on a "hard-legitimate" cohort (shared family devices, accessibility tools, autofill, thin credit files) to measure the cost to honest customers.',
      'Reported a retraining experiment that did not improve results instead of hiding it, then used that finding to motivate an institutional-memory layer.',
      'PSI drift monitoring, JWT auth, rate limiting, and 72 passing backend tests.',
      'An investigator dashboard in React + TypeScript for alerts, explanations, agent findings, and a fraud-ring network graph.',
    ],
    results: [
      'PR-AUC 0.97 on an independently seeded holdout (0.96 on the test split); ROC-AUC 0.99',
      'Precision 0.91 and recall 0.95 on the test split, with a 0.5% false-positive rate',
      'Fraud rings of 3+ applications are 57.8% fraud against a 5% base rate (11.6× lift)',
      'Isolation Forest\'s top 5% most anomalous applications are 52.7% fraud (10× lift)',
    ],
    note: 'Metrics are measured on synthetic lending data (15,000 training applications plus a separately seeded 3,000-application holdout).',
  },
  {
    slug: 'eduagent',
    short: 'EduAgent',
    title: 'EduAgent: Personalized Agentic AI Tutoring System',
    category: 'Agentic AI · Personalized RAG · Fine-tuning',
    period: 'Mar 2026 – May 2026',
    accent: '#22d3ee',
    team: 'Team project',
    tagline:
      'An AI/ML tutor that remembers each learner\'s level, weak concepts, and progress, and changes how it teaches as they improve.',
    metrics: [
      { value: '97.92%', label: 'level-classifier accuracy (240 held-out)' },
      { value: '100%', label: 'retrieval level precision' },
    ],
    flow: ['DistilBERT router', 'Two-pass RAG', 'Tutor agent', 'Evaluator', 'Memory'],
    stack: ['Python', 'DistilBERT', 'Sentence-Transformers (MiniLM)', 'Gemini', 'Llama-3.3-70B (Groq)', 'SQLite', 'Pydantic', 'Whisper', 'Gradio'],
    repo: 'https://github.com/Sneha-260805/TutorWeave',
    overview:
      'Most LLM tutors are stateless: they answer each question the same way no matter who asks it. EduAgent runs a closed loop (ask, classify, retrieve, teach, evaluate, remember, adapt), so every answer is pitched at the learner\'s level and aimed at the concepts they are still struggling with.',
    problem:
      'Chat-based tutors don\'t know a learner\'s level, never check whether an explanation landed, and forget weak areas between sessions, so beginners get overwhelmed and advanced learners get bored.',
    architecture: [
      { title: 'Difficulty routing', short: 'Fine-tuned DistilBERT + rule calibration', detail: 'A fine-tuned DistilBERT classifies each question as beginner, intermediate, or advanced, with a rule layer correcting edge cases, so the tutor picks the right teaching depth.' },
      { title: 'Topic detection', short: 'Alias match → MiniLM similarity → TF-IDF', detail: 'Tiered topic detection with graceful fallbacks keeps the system working even when the embedding model is unavailable.' },
      { title: 'Two-pass personalized RAG', short: 'Relevant content + learner weak spots', detail: 'Pass one retrieves the top examples for the question at the learner\'s level; pass two retrieves material targeting their stored weak concepts, excluding anything already retrieved.' },
      { title: 'Adaptive tutor agent', short: 'Four teaching modes chosen from mastery', detail: 'Mastery thresholds pick between default, remedial, clarification, and advance modes, so the same question is answered differently for different learners.' },
      { title: 'Evaluator & memory agents', short: 'Follow-up grading, mastery tracking', detail: 'An LLM evaluator asks a follow-up question and grades the reply (Pydantic-validated JSON). Mastery updates with diminishing returns and persists in SQLite across sessions.' },
    ],
    highlights: [
      'Built a balanced 2,400-example training set (25 topics × 4 subtopics × 3 levels), with duplicate and near-duplicate filtering to prevent leakage.',
      'The mastery model has diminishing returns (m += 0.2 × (1 − m) on a good answer), so progress is earned and weak areas resurface.',
      'Fallbacks at every stage: local model → Hugging Face Hub → heuristics for classification, MiniLM → TF-IDF for topics.',
      'Voice input via Whisper, text-to-speech output, secure PBKDF2 logins, and a progress dashboard in Gradio.',
      'Covered by 51 unit tests, plus a retrieval evaluation harness with an LLM-as-judge.',
    ],
    results: [
      '97.92% accuracy and 97.91% macro-F1 on a 240-question held-out test set (baselines: 33.3% majority class, 62.1% keyword heuristic)',
      'No advanced question was ever routed to an easier level',
      'Retrieval Hit@3 83.3%, MRR 0.83, and 100% level precision on the evaluation set',
      'LLM-judge scores: 5.0 / 5 faithfulness and 4.94 / 5 level fit',
    ],
    note: 'Team project (5 members). Classifier results are on a held-out split of a synthetic, balanced dataset.',
  },
  {
    slug: 'multilingual-nlp',
    short: 'Multilingual NLP',
    title: 'Unified Multilingual NLP Model for Indian Languages',
    category: 'LLM fine-tuning · Multilingual NLP',
    period: 'Oct 2025 – Dec 2025',
    accent: '#f472b6',
    team: 'Team project',
    tagline:
      'One fine-tuned Gemma-3 model that transliterates, normalizes, and punctuates text across India\'s languages, replacing three separate tools.',
    metrics: [
      { value: '8 / 8', label: 'shared languages beat Sarvam on BLEU, WER and CER' },
      { value: '−48%', label: 'Hindi character error rate vs Sarvam' },
    ],
    flow: ['Native + synthetic data', 'Multi-task SFT', 'Gemma-3-1B', 'Benchmark'],
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Gemma-3', 'Gemini 2.0 Flash', 'DDP', 'Weights & Biases'],
    repo: 'https://github.com/Sneha-260805/NPT',
    overview:
      'Search, NLP, and accessibility tools for Indian languages all need the same clean-up step: converting scripts, normalizing numbers and dates, and restoring punctuation. This project trains a single decoder model for all three tasks, steered by an instruction prefix.',
    problem:
      'India has 22 scheduled languages and many scripts. Pipelines typically chain separate transliteration, normalization, and punctuation tools, each with its own language coverage and failure modes.',
    architecture: [
      { title: 'Data curation', short: 'IndicCorp v2, BPCC, Sangraha, IndicAlign', detail: 'Combined real native-language corpora with Gemini 2.0 Flash synthetic data. Normalization data was created in English and translated into 11 more languages, with a difflib repair step for truncated generations.' },
      { title: 'Multi-task instruction format', short: 'Transliterate / Normalize / Punctuate', detail: 'Each task is framed as prompt-conditioned generation with a task prefix, so one shared model and vocabulary serve all three tasks.' },
      { title: 'Supervised fine-tuning', short: 'Full fine-tune of Gemma-3-1B-PT', detail: 'Multi-GPU training with PyTorch DDP, bf16, and Liger kernels, with loss computed only on answer tokens, length-grouped batching, and a cosine warmup schedule.' },
      { title: 'Benchmarking', short: 'BLEU, CER, WER, chrF++ vs Sarvam', detail: 'Transliteration evaluated across all 22 languages and compared head-to-head with Sarvam on the 8 languages both support.' },
    ],
    highlights: [
      'Covers transliteration in 22 languages, text normalization in 12, and punctuation restoration in 23, all in one model.',
      'Designed a synthetic-data pipeline to fill gaps for low-resource languages where parallel data doesn\'t exist.',
      'Trained on multiple GPUs with DDP, mixed precision, and memory-efficient kernels.',
    ],
    results: [
      'Beat Sarvam on BLEU, WER, and CER in all 8 shared languages',
      'Hindi: BLEU 49.47 vs 37.55; CER 0.168 vs 0.324',
      'BLEU gains of +7.6 in Bengali and Telugu, +7.5 in Kannada, +6.7 in Marathi',
      'Tamil character error rate cut from 0.578 to 0.317',
    ],
    note: 'Team project (4 members). Published benchmark numbers are for transliteration; normalization and punctuation are trained but not yet benchmarked.',
  },
  {
    slug: 'predictive-maintenance',
    short: 'Predictive Maintenance',
    title: 'Hybrid Predictive Maintenance, NASA CMAPSS',
    category: 'Machine learning · Time series',
    period: 'Mar 2025 – May 2025',
    accent: '#34d399',
    team: 'Team project',
    tagline:
      'Turns unlabeled turbofan sensor streams into five health stages and a risk score, so maintenance happens before failure rather than on a fixed schedule.',
    metrics: [
      { value: '98.6%', label: 'health-stage accuracy (FD001)' },
      { value: 'R² 0.90', label: 'time-to-next-stage regression' },
    ],
    flow: ['Weighted K-Means', 'Stage classifier', 'Stage-wise RUL', 'Risk score'],
    stack: ['Python', 'Scikit-learn', 'K-Means', 'PCA', 'XGBoost', 'Random Forest', 'Pandas'],
    links: [{ label: 'Project report', url: 'https://drive.google.com/file/d/1ilKgxmbVb-bSBGwE0do_Unu4tAlkMJC_/view?usp=sharing' }],
    overview:
      'A "cluster, classify, predict" pipeline over the NASA CMAPSS jet-engine dataset. It first discovers health stages the dataset doesn\'t label, then learns to recognize them and to predict how long an engine has until the next stage.',
    problem:
      'Binary works-or-fails models hide gradual wear, which leads to over-maintenance or surprise failures, and CMAPSS provides no health-stage labels to learn from.',
    architecture: [
      { title: 'Label discovery', short: 'Weighted K-Means into 5 health stages', detail: 'Sensor features are cleaned and standardized, then clustered with a cycle-weighted K-Means into Normal, Slightly Degraded, Moderately Degraded, Critical, and Failure. It outperformed vanilla K-Means, agglomerative clustering, GMM, and HDBSCAN.' },
      { title: 'Cluster validation', short: 'PCA, t-SNE, and UMAP', detail: 'Dimensionality reduction was used to visualize and sanity-check that the stages separate cleanly.' },
      { title: 'Stage classification', short: 'Random Forest, XGBoost, Logistic Regression', detail: 'Classifiers learn to predict the current health stage from sensor readings.' },
      { title: 'Stage-wise RUL & risk', short: 'Cycles to next stage → proactive alert', detail: 'Regressors predict remaining cycles until the next stage; combined with the probability of reaching the critical stage, this yields a normalized risk score that drives alerts.' },
    ],
    highlights: [
      'Evaluated on all four CMAPSS subsets (FD001 to FD004), individually and combined, covering different operating conditions and fault modes.',
      'Converted an unsupervised problem into a supervised one without hand-labeling.',
      'Compared five clustering methods and three classifier families to pick the pipeline.',
    ],
    results: [
      'Random Forest stage accuracy of 98.6% on FD001 and 99.9% on FD002 and FD004',
      'Time-to-next-stage regression: R² 0.90 on FD001 (RMSE 4.9 cycles) and 0.92 on FD002',
    ],
    note: 'Team project (5 members), ML course capstone.',
  },
  {
    slug: 'medical-scribe',
    short: 'Medical Scribe',
    title: 'Medical Scribe Agent',
    category: 'Healthcare AI · Agents',
    period: 'Jun 2026 – Present',
    accent: '#fbbf24',
    status: 'In progress',
    tagline:
      'An AI scribe that turns doctor–patient conversations into structured clinical notes that are always drafts until a doctor approves them. It extends my winning Centific hackathon solution.',
    metrics: [
      { value: '#1', label: 'of 15,000+ applicants, Centific Hackathon' },
      { value: '14 days', label: 'from brief to winning solution' },
    ],
    flow: ['Transcribe', 'Extract entities', 'Draft SOAP', 'Doctor review'],
    stack: ['Python', 'LangGraph', 'LLMs', 'React', 'Tailwind'],
    repo: 'https://github.com/Harika-tech412/Doctor-Dashboard-Hackathon',
    overview:
      'Clinical documentation consumes a large share of a doctor\'s day. The scribe listens to a consultation, extracts the clinically relevant facts, and drafts a SOAP note, while keeping the doctor firmly in control of every word that reaches the record.',
    problem:
      'Doctors spend hours on documentation, but a scribe that invents findings or finalizes notes on its own is unsafe. The system has to save time without removing clinical judgment.',
    architecture: [
      { title: 'Consented capture', short: 'Audio upload with consent attestation', detail: 'Recording only proceeds with recorded patient consent. Poor-quality audio is surfaced to the doctor instead of being silently processed.' },
      { title: 'Transcription & speakers', short: 'Speech-to-text with diarization', detail: 'Turns are attributed to doctor or patient. Unknown speakers are labeled as unknown, never guessed.' },
      { title: 'Grounded extraction', short: 'Symptoms, diagnoses, medications, allergies', detail: 'Every entity cites its source timestamp and carries a confidence score. Missing information is flagged (for example, "dosage not stated") rather than inferred.' },
      { title: 'Draft note & mandatory approval', short: 'SOAP draft → doctor review dashboard', detail: 'Notes stay DRAFT until the doctor approves them in a three-pane review view (transcript, entities, SOAP), with an AI-disclosure banner on every clinical screen.' },
    ],
    highlights: [
      'Won 1st place among 15,000+ applicants in Centific\'s 14-day hackathon, which earned the AI Engineering internship.',
      'Built the clinician-facing dashboard: patient list, a three-pane transcript / entities / SOAP review, and approve, edit, and reject flows.',
      'Designed safety rules into the product: no approval bypass, confidence flags on low-certainty entities, and an append-only audit trail.',
      'Now extending it into a working LangGraph agent pipeline behind the dashboard.',
    ],
    results: [],
    note: 'Work in progress. The hackathon build is the clinician review dashboard; the agent pipeline is under active development.',
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

export const education = [
  { school: 'Mahindra University, Hyderabad', degree: 'B.Tech in Artificial Intelligence', score: 'CGPA 9.30 / 10', period: 'Aug 2023 – Aug 2027' },
  { school: 'Sri Venkateswara Junior College, Visakhapatnam', degree: 'Intermediate (MPC)', score: '94.5%', period: 'Apr 2021 – May 2023' },
  { school: 'The Presidential School, Visakhapatnam', degree: 'Class X (CBSE)', score: '95.8%', period: 'Apr 2020 – Apr 2021' },
];

export const awards = [
  {
    title: 'Winner, Centific Hackathon',
    detail: 'Ranked 1st among 15,000+ applicants in a 14-day hackathon for a medical scribe agent; won an internship.',
    period: 'May 2026',
  },
  {
    title: 'Merit Scholarship (2 × INR 1,00,000)',
    detail: 'Awarded by Mahindra University for academic excellence.',
    period: 'Apr 2023 – Apr 2025',
  },
];

export const leadership = [
  {
    title: 'Finance Member, Sakhi Club (Women Empowerment Club)',
    org: 'Mahindra University',
    period: 'Aug 2025 – Present',
    detail: 'Managed club finances and budgets, and coordinated awareness initiatives supporting women empowerment programs.',
  },
];
