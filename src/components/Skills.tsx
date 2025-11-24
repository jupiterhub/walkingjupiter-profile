"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

import { formatYearsExperience, CAREER_START_DATE } from "@/utils/dateUtils";

const skillCategories = [
    {
        title: "Backend (Expert)",
        skills: [
            { name: `Java (16+ years)` },
            { name: "Spring Boot" },
            { name: "Micronaut" },
            { name: "Microservices" },
            { name: "Event-Driven Architecture (Kafka)" },
            { name: "CQRS" },
            { name: "SQL (PostgreSQL/MySQL)" },
            { name: "System Design" }
        ]
    },
    {
        title: "Platform Languages",
        skills: [
            { name: "Golang (Cloud/K8s/Azure SDKs)" },
            { name: "HCL (Terraform)" },
            { name: "Shell (Bash/Zsh)" }
        ]
    },
    {
        title: "Frontend (Proficient)",
        skills: [
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "GraphQL" },
            { name: "SPA Architecture" },
            { name: "Next.js" }
        ]
    },
    {
        title: "Platform & Infra",
        skills: [
            { name: "AWS (ECS/Fargate)" },
            { name: "Azure (AKS)" },
            { name: "Kubernetes" },
            { name: "Terraform" },
            { name: "Docker" },
            { name: "CI/CD Strategy (Azure DevOps)" }
        ]
    },
    {
        title: "Emerging Tech",
        skills: [
            { name: "vLLM" },
            { name: "RAG" },
            { name: "Vector Embeddings" },
            { name: "Model Fine Tuning" },
            { name: "AI Agents (R&D focus)" }
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section className={`${styles.skills} section`} id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Expertise
                </motion.h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className={styles.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <motion.div
                                className={styles.skillList}
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className={styles.skillItem}
                                        variants={item}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 0 8px var(--primary)",
                                            borderColor: "var(--primary)"
                                        }}
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
