import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thanksMessage: props?.thanksMessage === undefined ? false : props.thanksMessage,
    };
  }

  //handler goes here
  handleClick = () => {
    this.setState((prevState) => ({
      thanksMessage: !prevState.thanksMessage,
    }));
  };

  update(prevProps) {
    if (this.props.thanksMessage !== prevProps.thanksMessage) {
      this.setState(() => ({ ...this.props }));
    }
  }


  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <div className="center-div">
          <button className="button1" onClick={this.handleClick}>
            {this.state.thanksMessage ? "thanks" : "click me"}
          </button>
        </div>
      </div>
    );
  }
}