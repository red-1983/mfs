import styles from './Contacts.module.css';
import ContactsList from '../../UI/contactsList/ContactsList.js';
import Form from '../../UI/form/Form.js';

function Contacts({ style }) {
  return (
    <section className={styles[style]}>
      <p className={styles.title}>Связаться с нами:</p>
      <div className={styles.container_contacts}>
        <ContactsList i={0} style={style} image_color={'black'} />
        <ContactsList i={1} style={style} image_color={'black'} />
        <ContactsList i={2} style={style} image_color={'black'} />
        <ContactsList i={3} style={style} image_color={'black'} />
      </div>
      <div className={styles.container_form}>
        <Form style={style} />

        <iframe
          className={styles.map}
          src="https://yandex.by/map-widget/v1/?ll=29.235098%2C52.048415&mode=poi&poi%5Bpoint%5D=29.234966%2C52.048382&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1270208883&utm_source=share&z=19.5"
          loading="lazy"
          allow="fullscreen"
          title="map"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacts;
