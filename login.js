document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');
  const errorAlert = document.getElementById('errorAlert');

  // 1. Mostrar/Ocultar Senha
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    
    // Troca o ícone de olho
    eyeIcon.classList.toggle('fa-eye', !isPassword);
    eyeIcon.classList.toggle('fa-eye-slash', isPassword);
  });

  // 2. Submissão e Validação do Formulário
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();
    const remember = document.getElementById('remember').checked;

    // Reset de erro anterior
    hideError();

    // Validação básica
    if (!email || !password) {
      showError('Por favor, preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      showError('Por favor, insira um e-mail válido.');
      return;
    }

    if (password.length < 6) {
      showError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Sucesso (simulação)
    console.log('Login solicitado:', { email, remember });
    alert('Login realizado com sucesso!');
  });

  // Funções Auxiliares
  function showError(message) {
    errorAlert.textContent = message;
    errorAlert.style.display = 'block';
  }

  function hideError() {
    errorAlert.style.display = 'none';
    errorAlert.textContent = '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

const btnRegister = document.getElementById('btnRegister');

btnRegister.addEventListener('click', (e) => {
  e.preventDefault(); // Impede de subir para o topo da página por causa do #
  alert('Redirecionando para a tela de cadastro...');
});

