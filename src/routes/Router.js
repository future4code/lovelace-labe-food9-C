import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import CartPage from "../pages/CartPage/CartPage"
import SearchRestaurantPage from "../pages/SearchRestaurantPage/SearchRestaurantPage"
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage"
import AdressPage from "../pages/AdressPage/AdressPage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import RestaurantDetailPage from "../pages/RestaurantDetailPage.js/RestaurantDetailPage"

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

                 <Route exact path={"/restaurants/:restaurantId"}>
                     <RestaurantDetailPage/>
                 </Route>

                 <Route exact path={"/carrinho"}>
                     <CartPage />
                 </Route>

                 <Route exact path={"/historico/pedidos"}>
                     <OrderHistoryPage />
                 </Route>

                 <Route exact path={"/editar/endereco"}>
                     <AdressPage />
                 </Route>
                 
                 <Route exact path={"/editar/usuario"}>
                     <EditUserPage />
                 </Route>

                 
                 <Route exact path={"/pesquisar/restaurante"}>
                     <SearchRestaurantPage />
                 </Route>
             </Switch>
        </BrowserRouter>
    )
}

export default Router