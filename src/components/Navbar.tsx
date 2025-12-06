"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Awards", href: "#awards" },
    ];

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <motion.nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`container ${styles.content}`}>
                    <a href="#" className={styles.logo}>
                        JT
                    </a>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        <div className={styles.navLinks}>
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className={styles.link}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <a href="#contact" className={styles.cta}>
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button - Only visual toggle to open, hidden when open via overlay */}
                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Navigation Overlay - Portaled to avoid transform clipping */}
            {mounted && createPortal(
                <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                    <button
                        className={styles.closeButton}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    <div className={styles.mobileLinks}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className={styles.mobileCta}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
