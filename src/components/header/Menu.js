import {NavLink} from 'react-router-dom';
import styles from './Menu.module.css';


function Menu({style,isOpen,children}) {
console.log(style);
    return (
      <>
      {children}
      <nav className={(style === 'isDesktop')? styles[style] : `${styles[style]} ${isOpen ? '' : styles.close}`} >
      <NavLink  to=".">Главная</NavLink>
      <NavLink  to="about">О компании</NavLink>
      <NavLink  to="services">Услуги</NavLink>
      <NavLink  to="shop">Магазин</NavLink>
      <NavLink  to="wholesale">Оптовые продажи</NavLink>
      <NavLink  to="contacts">Контакты</NavLink>
      </nav>
      </>
    
    
  ) 
 
}

export default Menu