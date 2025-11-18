import type { RoutePage } from "./types";
import About from "pages/About/About";
import Home from "pages/Home/Home";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";
import Clients from "pages/Clients/Clients";
import Facebook from "pages/Clients/components/Facebook/Facebook";
import Instagram from "pages/Clients/components/Instagram/Instagram";
import Linkedin from "pages/Clients/components/Linkedin/Linkedin";
import Lesson14 from "lessons/Lesson14/Lesson14";
import PageNotFound from "pages/PageNotFound/PageNotFound";

export const routesData: RoutePage[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/users", element: <Users /> },
    { path: "/users/user", element: <User /> },
    { path: "/clients", element: <Clients /> },
    { path: "/clients/facebook", element: <Facebook /> },
    { path: "/clients/instagram", element: <Instagram /> },
    { path: "/clients/linkedin", element: <Linkedin /> },
    { path: "/lesson14", element: <Lesson14 /> },
    { path: "*", element: <PageNotFound /> },
];
