import styles from "./Button.module.css";
export function Button({ label, onClick }: { label: string; onClick: any }) {
  return (
    <>
      <button id={styles.button} onClick={onClick}>
        {label}
      </button>
    </>
  );
}
