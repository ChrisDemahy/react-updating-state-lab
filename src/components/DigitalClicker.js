// Code DigitalClicker Component Here
import React from "react";

export default class DigitalClicker extends React.Component {
  state = { timesClicked: 0 };
  render() {
    return (
      <button
        className="button clicker"
        onClick={() => {
          this.setState((p) => {
            return { timesClicked: p.timesClicked + 1 };
          });
        }}
      >
        <label className="label clicker">{this.state.timesClicked}</label>
      </button>
    );
  }
}
