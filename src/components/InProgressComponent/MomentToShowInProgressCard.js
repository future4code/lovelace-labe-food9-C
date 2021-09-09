import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants/urls';

const MomentToShowInProgressCard =(props)=>{

    const token = localStorage.getItem('token')
    
    const getTheActiveOrders=()=>{
        axios.get(`${BASE_URL}/active-order`, {
            headers:{
                auth:token
            }
        }).then((response)=>{
            console.log(response.data)

        }).catch((error)=>{
            console.log(error.response)
        })

    }
    
    return(
        <div>

        </div>
    );
};
export default MomentToShowInProgressCard;