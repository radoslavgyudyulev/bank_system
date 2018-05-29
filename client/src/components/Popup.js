import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import '../App.css'

const styles = {
  radioButton: {
    marginTop: 16,
  },
  RaisedButton: {
    textAlign: 'center'
  }
};


export default class DialogExampleScrollable extends React.Component {
  state = {
    open: false,
    banks: [],
    value: 'Barclays'
  };

 componentDidMount() {
    this.getAllBanks()
}
  getAllBanks() {
    fetch('/bank')
    .then(res => res.json())
    .then(json => this.setState({banks: json.data}))
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  getValue = (e) => {
     this.setState({value: e.target.value})
  }

  render() {
    console.log(this.state.value)
    const banks = this.state  
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Connect"
        href='https://api-sandbox.fintecture.com/oauth/token/authorize?app_id=03dca905b54d90be20ebc32bf6f996c4&redirect_uri=https://lfwork.herokuapp.com/request&response_type=code'
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
      <div className="RaisedButton"> <RaisedButton style={styles.RaisedButton} label="Connect to Bank" onClick={this.handleOpen} /></div> 
        <Dialog
          title="Choose Bank"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
          {
             banks.banks.map(item => {
                 return (
                    <RadioButton
                    key={item.id}
                    value={item.id}
                    label={item.attributes.name}
                    style={styles.radioButton}
                    onClick={this.getValue.bind(this)}
                    />
                )
            })
         }
         
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}