import useCart from "../../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl">Items: {cart.length}</h1>
                <h1 className="text-4xl">Items: {totalPrice}</h1>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map(item=> <tr key={item._id}>
                                <th>
                                   #
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                       
                       
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Cart;