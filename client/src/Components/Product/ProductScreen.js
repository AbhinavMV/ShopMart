import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/ducks/cartReducer";
import { getProduct } from "../../redux/ducks/productReducer";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme, props) => ({
  root: {
    padding: theme.spacing(2),
  },
  img: {
    display: "block",
    height: "30em",
    width: "30em",
    [theme.breakpoints.down("sm")]: {
      height: "25em",
      width: "25em",
    },
    objectFit: "contain",
    margin: "auto",
  },
  product: {
    width: "100%",
    maxWidth: 300,
    padding: theme.spacing(2),
  },
  qty: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn: {
    marginLeft: "auto",
  },
  summary: {
    width: "100%",
    minWidth: 200,
    maxWidth: 300,
    padding: theme.spacing(2),
  },
}));

const ProductPage = (props) => {
  const { id } = props.match.params;
  const { product } = useSelector((state) => state.product);
  const [qty, setQty] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();

  const addItemHandler = () => {
    let temp = { ...product, qty };
    dispatch(addToCart(temp));
  };

  useEffect(() => {
    dispatch(getProduct(id));
    // eslint-disable-next-line
  }, [dispatch]);
  console.log(product);

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="flex-start"
      className={classes.root}
    >
      {/* <Grid item className={classes.img} component="img" xs={12} sm={4} /> */}
      <Grid item xs={12} sm={5}>
        <img className={classes.img} src={product.image} alt={product.title} />
      </Grid>
      <Grid item container direction="column" xs sm={4}>
        <Paper className={classes.product}>
          <Typography variant="h5">{product.title}</Typography>
          <Typography variant="h6">{`Price ${product.price}`}</Typography>
          <Typography variant="subtitle1">{product.description}</Typography>
        </Paper>
      </Grid>
      <Grid item container direction="column" xs sm={3}>
        <Paper className={classes.summary}>
          <Typography variant="h5">Price: Rs.{product.price}</Typography>
          <Typography variant="h6">Status: In Stock</Typography>
          <div className={classes.qty}>
            <IconButton onClick={() => (qty > 1 ? setQty(qty - 1) : qty)}>
              <RemoveIcon size="small" />
            </IconButton>
            <Typography variant="h6">{qty}</Typography>
            <IconButton onClick={() => setQty(qty + 1)}>
              <AddIcon size="small" />
            </IconButton>
            <Button
              className={classes.btn}
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => addItemHandler()}
            >
              Add to Cart
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
