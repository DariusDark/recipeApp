import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input type="text" />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 auto;

  div {
    position: relative;
    width: 100%;
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

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
