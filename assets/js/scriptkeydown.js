let colorTecla = 'white';


document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    

    if (event.key === 'a') {
        colorTecla = 'pink'; 
    } else if (event.key === 's') {
        colorTecla = 'orange';
    } else if (event.key === 'd') {
        colorTecla = 'lightblue'; 
    }
    

    if (event.key === 'a' || event.key === 's' || event.key === 'd') {
        keyDiv.style.backgroundColor = colorTecla;
    }
    

    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        let nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '2px solid black';
        nuevoDiv.style.margin = '20px';

        if (event.key === 'q') {
            nuevoDiv.style.backgroundColor = 'purple';
        } else if (event.key === 'w') {
            nuevoDiv.style.backgroundColor = 'gray';
        } else if (event.key === 'e') {
            nuevoDiv.style.backgroundColor = 'brown'; 
        }

        document.body.appendChild(nuevoDiv);
    }
});
