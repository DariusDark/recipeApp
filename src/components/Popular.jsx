import { useEffect, useState } from "react";

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
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
