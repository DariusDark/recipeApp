import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [item, setItem] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const { name: id } = useParams();

  const getRecipe = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipe = await data.json();
    console.log(recipe);
    setItem(recipe);
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  return (
    <DetailWrapper>
      <ImgContainer>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.title} />
      </ImgContainer>
      <Info>
        <ButtonContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonContainer>
        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: item.summary }}></h3>
            <h3>Steps</h3>
            <h3 dangerouslySetInnerHTML={{ __html: item.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {item.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 5rem;
  align-items: flex-start;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1 1 60%;
`;

const ImgContainer = styled.div`
  padding-top: 3rem;
  position: sticky;
  left: 0;
  top: 0;
  flex: 0 0 40%;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #404040;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  padding-top: 3rem;
`;

export default Recipe;
