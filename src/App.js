import './components/Categories/categories.scss'
import Home from "./routes/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Shop_component from "./routes/shop/Shop_component";


const App = () => {

    return (
        <Routes>
            <Route element={<Navigation/>} path='/'>
                <Route element={<Home/>} index/>
                <Route element={<Shop_component/>} path='shop'/>
                <Route element={<Authentication/>} path='auth'/>
            </Route>
        </Routes>
    );
}

export default App;
