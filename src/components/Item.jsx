import styles from "./item.module.css";

export default function Item({ ingredient }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <img
          src={
            `https://spoonacular.com/cdn/ingredients_100x100/` +
            ingredient.image
          }
        ></img>
      </div>

      <li key={ingredient.id}>{ingredient.original}</li>
    </div>
  );
}
