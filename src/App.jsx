import styles from './App.module.css';
import NavbarMain from './components/NavbarMain/NavbarMain';
import Hero from './sections/Hero/Hero';
import Solutions from './sections/Solutions/Solutions';
import Consulting from './sections/Consulting/Consulting';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className={styles.container}>
      <NavbarMain />
      <main className={styles.mainContent}>
        <Hero />
        <Solutions />
        <Consulting />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;