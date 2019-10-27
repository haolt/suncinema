import styled from 'styled-components';

export default styled.button`
  outline: none;
  border: 1px solid ${props => props.bgColor};
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  width: 4em;
  height: 2em;
  background: ${props => props.bgColor};
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;
