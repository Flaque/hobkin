import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const time = () => {
      setTimeout(() => {
        this.setState(prevState => {
          prevState.count += 1;
          return prevstate;
        });

        time();
      }, 1000);
    };

    time();
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
