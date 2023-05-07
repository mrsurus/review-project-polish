import AddSevice from "../../Pages/Components/AddService/AddSevice";
import Allservice from "../../Pages/Components/Allservices/Allservice";
import Blog from "../../Pages/Components/Blog/Blog";
import FoodDetails from "../../Pages/Components/FoodDetails/FoodDetails";
import Myreview from "../../Pages/Components/MyReview/Myreview";
import UpdateReview from "../../Pages/Components/UpdateReview/UpdateReview";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
                path:'/allservice',
                element: <Allservice></Allservice>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({params})=> fetch(`https://review-project-polish-server.vercel.app/reviews/${params.id}`)
            },
            {
                path:'/fooddetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://review-project-polish-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreview',
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddSevice></AddSevice></PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;