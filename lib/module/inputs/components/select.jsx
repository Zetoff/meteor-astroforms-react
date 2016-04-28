import React from 'react';

// testing purpose only. this should not be here on the final release
class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(props){
    // makes component reactive to db changes
    this.updateValue(props.value);
  }
  handleChange(event){
    //user updates
    this.updateValue(event.target.value);
  }
  updateValue(value){
    this.setState({
      value: value
    });
  }
  render(){
    return(
      <div className="select-default">
        <label>{this.props.label}&nbsp;</label>
        <select {...this.props.htmlAttributes} value={this.state.value} onChange={this.handleChange}>
          {this.props.options.map((option) => {
            return (<option value={option.value} key={option.value} >{option.label}</option>);
          })}
        </select>
      </div>
    );
  }
}

export default Select;
