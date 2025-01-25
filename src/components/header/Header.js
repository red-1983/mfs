import { Children } from 'react';
import styles from './Header.module.css'
function Header(props) {
    const {style,children} = props;
    
  return (
    <header className={styles[style]}>
        {children}
    </header>
  )
}

export default Header;