import React, { Component } from "react";
import { getWeb3 } from "./MetaMask";

class App extends Component {
  async componentDidMount() {
    const web3 = await getWeb3();
    console.log(web3, 'checkkk');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default App;
