import React from 'react';
import styles from './Recommendations.module.css';
import { Quote } from 'lucide-react';

const Recommendations = () => {
    return (
        <section className={`${styles.recommendations} section`} id="recommendations">
            <div className="container">
                <h2 className="section-title">Recommendations</h2>

                <div className={styles.quoteCard}>
                    <div className={styles.quoteIcon}>
                        <Quote size={48} color="var(--primary)" />
                    </div>

                    <p className={styles.quoteText}>
                        “Jupiter is a very capable developer, with great technical skills and a desire to apply his knowledge where he can. He is good at analyzing problems and resolving issues, ensuring that all requirements are met and nothing left undone. Jupiter works well alone, as well as in teams (we were an Agile team with regular pairing and strong team ethics). He delivers well to exacting requirements, and can work well with colleagues both senior and junior to him. He is well liked by everyone who works with him, and he is both intelligent and aware in team environments.”
                    </p>

                    <div className={styles.author}>
                        <div className={styles.authorInfo}>
                            <span className={styles.authorName}>Dominic Messenger</span>
                            <span className={styles.authorTitle}>Former Technical Solutions Architect at BBC Worldwide</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
