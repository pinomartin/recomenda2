// USER LOGIN AND REGISTRATION
import {createUserBtnAction,userLoggedIn,userLoggedOut} from './ui-login.js';



const auth = firebase.auth();


//Auth status changes listener
auth.onAuthStateChanged(user => {
    if(user){

        userLoggedIn(user.displayName);
        console.log("Usuario activo: " + user.email)
    }
    else
            console.log("Usuario deslogueado")
})

//User registration
const emailInput = document.querySelector('#email-input');
const passInput = document.querySelector('#pass-input');
const userNameInput = document.querySelector('#displayName-input');
const btnCreateUser = document.querySelector('#btn-reg-usuario');


btnCreateUser.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passInput.value;
    const userName = userNameInput.value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
        $("#loginModal .close").click()
        
    });

     //Setea displayName
    auth.onAuthStateChanged(user => {
        if(user){
         user.updateProfile({
            displayName : userName
            }).then(() => {
            //Llamado a Funciones UI
            createUserBtnAction();
            userLoggedIn(user.displayName);
            
         }).catch( (e) => console.log(e))
        
    }
    else
            console.log("Usuario deslogueado")
            
})

    
})

//User login
const btnLogin = document.querySelector('#btn-login');


btnLogin.addEventListener('click', (e) => {
    const email = emailInput.value;
    const password = passInput.value;
    
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred)
        $("#loginModal .close").click()
        
    });
})

//User Logout
const btnLogout = document.querySelector('#btn-logout');
btnLogout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        userLoggedOut();
        //console.log('Usuario deslogeado')
    })
})


export default auth;

