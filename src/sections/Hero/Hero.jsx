import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Sistemas de <span className={styles.highlight}>Gestión y Desarrollo</span>
                </h1>
                <p className={styles.subtitle}>
                    Tecnología diseñada para potenciar tu crecimiento.
                </p>
                <div className={styles.actions}>
                    <a href="#contact" className={styles.primaryBtn}>
                        Consultoría Estratégica
                    </a>
                    <a href="#solutions" className={styles.secondaryBtn}>
                        Ver Soluciones
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;