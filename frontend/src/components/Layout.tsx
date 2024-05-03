import { Outlet } from "react-router-dom";
import Header from './Header';
import { Toaster } from "react-hot-toast";
const Layout = () => {
return (
<div>
    <Toaster />
    <Header />
    <div className="min-h-[1000px] big-white dark:bg-gray-900"></div>
    <Outlet />
</div>
);
};

export default Layout;