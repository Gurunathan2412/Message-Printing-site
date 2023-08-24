// console.log("hello")
(function(){
    const form = document.querySelector("#msg_from")
    form.addEventListener("submit",function(e) {
        e.preventDefault()
        console.log("HI")
        const msg = document.querySelector('#msg')
        const feedback = document.querySelector('.feedback')
        const msgContent = document.querySelector('.msg_content')

        if(msg.value===''){
            feedback.classList.add("show")
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
            msgContent.textContent = msg.value;
            msg.value=''
        }
    })
})()
