
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './features/Home/Home'

function Index(){
  return (
      <div>
        <button><Link to="/login">Go To Login</Link></button>
        
      </div>     
)}
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Home' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}