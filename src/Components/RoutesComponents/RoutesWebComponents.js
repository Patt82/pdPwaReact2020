import React from "react"
import { Route } from "react-router-dom"
import HomePages from "../../Pages/HomePages"
import LoginPages from "../../Pages/LoginPages"
import RegisterPages from "../../Pages/RegisterPages"
import ProductDetailPages from "../../Pages/ProductDetailPages"
import CheckoutPages from "../../Pages/CheckoutPages"


function RoutesWebComponents() {

    return (
        <>
            <Route path="/" exact component={HomePages} />
            <Route path="/login" exact component={LoginPages} />
            <Route path="/register" exact component={RegisterPages} />
            <Route path="/products/:id" exact component={ProductDetailPages} />
            <Route path="/checkout" exact component={CheckoutPages} />

        </>
    )

}

export default RoutesWebComponents