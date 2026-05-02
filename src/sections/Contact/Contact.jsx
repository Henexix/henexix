import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Requerido";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Email inválido";
        if (formData.message.length < 10) tempErrors.message = "Mínimo 10 caracteres";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const phone = "5492233064316";
        const text = `Hola Henexix!\n\nMi nombre/empresa es: ${formData.name}\nEmail: ${formData.email}\n\nConsulta técnica:\n${formData.message}`;
        
        const params = new URLSearchParams({
            phone: phone,
            text: text
        });

        window.open(`https://api.whatsapp.com/send?${params.toString()}`, '_blank');
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Iniciar Relevamiento</h2>
                    <p className={styles.subtitle}>
                        Contactate con nosotros para analizar la infraestructura de tu negocio y detectar oportunidades de automatización.
                    </p>
                </div>

                <div className={styles.content}>
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.group}>
                            <label htmlFor="name">Nombre / Empresa</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? styles.errorInput : ''}
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? styles.errorInput : ''}
                            />
                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="message">Consulta Técnica</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? styles.errorInput : ''}
                                placeholder="Describa brevemente el problema que desea resolver..."
                            ></textarea>
                            {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Enviar vía WhatsApp
                        </button>
                    </form>

                    <div className={styles.info}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Canal Directo</span>
                            <span className={styles.value}>WhatsApp Business</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Ubicación</span>
                            <span className={styles.value}>Mar del Plata, Argentina</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Horario Operativo</span>
                            <span className={styles.value}>Lunes a Viernes — 08:00 a 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;