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

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.result = this.result.bind(this);
    // this.printOperation = this.printOperation.bind(this);
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
    this.props.updateOperation("");
    // this.props.updatePrevNum('0');
    // this.props.updatePrevOperatRes('*');
    this.props.updateDisplay("0");
  }

  addDisplay(add) {
    if (this.props.operation === "=") {
      this.clearDisplay();
    }

    // console.log("**addDisplay**");

    // console.log("--MAIN PARAMS--");

    // console.log(/\D$/.test(this.props.display));

    // console.log("--END MAIN PARAMS--");

    // console.log("add" + typeof add);
    // // if(this.props.prev)

    if (
      (this.props.display.length === 1 &&
        parseInt(this.props.display, 10) === 0) ||
      (/\D$/.test(this.props.display) && !(add > -1)) ||
      (this.props.display.length === 1 && /\D$/.test(this.props.display))
    ) {
      //   console.log("addDisplay #1__");
      //   console.log("-small PARAMS-");

      //   console.log("add > -1:");
      //   console.log(add > -1);

      //   console.log("-end small PARAMS-");

      const regex = /0?$|\D$/;
      //   console.log("this.props.display" + this.props.display);
      //   console.log("add" + add);
      //   console.log("typeof add" + typeof add);
      //   console.log(this.props.display.match(/\d+$|\D$/));

      //   console.log("addDisplay #1 1) NOT num__");

      this.props.updateDisplay(this.props.display.replace(regex, add));
    } else {
      //   //
      //   console.log("addDisplay #2__");
      var lastNumberRegex = /\d+$/;
      var match = lastNumberRegex.exec(this.props.display);
      console.log("match +++++++++ " + match);

      var lastZero = /0$/.exec(this.props.display);
      if (lastZero) {
        console.log("lastZero");
        console.log("match.length" + match.toString().length);
        if (match.toString().length === 1) {
          console.log("0000000000000");
          this.props.updateDisplay(this.props.display.replace(/0$/, add));
        } else {
          console.log("NOT 0000000000000");
          this.props.updateDisplay(this.props.display.concat(add));
        }
      } else {
        console.log("NOT 0000000000000");
        this.props.updateDisplay(this.props.display.concat(add));
      }
    }

    // this.props.updateDisplay(this.props.display.concat(add));

    // console.log("this.state.operation: " + this.props.operation);

    // console.log("this.props.prev_operation_res: " + this.props.prev_operation_result);
  }

  getResult() {
    //     console.log("******getResult******");

    //     let getLastNum = /\d+$/.exec(this.props.display);

    //     console.log("--MAIN PARAMS--");

    //     console.log("getLastNum:" + getLastNum);

    // if(this.props.prev_num===null){
    //   this.props.updatePrevNum('0');
    // }

    //     console.log("this.props.prev_operation_res==='*'"+(this.props.prev_operation_res==='*'));

    // if(this.props.prev_operation_res==='*'){
    //   this.props.updatePrevOperatRes(this.props.prev_num);
    // };

    // console.log("this.props.prev_num.toString():" + this.props.prev_num.toString());

    //   console.log("this.props.operation" + this.props.operation);
    //   console.log("this.props.prev_operation_res" + this.props.prev_operation_res);

    //   console.log("--END MAIN PARAMS--");

    // let comboString = [getLastNum.toString() ,this.props.operation.toString(), this.props.prev_operation_res.toString()];

    //   console.log('++++ comboString ++++'+comboString);

    //   let operat_res = eval(comboString[0] + comboString[1] + comboString[2]);

    //   console.log("eval: " + operat_res);
    //   this.clearDisplay();
    //   this.addDisplay(operat_res.toString());

    //   if(this.props.display.toString()==="Infinity"){
    // console.log('INDITINI 2++++++++++++++++++++++++++++++++++++');
    //     this.clearDisplay();
    //   }
    //   this.props.updatePrevNum(this.props.display);
    //   this.props.updateOperation('=');

    //   console.log("this.props.operation: " + this.props.operation);

    //   console.log("this.state.operation_res: " + this.state.operation_res);

    //   console.log("******END getResult******");

    let comboString = this.props.display;

    this.clearDisplay();

    try {
      this.props.updateDisplay(math.evaluate(comboString));
    } catch (err) {
      console.log(err);
    }
  }

  addOperation(value) {
    // if(this.props.display.toString()==="Infinity"){
    //   console.log('INDITINI ++++++++++++++++++++++++++++++++++++');
    //       this.clearDisplay();
    //     }

    //      if(this.props.operation === '='){

    //       this.props.updateOperation('');

    //     }

    //     console.log("**addOperation**");

    //     console.log("--MAIN PARAMS--");

    //     console.log("this.props.operation" + this.props.operation);
    //     console.log("this.props.prev_num" + this.props.prev_num);

    //     console.log("--END MAIN PARAMS--");

    //     // if prev OPER not EMPTY ELSE change cur op || COUNTING MATH OP BEFORE CURRENT OPERATION

    //     console.log("__addOperation #1__");

    //     if (this.props.operation !== "" && this.props.prev_num !== null) {
    //       console.log("__addOperation #1 1)__");

    //       let getLastNum = /\d+$/.exec(this.props.display);

    //       if (this.props.prev_operation_res!=='*'){

    //         let comboString = [this.props.prev_operation_res.toString(),this.props.operation, getLastNum];

    //         let operat_res = eval(comboString[0] + comboString[1] + comboString[2]);

    //         this.props.updatePrevOperatRes(operat_res);

    //         this.props.updatePrevNum(getLastNum);

    //         this.addDisplay(value);

    //       }else{

    //         let comboString = [this.props.prev_num.toString(),this.props.operation, getLastNum];

    //         let operat_res = eval(comboString[0] + comboString[1] + comboString[2]);

    //         this.props.updatePrevOperatRes(operat_res);

    //         this.props.updatePrevNum(getLastNum);

    //         this.addDisplay(value);

    //       }

    //     } else {
    //       console.log("__addOperation #1 2)__");

    //       // if no prev operation make prev num in state

    //       let getPrevNum = /\d+$/.exec(this.props.display);

    //       this.props.updatePrevNum(getPrevNum);

    //       this.addDisplay(value);
    //     }

    //     console.log("__addOperation #2__");

    //     // if cur is not NUMBER ( OPERATION )

    //     if (value !== "") {
    //       if (/\D$/.test(this.props.display)) {
    //         console.log("__addOperation ##1 - __");

    //         this.props.updateOperation(value);

    //         this.props.updateDisplay(
    //           this.props.display.replace(/\D$|0$/, value)
    //         );
    //       } else {
    //         console.log("__addOperation ##2 - __");

    //         this.props.updateOperation(value);

    //       }
    //     }

    //     console.log("this.props.operation: " + this.props.operation);

    //     console.log("this.state.operation_res: " + this.state.operation_res);

    this.props.updateDisplay(this.props.display + value);
  }

  buttonClick() {
    console.log("**buttonClick**");

    console.log("--MAIN PARAMS--");

    console.log("this.props.operation" + this.props.operation);

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

    console.log("this.props.operation: " + this.props.operation);

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
        <CalcButton
          display={this.props.display}
          prev_num={this.props.prev_num}
          operation={this.props.operation}
          prev_operation_res={this.props.prev_operation_res}
          updateDisplay={this.props.updateDisplay}
          updatePrevNum={this.props.updatePrevNum}
          updateOperation={this.props.updateOperation}
          updatePrevOperatRes={this.props.updatePrevOperatRes}
          keyTrigger={CalculatorArr[i].keyTrigger}
          keyCode={CalculatorArr[i].keyCode}
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
      display: String.fromCharCode(48),
      prev_num: 0,
      prev_operation_res: "*",
      operation: ""
    };

    this.updatePrevNum = this.updatePrevNum.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.updatePrevOperatRes = this.updatePrevOperatRes.bind(this);
  }

  updatePrevOperatRes(prev_op_value) {
    this.setState({
      prev_operation_res: prev_op_value
    });
  }

  updatePrevNum(prev_value) {
    this.setState({
      prev_num: prev_value
    });
  }

  updateDisplay(name) {
    this.setState({
      display: name
    });
  }

  updateOperation(value) {
    this.setState({
      operation: value
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator
          display={this.state.display}
          prev_num={this.state.prev_num}
          operation={this.state.operation}
          prev_operation_res={this.state.prev_operation_res}
          updateOperation={this.updateOperation}
          updateDisplay={this.updateDisplay}
          updatePrevNum={this.updatePrevNum}
          updatePrevOperatRes={this.updatePrevOperatRes}
        />
        <p id="display">{this.state.display}</p>
      </div>
    );
  }
}
