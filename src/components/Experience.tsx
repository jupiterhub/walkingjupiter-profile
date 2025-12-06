"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experience.module.css";

interface Project {
    name: string;
    role?: string;
    url?: string;
    description: string[];
    technologies: string[];
}

interface StarExample {
    principle: string;
    situation: string;
    result: string;
}

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    points: string[];
    projects?: Project[];
    starExamples?: StarExample[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Software Development Engineer III",
        company: "TESCO, London",
        period: "May 2023 - Present",
        points: [
            "Delivering Staff-level impact within the Platform Engineering and Recommendations domains."
        ],
        projects: [
            // {
            //     name: "Current Project: Tesco Developer Platform (TDP)",
            //     description: [
            //         "<strong>Platform Engineering:</strong> Building a secure, multi-tenant Developer Platform. Adopting <strong>Golang</strong> to create CLI tools and Kubernetes components that standardize infrastructure provisioning.",
            //         "<strong>DevOps Integration:</strong> Architected robust integrations with <strong>Azure DevOps</strong>, enabling application teams to generate compliant CI/CD pipelines automatically via <strong>Terraform</strong>.",
            //         "<strong>Developer Experience (DevX):</strong> Championed the UX of the platform by leading design discussions and creating high-impact technical demos that successfully aligned stakeholders and drove internal adoption."
            //     ],
            //     technologies: ["Golang", "Kubernetes", "Azure DevOps", "Terraform", "Backstage"]
            // },
            {
                name: "Previous Project: Recommendations, Substitutions & Lists",
                description: [
                    "<strong>Personalized Substitutions:</strong> Increased sales uplift of basket adds by over <strong>£2 million</strong> through the implementation of personalized substitution recommendations.",
                    "<strong>Cloud Cost Optimization:</strong> Identified inefficiencies in backend resource usage and executed a migration strategy (AWS to Azure) that delivered <strong>£440,000 annual savings</strong>.",
                    "<strong>Event-Driven Architecture:</strong> Drove the technical initiative to enable real-time collaborative ordering using <strong>Kafka</strong>, ensuring instant synchronization across user devices.",
                    "<strong>Technical Modernization:</strong> Spearheaded the adoption of <strong>Java 21</strong> and Virtual Threads to improve the throughput of high-traffic backend services.",
                    "<strong>Infrastructure:</strong> Led the implementation of 'Pipeline-as-Code,' standardizing CI/CD templates that reduced release timings by <strong>25%</strong>."
                ],
                technologies: ["Java 18/21", "Kafka", "Azure", "AWS", "Spring boot", "Micronaut", "Redis", "Couchbase"]
            }
        ]
    },
    {
        role: "Technical Lead",
        company: "APERZA INC., Japan",
        period: "Nov 2017 - Oct 2022",
        points: [
            "Led End-to-End (Full Stack) development through multiple strategic product pivots."
        ],
        projects: [
            {
                name: "Product Evolution & Modernization",
                description: [
                    "<strong>Product Evolution:</strong> Architected the backend (<strong>Java</strong>) and frontend (<strong>React/TS</strong>) for three distinct business phases: (1) E-commerce Marketplace, (2) Vertical SaaS (CRM), and (3) Aperza TV (Streaming).",
                    "<strong>Frontend Modernization:</strong> Led the transition from legacy server-side rendering to modern Single Page Applications (SPA), establishing frontend coding standards and component libraries.",
                    "<strong>Infrastructure Migration:</strong> Migrated legacy infrastructure to <strong>AWS ECS (Fargate)</strong>, improving scalability and reducing costs by <strong>£24,000 annually</strong>.",
                    "<strong>DevOps Transformation:</strong> Designed the company’s first automated CI/CD pipelines, reducing release cycles from <strong>4 hours to 15 minutes</strong>."
                ],
                technologies: ["Java", "React", "TypeScript", "AWS ECS", "Docker", "GoCD"]
            },
            {
                name: "Technical Blog: Continuous Delivery at Aperza",
                url: "https://tech.aperza.com/continous-delivery/",
                description: [
                    "Authored a technical deep-dive on our journey to Continuous Delivery, detailing how we reduced deployment times from 4 hours to 15 minutes."
                ],
                technologies: ["CI/CD", "GoCD", "Automated Testing", "Technical Writing"]
            }
        ]
    },
    {
        role: "Sabbatical",
        company: "Global Travel",
        period: "May 2016 - Oct 2017",
        points: [
            "Embarked on a global journey, experiencing diverse cultures and expanding personal horizons before relocating to Japan."
        ]
    },
    {
        role: "Technical Lead",
        company: "RAKUTEN ASIA, Singapore",
        period: "May 2013 - Apr 2016",
        points: [
            "Introduced and implemented Agile Practices (XP, Scrum, CI).",
            "Led team expansion in India Development Center.",
            "Conducted solutioning from business requirements and ensured alignment.",
            "Increased team productivity through knowledge sharing sessions."
        ],
        projects: [
            {
                name: "Global Advertising Platform",
                description: [
                    "Developed a Global Advertising platform for the Rakuten group.",
                    "Implemented Agile practices (CI, Scrum, XP), increasing velocity by 30%."
                ],
                technologies: ["Java", "Spring", "Gradle", "Flyway", "MySQL", "ETL"]
            }
        ],
        starExamples: [
            {
                principle: "Earn Trust & Deliver Results",
                situation: "Distributed team suffered from communication silos and inconsistent code quality.",
                result: "Introduced XP practices (Pair Programming, Code Reviews), improving velocity by 30%."
            }
        ]
    },
    {
        role: "Application Consultant",
        company: "NCS PTE LTD, Singapore",
        period: "Mar 2011 - Apr 2013",
        points: [
            "Developed Admin tools for John Wiley & Sons' online library (onlinelibrary.wiley.com).",
            "Led API development for Standard Chartered's Straight2Bank mobile app."
        ],
        projects: [
            {
                name: "Standard Chartered 'Straight2Bank'",
                description: [
                    "Mobile Trade Finance module allowing corporate clients to approve transactions on the go.",
                    "Optimized API payloads to improve efficiency by 15%."
                ],
                technologies: ["Java EE", "Web Services (SOAP)", "Mobile Web Optimization", "REST"]
            },
            {
                name: "John Wiley & Sons 'Access Control'",
                description: [
                    "Administrative tools for library provisioning and analytics."
                ],
                technologies: ["Java", "SiteCatalyst", "MarkLogic"]
            }
        ]
    },
    {
        role: "Team Lead / Java Programmer",
        company: "ST. LUKE’S MEDICAL CENTER, Philippines",
        period: "May 2009 - Feb 2011",
        points: [
            "Led the development of critical admission and ordering modules.",
            "Championed Test-Driven Development (TDD) practices.",
            "Architected core hospital frameworks."
        ],
        projects: [
            {
                name: "Healthcare Report System (HCR)",
                description: [
                    "A centralized, asynchronous reporting engine for critical hospital operations.",
                    "Reduced report creation time from days to hours."
                ],
                technologies: ["Java EE", "JMS (ActiveMQ)", "Spring MVC", "JasperReports", "Oracle DB"]
            },
            {
                name: "Generic File Maintenance System (GFMS)",
                description: [
                    "A meta-programming framework to automate CRUD operations using Reflection API."
                ],
                technologies: ["Java Reflection", "Java Generics", "Hibernate", "Spring"]
            },
            {
                name: "ARMS Middleware",
                description: [
                    "Integration engine connecting diagnostic machines to the Hospital Information System."
                ],
                technologies: ["HL7", "HAPI", "Mirth Connect", "Socket Programming"]
            },
            {
                name: "Junitor",
                description: [
                    "A web-based time-tracking system with voice synthesis."
                ],
                technologies: ["Java", "Voice Synthesizer"]
            }
        ],
        starExamples: [
            {
                principle: "Invent and Simplify",
                situation: "Developers were writing repetitive code for reports; new reports took days.",
                result: "Architected an abstraction layer over JMS/JasperReports, reducing creation time to hours."
            }
        ]
    },
    {
        role: "Java Developer",
        company: "PROV INTERNATIONAL, Philippines",
        period: "Jan 2008 - Apr 2009",
        points: [
            "Appointed as one of the 5 team leads for modularizing the Legacy Project.",
            "Provided core processes/frameworks to promote code-reuse."
        ],
        projects: [
            {
                name: "Inventory Control Management System (ICMS)",
                description: [
                    "A stock monitoring and sales forecasting system.",
                    "Architected the forecasting algorithm using historical data trends."
                ],
                technologies: ["Spring MVC", "IBM DB2", "FusionCharts"]
            },
            {
                name: "ABS-CBN Integrated Payroll",
                description: [
                    "Payroll processing for the Philippines' largest broadcasting network.",
                    "Implemented complex 'Last Pay' computation module."
                ],
                technologies: ["Struts 1", "Oracle", "JasperReports"]
            }
        ]
    }
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className={`${styles.experience} section`}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.item} ${expandedIndex === index ? styles.expanded : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => toggleExpand(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    toggleExpand(index);
                                }
                            }}
                        >
                            <div
                                className={styles.header}
                            >
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.company}>{exp.company}</div>
                                <div className={styles.period}>{exp.period}</div>
                                {(exp.projects || exp.starExamples) && (
                                    <div className={styles.expandHint}>
                                        {expandedIndex === index ? 'Click to collapse' : 'Click to see details'}
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className={styles.description}>
                                <ul>
                                    {exp.points.map((point, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                                    ))}
                                </ul>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {exp.starExamples && (
                                                <div className={styles.starSection}>
                                                    <h4 className={styles.starTitle}>Key Achievements & Leadership</h4>
                                                    {exp.starExamples.map((star, sIndex) => (
                                                        <div key={sIndex} className={styles.starCard}>
                                                            <div className={styles.starHeader}>
                                                                <span className={styles.starPrinciple}>{star.principle}</span>
                                                            </div>
                                                            <div className={styles.starSituation}>{star.situation}</div>
                                                            <div className={styles.starResult}>{star.result}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {exp.projects && (
                                                <div className={styles.projectsContainer}>
                                                    <h4 className={styles.projectsTitle}>
                                                        Key Projects & Technologies
                                                    </h4>
                                                    {exp.projects.map((project, pIndex) => (
                                                        <div key={pIndex} className={styles.projectCard}>
                                                            <div className={styles.projectHeader}>
                                                                <div className={styles.projectName}>
                                                                    {project.url ? (
                                                                        <a
                                                                            href={project.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className={styles.projectLink}
                                                                            onClick={(e) => e.stopPropagation()}
                                                                        >
                                                                            {project.name}
                                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                                                            </svg>
                                                                        </a>
                                                                    ) : (
                                                                        project.name
                                                                    )}
                                                                </div>
                                                                {project.role && <div className={styles.projectRole}>{project.role}</div>}
                                                            </div>
                                                            <div className={styles.projectDescription}>
                                                                <ul>
                                                                    {project.description.map((desc, dIndex) => (
                                                                        // Updated to use dangerouslySetInnerHTML to support bold tags in project descriptions
                                                                        <li key={dIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className={styles.techStack}>
                                                                {project.technologies.map((tech, tIndex) => (
                                                                    <span key={tIndex} className={styles.techBadge}>
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}