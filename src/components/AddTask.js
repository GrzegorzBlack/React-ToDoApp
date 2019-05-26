import React, { Component } from 'react';
import './AddTask.css';
class AddTask extends Component {

  
  state = {
    text: '',
    checked: false,
    }

  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  // handleDate = (e) => {
  //   this.setState({
  //     date: e.target.value
  //   })
  // }

  handleClick = () => {
    console.log("dodaj");

    const { text, checked } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, checked);
      if (add) {
        this.setState({
          text: '',
          checked: false,
        })
      }
    } else {
      console.log("za krótko");
    }
  }

  render() {
    

    return (
      <div className="form">
        <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
        <label htmlFor="important">Priorytet</label><br />
        
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;