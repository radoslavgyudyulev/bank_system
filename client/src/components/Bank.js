import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton'


const style = {
    margin: 12,
  };

export default class Bank extends Component {
  state = {
    value: 'Barclays',
    banks: []
  };

  componentDidMount() {
      fetch('/bank')
      .then(res => res.json())
      .then(json => this.setState({banks: json.data}))
  }
  

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    const banks = this.state
    console.log(banks)
    return (
    <div>
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {
            banks.banks.map(item => {
                return (
                    <MenuItem
                     value={item.attributes.name}
                     key={item.id}
                     primaryText={item.attributes.name} />
                )
            })
        }
      </SelectField>
      <div>
      <RaisedButton label="Connect" style={style} />
      </div>
      </div> 
    );
  }
}

