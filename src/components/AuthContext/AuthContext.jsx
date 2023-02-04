import React, { useContext, createContext, useState } from 'react'
import { ProductData } from '../Home/ProductData';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useState([])

    const handleFilter = (data) => {
        const newCart = ProductData.filter((product) => product.id === data);
        const [{ id, productImg, productCat, productName, productPrice }] = newCart;
        setCart([...cart, { id, productImg, productCat, productName, productPrice }]);
    }

    const handleDelete = (data) => {
        const newCart = cart.filter((product) => product.id !== data);
        setCart(newCart);
    }


    return <AuthContext.Provider value={{ show, setShow, cart, setCart, handleFilter, handleDelete }}>
        {children}
    </AuthContext.Provider>
}


export default function useAuthContext() {
    return useContext(AuthContext);
}