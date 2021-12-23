import React, { useState, useEffect } from "react";

import "./styles.global.css";

const Accessibility = () => {
  const zoomOptions = [0, 10, 20, 30];

  const [accessebility, setAccessibility] = useState({
    zoom: 0,
    grayscale: false,
  });

  const getFromLocalStorage = () => {
    const storage = localStorage.getItem("accessebility");

    if (storage) {
      setAccessibility(JSON.parse(storage));
    }
  };

  const updateLocalStorage = () => {
    localStorage.setItem("accessebility", JSON.stringify(accessebility));
  };

  const updateBodyAttributes = () => {
    const arrJSON = Object.entries(accessebility);

    arrJSON.forEach((item) => {
      document.body.setAttribute(`data-${item[0]}`, item[1]);
    });
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    updateLocalStorage();
    updateBodyAttributes();
  }, [accessebility]);

  return (
    <div className="accessibility">
      <div className="accessibility__item accessibility__item--zoom">
        <span className="accessibility__icons accessibility__icons--zoom"></span>
        <span className="accessibility__text">Ajustar zoom</span>
        <div className="accessibility__select">
          <select
            id="zoom"
            name="zoom"
            value={accessebility.zoom}
            onChange={(e) => {
              setAccessibility({ ...accessebility, zoom: e.target.value });
            }}
          >
            {zoomOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}%
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="accessibility__item accessibility__item--grayscale">
        <span className="accessibility__icons accessibility__icons--grayscale"></span>
        <span className="accessibility__text">Escala de cinza</span>
        <div
          className={`accessibility__toggle ${
            accessebility.grayscale ? "accessibility__toggle--active" : ""
          }`}
          onClick={() =>
            setAccessibility({
              ...accessebility,
              grayscale: !accessebility.grayscale,
            })
          }
        >
          <span className="accessibility__toggle-item accessibility__toggle-item--off"></span>
          <span className="accessibility__toggle-item accessibility__toggle-item--on"></span>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
