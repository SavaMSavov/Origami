import { Component } from "react";

import * as PostServices from "./Services/PostServices";

import Header from "./Components/Header/Header";
import Menu from "./Components/Menu";
import Main from "./Components/Main";
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
  }

  componentDidMount() {
    PostServices.getAll().then((posts) => {
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu />
          <Main posts={this.state.posts} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
