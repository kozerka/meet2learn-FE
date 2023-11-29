import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
	const userInfo = useSelector(state => state.user.userAuth.userInfo);

	if (!userInfo) {
		return <Navigate to={'/login'} />;
	}

	return children;
};

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
