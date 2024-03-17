import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <div id={styles.component}>
      <div>Admin</div>

      <Link to="/about" className={styles.dbSection}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.icon}>🥸</div>
            About
          </div>
        </div>
      </Link>

      <div className={styles.dbSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.icon}>🎓</div>
          Education
        </div>
      </div>

      <Link to="/experiences" className={styles.dbSection}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.icon}>🧪</div>
            Experience
          </div>
        </div>
      </Link>

      <div className={styles.dbSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.icon}>🔨</div>
          Projects
        </div>
        <MdOutlineKeyboardArrowDown />
      </div>
    </div>
  );
}
