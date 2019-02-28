import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlex = styled.div`
  display: ${p => (p.inline ? 'inline-flex' : 'flex')};
  justify-content: ${p => p.justify || 'space-between'};
  align-items: ${p => p.align || 'center'};
  overflow: ${p => (p.overflowed ? 'auto' : 'unset')};
`;

StyledFlex.propTypes = {
  inline: PropTypes.bool,
  overflowed: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string
};

export default StyledFlex;
