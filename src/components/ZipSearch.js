import React from "react";

export default class ZipSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: "", dataList: [{state:"USA", city:"some city"}] };
  }
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ zipcode: value });
  };

  handleZipcodeSearch = (event) => {
    const { zipcode } = this.state;
    fetch(`https://api.zippopotam.us/us/${zipcode}`)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length === 0) {
          this.setState({dataList:[]});
          return;
        }
        const places = data.places[0];
        const newData = [
          { state: places["state abbreviation"], city: places["place name"] }
        ];
        this.setState({ dataList: newData, zipcode: "" });
      });
  };
  render() {
    const { zipcode, dataList } = this.state;
    console.log(dataList);
    return (
      <div className="App">
        <input onChange={this.handleChange} value={zipcode} />
        <button onClick={this.handleZipcodeSearch}>go</button>
        {dataList.length > 0 ? (
          <ul>
            {dataList.map((item, idx) => {
              return (
                <li key={idx}>
                  {item.city}, {item.state}
                </li>
              );
            })}
          </ul>
        )
        : <div> No results </div>}
      </div>
    );
  }
}
