import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue <= 1) return;
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={inputChange}
      />
    </form>
  );
};

export default AddCategory;
