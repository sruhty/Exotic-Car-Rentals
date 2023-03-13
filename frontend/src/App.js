import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./Services/store"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import DefaultLayout from "./Components";
import 'react-widgets/dist/css/react-widgets.css';
import {checkingAuth} from "./Services/actions/auth";
import {SearchBox} from "./Layout/SearchBox";
import HeaderWrapper from "./Layout/HeaderWrapper";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/antd.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentWillMount() {
    await checkingAuth();
  }

  render() {
    return (
        <Provider store={store}>
          <Router>
              <SearchBox {...this.props}/>
              <HeaderWrapper {...this.props}/>
              <Header {...this.props}/>
              <Switch>
              <Route  path="/" name="Home" component={DefaultLayout} {...this.props}/>
              </Switch>
              <Footer/>
          </Router>
        </Provider>
    );
  }
}

export default App;


