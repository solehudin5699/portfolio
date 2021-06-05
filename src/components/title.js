import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, color }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2
      style={{
        textAlign: 'center',
        color,
        marginBottom: '15px',
        paddingTop: '15px',
      }}
    >
      {title}
    </h2>
  </Fade>
);

Title.defaultProps = {
  color: '#e6e6ff',
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Title;
