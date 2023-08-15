//sing in javascript code
const $=document;
const form=$.querySelector(".sing-in")
const usernameI=$.querySelector('.username-input');

const passwordI=$.querySelector('.password-input');
form.addEventListener('submit',e=>{
  e.preventDefault()
  if(!!usernameI.value && !!passwordI.value) {
        window.location.href='/src/views/index.html'}
    else{
        alert('plz enter your information')
    }
console.log(!!usernameI.value && !!passwordI.value);
})
