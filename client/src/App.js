import { Component } from "react";

import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

import * as PostServices from "./Services/PostServices";

import Header from "./Components/Header/Header";
import Menu from "./Components/Menu";
import Main from "./Components/Main";

import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

import Footer from "./Components/Footer/Footer";
import style from "./App.module.css";

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  componentDidMount() {
    PostServices.getAll().then((posts) => {
      this.setState({ posts });
    });
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find((x) => x.id == this.state.selectedPost)];
    }
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick} />

          <Switch>
            <Route path="/" exact>
              <Main posts={this.getPosts()} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
