import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-500">
                <ul className="menu">
                    <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
                </ul>
            </div>
            <div className="flex">
                <Outlet></Outlet>
            </div>         
        </div>
    );
};

export default Dashboard;