import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import NotesCard from "./component/NotesCard"


function App() {


  return (
    <div>
     <Navbar/>
     <div className="flex">
     <NotesCard />
     <NotesCard />
     <NotesCard />
     <NotesCard />
     </div>
     <Footer/>
    </div>
  )
}

export default App
