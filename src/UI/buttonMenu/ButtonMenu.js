import { useState } from 'react';
import styles from './ButtonMenu.module.css';

function ButtonMenu({onClick}) {
const [isOpen, setIsOpen] = useState(false);
const handleClick = () =>{
    setIsOpen(!isOpen);
    onClick();
  }


  return (
    <button  onClick={handleClick} className={`${styles.button} ${isOpen ? styles.open : styles.close}`} aria-label='Открыть меню'>
    
    </button>
  )
}

export default ButtonMenu
