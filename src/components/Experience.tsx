"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Software Development Engineer III",
        company: "Tesco, London",
        period: "May 2023 - Present",
        points: [
            "Reduced infrastructure costs by <strong>£400,000 annually</strong> through cloud migration and optimization strategies.",
            "Spearheaded CI/CD pipeline design and implementation enabling streamlined, stable deployments and faster time-to-market.",
            "Promoted cross-collaboration across teams by introducing new initiatives and promoting knowledge sharing sessions.",
            "Mentored 2 engineers, fostering their technical growth and contributing to team success.",
            "Leading initiative to support group ordering and enabling real-time functionalities across Tesco via event driven architecture."
        ]
    },
    {
        role: "Technical Lead (Software Engineer)",
        company: "Aperza Inc, Japan",
        period: "Nov 2017 - Oct 2022",
        points: [
            "Led full-stack development of 2 customer-facing greenfield applications, from concept to launch.",
            "Spearheaded the development of a new E-commerce platform and Aperza TV, driving key business growth initiatives.",
            "Implemented CI/CD pipelines, reducing deployment time by <strong>over 95%</strong>.",
            "Migrated infrastructure from EC2 to ECS, saving <strong>£24,000 annually</strong> and improving scalability.",
            "Led and mentored a team of 5 software engineers, fostering technical excellence and Agile practices."
        ]
    },
    {
        role: "Sabbatical - Round the World Trip",
        company: "Global",
        period: "May 2016 - Oct 2017",
        points: [
            "Embarked on a global journey, experiencing diverse cultures and expanding personal horizons."
        ]
    },
    {
        role: "Technical Lead (Software Engineer)",
        company: "Rakuten Asia, Singapore",
        period: "May 2013 - Apr 2016",
        points: [
            "Developed a Global Advertising platform for the Rakuten group.",
            "Implemented Agile practices (CI, Scrum, XP), increasing velocity by <strong>25%</strong>.",
            "Led and mentored an 8-member team, accelerating project delivery by <strong>30%</strong>.",
        ]
    },
    {
        role: "Application Consultant",
        company: "NCS Pte Ltd, Singapore",
        period: "Mar 2011 - Apr 2013",
        points: [
            "Developed Admin tools for John Wiley & Sons streamlining content management.",
            "Led API development to enhance Trade Finance capabilities on Standard Chartered's Straight2Bank platform."
        ]
    },
    {
        role: "Java Programmer (Team Lead)",
        company: "St. Luke’s Medical Center, Philippines",
        period: "May 2009 - Feb 2011",
        points: [
            "Led the development of critical admission and ordering modules.",
            "Championed Test-Driven Development (TDD) practices, reducing bug count by <strong>30%</strong>.",
            "Developed a web-based time-tracking system, replacing an outdated VB-based system."
        ]
    }
];

export default function Experience() {
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
                            className={styles.item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.header}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <div className={styles.company}>{exp.company}</div>
                                <div className={styles.period}>{exp.period}</div>
                            </div>
                            <div className={styles.description}>
                                <ul>
                                    {exp.points.map((point, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
