"use client";
import { ChangeEvent, useState } from "react";
import "@src/app/admin/admin.css";
export default function AddProduct() {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [discount, setDiscount] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  };
  const handleDiscount = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscount(parseInt(e.target.value));
  };
  const handleColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const [nameError, setNameError] = useState<string>("");
  const [quantityError, setQuantityError] = useState<string>("");
  const [priceError, setPriceError] = useState<string>("");
  const [discountError, setDiscountError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [colorError, setColorError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Clear previous error messages
    setNameError("");
    setQuantityError("");
    setPriceError("");
    setDiscountError("");
    setCategoryError("");
    setColorError("");

    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!quantity) {
      setQuantityError("Quantity is required");
      isValid = false;
    }
    if (!price) {
      setPriceError("Price is required");
      isValid = false;
    }
    if (!discount) {
      setDiscountError("Discount is required");
      isValid = false;
    }
    if (!category) {
      setCategoryError("Category is required");
      isValid = false;
    }
    if (!color) {
      setColorError("Color is required");
      isValid = false;
    }

    // If all fields are valid, you can submit the form
    if (isValid) {
      // Handle form submission here
    }
  };
  return (
    <div className="w-full md:w-[70%] mx-auto py-12">
      <p className="text-center text-2xl font-bold">Add Product</p>
      <form className="w-fit mx-auto bg-white shadow p-5 mt-5">
        <div className="mb-5">
          <label htmlFor="name" className="font-semibold my-1">
            Name
          </label>
          <input placeholder="Name" type="text" id="name" className="placeholder:text-base block rounded border p-2 text-xl flex-1 max-w-[500px] focus:outline-none shadow-sm" onChange={handleName} />
          {nameError && <span className="text-red-500 block text-center overflow-hidden ">{nameError}</span>}
        </div>
        <div className="my-5">
          <label htmlFor="quantity" className="font-semibold my-1">
            Quantity
          </label>
          <input placeholder="Quantity" type="number" id="quantity" className="placeholder:text-base block rounded border p-2 text-xl flex-1 max-w-[500px] focus:outline-none shadow-sm" onChange={handleQuantity} />
          {quantityError && <span className="text-red-500 block text-center overflow-hidden">{quantityError}</span>}
        </div>
        <div className="my-5">
          <label htmlFor="price" className="font-semibold my-1">
            Price
          </label>
          <input placeholder="Price" type="number" id="price" className="placeholder:text-base block rounded border p-2 text-xl flex-1 max-w-[500px] focus:outline-none shadow-sm" onChange={handlePrice} />
          {priceError && <span className="text-red-500 block text-center overflow-hidden">{priceError}</span>}
        </div>
        <div className="my-5">
          <label htmlFor="discount" className="font-semibold my-1">
            Discount
          </label>
          <input placeholder="Discount 0~1" type="number" id="discount" className="placeholder:text-base block rounded border p-2 text-xl flex-1 max-w-[500px] focus:outline-none shadow-sm" onChange={handleDiscount} />
          {discountError && <span className="text-red-500 block text-center overflow-hidden">{discountError}</span>}
        </div>
        <div className="my-5">
          <label htmlFor="color" className="font-semibold my-1">
            Color
          </label>
          <input placeholder="Color" type="text" id="color" className="placeholder:text-base block rounded border p-2 text-xl flex-1 max-w-[500px] focus:outline-none shadow-sm" onChange={handleColor} />
          {colorError && <span className="text-red-500 block text-center">{colorError}</span>}
        </div>
        <button type="submit" className="rounded uppercase shadow-sm font-semibold text-xl bg-[var(--secondary-color)] text-white p-4 w-full hover:bg-black ease-500" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
