import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlexWrapperLP } from './styles';

const FlexWrapperLP = props => (
  <StyledFlexWrapperLP>{props.children}</StyledFlexWrapperLP>
);

export default FlexWrapperLP;

FlexWrapperLP.propTypes = {
  children: PropTypes.element,
};
