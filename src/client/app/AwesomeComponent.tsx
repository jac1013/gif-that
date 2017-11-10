import * as React from "react";

interface State {
  number: number;
}

export class Hello extends React.Component {
   public state: State = {
    number: 0
  };

  constructor() {
    super();
  }

  private incrementNumber() {
    this.setState({number: this.state.number + 1});
  }

  public render() {
    return (
      <div>
        Hello World! {this.state.number}
        <button onClick={this.incrementNumber.bind(this)}>increment</button>
      </div>
    );
  }
}
