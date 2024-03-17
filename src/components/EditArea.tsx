import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./EditArea.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export function EditArea({
  obj,
  index,
  list,
  setObj,
  onOrder,
}: {
  list: any;
  obj: object;
  index: number;
  setObj: any;
  onOrder: any;
}) {
  const [backup, updateBackup] = useState(obj);
  const [uiFlag, setUiFlag] = useState(createArray(Object.keys(obj).length));
  const [edited, setEdited] = useState(false);
  useEffect(() => {
    console.log(obj);
  }, []);

  function createArray(length: number) {
    return Array.from({ length }, () => false);
  }

  function handleEdit(index: number) {
    const updateUiFlag = [...uiFlag];
    updateUiFlag[index] = !updateUiFlag[index];
    setUiFlag(updateUiFlag);
    console.log(index);
  }

  function handleChange(e) {
    console.log(e.target.id);
    let temp = { ...obj, [e.target.id]: e.target.event };
    let temp_list = [...list.experience];
    temp_list[index] = temp;
    setObj({ experience: temp_list });
    setEdited(true);
  }

  function handleCancel() {
    const updateUiFlag = uiFlag;
    for (let i in updateUiFlag) {
      if (updateUiFlag[i] === true) {
        updateUiFlag[i] = false;
      }
    }
    setUiFlag(updateUiFlag);
    let temp = backup;
    let temp_list = [...list.experience];
    temp_list[index] = temp;
    setObj({ experience: temp_list });
    setEdited(false);
  }

  function handleEditAll() {
    const updateUiFlag = uiFlag;
    for (let i in updateUiFlag) {
      updateUiFlag[i] = true;
    }
    setUiFlag(updateUiFlag);
    setEdited(true);
  }

  function handleOrderDown(index: number) {
    onOrder(["DOWN", index]);
  }

  function handleOrderUp(index: number) {
    onOrder(["UP", index]);
  }

  function handleDelete() {
    let temp = [...list.experience]
    temp.splice(index, index)
    setObj({ experience: temp });
  }

  return (
    <div id={styles.component}>
      <div className={styles.orderContainer}>
        <div className={styles.orderContainerArrows}>
          <div
            className={styles.orderControls}
            onClick={() => handleOrderDown(index)}
          >
            <FaAngleDown />
          </div>
          <div
            className={styles.orderControls}
            onClick={() => handleOrderUp(index)}
          >
            <FaAngleUp />
          </div>
        </div>
        <div className={styles.orderContainerArrows}>
          <div className={styles.orderControlsEdit} onClick={handleEditAll}>
            <MdEdit />
          </div>
          <div className={styles.orderControlsTrash} onClick={handleDelete}>
            <FaTrash />
          </div>
        </div>
      </div>
      {Object.entries(obj).map(([key, value], index) =>
        key !== "_id" ? (
          <div
            className={styles.editContainer}
            onDoubleClick={() => handleEdit(index)}
          >
            <div className={styles.editLabel}>{key}:</div>
            {!uiFlag[index] ? (
              <div className={styles.editPreview}>{value}</div>
            ) : (
              <input
                id={key}
                type="text"
                value={value}
                onChange={handleChange}
                className={styles.editTextArea}
              ></input>
            )}
          </div>
        ) : (
          <></>
        ),
      )}
      {edited ? (
        <div>
          <button>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
