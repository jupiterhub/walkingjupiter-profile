"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, MapPin, Terminal, CloudCog } from "lucide-react";

export default function Hero() {
    return (
        <section className={`container ${styles.hero}`}>
            <div className={styles.content}>
                <motion.p
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Hello, I&apos;m
                </motion.p>
                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '0.5rem' }}
                >
                    Jupiter.
                </motion.h1>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}
                >
                    Staff Software Engineer | Distributed Systems, Cloud Architecture & AI Platform
                </motion.h2>
                <MapPin size={14} /> London, UK
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >

                    <br />
                    Architecting scalable backend systems for E-commerce, AdTech, and Healthcare sectors.
                    Specializing in Cloud Modernization, Java Ecosystems, and Engineering Strategy.
                    Currently delivering infrastructure impact at Tesco.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0.5, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Get in Touch <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </motion.a>
                    <a href="#projects" className="btn btn-outline">
                        View Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
