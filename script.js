const container = document.querySelector('#container');

for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        const divs = document.createElement('div');
        divs.classList.add('divs');
        divs.textContent = 'Hello!';

        // divs.style.float = 'left';


        // divs.style.backgroundColor = 'red';
        // divs.style.margin = '1px';
        // divs.style.border = '1px solid green';
        
        container.appendChild(divs);
    }
    //divs.style.clear = 'both';
}