import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure()
    const {data: cart = []} = useQuery({   //data made custom name cart and [] is default value
        queryKey: ['cart'],
        queryFn: async ()=>{
            const res= await axiosSecure.get('/cart');
            return res.data
        }
    })
    return [cart]
};

export default useCart;