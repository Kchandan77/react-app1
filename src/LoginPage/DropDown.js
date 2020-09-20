import React, { Component } from 'react'

export class DropDown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {value: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: Array.from(event.target.selectedOptions, (item) => item.value)});
  }

  handleSubmit(event) {
    alert('Your favorite Nos is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite Nos:
          <select multiple={true} value={this.state.value} onChange={this.handleChange}>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default DropDown
