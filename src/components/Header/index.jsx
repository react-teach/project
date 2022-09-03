
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
  )



}