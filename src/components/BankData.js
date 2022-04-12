import {Component} from 'react'
import axios from 'axios';

class BankData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "debits",
      debits: [],
      credits: [],
    }
  }

  async componentDidMount() {
    let response = await axios.get("https://moj-api.herokuapp.com/debits");
    let debits = response.data;
    this.setState({debits: debits});
  }

  debitsView = () => {
    const { debits } = this.state;
    return debits.map((debit) => {
        let date = debit.date.slice(0,10);
        return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }

  creditsView = () => {
    return <h2>credits</h2>;
  }

  render() {
    if(this.state.selected === "debits"){
      return (<div>{this.debitsView()}</div>);
    }
    return <div>{this.creditsView()}</div>;
  }
}

export default BankData;