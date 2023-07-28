import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css'
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContactHandler(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };
  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.onHandleSubmit}>
        <label >
          <h2>Name</h2>
          <input
          value={name}
          onChange={this.onHandleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required   
          />
        </label>
        <label>
          <h2>Number</h2>
          <input
           value={number}
           onChange={this.onHandleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
    addContactHandler: PropTypes.func.isRequired,
};