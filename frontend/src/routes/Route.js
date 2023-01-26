import MainRoot from "../components/MainRoot";
import Add from "../pages/Add";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Elements from "../pages/Elements";
import Home from "../pages/Home/Home";

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"courses",
                element:<Courses/>
            },
            {
                path:"elements",
                element:<Elements/>
            }
        ]
    }
]