import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async function () {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  console.log(popular);
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    object-fit: cover;
  }
`;

export default Popular;
