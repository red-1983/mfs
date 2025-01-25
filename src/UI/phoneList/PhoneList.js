import styles from './PhoneList.module.css';
import contact from './dataList.js';
import mts from './mts-logo.svg';
import a1 from './a1.webp';
function PhoneList({i}) {


  return (
    <div className={styles.container}>
    <h3>{contact[i].department_name}</h3>
     
     <ul className={styles.list}>
      {contact[i].phone.map(function (item, index) {
          return (
            <li className={styles.list_item} key={index}>
            
            <a className={styles.tel} href={item.href} aria-label={item.aria_label} >{item.tel}<img className={styles.image} src={ item.aria_label === 'МТС'? mts:a1} area-label={item.aria_label} alt={'логотип'+item.aria_label}/></a>
            </li>
        
          )
        })
      }
      
    </ul>
  </div>
  )
}

export default PhoneList;