const acordeonTrigges = document.querySelectorAll('.acordeon .trigger')

acordeonTrigges.forEach((trigger) => {
    trigger.addEventListener('click', (el)=>{
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }


    })
})