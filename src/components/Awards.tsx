"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Awards.module.css';
import { Trophy, Star, Award } from 'lucide-react';

const awards = [
    {
        title: "Tesco Global Hackathon 2024",
        subtitle: "3rd Place Winner (Team Lead)",
        description: "Led a team to victory in a global hackathon, demonstrating leadership and technical innovation.",
        icon: <Trophy size={32} color="var(--primary)" />
    },
    {
        title: "Top Performer Recognition",
        subtitle: "Top 5% among 30 engineers",
        description: "Recognized for proficiency in data structures, algorithms, and software design principles during early career.",
        icon: <Star size={32} color="var(--secondary)" />
    },
    {
        title: "Oracle Certified Professional, Java SE 6 Programmer",
        subtitle: "Oracle Certification",
        description: "Validated expertise in Java programming language and its core libraries.",
        link: "https://www.credly.com/badges/282673c0-9c98-404b-8afa-43003ee7b38f/linked_in_profile",
        icon: <Award size={32} color="var(--accent)" />
    }
];

const Awards = () => {
    return (
        <section className={`${styles.awards} section`} id="awards">
            <div className="container">
                <h2 className="section-title">Awards & Certifications</h2>

                <div className={styles.awardGrid}>
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className={styles.awardCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                {award.icon}
                            </div>
                            <h3 className={styles.awardTitle}>{award.title}</h3>
                            <div className={styles.awardSubtitle}>{award.subtitle}</div>
                            <p className={styles.awardDescription}>{award.description}</p>
                            {award.link && (
                                <a
                                    href={award.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.awardLink}
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '0.5rem',
                                        color: 'var(--primary)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    View Credential →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
