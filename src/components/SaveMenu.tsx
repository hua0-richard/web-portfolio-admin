import styles from "./SaveMenu.module.css";
export function SaveMenu() {
  return (
    <div id={styles.component}>
      <div id={styles.controlsContainer}>
        <button>reset</button>
        <button>save</button>
      </div>
    </div>
  );
}
