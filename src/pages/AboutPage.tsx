import { useEffect, useState } from "preact/hooks";
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
        <div style={{ width: "300px" }}>
          {Object.entries(d).map(([k, v]) => (
            <div style={{ width: "600px", color: "white" }}>
              {k !== "_id" ? (
                <div style={{ display: "flex" }}>
                  <div>{k}</div>:<textarea>{v}</textarea>
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
