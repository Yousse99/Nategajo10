function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === '30404261200811' && pass === 'Vxdt@7429') {
    window.location.href = 'dashboard.html';
  } else {
    alert('اسم المستخدم أو كلمة المرور غير صحيحة');
  }
  return false;
}