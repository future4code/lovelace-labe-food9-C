import { useHistory } from "react-router"
import { useLayoutEffect } from "react"
import { goToLogin} from "../routes/coordinator"

const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goToLogin(history)
        }
    })
}

export default useProtectedPage