import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = {
        LinkedIn: "https://www.linkedin.com/company/henexix/",
        Instagram: "https://www.instagram.com/henexix/",
        FaceBook: "https://www.facebook.com/henexix"
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>HENEXIX</h2>
                    <p className={styles.tagline}>Sistemas de gestión y desarrollo</p>
                </div>

                <div className={styles.social}>
                    <a href={links.LinkedIn} target="_blank" className={styles.socialLink}>LinkedIn</a>
                    <a href={links.Instagram} target="_blank" className={styles.socialLink}>Instagram</a>
                    <a href={links.FaceBook} target="_blank" className={styles.socialLink}>Facebook</a>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        &copy; {currentYear} Henexix. Todos los derechos reservados.
                    </p>
                    <div className={styles.location}>
                        Mar del Plata, Argentina
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;