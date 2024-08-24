import { useState } from "react"
// import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

export default function LoginPage(){
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate()

    // async function handleSubmit(e){
    //     e.preventDefault()
    //     try{
    //         const respsonse = await axios.post("https://deploy-mern-beryl.vercel.app/login",{email,password},{withCredentials:true});
    //         console.log(respsonse)
    //         setEmail("")
    //         setPassword("")
    //         alert("Logged In")
    //         navigate("/home")
    //     }catch(err){
    //         console.log(err)
    //         alert("Invalid credentials")
    //     }
    // }

    return (
      <div>
        <Navbar/>
        <div className="flex justify-center mt-44">
        <div className="bg-white h-auto w-96 m-auto rounded-md text-center">
        <h2 className="text-[#131921] font-bold p-3 text-2xl">Sign In</h2>
        <form >
          <input className="bg-slate-300 rounded-md ml-8  m-3 outline-none text-[#131921] px-4 py-2 block w-80" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} required/>
          <input className="bg-slate-300 rounded-md ml-8  m-3 outline-none text-[#131921] px-4 py-2 block w-80" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password} required/>
          <button className="bg-[#131921] text-white px-4 py-2 rounded-md m-3" type="submit">Sign In</button>
        </form>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
