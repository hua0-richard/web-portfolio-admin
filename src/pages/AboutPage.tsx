import { useEffect, useState } from "react";
import styles from "./Page.module.css";

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
        <div style={{ width: "100%" }}>
          {Object.entries(d).map(([k, v]) => (
            <div style={{ width: "100%", color: "white" }}>
              {k !== "_id" ? (
                <div style={{ display: "flex", padding: "8px" }}>
                  <div style={{width: "25%"}}>{k}</div><textarea wrap="hard" style={{width: "75%"}}>{v}</textarea>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}
