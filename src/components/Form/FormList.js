import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: ' ',
    telefone: '',
  };
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm(this.state);
    this.reset();
    // console.log(this.state);
  };

  reset = () => {
    this.setState({
      name: ' ',
      telefone: '',
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Tel
            <input
              type="tel"
              name="telefone"
              value={this.state.telefone}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
