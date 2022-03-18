import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <button>
          <FaSearch></FaSearch>
        </button>
        <input
          type="text"
          value={input}
          onInput={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 auto;

  div {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 1.5rem;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 2.8rem;
    border-radius: 1.5rem;
    outline: none;
    width: 100%;
  }

  button {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 0%;
    transform: translate(0, -50%);
    background: transparent;
    border: none;
    height: 100%;
    width: 42px;

  }
  svg {
    position: absolute;
    left: 60%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.2rem;
  }
`;

export default Search;
