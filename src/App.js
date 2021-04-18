import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import Homepage from "./Pages/homepage/homepage.component";

import { Switch, Route, Link, Router } from "react-router-dom";
import ShopPage from "./Pages/shoppage/shop.component";
import Footer from "./components/footer/footer.component";
import ShopCategory from "./Pages/shopCategoryPage/shop-category.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/shop/:category">
          <ShopCategory />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
