import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import NotesCard from "../component/NotesCard";

export default function HomePage(){
    return (
        <div>
            <Navbar/>
            <div className="flex">
            <NotesCard/>
            <NotesCard/>
            <NotesCard/>
            </div>
            <Footer/>
        </div>
    )
}