import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import CartPage from '../pages/books/cart/CartPage';
import CheckoutPage from '../pages/books/CheckoutPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/orders",
                element: <div>Order</div>
            },
            {
                path: "/about",
                element: <div>about</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            }
        ]
    }
])

export default router;
