 
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.FC<any>;
  path: string;
  role?: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, role, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <Route {...rest} render={props => {
      if (!user) return <Redirect to="/login" />;
      if (role && user.role !== role) return <Redirect to="/dashboard" />;
      return <Component {...props} />;
    }} />
  );
};

export default PrivateRoute;