import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

// class app extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
