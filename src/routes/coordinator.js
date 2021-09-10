export const goToLogin = (history) => {
    history.push("/")

}

export const goToSignUp = (history) => {
    history.push("/cadastrar")

}

export const goBack = (history) => {
    history.goBack()

}

export const goToHome = (history) => {
    history.push("/home")

}

export const goToRegister = (history) => {
    history.push("/endereco")

}

export const goToOrderHistoryPage = (history) => {
    history.push("/historico/pedidos")
}

export const goToEditUserPage = (history) => {
    history.push("/editar/usuario")
}

export const goToEditAdressPage = (history) => {
    history.push("/editar/endereco")
}

export const goToRestDetail = (history, id) => {
        history.push(`/restaurants/${id}`)

}