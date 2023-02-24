import Allservice from "../../Pages/Components/Allservices/Allservice";
import FoodDetails from "../../Pages/Components/FoodDetails/FoodDetails";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/fooddetails',
                element: <FoodDetails></FoodDetails>
            },
            {
                path:'/allservice',
                element: <Allservice></Allservice>
            }
        ]
    }
])

export default router;