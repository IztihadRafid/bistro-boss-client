import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-full bg-orange-500">
                <ul className="menu">
                    <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>         
        </div>
    );
};

export default Dashboard;