import React from "react";

import "./styles.css";

const numPadBtns = [
  {
    keyCode: 48, //JS event keycode from https:/keycode.info/
    keyTrigger: "0",
    id: "0",
    value: "0"
  },
  {
    keyCode: 49,
    keyTrigger: "1",
    id: "1",
    value: "1"
  },
  {
    keyCode: 50,
    keyTrigger: "2",
    id: "2",
    value: "2"
  },
  {
    keyCode: 51,
    keyTrigger: "3",
    id: "3",
    value: "3"
  },
  {
    keyCode: 52,
    keyTrigger: "4",
    id: "4",
    value: "4"
  },
  {
    keyCode: 53,
    keyTrigger: "5",
    id: "5",
    value: "5"
  },
  {
    keyCode: 54,
    keyTrigger: "6",
    id: "6",
    value: "6"
  },
  {
    keyCode: 55,
    keyTrigger: "7",
    id: "7",
    value: "7"
  },
  {
    keyCode: 56,
    keyTrigger: "8",
    id: "8",
    value: "8"
  },
  {
    keyCode: 57,
    keyTrigger: "9",
    id: "9",
    value: "9"
  },
  {
    keyCode: 46,
    keyTrigger: "AC",
    id: "AC",
    value: "AC"
  },
  {
    keyCode: 111,
    keyTrigger: "/",
    id: "/",
    value: "/"
  },
  {
    keyCode: 107,
    keyTrigger: "+",
    id: "+",
    value: "+"
  },
  {
    keyCode: 106,
    keyTrigger: "*",
    id: "*",
    value: "*"
  },
  {
    keyCode: 109,
    keyTrigger: "-",
    id: "-",
    value: "-"
  },
  {
    keyCode: 13,
    keyTrigger: "=",
    id: "=",
    value: "="
  }
];

class CalculatorInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: "",
      prev_num: 0,
      prev_operat_res: 0
    };
    // this.result = this.result.bind(this);
    // this.printOperation = this.printOperation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.buttonClick();
    }
  }

  clearDisplay() {
    this.setState({
      operation: "",
      prev_num: 0,
      prev_operat_res: 0
    });

    this.props.updateDisplay("0");
  }

  addDisplay(add) {
    console.log("**addDisplay**");

    console.log("--MAIN PARAMS--");

    console.log(/\D$/.test(this.props.display));

    console.log("--END MAIN PARAMS--");

    console.log("add" + typeof add);

    if (
      (this.props.display.length === 1 &&
        parseInt(this.props.display, 10) === 0) ||
      (/\D$/.test(this.props.display) && !(add > -1)) ||
      (this.props.display.length === 1 && /\D$/.test(this.props.display))
    ) {
      console.log("addDisplay #1__");
      console.log("-small PARAMS-");

      console.log("add > -1:");
      console.log(add > -1);

      console.log("-end small PARAMS-");

      const regex = /0?$|\D$/;
      console.log("this.props.display" + this.props.display);
      console.log("add" + add);
      console.log("typeof add" + typeof add);
      console.log(this.props.display.match(/\d+$|\D$/));

      // if(/\D$/.test(this.props.display)){
      console.log("addDisplay #1 1) NOT num__");
      this.props.updateDisplay(this.props.display.replace(regex, add));
      // }
      // else{
      //   console.log('addDisplay #1 1) num__');
      //   this.props.updateDisplay(this.props.display.concat(add));
      // }
    } else {
      //
      console.log("addDisplay #2__");
      var lastNumberRegex = /\d+$/;
      var match = lastNumberRegex.exec(this.props.display);

      this.props.updateDisplay(this.props.display.concat(add));
    }

    console.log("this.state.operation: " + this.state.operation);

    console.log("this.state.prev_operation_res: " + this.state.operation_res);
  }

  getResult() {
    console.log("******getResult******");

    let getLastNum = /\d+$/.exec(this.props.display);

    console.log("--MAIN PARAMS--");

    console.log("getLastNum:" + getLastNum);
    console.log(
      "this.state.prev_num.toString():" + this.state.prev_num.toString()
    );

    console.log("this.state.operation" + this.state.operation);

    console.log("--END MAIN PARAMS--");

    let comboString = this.state.prev_num
      .toString()
      .concat(this.state.operation)
      .concat(getLastNum);

    let operat_res = eval(comboString[0] + comboString[1] + comboString[2]);

    console.log("eval: " + operat_res);

    this.addDisplay("= " + operat_res.toString());

    console.log("this.state.operation: " + this.state.operation);

    console.log("this.state.operation_res: " + this.state.operation_res);

    console.log("******END getResult******");
  }

  addOperation(value) {
    console.log("**addOperation**");

    console.log("--MAIN PARAMS--");

    console.log("this.state.operation" + this.state.operation);
    console.log("this.state.prev_num" + this.state.prev_num);

    console.log("--END MAIN PARAMS--");

    // if prev OPER not EMPTY ELSE change cur op || COUNTING MATH OP BEFORE CURRENT OPERATION

    console.log("__addOperation #1__");
    console.log("this.state.display: " + this.state.display);

    if (this.state.operation !== "" && this.state.prev_num !== null) {
      console.log("__addOperation #1 1)__");

      let getLastNum = /\d+$/.exec(this.props.display);

      let comboString = this.state.prev_num
        .toString()
        .concat(this.state.operation)
        .concat(getLastNum);

      let operat_res = eval(comboString[0] + comboString[1] + comboString[2]);

      this.setState(
        {
          prev_operat_res: operat_res
        },
        function() {}
      );

      this.addDisplay(value);
    } else {
      console.log("__addOperation #1 2)__");

      // if no prev operation make prev num in state

      let getPrevNum = /\d+$/.exec(this.props.display);

      this.setState(
        {
          prev_num: getPrevNum
        },
        function() {}
      );

      this.addDisplay(value);
    }

    console.log("__addOperation #2__");
    console.log("this.state.display: " + this.state.display);

    // if cur is not NUMBER ( OPERATION )

    if (value !== "=" && value !== "") {
      if (/\D$/.test(this.props.display)) {
        console.log("__addOperation ##1 - __");
        this.setState(
          {
            operation: value
          },

          function() {
            console.log("value: " + value);

            this.props.updateDisplay(
              this.props.display.replace(/\D$|0$/, value)
            );
            console.log("this.state.operation" + this.state.operation);
          }
        );
      } else {
        console.log("__addOperation ##2 - __");

        this.setState(
          {
            operation: value
          },
          function() {
            console.log("value: " + value);
            console.log("this.state.operation" + this.state.operation);
          }
        );
      }
    }

    console.log("this.state.operation: " + this.state.operation);

    console.log("this.state.operation_res: " + this.state.operation_res);
  }

  buttonClick() {
    console.log("**buttonClick**");

    console.log("--MAIN PARAMS--");

    console.log("this.state.operation" + this.state.operation);

    console.log("--END MAIN PARAMS--");

    // const symbol = document.getElementById(this.props.keyTrigger);

    const math_operation = this.props.keyTrigger;

    if (math_operation > -1) {
      // add to string

      console.log("__thats a num__");

      this.addDisplay(math_operation);
    } else {
      switch (math_operation) {
        case "AC":
          /* clear */
          this.clearDisplay();

          break;

        case "/":
          this.addOperation("/");

          break;

        case "*":
          this.addOperation("*");
          break;

        case "+":
          this.addOperation("+");
          break;

        case "-":
          this.addOperation("-");
          break;

        case "=":
          /* last_op_res = last_op_res this.state.operation getNumber*/
          /* updateDisplay last_op_res  */
          this.getResult();
          break;

        default:
      }
    }

    console.log("this.state.operation: " + this.state.operation);

    console.log("this.state.operation_res: " + this.state.operation_res);
  }

  render() {
    return (
      <div id={this.props.id} className="button" onClick={this.buttonClick}>
        {this.props.keyTrigger}
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    let Calculator;
    Calculator = numPadBtns.map((drumObj, i, CalculatorArr) => {
      return (
        <CalculatorInterface
          keyTrigger={CalculatorArr[i].keyTrigger}
          keyCode={CalculatorArr[i].keyCode}
          updateDisplay={this.props.updateDisplay}
          display={this.props.display}
        />
      );
    });

    return <div className="pad-bank">{Calculator}</div>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(48)
    };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(name) {
    this.setState({
      display: name
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator
          updateDisplay={this.updateDisplay}
          display={this.state.display}
        />
        <p id="display">{this.state.display}</p>
      </div>
    );
  }
}
