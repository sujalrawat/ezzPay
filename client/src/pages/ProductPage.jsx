import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


export default function ProductPage() {
  return (
    <div className="flex justify-center items-center flex-col mt-28 w-full h-full ">
        <Navbar/>
   
    <div className=" bg-white w-80  rounded-md flex items-center justify-center flex-col">
        <div className="w-full pl-10 bg-slate-100">
        <img className="h-72 mt-2 border-2 " src="https://farm4.staticflickr.com/3789/10177514664_0ff9a53cf8_z.jpg" alt="notes" />
        </div>
        <h2 className="text-xl mt-2">C++</h2>
        <p className="text-sm w-40 text-center">Well structured, easy to unserstand notes</p>
        <p className="mb-2 font-bold text-2xl">$4.99</p>
    </div>
    <div className="flex justify-center w-80 ">
    <button className="bg-[#131921] text-white p-5 text-center mt-2 w-full rounded-md text-xl">
        Buy Now
    </button>
    </div>
    <Footer/>
    </div>
  )
}
