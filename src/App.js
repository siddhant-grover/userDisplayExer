import "./styles.css";
import React, { useState } from "react";
import { User } from "../User";
export default function App() {
  const [a, seta] = useState();

  function fetchData() {
    fetch("https://randomuser.me/api")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res.results);
        seta(res.results);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <button onClick={fetchData}>fetch</button>
      <p>{JSON.stringify(a, null, 2)}</p>

      {a &&
        a.map((item) => {
          return <User key={item.id} name={item.name} picture={item.picture} />;
        })}
    </>
  );
}
//fetchData is not an async function as , no promise returned , no need for async await / .then

//jo input me vo , apis call paint on screen
//1 form
//no form
