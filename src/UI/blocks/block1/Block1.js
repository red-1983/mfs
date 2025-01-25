import styles from './Block1.module.css';
function Block1({style}) {
  return (
    <div className={styles[style]}>
    <h3>Реквизиты</h3> 
    <p>ООО "Формула света" Общество с ограниченной ответственностью "Формула света"</p>
    <p> Юридический адрес:<br/>
    РБ Гомельская обл.,Мозырский р-н, г. Мозырь, ул. Коммунальная, д.16А, оф. 1
    </p>
    <p>Почтовый индекс: 247760</p>
    <p> УНП 490951384</p>
  
    </div>
  )
}

export default Block1