import plus from "../assets/plusVector.svg";
import bro from "../assets/bro.svg";
import { useState } from "react";



export default function ShopPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shopDetails, setShopDetails] = useState({ name: "", category: "", contact: "" });
  const [products, setProducts] = useState([]);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const [uniqueShopLink, setUniqueShopLink] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails({ ...shopDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      ...shopDetails,
    };

    // Generate a unique shop link
    const shopLink = `https://example.com/shop/${shopDetails.name.toLowerCase().replace(/ /g, "-")}`;
    setUniqueShopLink(shopLink);

    // Update products and close modals
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
    setIsCongratsModalOpen(true);
    setShopDetails({ name: "", category: "", contact: "" }); // Reset form
  };

    return(
        <>
        {/* Show only if no products exist */}
        {products.length === 0 && (
        <div className="flex flex-col justify-between items-center gap-y-5">
            <img src={bro} alt="" className="w-[380px] mb-5"/>
            <div className="flex bg-[#3835ED] py-2 px-6 mt-6 gap-x-3 justify-between items-center cursor-pointer"
            onClick={() => setIsModalOpen(true)}>
                <img src={plus} alt="" className="w-5" />
                <p className="text-white font-semibold text[28px]">Create Shop</p>
            </div>
        </div>
        )}

         {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h2 className="text-lg font-bold mb-4">Create Shop</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Shop Name"
                value={shopDetails.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="dropdown"
                name="category"
                placeholder="Category"
                value={shopDetails.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={shopDetails.contact}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2"
                required
              />
              <button
                type="submit"
                className="bg-[#3835ED] text-white py-2 rounded-md font-bold"
              >
                Proceed
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-red-500 mt-3"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Congratulatory Modal */}
      {isCongratsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[400px] text-center">
            <h2 className="text-lg font-bold mb-4">Congratulations!</h2>
            <p className="text-gray-700 mb-4">
            A Unique URL has been created for your shop: Techfists
            </p>
            <a
              href={uniqueShopLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {uniqueShopLink}
            </a> <br />
            <button
              onClick={() => setIsCongratsModalOpen(false)}
              className="bg-[#3835ED] text-white py-2 px-4 mt-4 rounded-md font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Products Table */}
      {products.length > 0 && (
        <div className="mt-6 w-full max-w-4xl">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Code</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Contact</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 p-2">{product.id}</td>
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">#{}31</td>
                  <td className="border border-gray-300 p-2">{product.category}</td>
                  <td className="border border-gray-300 p-2">{product.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

        </>
    )
}