import styles from './Logo.module.css';
import logoSmall from '../../image/logo_small.webp';
import logoMedium from '../../image/logo_medium.webp';
import logoLage from '../../image/logo_large.webp';


const Logo = (props) => {
const {style} = props;

   
  return (
    <div className={styles[style]}>
        <img src={style==='isDesktop' ? logoLage : (style==='isTablet' ? logoMedium : logoSmall)} width="350" height="90" alt='Логотип компании'/>
    </div>
  )

}

export default Logo