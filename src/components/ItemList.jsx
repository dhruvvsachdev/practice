import Item from "./Item";

export default function ItemList({ food }) {
  return (
    <div>
      <ul>
        {food.extendedIngredients?.map((ingredient) => (
          <Item ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
}
