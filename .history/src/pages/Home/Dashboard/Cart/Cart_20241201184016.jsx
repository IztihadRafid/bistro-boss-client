import useCart from "../../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    return (
        <div>
            <h1 className="text-6xl">Items: {cart.length}</h1>
        </div>
    );
};

export default Cart;