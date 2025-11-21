"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Education.module.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section className={`${styles.education} section`} id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <motion.div
                    className={styles.educationCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className={styles.schoolInfo}>
                        <h3 className={styles.schoolName}>Informatics Philippines, Eastwood Campus</h3>
                        <div className={styles.degree}>
                            <GraduationCap size={20} />
                            <span>Bachelor of Science in Computer Science</span>
                        </div>
                    </div>
                    <div className={styles.date}>
                        MAR 2004 - MAY 2007
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
