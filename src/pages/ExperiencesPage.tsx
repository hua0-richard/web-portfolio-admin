import styles from "./Page.module.css";
import { useEffect, useState } from "react";
import { EditArea } from "../components/EditArea.tsx";

export function ExperiencesPage() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
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
      {data.experience.map((d) => (
        <div
          style={{
            width: "100%",
            border: "1px solid black",
            margin: "8px",
            borderRadius: "8px",
            backgroundColor: "orange",
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
