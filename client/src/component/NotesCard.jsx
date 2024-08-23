

function NotesCard() {
  return (
    <div className=" bg-white w-1/5 h-96 mt-36 ml-16 rounded-md flex items-center flex-col">
        <div className="w-full pl-10 bg-slate-100">
        <img className="h-72 mt-2 border-2 " src="https://farm4.staticflickr.com/3789/10177514664_0ff9a53cf8_z.jpg" alt="" />
        </div>
        <h2 className="text-xl mt-2">C++</h2>
        <p className="text-sm w-40 text-center">Well structured, easy to unserstand notes</p>
    </div>
  )
}

export default NotesCard