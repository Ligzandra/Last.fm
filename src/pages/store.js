import React, { createContext, useState } from "react";
export const GlobalState = createContext();

function Wrapper({ children }) {
    let [email, setEmail] = useState();
    let [name, setName] = useState("Login");
    let [prodname, setProdName] = useState();
    let [products, setProducts] = useState([]);
    let [price, setPrice] = useState();
    let [image, setImage] = useState();
    let [count, setCount]=useState("");

    let state = {
        loggedEmail: [email, setEmail],
        showName: [name, setName],
        showProd: [prodname, setProdName],
        myProducts: [products, setProducts],
        myPrice: [price, setPrice],
        myImage: [image, setImage],
        myCount:[count, setCount]
    };
    return <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>;
}
export default Wrapper;
