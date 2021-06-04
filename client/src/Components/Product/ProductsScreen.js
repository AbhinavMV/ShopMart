import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import ProductItem from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ducks/productsReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  spinner: {
    margin: "auto",
    marginTop: "50%",
  },
}));

const Products = () => {
  const classes = useStyles();
  const { loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container className={classes.root} fixed>
      <Grid
        container
        spacing={2}
        justify="flex-start"
        alignItems="center"
        alignContent="center"
      >
        {loading ? (
          <CircularProgress className={classes.spinner} />
        ) : (
          products.map((obj) => <ProductItem obj={obj} key={obj.id} />)
        )}
      </Grid>
    </Container>
    // </div>
  );
};

export default Products;
