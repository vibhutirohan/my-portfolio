export const config = {
  developer: {
    name: "Rohan",
    fullName: "Rohan Vibhuti",
    title: "Software Developer • Data Engineer • AI/ML Engineer",
    description:
      "Analytical, detail-driven engineer skilled in software development, cloud data pipelines, and applied AI/ML. I build scalable systems that turn complex data into real-world impact."
  },

  social: {
    github: "vibhutirohan",
    email: "rohanvibhuti6@gmail.com",
    location: "Connecticut, USA"
  },

  about: {
    title: "Who I Am",
    description: `
I'm an engineer who loves turning messy data into clean, functional software. I specialize in building full-stack applications and architecting the cloud pipelines that power them behind the scenes.

In the past few years, I have worked across the stack from developing responsive React interfaces and secure APIs, to training machine learning models and engineering reliable Python data pipelines for real-world production systems. 

I'm naturally curious. Whether I'm debugging complex cloud deployments or building AI agents from scratch using LLMs, I care deeply about writing clean, maintainable code that actually solves user problems without over-engineering the solution.
`
  },

  /* ============================
        🎓 EDUCATION
     ============================ */
  education: [
    {
      degree: "Master of Science in Data Science",
      institution: "University of New Haven",
      url: "https://www.newhaven.edu/index.php",
      period: "2024 – 2026",
      cgpa: "3.6 / 4.0"
    },
    {
      degree: "Bachelor of Engineering in Information Science & Engineering",
      institution: "Sapthagiri College of Engineering",
      url: "https://www.sapthagiri.edu.in/",
      period: "2019 – 2023",
      cgpa: "8.6 / 10"
    }
  ],

  /* ============================
       💼 EXPERIENCE
     ============================ */
  experiences: [
    {
      position: "Data Science Intern",
      company: "Kitme Inc",
      period: "Jan 2026 – Present",
      location: "New York, United States",
      description:
        "Debugging and fixing production-grade logging and API issues.",
      responsibilities: [
        "Debugged and fixed production-grade issues in the Python API",
        "Investigated logging severity mismatches in Google Cloud Logging",
        "Audited Django logging configuration",
        "Implemented correct stdout/stderr routing to INFO logs"
      ],
      technologies: ["Python", "Django", "Google Cloud", "Logging"]
    },
    {
      position: "AI Automation Engineer – Extern",
      company: "Wayfair (Externship Program)",
      period: "Oct 2025 – Dec 2025",
      location: "Remote",
      description:
        "Designed AI automation workflows using Python, LangChain, and OpenAI API to accelerate business intelligence.",
      responsibilities: [
        "Built AI agents for trend discovery and competitor monitoring",
        "Integrated LangChain + n8n for automated intelligence pipelines",
        "Reduced manual research time by 50% using AI automation",
        "Enabled near real-time insights for business strategy"
      ],
      technologies: ["Python", "LangChain", "OpenAI API", "n8n", "LLMs"]
    },

    {
      position: "Software Developer Intern",
      company: "Uplaud Inc.",
      period: "May 2025 – Aug 2025",
      location: "Austin, TX (Remote)",
      description:
        "Built front-end and authentication features used by real customers across mobile and web.",
      responsibilities: [
        "Developed WhatsApp OTP login using React + Twilio API",
        "Improved mobile UI/UX responsiveness across devices",
        "Increased accessibility with adaptive layouts",
        "Strengthened authentication security and validation flows"
      ],
      technologies: ["React", "JavaScript", "Twilio API", "Responsive UI"]
    },

    {
      position: "Full Stack Developer Intern",
      company: "Cognizant Technology Solutions",
      period: "Dec 2023 – Jul 2024",
      location: "Chennai, India",
      description:
        "Built enterprise-grade applications and backend APIs for production environments.",
      responsibilities: [
        "Developed full-stack applications (Java, Spring Boot, AngularJS)",
        "Optimized MySQL queries, reducing load times by 30%",
        "Built and deployed production REST APIs",
        "Refactored codebases for modularity and performance"
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "AngularJS",
        "MySQL",
        "REST APIs",
        "Maven"
      ]
    }
  ],

  /* ============================
        💡 PROJECTS
     ============================ */
  projects: [
    {
      id: 6,
      title: "Treasure Hunt in a Foggy World",
      category: "AI Pathfinding & Reinforcement Learning",
      technologies:
        "Python, Flask, WebSockets, Chart.js, Q-learning, BFS/DFS, A*",
      image: "/images/treasure_hunt_foggy.png",
      github: "https://github.com/vibhutirohan/Treasure-Hunt-in-a-Foggy-World"
    },
    {
      id: 7,
      title: "Flood Risk Prediction",
      category: "Machine Learning",
      technologies:
        "Python, FastAPI, Streamlit, Scikit-learn",
      image: "/images/urban_crash_radar.png",
      github: "https://github.com/vibhutirohan/Flood-Risk-Prediction"
    },
    {
      id: 1,
      title: "Urban Crash Risk Radar",
      category: "Data Engineering • AWS",
      technologies:
        "AWS S3, Glue ETL, Athena, Parquet, Data Modeling, Python, QuickSight",
      image: "/images/carcrash.png",
      github: "https://github.com/vibhutirohan/urban-crash-risk-radar"
    },
    {
      id: 2,
      title: "Real Estate Price Predictor",
      category: "Machine Learning",
      technologies:
        "XGBoost, Random Forest, Linear Regression, Pandas, NumPy, Streamlit",
      image: "/images/aws.png",
      github: "https://github.com/vibhutirohan/real-estate-price-predictor"
    },
    {
      id: 3,
      title: "Emotion Detection Using CNN Algorithm",
      category: "Deep Learning",
      technologies: "TensorFlow, Keras, OpenCV, CNN, Image Augmentation",
      image: "/images/emotion.png",
      github: "https://github.com/vibhutirohan/Emotion-Detection-Analysis-Using-CNN-Algorithm-"
    },
    {
      id: 4,
      title: "AI Automation Flows",
      category: "AI / Automation",
      technologies: "Python, LangChain, n8n, OpenAI API, REST Integrations",
      image: "/images/ai.png",

    },
    {
      id: 5,
      title: "Full Stack Systems & Applications",
      category: "Full Stack",
      technologies:
        "React, Node.js, Java, Spring Boot, MySQL, Docker, REST APIs",
      image: "/images/full stack.png",

    }
  ],

  /* ============================
        📩 CONTACT
     ============================ */
  contact: {
    email: "rohanvibhuti6@gmail.com",
    github: "https://github.com/vibhutirohan",
    linkedin: "https://www.linkedin.com/in/rohan-vibhuti/",
    twitter: "https://x.com/vibhutirohan",
    instagram: "https://www.instagram.com/rohan_vibhuti_/",
    googleForm:
      "https://docs.google.com/forms/d/1wROOkZ17HU1BYRZtBp4OHi8DCPoWlWHZk-qrDUwXwKk/viewform"
  },

  /* ============================
        🛠 SKILLS
     ============================ */
  skills: {
    develop: {
      title: "DEVELOP",
      description: "Full-stack development with modern, scalable technologies.",
      details:
        "Experience building stable, production-ready applications across the frontend, backend, and cloud.",
      tools: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "SQL",
        "R",
        "C++",
        "React",
        "Angular",
        "Node.js",
        "Spring Boot",
        "Docker",
        "CI/CD",
        "REST APIs",
        "Git"
      ]
    },

    design: {
      title: "DATA & AI",
      description: "Data engineering, machine learning, and AI automation.",
      details:
        "Skilled in cloud data pipelines, ETL workflows, predictive modeling, and intelligent automation.",
      tools: [
        "AWS",
        "GCP",
        "PySpark",
        "TensorFlow",
        "PyTorch",
        "LangChain",
        "OpenAI API",
        "Deep Learning",
        "NLP",
        "Airflow",
        "MySQL",
        "MongoDB",
        "Streamlit",
        "Power BI",
        "n8n"
      ]
    }
  }
};
