import {Component} from 'react'

import Clock from './components/Clock';
import BankData from './components/BankData'
import Form from './components/Form';

import ZipSearch from './components/ZipSearch'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
    }
  }
  changeUser = (e) => {
    e.preventDefault();
    const currUser = e.target[0].value;
    //console.log(currUser);
    this.setState({user: currUser})
  }
  render() {
    return (
      <div>
        <Clock user={this.state.user} />
        <h3>Customize your profile!</h3>
        <Form changeUser={this.changeUser} />
        <BankData />
        <ZipSearch />
      </div>
    );
  }

}

export default App;
