import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import productData from '../components/product-data'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"30px",
    padding:theme.spacing(4),/* 16 */
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
            productData.map(product =>(
               <Grid item xs={12} sm={6} md={3}>
           <Product key={product.id} product={product}/>
        </Grid> 
            ))
        }
        
     
      </Grid>
    </div>
  );
}
