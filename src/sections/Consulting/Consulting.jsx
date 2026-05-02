import styles from './Consulting.module.css';

const Consulting = () => {
    return (
        <section id="consulting" className={styles.consulting}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Consultoría Estratégica</h2>
                    <p className={styles.description}>
                        Diseñamos arquitectura de software para empresas que necesitan
                        escalar su rentabilidad. Analizamos procesos y
                        desarrollamos soluciones integrales de alto impacto.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Optimización de procesos operativos</li>
                        <li className={styles.listItem}>Arquitectura de sistemas escalables</li>
                        <li className={styles.listItem}>Reducción de costos mediante software</li>
                        <li className={styles.listItem}>Auditoría técnica de infraestructura</li>
                    </ul>
                    <a href="#contact" className={styles.cta}>Solicitar Diagnóstico</a>
                </div>
                <div className={styles.metricsContainer}>
                    <div className={styles.metricCard}>
                        <span className={styles.metricValue}>Auditoría</span>
                        <span className={styles.metricLabel}>Detección de fugas operativas</span>
                    </div>
                    <div className={styles.metricCard}>
                        <span className={styles.metricValue}>Escala</span>
                        <span className={styles.metricLabel}>Infraestructura para alto volumen</span>
                    </div>
                    <div className={styles.metricCard}>
                        <span className={styles.metricValue}>Legado</span>
                        <span className={styles.metricLabel}>Sistemas robustos y mantenibles</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Consulting;