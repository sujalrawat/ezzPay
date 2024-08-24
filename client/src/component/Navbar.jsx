
import {Link} from "react-router-dom"
export default function Navbar(){
    return (
        <div className="bg-[#131921] h-16 flex justify-between font-sans fixed w-full top-0 left-0 z-10">
            <Link to="/"><h2 className="text-white text-3xl p-2">ezzPay</h2></Link>
            <div className="btn mt-2 ">
                <Link to="/signup"><button className="text-white px-3 py-2  text-xl rounded-md  hover:bg-white hover:text-[#131921]">Sign up</button></Link>
               <Link to="/signin"> <button className="text-white px-3 py-2 mr-3 text-xl rounded-md  hover:bg-white hover:text-[#131921]">Sign in</button></Link>
            </div>
        </div>
    )
}