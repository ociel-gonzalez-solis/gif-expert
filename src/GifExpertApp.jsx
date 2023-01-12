import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (newCategory) => {
    console.log(newCategory);
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;
    setCategories((cat) => [newCategory, ...cat]);
  };

  console.log(categories);
  return (
    <>
      {/* tittle */}
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory onNewCategory={addCategory} />

      {/* Listado de gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif items */}
    </>
  );
};

export default GifExpertApp;
