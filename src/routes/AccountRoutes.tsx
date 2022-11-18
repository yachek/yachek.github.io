import {Outlet, RouteObject} from "react-router-dom";
import {WithAuth} from "../components/auth/protectingComponent";
import AccountComponent from "../components/profile/accountComponent";
import SettingsComponent from "../components/settings/settingsComponent";

const MinimalLayout = () => (
    <>
        <Outlet />
    </>
);

export const AccountRoutes: RouteObject = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'profile',
            element: <WithAuth><AccountComponent/></WithAuth>
        },
        {
            path: 'settings',
            element: <WithAuth><SettingsComponent/></WithAuth>
        }
    ]
}
