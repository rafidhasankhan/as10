import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import Privateroute from './Privateroute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Tourplan from './Tourplan/Tourplan';
import AdminPanale from './Components/AdminPanale/AdminPanale';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Privateroute path="/admin">
              <AdminPanale></AdminPanale>
            </Privateroute>
            <Privateroute path="/new-plan">
              <Tourplan></Tourplan>
            </Privateroute>
            <Privateroute path="/place-order/:packageid">
              <PlaceOrder></PlaceOrder>
            </Privateroute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </BrowserRouter>
    <Footer></Footer>
    </AuthProvider>
    </div>
  );
}

export default App;
