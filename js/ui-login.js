import AuthData from './auth.js';

/**Inicializacion de Objetos DOM */
const displayNameUI = document.getElementById('');

const btnLogInMain = document.querySelector('#btn-main-login');
const btnSignUpUI = document.querySelector('#btn-acceso-reg');
const btnSignInUI = document.querySelector('#btn-login');
const btnLogoutUI = document.querySelector('#btn-logout');
const btnCreateUserUI = document.querySelector('#btn-reg-usuario');

const userInputFormUI = document.querySelector('#user-input');
const signUpCallUI = document.querySelector('#ui-SignUp');
const modalTitleLoginUI = document.querySelector('#modal-title-login');
const modalDescriptionLoginUI = document.querySelector('#modal-description-login');
const modalTitleRegisterUI = document.querySelector('#modal-title-registro');
const modalDescriptionRegisterUI = document.querySelector('#modal-description-registro');


//Funcion que habilita modal para Registro
const signUpBtnAction = () => {
    modalTitleLoginUI.classList.add('d-none');
    modalDescriptionLoginUI.classList.add('d-none');
    modalTitleRegisterUI.classList.remove('d-none');
    modalDescriptionRegisterUI.classList.remove('d-none');
    btnCreateUserUI.classList.remove('d-none');
    signUpCallUI.classList.add('d-none');
    btnSignInUI.classList.add('d-none');
    userInputFormUI.classList.remove('d-none');
}

//Funcion que limpia el modal (lo resetea)
const resetModalLogin = () => {
    modalTitleLoginUI.classList.remove('d-none');
    modalDescriptionLoginUI.classList.remove('d-none');
    modalTitleRegisterUI.classList.add('d-none');
    modalDescriptionRegisterUI.classList.add('d-none');
    btnCreateUserUI.classList.add('d-none');
    signUpCallUI.classList.remove('d-none');
    btnSignInUI.classList.remove('d-none');
    userInputFormUI.classList.add('d-none');
}

const createUserBtnAction = () => {
    
}

btnLogInMain.addEventListener('click',resetModalLogin);
btnSignUpUI.addEventListener('click', signUpBtnAction);
btnCreateUserUI.addEventListener('click', createUserBtnAction);