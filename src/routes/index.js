// Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import routesConfig from "~/config/routes";

//Public routes
const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.profile, component: Profile, layout: HeaderOnly}
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};