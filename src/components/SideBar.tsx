import { BsDatabaseFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./SideBar.module.css";
export function SideBar() {
  return (
    <div id={styles.component}>
      <div>Admin</div>

      <div className={styles.dbSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.icon}>🥸</div>
          About
        </div>
      </div>

      <div className={styles.dbSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.icon}>🎓</div>
          Education
        </div>
      </div>

      <div className={styles.dbSection}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={styles.icon}>🧪</div>
          Experience
        </div>
        <MdOutlineKeyboardArrowDown />
      </div>

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
