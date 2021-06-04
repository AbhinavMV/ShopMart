import {
  AppBar,
  Badge,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textDecoration: "none",
    marginBottom: 50,
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  cartSection: {
    display: "flex",
    marginLeft: "auto",
    paddingLeft: 50,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              ShopMart
            </Link>
          </Typography>

          {location.pathname !== "/cart" && (
            <div className={classes.cartSection}>
              <Badge badgeContent={cartItems.length}>
                <Link to="/cart" className={classes.link}>
                  <ShoppingCartIcon className={classes.cartIcon} />
                </Link>
              </Badge>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
