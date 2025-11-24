"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className={styles.summary}>
                        <strong>16+ years of experience</strong> building and scaling distributed systems across FinTech, E-commerce, and Healthcare sectors. Currently operating at a Staff Engineering level at Tesco, focusing on <strong>Platform Engineering</strong> and Internal Developer Platforms (IDP) to streamline workflows for thousands of engineers.
                    </p>

                    <p className={styles.summary}>
                        Former Technical Lead in Japan and Singapore with deep expertise in migrating monolithic legacy systems to cloud-native microservices (AWS/Azure). A "Force Multiplier" engineer who combines technical depth in <strong>Java</strong> and <strong>Golang</strong> with a focus on Developer Experience (DevX). Actively building <strong>JupiterGoals</strong>, an AI-powered LifeOS, demonstrating advanced R&D in LLM agents and goal-decomposition architectures.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
