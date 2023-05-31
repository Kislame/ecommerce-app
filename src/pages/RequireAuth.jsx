import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RequireAuth() {
  const location = useLocation();
  const token = useSelector((state) => state.auth.accessToken);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
