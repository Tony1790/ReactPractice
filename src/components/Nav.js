import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <h1>TonyFlex</h1>
      </div>
      <div className={styles.nav_genres}>
        <h1>Top-Rating</h1>
        <h1>Romance</h1>
        <h1>Comedy</h1>
        <h1>Documentry</h1>
      </div>
    </nav>
  );
}

export default Nav;
