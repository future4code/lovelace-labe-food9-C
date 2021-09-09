import { useHistory } from "react-router"
import { useLayoutEffect } from "react"
<<<<<<< HEAD
import { goToSignUp } from "../routes/coordinator"
=======
import { goToHome } from "../routes/coordinator"
>>>>>>> 66327a77643150b5c88ae84e8e67dd9619979496


const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
<<<<<<< HEAD
            goToSignUp(history)
=======
            goToHome(history)
>>>>>>> 66327a77643150b5c88ae84e8e67dd9619979496
        }

    },[])

    },)

}

export default useUnprotectedPage