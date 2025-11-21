"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const featuredProjects = [
    {
        title: "Jupiter Goals",
        description: "A goal tracking service to help you achieve your dreams. Built with modern web technologies.",
        tech: ["Service", "Productivity", "Web App"],
        link: "https://www.jupitergoals.com/",
        isExternal: true
    },
    {
        title: "Ready Set Marry",
        description: "A wedding planning platform and information hub. Simplifying the journey to the altar.",
        tech: ["Service", "Lifestyle", "React"],
        link: "https://www.readysetmarry.com/",
        isExternal: true
    },
    {
        title: "JupiterGoals Blog",
        description: "Technical blog sharing insights on software engineering, distributed systems, and life.",
        tech: ["Blog", "Content", "Tech"],
        link: "https://blog.jupitergoals.com/",
        isExternal: true
    }
];

const openSourceProjects = [
    {
        title: "Spring Framework",
        description: "Contributor to the Spring Framework. Java-based application framework and inversion of control container.",
        tech: ["Open Source", "Java", "Spring"],
        link: "https://github.com/spring-projects/spring-framework",
        isExternal: false
    },
    {
        title: "NextAuth.js",
        description: "Contributor to NextAuth.js, the complete open-source authentication solution for Next.js applications.",
        tech: ["Open Source", "Next.js", "Auth"],
        link: "https://github.com/nextauthjs/next-auth",
        isExternal: false
    },
    {
        title: "KEDA Docs",
        description: "Contributor to KEDA (Kubernetes Event-driven Autoscaling) documentation.",
        tech: ["Open Source", "Kubernetes", "Docs"],
        link: "https://github.com/kedacore/keda-docs",
        isExternal: false
    }
];

const otherProjects = [
    {
        title: "pipu-api-chat",
        description: "A websocket server designed for chat, capable of scaling and smartly connecting to the server when a client is online.",
        tech: ["Java", "WebSocket", "Distributed Systems"],
        link: "https://github.com/jupiterhub/pipu-api-chat",
        isExternal: false
    },
    {
        title: "web3-blockchain-evaluation",
        description: "Application for evaluating the hype around web3 and decentralized apps. Exploring Solana and other protocols.",
        tech: ["Web3", "Blockchain", "Research"],
        link: "https://github.com/jupiterhub/web3-blockchain-evaluation",
        isExternal: false
    },
    {
        title: "undersnore",
        description: "A unique project to monitor snoring patterns. Exploring audio processing and health monitoring.",
        tech: ["Health Tech", "Audio", "Experimental"],
        link: "https://github.com/jupiterhub/undersnore",
        isExternal: false
    },
    {
        title: "Solana Runner",
        description: "Runner application for Web3 blockchain evaluation, focusing on Solana integration and performance testing.",
        tech: ["Solana", "Web3", "Blockchain"],
        link: "https://github.com/jupiterhub/solana-runner",
        isExternal: false
    }
];

export default function Projects() {
    return (
        <section id="projects" className={`${styles.projects} section`}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className={styles.grid}>
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <Folder className={styles.folderIcon} size={40} />
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        {project.isExternal ? <ExternalLink size={20} /> : <Github size={20} />}
                                    </a>
                                </div>
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '4rem' }}
                >
                    Open Source Contributions
                </motion.h2>

                <div className={styles.grid}>
                    {openSourceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <Folder className={styles.folderIcon} size={40} />
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '4rem' }}
                >
                    Other Projects
                </motion.h2>

                <div className={styles.grid}>
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <Folder className={styles.folderIcon} size={40} />
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
