import { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { EditArea } from "../components/EditArea";

export function AboutPage() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}user/about`)
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
    <>
      {data.about.map((d) => (
        <div className={styles.sectionSubContainer}>
          <div className={styles.sectionContainer}>
            <EditArea obj={d} />
          </div>
        </div>
      ))}
    </>
  ) : (
    <></>
  );
}
