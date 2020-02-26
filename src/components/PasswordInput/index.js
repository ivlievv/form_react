import React from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      isHidden: true,
    };
  }
  render () {
    return(
      <label htmlFor="">
        <input value={this.props.value} type={this.state.isHidden
        ? 'password'
        : 'text'}/>
      </label>
    );
  }
}

PasswordInput.propTypes = {
  value: PropTypes.string
};

PasswordInput.defaultProps = {
  value: ''
};

export default PasswordInput;