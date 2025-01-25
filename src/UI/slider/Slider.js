import {useState} from 'react';
import styles from './Slider.module.css'
import image1 from './x3000.jpg';


const Slider = ({style}) => {
    const {click, setClick} = useState();
    const media = '(min-width:1024px)';
    const srcset_source = 'img/web_develop.webp 1x, img/web_developx2.webp 2x';
  
    return (
    <div className={styles[style.style]}>
    <button className={styles.button_left} onClick={() => setClick(!click)}><span/></button>
    <button className={styles.button_right}><span/></button>   
    <picture>
        <source media={media} srcset={image1}/>
        <img src={image1} srcset="img/web_develop_middlex2.webp" loading="lazy" alt="Картинка "/>
    </picture>
   
 </div>   
  )

}

export default Slider;
