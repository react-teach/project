<<<<<<< HEAD
import React from 'react'
import AppButton from '../Buttons/AppButton'

function Header() {
  return (
<<<<<<< HEAD
    <div>Headerdsds</div>
=======
    <div>
      <h1>
      Header component</h1>
      <AppButton/>
      </div>
>>>>>>> origin/melikeoztekin
=======
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {ListItemText, ListItemButton, ListItemIcon} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/header";






export default function Header(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return(
   <>
    <AppbarContainer>
      <AppbarHeader>
        İnekle
      </AppbarHeader>
      <MyList type = "row">
        <ListItemText primary ="Anasayfa"/>
        <ListItemText primary ="Hakkımızda"/>
        <ListItemText primary ="İletişim"/>

    
      </MyList>
    </AppbarContainer>
      {matches ? <AppbarContainer/> : <AppbarHeader/>}
    
    </>
>>>>>>> c8a8ae34996a740dfb3b59ee6dc01deb22203221
  )



}