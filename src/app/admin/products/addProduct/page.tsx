"use client";
import { ChangeEvent, useRef, useState, MouseEvent } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import Input from "@src/components/Form/Input";
import axios from "axios";
import { addProductSchema } from "@src/lib/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAccessToken } from "@src/lib/utils";
export default function AddProduct() {
  const methods = useForm({ resolver: yupResolver(addProductSchema) });
  // const imagesInput = useRef<HTMLInputElement>(null);
  const [imagesState, setImages] = useState<string[]>([]);
  const imageInput = document.getElementById("filesupload") as HTMLInputElement;

  const handleImagesInputBtn = () => {
    // imagesInput.current?.click();
    imageInput?.click();
  };
  const handleImagesInput = (e: ChangeEvent<HTMLInputElement>) => {
    const imagesUrls = Array.from(e.target.files || []).map((img) => URL.createObjectURL(img));
    setImages(imagesUrls);
  };
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    const imgs = imageInput.files;
    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        formData.append("images[]", imgs[i]);
      }
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
    } catch (error) {
      throw error;
    }
    setImages([]);
    methods.reset();
  };

  return (
    <div className="res-w bg-white">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="w-[60%] mx-auto my-12">
            <input
              {...methods.register("images", {
                onChange: handleImagesInput,
              })}
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              id="filesupload"
            />
            <div className="w-full p-5 bg-[#f5f5f5]">
              <div className="py-10 border-2 border-dashed border-[#b7b6b6] flex-center text-[#b7b6b6] text-6xl font-light cursor-pointer" onClick={handleImagesInputBtn}>
                {imagesState.length > 0 ? (
                  <>
                    {imagesState.map((image, index) => (
                      <div className="max-w-xs m-4 float-left" key={index}>
                        <img src={image} alt="" className="img-fill" />
                      </div>
                    ))}
                  </>
                ) : (
                  "+"
                )}
              </div>
            </div>
            {methods.formState.errors.images && <p className="text-red-500">{methods.formState.errors.images.message}</p>}
            <Input label="name" name="name" type="text" />
            {methods.formState.errors.name && <p className="text-red-500">{methods.formState.errors.name.message}</p>}
            <Input label="price" name="price" type="number" />
            {methods.formState.errors.price && <p className="text-red-500">{methods.formState.errors.price.message}</p>}
            <Input label="quantity" name="quantity" type="number" />
            {methods.formState.errors.quantity && <p className="text-red-500">{methods.formState.errors.quantity.message}</p>}
            <Input label="category id" name="categoryId" type="number" />
            {methods.formState.errors.categoryId && <p className="text-red-500">{methods.formState.errors.categoryId.message}</p>}
            <Input label="color id" name="colorId" type="number" />
            {methods.formState.errors.colorId && <p className="text-red-500">{methods.formState.errors.colorId.message}</p>}{" "}
            <button type="submit" className="animate-btn w-full p-4 border-2 border-black bg-white uppercase font-semibold hover:border-[var(--secondary-color)]">
              <span>Add</span>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
