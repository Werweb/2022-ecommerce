
import React from 'react'
import accounting from "accounting"
import { Button, makeStyles } from '@material-ui/core'
import { getBasketTotal } from '../reducer' /* 57 */
import{useStateValue} from "../StateProvider";/* 59 */
import { Link } from "react-router-dom";/* 102 */


const useStyles = makeStyles((theme)=>({/* 25 */
root:{
    dispaly:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:"20vh"
},
button:{
    marginTop:"2rem"
}

}))

const Total = () => {
    const classes = useStyles() /* 26 */
    const [{basket}, dispatch]= useStateValue() /* 60 */
  return (
    <div className={classes.root}>
        <h5>Total items:{basket?.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>{/* 58 */}
        {/* 24 */}<Button
        component={Link} /* 103 */
        to='/checkout'
         calssName={classes.button} 
         variant="contained"
          color="secondary">Pagar</Button>
    </div>
  )
}

export default Total