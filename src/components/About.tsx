"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

import { formatYearsExperience, CAREER_START_DATE } from "@/utils/dateUtils";

export default function About() {
    const yearsExp = formatYearsExperience(CAREER_START_DATE);

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
                        <strong>16+ years of experience</strong> building and scaling distributed systems across <strong>E-commerce, AdTech, CRM, and Healthcare sectors</strong>. A proven Technical Lead who has operated at <strong>Staff/Principal levels</strong> in Japan and Singapore, driving technical strategy and migrating monolithic legacy systems to cloud-native microservices (AWS/Azure).
                    </p>

                    <p className={styles.summary}>
                        A hands-on technical leader who combines deep expertise in <strong>Java</strong> with a strategic focus on Developer Experience (DevX) and Platform Engineering. Currently delivering impact at Tesco while actively building <strong>JupiterGoals</strong>, an AI-powered LifeOS, demonstrating advanced R&D in LLM agents and goal-decomposition architectures.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
