import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <div>
    <div className={styles.header}>
      <h1 className={styles.h1}>Math Magicians</h1>
      <div className={styles.ulDiv}>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to="/">Home</Link></li>
          <li className={styles.li}><Link to="/calculator">Calculator</Link></li>
          <li className={styles.li}><Link to="/quotes">Quotes</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
