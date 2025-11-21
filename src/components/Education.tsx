import React from 'react';
import styles from './Education.module.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section className={`${styles.education} section`} id="education">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className={styles.educationCard}>
                    <div className={styles.schoolInfo}>
                        <h3 className={styles.schoolName}>Informatics Philippine, Eastwood Campus</h3>
                        <div className={styles.degree}>Bsc in Computer Science</div>
                    </div>
                    <div className={styles.date}>
                        MAR 2004 - MAY 2007
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
