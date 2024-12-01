import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-full bg-orange-500">
                <ul className="menu p-4">
                    <li>  
                        <NavLink to='/dashboard/cart'><FiShoppingCart></FiShoppingCart>My Cart</NavLink>
                    </li>
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