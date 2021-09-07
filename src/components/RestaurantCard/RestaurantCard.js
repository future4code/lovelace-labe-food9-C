import { Paper, Tab, Tabs } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PhoneIcon from '@material-ui/icons/Phone';
import React from "react"


export const RestaurantCard = () => {
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        return (
        <div>Footer

        <Paper >
        <Tabs
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<PhoneIcon/>} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Paper>

      </div>
    )
}

export default RestaurantCard