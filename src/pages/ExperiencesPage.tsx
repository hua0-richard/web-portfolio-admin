import { useEffect, useState } from "react";

export function ExperiencesPage() {
    const [load, setLoad] = useState(false);
    const [data, setData] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/user/experiences")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
            setLoad(true);
          });
      }, []);
    return <></>
}