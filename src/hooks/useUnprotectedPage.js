import { useHistory } from "react-router"
import { useLayoutEffect } from "react"
import { goToHome } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToHome(history)
        }
    },)
}

export default useUnprotectedPage