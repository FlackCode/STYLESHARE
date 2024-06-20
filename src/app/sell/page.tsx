"use client"

import { useState } from "react"

import { BsCloudUpload } from 'react-icons/bs'

export default function Sell() {
    const [selectedSize, setSelectedSize] = useState<string>("")

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const formDataObject = Object.fromEntries(formData.entries())
        console.log(formDataObject)
    }

    return (
        <main className="header flex flex-col justify-center items-center px-2 py-16">
            <div className="flex flex-col justify-center items-center gap-8 max-w-xl w-full">
                <h1 className="xsm:text-3xl md:text-5xl font-bold text-center">SELL A PRODUCT</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="brand"
                        placeholder="Brand"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        rows={4}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    />
                    <div className="flex gap-2 items-center">
                        <h1 className="font-bold">Size: </h1>
                        <button
                            type="button"
                            className={`border border-black py-2 px-4 xsm:text-xs md:text-sm focus:outline-none ${selectedSize === "OS" ? "bg-black text-white" : ""}`}
                            onClick={() => handleSizeSelect("OS")}
                        >
                            OS
                        </button>
                        <button
                            type="button"
                            className={`border border-black py-2 px-4 xsm:text-xs md:text-sm focus:outline-none ${selectedSize === "S" ? "bg-black text-white" : ""}`}
                            onClick={() => handleSizeSelect("S")}
                        >
                            S
                        </button>
                        <button
                            type="button"
                            className={`border border-black py-2 px-4 xsm:text-xs md:text-sm focus:outline-none ${selectedSize === "M" ? "bg-black text-white" : ""}`}
                            onClick={() => handleSizeSelect("M")}
                        >
                            M
                        </button>
                        <button
                            type="button"
                            className={`border border-black py-2 px-4 xsm:text-xs md:text-sm focus:outline-none ${selectedSize === "L" ? "bg-black text-white" : ""}`}
                            onClick={() => handleSizeSelect("L")}
                        >
                            L
                        </button>
                        <button
                            type="button"
                            className={`border border-black py-2 px-4 xsm:text-xs md:text-sm focus:outline-none ${selectedSize === "XL" ? "bg-black text-white" : ""}`}
                            onClick={() => handleSizeSelect("XL")}
                        >
                            XL
                        </button>
                    </div>
                    <select
                        name="category"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Headwear">Headwear</option>
                        <option value="Tops">Tops</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Footwear">Footwear</option>
                    </select>
                    <select
                        name="gender"
                        className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                    <label className="border border-black px-4 py-2 xsm:text-xs md:text-sm focus:outline-none cursor-pointer text-center flex flex-col items-center justify-center gap-2">
                        Upload Image
                        <BsCloudUpload className="w-6 h-6"/>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="hidden"
                        />
                    </label>
                    <button
                        type="submit"
                        className="border border-black py-4 font-bold xsm:text-xs md:text-sm transition-all duration-300 hover:bg-black hover:text-white"
                    >
                        SELL PRODUCT
                    </button>
                </form>
            </div>
        </main>
    )
}