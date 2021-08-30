import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";
/*
// Способ 1
//Если Время считать через стрелочную функцию - все работает

ReactDOM.render(
  <div>Локальное время {new Date().toLocaleTimeString()}</div>,
  document.getElementById("root")
);
const Locktime = () => (
  <div>Локальное время {new Date().toLocaleTimeString()}</div>
);

setInterval(Tick, 30000);
function Tick() {
  ReactDOM.render(<Locktime />, document.getElementById("root"));
}
*/

 // Способ 2 просто обычный элемент
ReactDOM.render(
  <div>Локальное время {new Date().toLocaleTimeString()}</div>,  
  document.getElementById('root'));

setInterval(Tick,30000);
function Tick(){
  const Locktime= <div>Локальное время {new Date().toLocaleTimeString()}</div>;

  ReactDOM.render(
    Locktime,  
    document.getElementById('root')
  );
  }
 
