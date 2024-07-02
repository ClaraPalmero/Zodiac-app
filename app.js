// traemos el input, gestionamos que esté bien escrito.
const validateForm = () => {
    const userNameInput = document.querySelector('.name_input');
    const userSurnameInput = document.querySelector('.surname_input');  
    const selectHoroscope = document.querySelector('#hor').value; // RECOGE EL VALOR DEL SELECT
    
    const errorMessage = document.querySelector('.error-message');
    
    const fullUserName = valueFormat(userNameInput.value);
    const fullUserSurname = valueFormat(userSurnameInput.value);
      
    const regex =/^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ]+$/;
    let valido = true; // variable de control

    if((!regex.test(fullUserName) || !regex.test(fullUserSurname)) || selectHoroscope === 'Select'){
        errorMessage.style.display = "block";   
        //getMessageError();
        valido = false;        
    } else {
        errorMessage.style.display ="none";             
        console.log( fullUserName, fullUserSurname, selectHoroscope )
        navigatePage();
    }
    
    return valido; 
}

const valueFormat = value => {
    const userName = value;
    const fullName = userName.charAt(0).toUpperCase() + userName.slice(1, userName.length).toLowerCase();    
    return fullName
}


const sendForm = document.getElementById('formulario').addEventListener("submit", (event)=>{
    event.preventDefault();
    if(validateForm()) {
        console.log("Formulario válido y listo para enviar")
    };
} )

const navigatePage = () => {
    const selectHoroscope = document.querySelector('#hor').value;

    switch (selectHoroscope) {
        case 'Aries':
            window.location.href = "./pages/aries.html";
            break;
        case 'Acuario':
            window.location.href = "./pages/acuario.html";
            break;
        case 'Cancer':
            window.location.href = "./pages/cancer.html";
            break;
        case 'Capricornio':
            window.location.href = "./pages/capricornio.html";
            break;
        case 'Escorpio':
            window.location.href = "./pages/escorpio.html";
            break;
        case 'Geminis':
            window.location.href = "./pages/geminis.html";
            break;
        case 'Leo':
            window.location.href = "./pages/leo.html";
            break;
        case 'Libra':
            window.location.href = "./pages/libra.html";
            break;
        case 'Piscis':
            window.location.href = "./pages/piscis.html";
            break;
        case 'Sagitario':
            window.location.href = "./pages/sagitario.html";
            break;
        case 'Virgo':
            window.location.href = "./pages/virgo.html";
            break;
    
        default:
             console.log("Seleccione un signo del zodiaco válido");
            break;
    }
}
