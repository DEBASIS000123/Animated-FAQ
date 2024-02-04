const accordians=document.querySelectorAll(".accordian");

accordians.forEach(operation =>{
    const icon=operation.querySelector(".icon");
    const answer=operation.querySelector(".answer");

    operation.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
});