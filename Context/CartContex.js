    import { createContext, useContext, useState } from "react";

    const CartContex = createContext()

    export const  useMyCart = ()=>{
        return useContext(CartContex)
    }


    export const MyCartProvider = ({ children }) => {

        const [cart, setCart] = useState([])

        const obj = {
            cart,
            setCart

        }



        return (

            <CartContex.Provider value={obj}>
                {children}
            </CartContex.Provider>
        )



    }