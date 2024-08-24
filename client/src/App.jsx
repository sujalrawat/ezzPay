import { Routes,Route,Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import ProductPage from './pages/ProductPage';


function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/signin" element={<SignInPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
    </Routes>
  )
}

export default App
