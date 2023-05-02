import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Page404 from "../pages/Page404";
import Post from "../pages/posts/Post";
import PostsLayout from "../pages/posts";
import Posts from "../pages/posts/Posts";
import PostNotFound from "../pages/posts/PostNotFound";
import AuthLayout from "../pages/Auth/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import PrivateRoute from "./PrivateRoute";
import { FetchData } from "./FetchData";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/fetch-data" element={<FetchData />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/posts" element={<PostsLayout />}>
                <Route index={true} element={<Posts />} />
                <Route path="/posts/:url/:id" element={<Post />} />
                <Route path="*" element={<PostNotFound />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<Page404 />} />
        </Routes>
    )
};

export default AppRoutes;
