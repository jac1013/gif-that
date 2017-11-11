import * as React from "react";

interface State {
  number: number;
}

export class Hello extends React.Component<{}, State> {

  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  public render() {
    return (
      <div>
        Hello World! {this.state.number}
        <button onClick={this.incrementNumber}>increment</button>
      </div>
    );
  }

  private incrementNumber = () => {
    this.setState({number: this.state.number + 1});
  }
}
