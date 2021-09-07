import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import CartPage from "../pages/CartPage/CartPage"
import SearchRestaurantPage from "../pages/SearchRestaurantPage/SearchRestaurantPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"


const Router = () => {
    return (
        <BrowserRouter>
             <Switch>
                 <Route exact path={"/"}>
                     <LoginPage />
                 </Route>

                 <Route exact path={"/cadastrar"}>
                     <SignUpPage/>
                 </Route>

                 <Route exact path={"/endereco"}>
                     <RegisterPage />
                 </Route>

                 <Route exact path={"/home"}>
                     <HomePage />
                 </Route>
                 
                 <Route exact path={"/carrinho"}>
                     <CartPage />
                 </Route>

                 <Route exact path={"/perfil"}>
                     <ProfilePage />
                 </Route>

                 <Route exact path={"/pesquisar/restaurante"}>
                     <SearchRestaurantPage />
                 </Route>
             </Switch>
        </BrowserRouter>
    )
}

export default Router