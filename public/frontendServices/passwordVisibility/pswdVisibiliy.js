
function togglePswdVisibility(element,pswButton){
    element.type = element.type == 'password'? 'text':'password';
    pswButton.innerText = pswButton.innerText === 'Show' ? 'Hide':'Show';
}

const pswVisibility = {togglePswdVisibility};
export default pswVisibility;

/*
togglePassword.addEventListener("click",function(){
    password.type = password.type === 'password'? 'text':'password';
    togglePassword.innerText = togglePassword.innerText === 'Show' ? 'Hide':'Show';
});
togglePasswordConfirm.addEventListener("click",function(){
    passwordConfirm.type = passwordConfirm.type === 'password'? 'text':'password';
    togglePasswordConfirm.innerText = togglePasswordConfirm.innerText === 'Show' ? 'Hide':'Show';
});
*/
