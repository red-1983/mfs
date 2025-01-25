import styles from './Footer.module.css';
import skillnet from '../image/skillnet_logo.svg';

function Footer({style,children}) {
  return (
    <footer className={styles[style]}>
    
    {children}
    <a href='https://skillnet.by/' className={styles.footer__logo}>
    Сделано в веб-студии  
        <img src={skillnet} width="136" height="50" alt="Логотип компании"/>
      Мозырь, 2025
      </a>
     </footer>
  )
}

export default Footer