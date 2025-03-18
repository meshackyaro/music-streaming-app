import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";
import MusicList from "../pages/musicList/MusicList";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/music-list",
        element: <MusicList/>
    }
]