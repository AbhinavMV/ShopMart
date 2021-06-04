import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/ducks/cartReducer";

import { ShortenString } from "../../utils/ShortenString";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  media: {
    display: "block",
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("sm")]: {
      height: "15em",
      width: "15em",
    },
    objectFit: "contain",
    margin: "auto",
  },
  footer: {
    justify: "flex-start",
    alignItems: "flex-end",
    marginLeft: 10,
    // display: "flex",
  },
  cartButton: {
    marginLeft: "auto !important",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const ProductItem = ({ obj }) => {
  const { id, image, title, description, price } = obj;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <Link className={classes.link} to={`/products/${id}`}>
            <CardMedia
              alt={title}
              className={classes.media}
              component="img"
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {ShortenString(title, 18)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {ShortenString(description, 50)}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={classes.footer}>
          <Typography variant="h6" component="h6">
            {`Rs.${price}`}
          </Typography>
          <Button
            size="small"
            color="primary"
            variant="contained"
            className={classes.cartButton}
            onClick={() => dispatch(addToCart(obj))}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
