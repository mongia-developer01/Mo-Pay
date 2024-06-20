import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login', { replace: true });
    window.location.reload(); // Reload the page to ensure the user is fully logged out
  }, []);

  return null;
}

export default Logout;
