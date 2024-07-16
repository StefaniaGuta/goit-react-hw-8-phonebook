import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (typeof isLoggedIn === 'undefined') {
    console.error("isLoggedIn selector returned undefined. Check if the selector and state are correctly defined.");
  }

  return <>{isLoggedIn ? children : <Navigate to="/" />}</>;
}

export default PrivateRoute;
