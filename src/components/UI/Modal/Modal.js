import React, { Component } from "react";
import "./Modal.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform:
              this.props.show > 0 ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show > 0 ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

// const modal = props => {
//   return (
//     <Aux>
//       <Backdrop show={props.show} clicked={props.modalClosed} />
//       <div
//         className="Modal"
//         style={{
//           transform: props.show > 0 ? "translateY(0)" : "translateY(-100vh)",
//           opacity: props.show > 0 ? "1" : "0"
//         }}
//       >
//         {props.children}
//       </div>
//     </Aux>
//   );
// };

// export default modal;
