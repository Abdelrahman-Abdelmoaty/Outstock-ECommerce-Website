"use client";
import { ChangeEvent, useRef, useState, MouseEvent } from "react";
import "@src/app/admin/admin.css";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import Input from "@src/components/Form/Input";
import axios from "axios";
export default function AddProduct() {
  const methods = useForm();
  const imagesInput = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImagesInputBtn = (e: MouseEvent<HTMLDivElement>) => {
    imagesInput.current?.click();
  };
  const handleImagesInput = (e: ChangeEvent<HTMLInputElement>) => {
    const imagesUrls = Array.from(e.target.files || []).map((img) => URL.createObjectURL(img));
    setImages(imagesUrls);
  };
  const onSubmit = methods.handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    const imgs = imagesInput.current?.files;
    if (imgs) {
      for (let i = 0; i < imgs.length; i++) {
        formData.append("images[]", imgs[i]);
      }
    }
    console.log(formData);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("File upload successful!");
      } else {
        console.error("File upload failed.");
      }
    } catch (error) {
      console.error("Error occurred while uploading the file:", error);
    }
    setImages([]);
    methods.reset();
  });

  return (
    <div className="w-full md:w-[70%] mx-auto py-12 bg-white p-10 my-10">
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <input type="file" multiple accept="image/*" className="hidden" name="imagesUrls" onChange={handleImagesInput} ref={imagesInput} />
          <div className="w-full p-5 bg-[#f5f5f5]">
            <div className="w-full h-full py-10 border-2 border-dashed border-[#b7b6b6] flex-center text-[#b7b6b6] text-6xl font-light cursor-pointer" onClick={handleImagesInputBtn}>
              {images.length > 0 ? (
                <>
                  {images.map((image, index) => (
                    <div className="w-48 h-52 m-4 float-left" key={index}>
                      <img src={image} alt="" className="img-fill" />
                    </div>
                  ))}
                </>
              ) : (
                "+"
              )}
            </div>
          </div>
          <Input label="name" name="name" type="text" />
          <Input label="price" name="price" type="number" />
          <Input label="quantity" name="quantity" type="number" />
          <Input label="category id" name="categoryId" type="number" />
          <Input label="color id" name="colorId" type="number" />
          <button type="button" onClick={onSubmit} className="animate-btn w-full p-4 border-2 border-black bg-white uppercase font-semibold">
            <span>Add</span>
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
