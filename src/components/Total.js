import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import accounting from "accounting"
import { Button, makeStyles } from '@material-ui/core'


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
  return (
    <div className={classes.root}>
        <h5>Totla items:3</h5>
        <h5>{accounting.formatMoney(50, "€")}</h5>{/* 23 */}
        {/* 24 */}<Button calssName={classes.button} variant="contained" color="secondary">Pagar</Button>
    </div>
  )
}

export default Total