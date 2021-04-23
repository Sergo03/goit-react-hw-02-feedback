import PropsTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
            <p>{message}</p>
    )
};

Notification.propTypes = {
    message:PropsTypes.string.isRequired
}

export default Notification;