'use strict';
function GateKeeperForAdmin() {
  const checkIfAdminTokenExists = () => {
    const admin = JSON.parse(localStorage.getItem('userToken'));
    if (!user.user.isAdmin) {
      window.location.href = './';
    }
  };
  return checkIfAdminTokenExists();
}

export default GateKeeperForAdmin;
