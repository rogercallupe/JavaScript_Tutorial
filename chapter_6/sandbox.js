// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     console.log(p.innerText); // just show all txt visible
// });

// paras.forEach(p => {
//     console.log(p.textContent); // show all text content
// });

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){ // success is not hide text then we can use:  innerText.includes('success')
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
