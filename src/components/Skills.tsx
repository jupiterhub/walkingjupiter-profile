"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Java (Expert)" },
            { name: "Golang (Current Focus)" },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "SQL" },
            { name: "Bash" }
        ]
    },
    {
        title: "Platform & Cloud",
        skills: [
            { name: "AWS (ECS, Fargate, Lambda)" },
            { name: "Azure (AKS, Container Apps)" },
            { name: "GCP (GKE)" },
            { name: "Terraform" },
            { name: "Docker" },
            { name: "Kubernetes" }
        ]
    },
    {
        title: "Backend & Frameworks",
        skills: [
            { name: "Spring Boot Ecosystem" },
            { name: "Micronaut" },
            { name: "Quarkus" },
            { name: "Node.js" },
            { name: "Hibernate/JPA" }
        ]
    },
    {
        title: "Architecture",
        skills: [
            { name: "Event-Driven (Kafka, JMS)" },
            { name: "CQRS" },
            { name: "Microservices" },
            { name: "Domain-Driven Design (DDD)" },
            { name: "Internal Developer Platforms (IDP)" }
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Azure DevOps" },
            { name: "GitHub Actions" },
            { name: "Jenkins" },
            { name: "Prometheus" },
            { name: "Grafana" },
            { name: "SonarQube" },
            { name: "Istio" }
        ]
    },
    {
        title: "AI & R&D",
        skills: [
            { name: "LLM Agents (LangChain)" },
            { name: "Vector Embeddings" },
            { name: "RAG" },
            { name: "Prompt Engineering" }
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
