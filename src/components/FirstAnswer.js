import React, { useState } from "react";
import "./style.css";
const FirstAnswer = (props) => {
  const [answer, setAnswer] = useState();
  return (
    <React.Fragment>
      <div class='bs-example'>
        <form>
          <div class='col-sm-12'>
            <div class='input-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Answer'
                onChange={(e) => setAnswer(e.target.value)}
              />
              <span
                class='input-group-text btn'
                onClick={(e) => {
                  props.addsubanswer(answer);
                }}
              >
                {" "}
                +{" "}
              </span>
              <span
                class='input-group-text btn'
                onClick={() => {
                  props.remove(props.id);
                }}
              >
                {" "}
                -{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default FirstAnswer;
