import styles from "./Page.module.css";
import { useEffect, useState } from "react";
import { EditArea } from "../components/EditArea.tsx";

export function ExperiencesPage() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({ experience: [] });
  useEffect(() => {
    fetch("http://localhost:8000/user/experience")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoad(true);
      });
  }, []);
  return load ? (
    <div className={styles.container}>
      <div>Add</div>
      {data.experience.map((d) => (
        <div
          style={{
            flexGrow: "1",
            backgroundColor: "orange",
            width: "100%",
            boxSizing: "border-box",
            border: "2px solid white",
          }}
        >
          <EditArea obj={d} />
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}
