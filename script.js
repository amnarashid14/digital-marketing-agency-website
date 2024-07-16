let button=document.querySelector(".submit")
button.addEventListener('click',()=>{alert("Your Message Has Been Submitted")}
)

let toggleButton=document.querySelector('.toggle-button')

let rightNav=document.querySelector('.right-nav')
toggleButton.addEventListener('click',function (){
     if (rightNav.classList.contains('active')){
        rightNav.classList.remove('active')
     }
     else{
        rightNav.classList.add('active')
     }
})