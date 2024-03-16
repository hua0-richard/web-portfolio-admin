import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./EditArea.module.css";

export function EditArea({ obj }: { obj: object }) {
  const backup = obj;
  const [data, setData] = useState(obj);
  const [edited, setEdited] = useState(false);
  useEffect(() => {
    console.log(obj);
  }, []);

  function handleChange(e) {
    console.log(e.target.id);
    setData({ ...data, [e.target.id]: e.target.event });
    setEdited(true)
  }

  function handleCancel() {
    setData(obj)
    setEdited(false)
  }

  return (
    <div id={styles.component}>
      <div id={styles.delete}>
        <FaTrash />
      </div>
      {Object.entries(data).map(([key, value]) =>
        key !== "_id" ? (
          <div className={styles.editContainer}>
            <div className={styles.editLabel}>{key}</div>
            <input id={key} type="text" value={value} onChange={handleChange} className={styles.editTextArea}/>
          </div>
        ) : (
          <></>
        ),
      )}
      {edited ? 
      <div>
        <button>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div> : <></> }
    </div>
  );
}
