import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function ({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "820c3936a0f24d5cacd8f22e11d5cab9";

  useEffect(() => {
    async function fetchFood() {
      const URL = `https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=${API_KEY}`;
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image}></img>
        <br />
        <br />
        <br />
        <span>
          <strong>⏱️ {food.readyInMinutes}Minutes</strong>
        </span>
        <br />
        <br />

        <span>
          <span>Price :₹{food.pricePerServing}</span>
          <br />
          <br />
          👨‍👩‍👧‍👦 <strong>Serves: {food.servings}</strong>
        </span>
        <br />
        <br />

        <span>{food.vegetarian ? "🥕Vegetarian" : "🍗Non-Vegetarian"}</span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} />

      <div className={styles.recipeInstructions}>
        <h2>Instructions</h2>
        <ul>
          {food.analyzedInstructions?.[0]?.steps?.map((item) => (
            <div>
              <li>{item.step}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
