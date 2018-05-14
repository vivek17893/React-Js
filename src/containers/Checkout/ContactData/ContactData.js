import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axios from "../../../axios-orders.js";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Zip"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        }
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Country"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "fastest",
              displayValue: "Fastest"
            },
            {
              value: "cheapest",
              displayValue: "Cheapest"
            }
          ]
        },
        value: "",
        valid: true,
        validation: {}
      }
    },
    loading: false,
    formIsValid: false
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  orderHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({
          loading: false,
          purchasing: false
        });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          loading: false,
          purchasing: false
        });
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    let formElementsArray = [];
    // for (let key in this.state.orderForm) {
    //   formElementsArray.push(
    //     <Input
    //       elementType={this.state.orderForm[key].elementType}
    //       elementConfig={this.state.orderForm[key].elementConfig}
    //       value={this.state.orderForm[key].value}
    //     />
    //   );
    // }

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => {
              this.inputChangedHandler(event, formElement.id);
            }}
            shouldValidate={formElement.config.validation}
            invalid={!formElement.config.valid}
            touched={formElement.config.touched}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
