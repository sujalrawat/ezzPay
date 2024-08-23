export default function Navbar(){
    return (
        <div className="bg-[#131921] h-16 flex justify-between font-sans fixed w-full top-0 left-0 z-10">
            <h2 className="text-white text-3xl p-2">ezzPay</h2>
            <div className="btn mt-2 ">
                <button className="text-white px-3 py-2  text-xl rounded-md  hover:bg-white hover:text-[#131921]">Sign up</button>
                <button className="text-white px-3 py-2 mr-3 text-xl rounded-md  hover:bg-white hover:text-[#131921]">Sign in</button>
            </div>
        </div>
    )
}