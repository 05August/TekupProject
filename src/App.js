import React, { useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import { DATA } from "./Constants";

function App() {
  const [indexActive, setIndexActive] = useState(0);
  const renderNav = () => {
    return DATA.map((item, index) => {
      return (
        <div
          className={index === indexActive ? "nav__item  active" : "nav__item"}
          onClick={() => {
            setIndexActive(index);
          }}
          key={`nav-${index}`}
        >
          {item.title}
        </div>
      );
    });
  };

  const renderItem = () => {
    return DATA[indexActive].list.map((item, index) => {
      return (
        <div key={`card--${indexActive}--${index}`}>
          <Card props={item} />
        </div>
      );
    });
  };
  return (
    <div className="App">
      <section className="App__container">
        <div className="nav">{renderNav()}</div>
        <div className="grid-card">{renderItem()}</div>
      </section>
    </div>
  );
}

export default App;
