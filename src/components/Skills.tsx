import React from 'react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Java", years: "16 years" },
            { name: "Javascript", years: "15 years" },
            { name: "React/TypeScript/Node", years: "6 years" },
            { name: "Go", years: "1 year" },
            { name: "Python (ML/AI)", years: "On and off" },
            { name: "Scala (Gatling)", years: "Occasional" },
            { name: "Kotlin (Gradle)", years: "Occasional" },
        ]
    },
    {
        title: "Process",
        skills: [
            { name: "Agile", years: "12 years" },
            { name: "Scrum" },
            { name: "XP" },
            { name: "BDD" },
            { name: "TDD" },
            { name: "CI/CD" },
            { name: "Static code analysis" },
            { name: "Event Driven Architecture (Kafka/JMS - MQ)" },
            { name: "CQRS" },
        ]
    },
    {
        title: "Frameworks/Libraries",
        skills: [
            { name: "Spring Framework/Boot", years: "13 years" },
            { name: "Micronaut" },
            { name: "Quarkus" },
            { name: "jUnit" },
            { name: "JPA/Hibernate" },
            { name: "Kafka" },
            { name: "Distributed Systems" },
            { name: "Service mesh (Istio/Linkerd)" },
            { name: "Rest" },
            { name: "GraphQL" },
            { name: "Sonar" },
            { name: "Kubernetes" },
            { name: "Helm" },
            { name: "Kops" },
            { name: "Docker" },
        ]
    },
    {
        title: "Cloud Computing",
        skills: [
            { name: "AWS (EC2/S3/Cloudwatch/SQS/ECS/Beanstalk/Lambda/RDS)" },
            { name: "Azure (Container/AKS/Gateway)" },
            { name: "GCP (GKE, App Engine)" },
            { name: "Splunk" },
            { name: "Newrelic" },
            { name: "Runscope" },
            { name: "Jaeger/Prometheus/Grafana" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { name: "SQL (Mysql, H2, Sybase, Oracle)" },
            { name: "NoSQL MongoDB" },
            { name: "Couchbase" },
            { name: "In-Memory (Redis, Memcache)" },
        ]
    },
    {
        title: "Build Tools",
        skills: [
            { name: "Gradle" },
            { name: "Maven" },
            { name: "GoCD" },
            { name: "Hudson" },
            { name: "Jenkins" },
            { name: "Github Actions" },
            { name: "Bitbucket" },
            { name: "Azure Devops" },
        ]
    },
    {
        title: "Other",
        skills: [
            { name: "Agile methodologies" },
            { name: "Design patterns" },
        ]
    },
    {
        title: "Emerging Technologies (Exposure/Interest)",
        skills: [
            { name: "LLM" },
            { name: "Web3" },
            { name: "AI/ML (local fine tuned model)" },
            { name: "Spring Contributor" },
            { name: "KEDA Contributor" },
            { name: "NextAuth contributor" },
        ]
    }
];

const Skills = () => {
    return (
        <section className={`${styles.skills} section`} id="skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillList}>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className={styles.skillItem}>
                                    {skill.name}
                                    {skill.years && <span className={styles.years}>({skill.years})</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
