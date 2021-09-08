import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"


export const HomePage = () => {
    useProtectedPage()

    return (
        <div>HomePage</div>
    )
}

export default HomePage