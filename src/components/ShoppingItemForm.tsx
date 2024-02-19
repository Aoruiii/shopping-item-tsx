import { useState } from "react";
import styled from "styled-components";
import Item from "../models/item";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function ShoppingItemForm({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setItems((items) => {
      return [
        ...items,
        { id: items.length + 1, product: product, quantity: quantity },
      ];
    });
    setProduct("");
    setQuantity(0);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Add Item</button>
    </StyledForm>
  );
}

export default ShoppingItemForm;
