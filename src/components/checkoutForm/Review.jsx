import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { useStateValue } from "../../StateProvider";/* 120 */
import { getBasketTotal } from "../../reducer";/* 120 */
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();/* 121 */
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Resumen del pedido
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (/* 124 */
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText primary={product.name} secondary={`Qty : ${1}`} />
            <Typography variant='body2'>
              {accounting.formatMoney(product.price, "€")}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary='Total' />{/* 123 */}
          <Typography variant='subtitle1' style={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket), "€")}{/* 122 */} {/* 121 */}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;