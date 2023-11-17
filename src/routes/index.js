// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";

//Public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/@:nickname', component: Profile, layout: HeaderOnly}
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};