import styles from './NavBarMain.module.css';
import bannerImg from '../../assets/banner.jpg';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <img
                    src={bannerImg}
                    alt="HENEXIX"
                    className={styles.banner}
                />
            </div>

            <ul className={styles.links}>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#solutions">Sistemas</a></li>
                <li><a href="#consulting">Consultoría</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;