import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import accounting from "accounting";/* 6 */
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import{useStateValue} from "../StateProvider";/* 46 */
import {actionTypes} from "../reducer";/* 47 */

const useStyles = makeStyles((theme) => ({
 root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions:{/* 22 */
      display:"flex",
      justifyContent:"space-between",
      textAlign:"center"
  },
  cardRating:{/* 22 */
      display:"flex",
  }
}));

export default function CheckoutCard({product : {id,name,productType, image,price,rating,description}}) {
  const classes = useStyles();
   const [{basket}, dispatch]= useStateValue() /* 48 */
   const [expanded, setExpanded] = React.useState(false); 

   const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 
  const removeItem =()=>dispatch({ /* 49 */
    type:actionTypes.REMOVE_ITEM,/* 50 */
    id:id,
  })

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={/* 1 */
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
            
          >
            {accounting.formatMoney(price, "€")} {/* 7 */}
          </Typography>
        }
        
        title={name}/* 2 */
        subheader="En Stock"
      />
      <CardMedia
        className={classes.media}
        /* 3 */image={image}
        title={name}
      />
     
      <CardActions disableSpacing className={classes.cardActions}>{/* 21 */}
        <div className={classes.cardRating}>
       {/* 5 */}{Array(rating) 
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
          </div>
          <IconButton fontSize="large" onClick={removeItem}>{/* 45 */}
                <DeleteIcon/>{/* 20 */}
          </IconButton>
     
      </CardActions>
      
    </Card>
  );
}