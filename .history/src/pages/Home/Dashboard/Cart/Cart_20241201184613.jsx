import useCart from "../../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price, 0 )
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-4xl">Items: {cart.length}</h1>
                <h1 className="text-4xl">Items: {totalPrice}</h1>
                <button className="btn btn-primary">Pay</button>
            </div>
        </div>
    );
};

export default Cart;