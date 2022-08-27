import { useTheme } from "styled-components";
import {useMediaQuery} from "@mui/material/styles";

export default function Header(){
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return(

    <>
      {matches ? <h1>Mobile</h1> : <h1>Desktop</h1>}
    
    </>
  )



}