import './App.css';
import Navbar from './Component/Navbar/Navbar'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCat from './Pages/ShopCat';
import Footer from './Component/Footer/Footer';
import API from './API_component/API_CRUD/API';
import Home from './Home/Home';
import Register from './Pages/Register';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home category={""} />} />
    <Route path='/shop' element={<Shop category={"shop"}/>} >
        <Route path='/shop/mens' element={<ShopCat category={"mens"}/>} />
        <Route path='/shop/womens' element={<ShopCat category={"womens"}/>} />
        <Route path='/shop/kids' element={<ShopCat category={"kids"}/>} />    
    </Route>
    <Route path='/api' element={<API category={"api"}/> } />
    <Route path='/register' element={<Register /> } />


    </Routes>    
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
