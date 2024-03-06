import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { EditArea } from "../components/EditArea";

export function AboutPage() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/user/about")
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
      {data.about.map((d) => (
        <EditArea obj={d} />
      ))}
    </div>
  ) : (
    <></>
  );
}
