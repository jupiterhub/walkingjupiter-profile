import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Awards from "@/components/Awards";
import Recommendations from "@/components/Recommendations";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
    return (
        <main>
            <InteractiveBackground />
            <Hero />
            <div style={{ backgroundColor: 'rgba(11, 11, 21, 0.8)' }}>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Awards />
                <Recommendations />
                <Education />
                <ContactForm />
                <footer style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#fff',
                    fontSize: '0.9rem',
                    borderTop: '1px solid var(--border)',
                    marginTop: '4rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Jupiter. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}
