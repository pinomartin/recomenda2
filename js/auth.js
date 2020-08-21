// USER LOGIN AND REGISTRATION
import {createUserBtnAction,userLoggedIn,userLoggedOut,modalLogin} from './ui-login.js';

const { 
    formLoginUI,
    formRegisterUI,
    emailLoginFormUI,
    passwordLoginFormUI
                        } = modalLogin;




//Auth status changes listener
auth.onAuthStateChanged(user => {
    if(user){
        database.collection('users').doc(user.uid).get().then( doc => {
            userLoggedIn(doc.data().name);
            console.log("Usuario activo: " + user.email)
        }, err => {console.log(err.message)})
    }
    else
            console.log("Usuario deslogueado")
})

//User registration

// const passInput = document.querySelector('#pass-input');
// const userNameInput = document.querySelector('#displayName-input');
// const btnCreateUser = document.querySelector('#btn-reg-usuario');


formRegisterUI.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formRegisterUI['email-sign-up'].value;
    const password = formRegisterUI['pass-sign-up'].value;
    const userName = formRegisterUI['displayName-input'].value;


    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return database.collection('users').doc(cred.user.uid).set({
            name: userName
        })
        
        
    }).then(() => {
        $("#loginModal .close").click();
        createUserBtnAction();
    });

//      //Setea displayName
//     auth.onAuthStateChanged(user => {
//         if(user){
//          user.updateProfile({
//             displayName : userName
//             }).then(() => {
//             //Llamado a Funciones UI
//             createUserBtnAction();
//             userLoggedIn(user.displayName);
            
//          }).catch( (e) => console.log(e))
        
//     }
//     else
//             console.log("Usuario deslogueado")
            
// })

    
})

//User login
const btnLogin = document.querySelector('#btn-login');


formLoginUI.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailLoginFormUI.value;
    const password = passwordLoginFormUI.value;
    
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred)
        $("#loginModal .close").click()
        formLoginUI.reset();
    });
})

//User Logout
const btnLogout = document.querySelector('#btn-logout');
btnLogout.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        userLoggedOut();
        //console.log('Usuario deslogeado')
    })
});


