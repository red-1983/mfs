import styles from './countdown.module.css';

const Countdown = (props) => {
const {style} = props;

   
  return (
    <div className={styles[style]}>
       <h2>Новый год уже скоро</h2>
                <ul>
                    <li class="days"> <h2>47</h2> <h4>Days</h4></li>
                    <li class="hours"><h2>5</h2><h4>Hours</h4></li>
                    <li class="minutes"><h2>34</h2><h4>Minutes</h4></li>
                    <li class="seconds"><h2>12</h2><h4>Seconds</h4></li>
                </ul>
    </div>
  )

}

export default Countdown;