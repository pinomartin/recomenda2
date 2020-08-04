import AuthData from './auth.js';

/**Inicializacion de Objetos DOM */

export const modalLogin = {
    //Buttons
    
    btnSignUpUI : document.querySelector('#btn-acceso-reg'),
    btnSignInUI : document.querySelector('#btn-login'),
    
    btnCreateUserUI : document.querySelector('#btn-reg-usuario'),
    //Form ** Inputs
    formLoginUI : document.querySelector('#form-login'),
    usernameInputFormUI : document.querySelector('#user-input'),
    emailInputFormUI : document.querySelector('#email-input'),
    passwordInputFormUI : document.querySelector('#email-input'),
    //Display
    signUpCallUI : document.querySelector('#ui-SignUp'),
    modalTitleLoginUI : document.querySelector('#modal-title-login'),
    modalDescriptionLoginUI : document.querySelector('#modal-description-login'),
    modalTitleRegisterUI : document.querySelector('#modal-title-registro'),
    modalDescriptionRegisterUI : document.querySelector('#modal-description-registro')
}

export const navBarUI = {
    btnLogInMain : document.querySelector('#btn-main-login'),
    displayNameUI : document.querySelector('#display-username'),
    btnLogoutUI : document.querySelector('#btn-logout')
}
 

//Enable Register Mode in Modal
const signUpBtnAction = () => {
    modalLogin.modalTitleLoginUI.classList.add('d-none');
    modalLogin.modalDescriptionLoginUI.classList.add('d-none');
    modalLogin.modalTitleRegisterUI.classList.remove('d-none');
    modalLogin.modalDescriptionRegisterUI.classList.remove('d-none');
    modalLogin.btnCreateUserUI.classList.remove('d-none');
    modalLogin.signUpCallUI.classList.add('d-none');
    modalLogin.btnSignInUI.classList.add('d-none');
    modalLogin.usernameInputFormUI.classList.remove('d-none');
}

//Enable Login Mode in Modal
const resetModalLogin = () => {
    modalLogin.modalTitleLoginUI.classList.remove('d-none');
    modalLogin.modalDescriptionLoginUI.classList.remove('d-none');
    modalLogin.modalTitleRegisterUI.classList.add('d-none');
    modalLogin.modalDescriptionRegisterUI.classList.add('d-none');
    modalLogin.btnCreateUserUI.classList.add('d-none');
    modalLogin.signUpCallUI.classList.remove('d-none');
    modalLogin.btnSignInUI.classList.remove('d-none');
    modalLogin.usernameInputFormUI.classList.add('d-none');
}

//Reset Form 
export const createUserBtnAction = () => {
   modalLogin.formLoginUI.reset();
}


/*Funciones de NavBar*/ 
export const userLoggedIn = (userName) => {
    navBarUI.btnLogInMain.classList.add('d-none');
    navBarUI.displayNameUI.classList.remove('d-none');
    navBarUI.displayNameUI.innerHTML = `<small class='mr-2'>Bienvenid@</small>${userName}`;
    navBarUI.btnLogoutUI.classList.remove('d-none');
}


export const userLoggedOut = () => {
    navBarUI.btnLogInMain.classList.remove('d-none');
    navBarUI.displayNameUI.classList.add('d-none');
    navBarUI.btnLogoutUI.classList.add('d-none');
}



/*Event Listeners */
navBarUI.btnLogInMain.addEventListener('click',resetModalLogin);
modalLogin.btnSignUpUI.addEventListener('click', signUpBtnAction);
// modalLogin.btnCreateUserUI.addEventListener('click', createUserBtnAction);