import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthForm from '../AuthForm/AuthForm';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { Header, Box } from './AppBar.styled'

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Box>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </Box>
    </Header>
  );
}

export default AppBar;