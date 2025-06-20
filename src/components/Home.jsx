import { useState } from "react"

const Home=()=>{
const model={
    title:"",
    price:"",
    discount:"",
    description:""
}
const [product,setProduct]=useState(model)
const [totalProducts,setTotalProducts]= useState([])


const handleProduct=(e)=>{
   const input = e.target
   const name = input.name
   const value = input.value
   setProduct({
    ...product,
    [name] : value
   })
}

const createProduct=(e)=>{
    e.preventDefault()
    setTotalProducts([
        ...totalProducts,
        product
    ])
    console.log(totalProducts)
}

    return(
        <div className="bg-gray-500 h-screen flex gap-2 p-2 justify-center items-center">
            <div className="bg-white p-4 w-8/12">
            <h1 className="text-3xl font-semibold text-center mb-3 text-blue-500">Create your Product Here</h1>
            {JSON.stringify(product)}
            <form onSubmit={createProduct}
            className="space-y-3">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Title:</label>
                    <input type="text"
                     value={product.title}
                    onChange={handleProduct}
                    name="title"
                    placeholder="enter product title"
                    className="border rounded border-gray-500 py-3 px-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Price:</label>
                    <input type="text"
                    value={product.price}
                    onChange={handleProduct}
                    name="price"
                    placeholder="enter product title"
                    className="border rounded border-gray-500 py-3 px-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Discount:</label>
                    <input type="text"
                    value={product.discount}
                      onChange={handleProduct}
                      name="discount"
                    placeholder="enter product title"
                    className="border rounded border-gray-500 py-3 px-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Description:</label>
                    <input type="text"
                    value={product.description}
                    onChange={handleProduct}
                    name="description"
                    placeholder="enter product title"
                    className="border rounded border-gray-500 py-3 px-2"
                    />
                </div>
                <button className="bg-green-500 w-full text-white py-3 font-semibold">Submit Product Details</button>
            </form>

            </div>

          
            
        </div>
    )
}

export default Home