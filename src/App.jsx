import React, { useState, useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from './context/AuthProvider';
import { getLocalStorage } from './utils/localStorage';

const App = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }, [loggedInUser]);

  const handleLogin = (email, password) => {
    const { admin } = getLocalStorage();
    if (admin && email === admin[0].email && password === admin[0].password) {
      setLoggedInUser({ email, role: 'admin' });
    } else {
      const employee = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (employee) {
        setLoggedInUser({ ...employee, role: 'employee' });
      }
    }
  };

  const changeUser = () => {
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    if (loggedInUser.role === 'admin') {
      return <AdminDashboard changeUser={changeUser} />;
    }
    if (loggedInUser.role === 'employee') {
      return <EmployeeDashboard changeUser={changeUser} data={loggedInUser} />;
    }
  }

  return (
    <div>
      <Toaster />
      <Login handleLogin={handleLogin} />
    </div>
  );
};

export default App;