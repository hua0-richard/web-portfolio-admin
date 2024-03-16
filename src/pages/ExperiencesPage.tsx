import styles from "./Page.module.css";
import { useEffect, useState } from "react";
import { EditArea } from "../components/EditArea.tsx";
import { IoIosAddCircle } from "react-icons/io";

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

  function addExperience() {
    setData({ experience: [...data.experience, { position: "", organisation: "", date: "", description: ""}]});
  }

  return load ? (
    <div className={styles.container}>
      <div>
        <button
          onClick={addExperience}
          style={{
            background: "green",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "4px",
            fontSize: "14px",
            width: "65px",
            borderRadius: "4px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", color: "#90EE90" }}
          >
            <IoIosAddCircle />
          </div>
          Add
        </button>
      </div>
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
