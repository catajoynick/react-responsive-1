import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Destinations from "./components/pages/Destinations";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
