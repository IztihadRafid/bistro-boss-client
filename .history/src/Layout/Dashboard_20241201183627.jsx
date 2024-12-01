import { FaCalendar, FaHome, FaList, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-full bg-orange-500">
                <ul className="menu p-4">
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FiShoppingCart></FiShoppingCart>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><FaRegStar />Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking'><FaList/>My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
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