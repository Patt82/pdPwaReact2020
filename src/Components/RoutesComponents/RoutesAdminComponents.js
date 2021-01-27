import React from "react"
import { Route } from "react-router-dom"
import HomePages from "../../Pages/HomePages"

function RoutesAdminComponents() {

    return (
        <>
            <Route path="/" exact component={HomePages} />
        </>
    )

}

export default RoutesAdminComponents