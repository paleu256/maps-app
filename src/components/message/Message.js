import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { clearMessage } from '../../actions/message';

const Message = ({ message, clearMessage }) =>
    message && (
        <Snackbar
            open={true}
            message={message}
            autoHideDuration={5000}
            onRequestClose={clearMessage}
        />
    );

Message.propTypes = {
    message: PropTypes.string,
};

export default connect(({ message }) => ({ message }), { clearMessage })(
    Message
);
