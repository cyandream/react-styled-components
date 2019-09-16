import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? 'blue' : 'palevioletred')} 
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;


class Button extends React.Component {
    render() {

        return (
            <div>
             <ButtonStyled  variant>Component Button {this.props.variant}</ButtonStyled>
            </div>
        );
    }
}
Button.propTypes = {
    variant: PropTypes
      .oneOf([ 'primary', 'secondary', 'danger'])
      .isRequired,
  };


export default Button;
