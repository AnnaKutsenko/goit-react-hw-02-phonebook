import { Component } from 'react';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    name: 'jbgjnj',
  }

  // async function createUser() {
  //   user.id = await nanoid()
  // }
  // onLeaveFeedback = select => {
  //   this.setState(prevState => {
  //     return {
  //       [select]: prevState[select] + 1,
  //     }
  //   })
  // };

  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral;
  // }

  // countPositiveFeedbackPercentage = () => {
  //   return Math.round(this.state.good * 100 / this.countTotalFeedback());
  // }
  inputChange = event => {
    this.setState({ name: event.currentTarget.value })
  }

  render() {
    // const { good, neutral, bad } = this.state;
    // const options = Object.keys(this.state);

    return (
      <form>
        <label>
          <input
            type="text"
            name={this.state.name} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange = {this.inputChange}
            required
          />
        </label>
      </form>
    )
  }
}
