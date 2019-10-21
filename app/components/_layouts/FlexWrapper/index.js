import React from 'react';
import PropTypes from 'prop-types';
import { StyledFlexWrapper } from './styles';

const FlexWrapper = props => (
  <StyledFlexWrapper>{props.children}</StyledFlexWrapper>
);

export default FlexWrapper;

FlexWrapper.propTypes = {
  children: PropTypes.element,
};
