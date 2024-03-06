import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./EditArea.module.css";

export function EditArea({ obj }: { obj: object }) {
  useEffect(() => {
    console.log(obj);
  }, []);
  return (
    <div id={styles.component}>
      <div id={styles.delete}>
        <FaTrash />
      </div>
      {Object.entries(obj).map(([key, value]) =>
        key !== "_id" ? (
          <div>
            <div>{key}</div>
            <textarea>{value}</textarea>
          </div>
        ) : (
          <></>
        ),
      )}
    </div>
  );
}
