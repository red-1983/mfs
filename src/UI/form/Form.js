import { useForm} from "react-hook-form"
import styles from './Form.module.css'
function Form ({style}){
    const {register, handleSubmit, formState: {errors}, reset} = useForm(
        {mode:'onblur'}
    );
   console.log(errors);
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
   }
    return (
<form className={styles[style]} onSubmit={handleSubmit(onSubmit)}>
    <p className={styles.title}>Добро пожаловать!</p>
    <label htmlFor='firstName'>Ваше имя<span className={styles.required}>*</span></label>    
<input type='text' id='firstName' {...register('firstName',{required:'Введите пожалуйста Ваше имя', minLength:{
    value:3,
    message:'Минимум 3 символа'
},
maxLength:{
    value:10,
    message:'Максимум 10 символов'
}})} 
placeholder="Поле для обязательного заполнения"
required
/>
<p className={styles.error_message}>{errors.firstName?.message}</p>
<label htmlFor='phone'>Телефон<span className={styles.required}>*</span></label> 
<input type='tel' id='phone'{...register('phone',{
    required:{
    value:true,
    message:'Введите пожалуйста номер телефона',
} 
})}
    placeholder="Поле для обязательного заполнения"  
    />
<p className={styles.error_message}>{errors.phone?.message}</p>
<label htmlFor='email'>Email</label> 
<input type='email' id='email' {...register('email',{required:true})}  />
<p className={styles.error_message}>{errors.email?.message}</p>
<label htmlFor='text'>Сообщение<span className={styles.required}>*</span></label> 
<textarea id = 'text' {...register('message')} placeholder="Поле для обязательного заполнения"></textarea>
<p className={styles.error_message}>{errors.message?.message}</p>
<a href="./politica.pdf" download='policy.pdf' aria-label="Скачать политику конфиденциальности">Ознакомиться с политикой конфиденциальности</a>
<input id="checkbox_required"  type="checkbox"/>
<label className={styles.checkbox_required} htmlFor="checkbox_required">Я согласен на <span> обработку персональных данных</span></label>

<button type="submit" >Отправить</button>
</form>
)
}
export default Form