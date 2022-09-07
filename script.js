const body = document.querySelector('body');
const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'Click';
// body.appendChild(btn);

const container = document.querySelector('#container');

body.insertBefore(btn, container);

btn.addEventListener('click', function (){
    const inputValue = parseInt(prompt('Enter number of grid in each row',2));
    //console.log(inputValue);
    container.textContent = '';
    for(let i=1;i<=inputValue*inputValue;i++){
        const divs = document.createElement('div');
        divs.classList.add('divs');
        divs.textContent = 'Hello!';
        divs.style.float = 'left';
        if((i-1)%inputValue == 0) divs.style.clear = 'both';
    
        // divs.style.backgroundColor = 'red';
        // divs.style.margin = '1px';
        // divs.style.border = '1px solid green';
            
        container.appendChild(divs);
    }
});