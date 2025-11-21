"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const subject = `Contact Form Submission from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:profile@walkingjupiter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className={`${styles.contact} section`}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.formContainer}
                >
                    <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>Get In Touch</h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--foreground-muted)' }}>
                        Or email me directly at <a href="mailto:profile@walkingjupiter.co" style={{ color: 'var(--primary)' }}>profile@walkingjupiter.com</a>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className={styles.input}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className={styles.input}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                required
                                className={styles.textarea}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "loading" ? (
                                <Loader2 className="animate-spin" />
                            ) : status === "success" ? (
                                "Message Sent!"
                            ) : (
                                <>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></>
                            )}
                        </button>

                        {status === "error" && (
                            <p className={`${styles.status} ${styles.error}`}>
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
