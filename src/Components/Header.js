import styles from '../styles/Header.module.css';
// import styles from '../styles/TodoItem.module.css';
const Header = () => {
  const name ='Ama';
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.h1}>Math Magicians</h1>
      </div>
      <div className={styles.ulDiv}>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="#">Home</a></li>
          <li><a href="#">Calculator</a></li>
          <li><a href="#">Quotes</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
