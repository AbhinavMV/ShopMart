import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeFromCart, updateQty } from "../../redux/ducks/cartReducer";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  image: {
    display: "block",
    height: "10em",
    width: "10em",
    [theme.breakpoints.up("md")]: {
      height: "15em",
      width: "15em",
    },
    objectFit: "contain",
    margin: "auto",
  },
  bottom: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  qty: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginLeft: "auto",
  },
  remove: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const CardItem = ({ obj }) => {
  //   const { Id, img, Title, Description, Price } = obj;

  const classes = useStyles();
  // const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const qtyUpdate = (type) => {
    dispatch(updateQty(type, obj.id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.main}>
        <CardMedia
          className={classes.image}
          component="img"
          image={obj.image}
          title={obj.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1">
            {obj.title.substr(0, 20)}
          </Typography>
          <div className={classes.bottom}>
            <Typography variant="h6">Rs.{obj.price * obj.qty}</Typography>
            <div className={classes.qty}>
              <IconButton
                onClick={() => (obj.qty > 1 ? qtyUpdate("remove") : 1)}
              >
                {/* //setCount(count > 1 ? count - 1 : 1) */}
                <RemoveIcon size="small" />
              </IconButton>
              <Typography variant="h6">{obj.qty}</Typography>
              <IconButton onClick={() => qtyUpdate("add")}>
                <AddIcon size="small" />
              </IconButton>
            </div>
          </div>
          <div className={classes.remove}>
            <IconButton onClick={() => dispatch(removeFromCart(obj))}>
              <DeleteIcon size="small" />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
