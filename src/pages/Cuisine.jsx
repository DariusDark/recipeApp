import {useState, useEffect} from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const { type } = useParams();
    console.log(type);
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${name}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        console.log(recipes);
    }

    useEffect(() => {
        getCuisine(type);
    }, [type])
  return <div>Cuisine</div>;
}

export default Cuisine;
