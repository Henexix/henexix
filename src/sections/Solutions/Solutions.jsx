import styles from './Solutions.module.css';

const Solutions = () => {
    const products = [
        {
            title: "Recepción Automática",
            description: "Sistemas de mensajería inteligente para atención 24/7 sin intervención humana.",
            cta: "Implementar ahora"
        },
        {
            title: "Catálogos Dinámicos",
            description: "Visualización de stock y precios sincronizada en tiempo real para ventas rápidas.",
            cta: "Digitalizar stock"
        },
        {
            title: "Optimización Operativa",
            description: "Configuración estratégica para dominar búsquedas y presencia digital en el mercado local.",
            cta: "Dominar mercado"
        }
    ];

    return (
        <section id="solutions" className={styles.solutions}>
            <h2 className={styles.sectionTitle}>Sistemas de Flujo</h2>
            <div className={styles.grid}>
                {products.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDescription}>{item.description}</p>
                        <a href="#contact" className={styles.cardBtn}>{item.cta}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Solutions;