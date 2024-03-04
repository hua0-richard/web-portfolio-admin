import styles from "./LoginModal.module.css";
export function LoginModal() {
  return (
    <div id={styles.component}>
      <input label="usr"></input>
      <input label="pwd"></input>
    </div>
  );
}
