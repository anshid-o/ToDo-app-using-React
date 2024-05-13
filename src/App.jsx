import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  var now = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var day = days[now.getDay()];
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => {
              setToDo(e.target.value);
            }}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() => {
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false, isDeleted: false },
              ]);
            }}
            className="fas fa-plus"
          ></i>
        </div>
        <div className="todos">
          {toDos.map((value) => {
            if (value.isDeleted === false) {
              return (
                <div className="todo">
                  <div className="left">
                    <input
                      value={value.status}
                      onClick={(e) => {
                        console.log(e.target.checked);
                        console.log(value);
                        setToDos(
                          toDos.filter((obj) => {
                            if (obj.id === value.id)
                              obj.status = e.target.checked;
                            return obj;
                          })
                        );
                      }}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p>{value.text}</p>
                  </div>
                  <div className="right">
                    <i
                      onClick={(e) => {
                        setToDos(
                          toDos.filter((obj) => {
                            if (obj.id === value.id) {
                              value.isDeleted = true;
                            }
                            return obj;
                          })
                        );
                      }}
                      className="fas fa-times"
                    ></i>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <br />
      <br />
      <h1 className="resultHead">Dashboard</h1>
      <div className="result">
        <div className="list">
          <h2>Completed</h2>
          {toDos.map((obj) => {
            if (obj.status) {
              return <li>{obj.text}</li>;
            }
          })}
        </div>
        <div className="list">
          <h2>Incomplete</h2>
          {toDos.map((obj) => {
            if (!obj.status && !obj.isDeleted) {
              return <li>{obj.text}</li>;
            }
          })}
        </div>
        <div className="list">
          <h2>Abandoned</h2>
          {toDos.map((obj) => {
            if (!obj.status && obj.isDeleted) {
              return <li>{obj.text}</li>;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default App;
