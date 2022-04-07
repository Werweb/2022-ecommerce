import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';
import accounting from "accounting";/* 6 */
import { Box } from '@material-ui/core';

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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product({product : {id,name,productType, image,price,rating,description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <CardContent>
        <Typography fontWeight="fontWeightBold" variant='body2' color='textSecondary' component='p'>
          <Box fontWeight="fontWeightBold"  fontSize={16}>{/* 17 */}
       {productType}
      </Box>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart' /* onClick={addToBasket} */>
          <AddShoppingCart fontSize='large' />{/* 4 */}
       {/* 5 */}{Array(rating) 
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           {description}
          </Typography>
          
         
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
