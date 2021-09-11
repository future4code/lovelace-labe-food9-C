import { Button } from "@material-ui/core"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { HeaderAll } from "../../constants/constants/Header"
import { BASE_URL } from "../../constants/constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestDetail from "../../hooks/useRequestDetail"
import { goToHome } from "../../routes/coordinator"
import { CategoriaNome, ContainerCards, ContainerGeral, ContainerImage, DescricaoProduto, EndText, FreteText, NomeProduto, PrecoProduto, RestauranteNome, Separador, TempoEntregaTexto, TypeOne } from "./StyleRestauranteDetailPage"

export const RestaurantDetailPage = () => {
    useProtectedPage()
    const history= useHistory()
    const params = useParams()
    
    const detailsRestaurant = useRequestDetail({}, `${BASE_URL}/fourFoodC/restaurants/${params.restaurantId}`)
    console.log(detailsRestaurant)
    



    return (
        <div>
            <HeaderAll > 
                <ArrowBackIosIcon onClick={() => goToHome(history)}/>
                <p>Restaurante</p>
            </HeaderAll>
            <ContainerGeral>
                <div>
                    <ContainerImage src={detailsRestaurant.logoUrl} alt='Logo Restaurante' />
                </div>


                <div>
                    <RestauranteNome>
                        {detailsRestaurant.name && detailsRestaurant.name}
                    </RestauranteNome>
                </div>

                <div>
                    <CategoriaNome>{detailsRestaurant.category && detailsRestaurant.category}</CategoriaNome>
                </div>
                <div>
                    <TempoEntregaTexto>{detailsRestaurant.deliveryTime && detailsRestaurant.deliveryTime}-min</TempoEntregaTexto>
                    <FreteText>R${detailsRestaurant.shipping && detailsRestaurant.shipping},00</FreteText>
                </div>
                <div>
                        <EndText>{detailsRestaurant.address && detailsRestaurant.address}</EndText>
                </div >
                     <TypeOne>Refeições</TypeOne>
                     <Separador/>

                   <ContainerCards>
                {/* <ImagemCards src={detailsRestaurant.products && detailsRestaurant.products[0].photoUrl} alt="Foto do rango"/> */}
                <div>
                <NomeProduto>{detailsRestaurant.products && detailsRestaurant.products[0].name}
                </NomeProduto>
                </div>
                <DescricaoProduto>{detailsRestaurant.products && detailsRestaurant.products[0].description}
                </DescricaoProduto>
                <div>
                <PrecoProduto>R$ {detailsRestaurant.products && detailsRestaurant.products[0].price}</PrecoProduto>
                </div>
                   </ContainerCards>
                   <ContainerCards>
                {/* <ImagemCards src={detailsRestaurant.products && detailsRestaurant.products[0].photoUrl} alt="Foto do rango"/> */}
                <div>
                <NomeProduto>{detailsRestaurant.products && detailsRestaurant.products[2].name}
                </NomeProduto>
                </div>
                <DescricaoProduto>{detailsRestaurant.products && detailsRestaurant.products[2].description}
                </DescricaoProduto>
                <div>
                <PrecoProduto>R$ {detailsRestaurant.products && detailsRestaurant.products[2].price}</PrecoProduto>
                </div>
                   </ContainerCards>
                   <ContainerCards>
                {/* <ImagemCards src={detailsRestaurant.products && detailsRestaurant.products[0].photoUrl} alt="Foto do rango"/> */}
                <div>
                <NomeProduto>{detailsRestaurant.products && detailsRestaurant.products[7].name}
                </NomeProduto>
                </div>
                <DescricaoProduto>{detailsRestaurant.products && detailsRestaurant.products[7].description}
                </DescricaoProduto>
                <div>
                <PrecoProduto>R$ {detailsRestaurant.products && detailsRestaurant.products[7].price}</PrecoProduto>
                </div>
                   </ContainerCards>
                     
                   <TypeOne>Bebidas</TypeOne>
                   <Separador/>
                   <ContainerCards>
                {/* <ImagemCards src={detailsRestaurant.products && detailsRestaurant.products[0].photoUrl} alt="Foto do rango"/> */}
                <div>
                <NomeProduto>{detailsRestaurant.products && detailsRestaurant.products[3].name}
                </NomeProduto>
                </div>
                <DescricaoProduto>{detailsRestaurant.products && detailsRestaurant.products[3].description}
                </DescricaoProduto>
                <div>
                <PrecoProduto>R$ {detailsRestaurant.products && detailsRestaurant.products[3].price}</PrecoProduto>
                </div>
                <div>
                <Button>Adicionar</Button>
                </div>
                   </ContainerCards>

            </ContainerGeral >

        </div >


    )

}


export default RestaurantDetailPage

