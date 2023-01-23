
import styles from "./layout.module.css";

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }

  //Picture not showing down
  //Parizad will resolve it