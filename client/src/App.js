import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/CartScreen";
import Products from "./Components/Product/ProductsScreen";
import ProductPage from "./Components/Product/ProductScreen";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/cart" exact component={Cart} />
        <Route>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>404 Error Not Found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
