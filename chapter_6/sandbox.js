const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += ' ninjas are awesome!';

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' new txt';
});

