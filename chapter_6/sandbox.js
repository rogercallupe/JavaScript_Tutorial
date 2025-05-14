// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    console.log(p.innerText); // just show all txt visible
});

paras.forEach(p => {
    console.log(p.textContent);
});
