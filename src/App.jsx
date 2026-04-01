
import './App.css';
import { Suspense, useState } from "react";
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Premium from './components/Premium';
import StatSection from './components/StatSection';
import Products from './Products';
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Footer from './components/Footer';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import ReadyTransform from './components/ReadyTransform';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchProductData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {

  const CardData = fetchProductData();
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <>
      <Navbar cartItems ={cartItems}></Navbar>
      <Banner></Banner>
      <StatSection />
      <Premium></Premium>
      {/* Buttons */}
      {/* <div className="mt-6 flex justify-center">
        <div className="flex items-center bg-white rounded-full shadow p-1">

          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md">
            Products
          </button>

          <button className="px-6 py-2 rounded-full text-gray-600 hover:text-purple-600 transition">
            Cart (2)
          </button>
        </div>
      </div> */}

      <div className="tabs tabs-box flex gap-1 justify-center bg-white w-70 mx-auto border border-gray-100 rounded-full py-2 mb-10  ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab btn ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow shadow-[#6107EC] text-white" : "bg-white shadow text-black "} rounded-full w-30 `}
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab btn ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow shadow-[#6107EC] text-white" : "bg-white shadow text-black "} rounded-full w-30 `}
          aria-label={`Cart (${cartItems.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      {activeTab === "products" &&
        <Cards CardData={CardData} cartItems ={cartItems} setCartItems={setCartItems} />
      }
      </Suspense>
            {activeTab === "cart" && <Cart cartItems={cartItems} setCartItems={setCartItems}/>}

      <Steps></Steps>
      <Pricing></Pricing>
      <ReadyTransform></ReadyTransform>
          <Footer />
<ToastContainer
  position="top-center"
  autoClose={1000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
/>
    </>
  )
};

export default App
