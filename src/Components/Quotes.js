import styles from '../styles/quotes.module.css';
// import Header from './Header';

const Quotes = () => (
  <div>
    {/* <Header /> */}
    <div className={styles.pDiv}>
      <p className={styles.p}>
        Mathematics is not about numbers and eqautions, computations
        or algorithms: It`s about understanding. -- William Paul Thurtson
      </p>
    </div>
  </div>
);

export default Quotes;
