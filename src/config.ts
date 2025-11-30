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
I’m a developer passionate about building intelligent, scalable, and high-performance systems.  
My experience spans full-stack application development, cloud-based data engineering pipelines, and machine learning solutions that address real-world challenges.

I blend creativity with strong engineering discipline to design software and data systems that are clean, reliable, and optimized for performance. Whether it’s architecting end-to-end workflows, developing modern web applications, or integrating AI-driven features, I focus on delivering products that are both impactful and enjoyable to use.
`
  },

  /* ============================
        🎓 EDUCATION
     ============================ */
  education: [
    {
      degree: "Master of Science in Data Science",
      institution: "University of New Haven",
      period: "2024 – 2026",
      cgpa: "3.6 / 4.0"
    },
    {
      degree: "Bachelor of Engineering in Information Science & Engineering",
      institution: "Sapthagiri College of Engineering",
      period: "2019 – 2023",
      cgpa: "8.6 / 10"
    }
  ],

  /* ============================
       💼 EXPERIENCE
     ============================ */
  experiences: [
    {
      position: "AI Automation Engineer – Extern",
      company: "Wayfair (Externship Program)",
      period: "Oct 2025 – Present",
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
      id: 1,
      title: "Urban Crash Risk Radar",
      category: "Data Engineering • AWS",
      technologies:
        "AWS S3, Glue ETL, Athena, Parquet, Data Modeling, Python, QuickSight",
      image: "/images/urban.webp",
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
      title: "Emotion Detection Using CNN",
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
      "https://docs.google.com/forms/d/1wROOkZ17HU1BYRZtBp4OHi8DCPoWlWHZk-qrDUwXwKk/edit"
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
        "Java",
        "Spring Boot",
        "React",
        "Node.js",
        "Express.js",
        "JavaScript",
        "Git/GitHub",
        "MySQL",
        "Docker"
      ]
    },

    design: {
      title: "DATA & AI",
      description: "Data engineering, machine learning, and AI automation.",
      details:
        "Skilled in cloud data pipelines, ETL workflows, predictive modeling, and intelligent automation.",
      tools: [
        "Python",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "AWS",
        "PySpark",
        "Airflow",
        "Pandas",
        "NumPy"
      ]
    }
  }
};
