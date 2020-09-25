import React, { useState } from "react";
import "./style.css";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const InputQuestion = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <React.Fragment>
      <br />
      <InputGroup>
        {/* <InputGroupAddon addonType='prepend'>
          <InputGroupText> ? </InputGroupText>
        </InputGroupAddon> */}
        <span className='btn'>?</span>
        <Input
          placeholder='Please Enter the Question'
          onChange={(e) => setQuestion(e.target.value)}
        />
      </InputGroup>
      <div class='bs-example' style={{ marginTop: "20px" }}>
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
                onClick={(e) => props.addquestion(question, answer)}
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

export default InputQuestion;
