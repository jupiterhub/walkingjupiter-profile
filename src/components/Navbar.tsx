"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`container ${styles.content}`}>
                <a href="#" className={styles.logo}>
                    JT
                </a>

                <div className={styles.navLinks}>
                    <a href="#about" className={styles.link}>About</a>
                    <a href="#experience" className={styles.link}>Experience</a>
                    <a href="#skills" className={styles.link}>Skills</a>
                    <a href="#projects" className={styles.link}>Projects</a>
                    <a href="#contact" className={styles.cta}>
                        Get in Touch
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
