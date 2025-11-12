import { useState } from "react";
import data from "./data.js";
import "./style.css";

const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelect(getCurrentId === select ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiSelec = [...multiSelect];
    const findIndexOfCurrentId = cpyMultiSelec.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiSelec.push(getCurrentId);
    else cpyMultiSelec.splice(findIndexOfCurrentId, 1);

    setMultiSelect(cpyMultiSelec);
  };

  console.log(select, multiSelect);

  return (
    <div className="wrapper">
      <button
        style={{
          backgroundColor: enableMultiSelect ? "lightgreen" : "lightgray",
        }}
        onClick={() => {
          alert("clicked");
          setEnableMultiSelect(!enableMultiSelect);
        }}
      >
        enable multi select
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <div>
                  <div className="title">
                    <h2>{dataItem.question}</h2>
                    <span>+</span>
                  </div>
                  <div>
                    {select === dataItem.id ||
                    multiSelect.indexOf(dataItem.id) !== -1 ? (
                      <div
                        style={{
                          backgroundColor: select ? "lightgray" : "lightgreen",
                        }}
                      >
                        {dataItem.answer}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
