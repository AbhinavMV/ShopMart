import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "1em",
    display: "flex",
    width: "100%",
    marginBottom: "1em",
  },
  button: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "none",
    },
  },
}));

const Cart = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getTotalPrice = () => {
    return cartItems.length !== 0
      ? Math.round(
          cartItems.reduce((acc, cur) => (acc += cur.price * cur.qty), 0)
        )
      : 0;
  };

  return (
    <Container fixed>
      <Typography variant="h3" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={2} justify="center">
        {cartItems.length ? (
          cartItems.map((obj) => <CardItem obj={obj} key={obj.id} />)
        ) : (
          <Typography gutterBottom variant="h5">
            Go back to <Link to="/">Shop</Link>
          </Typography>
        )}
      </Grid>
      <div className={classes.footer}>
        <Typography variant="h5">Total: Rs.{getTotalPrice()}</Typography>
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Proceed to checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
