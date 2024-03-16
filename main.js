const floatingButton = document.querySelector('.floating-button');
const floatingClose = document.getElementsByClassName('float--closeButton');
const closeFloatArray = Array.prototype.slice.call(floatingClose);
const floatingDescriptionCont = document.querySelector('.float-description');
const morePermissionsButtonA2 = document.getElementById('more--A2');
const morePermissionsButtonB1 = document.getElementById('more--B1');
const morePermissionsButtonC1 = document.getElementById( 'more--C1' );
const morePermissionsButtonRenew = document.getElementById("more--renew");
const floatingDescriptionA2 = document.querySelector('.float-description--a2');
const floatingDescriptionB1 = document.querySelector('.float-description--b1');
const floatingDescriptionC1 = document.querySelector('.float-description--c1');
const floatingDescriptionRenew = document.querySelector('.float-description--renew');

floatingButton.addEventListener('click', backMenu);
closeFloatArray.forEach(function(closeButton){
    closeButton.addEventListener( 'click' , closeFloat)
})

morePermissionsButtonA2.addEventListener('click', showMoreFloatA2);
morePermissionsButtonB1.addEventListener('click', showMoreFloatB1);
morePermissionsButtonC1.addEventListener('click', showMoreFloatC1);
morePermissionsButtonRenew.addEventListener('click',showMoreFloatRenew);

//Función para cambiar el color del botón flotante de regreso al header

function backMenu (){

    const isFloatingButtonActive = floatingButton.classList.contains('green-background')

    if (!isFloatingButtonActive){
        floatingButton.classList.add('green-background');
    }else{
        floatingButton.classList.remove('green-background');
    }
}


const isFloatingDescriptionContInactive = floatingDescriptionCont.classList.contains('inactive');
const isFloatingDescriptionA2Inactive = floatingDescriptionA2.classList.contains('inactive');
const isFloatingDescriptionB1Inactive = floatingDescriptionB1.classList.contains('inactive');
const isFloatingDescriptionC1Inactive = floatingDescriptionC1.classList.contains('inactive');
const isFloatingDescriptionRenewInactive = floatingDescriptionRenew.classList.contains('inactive');

//Función para abrir ventana flotante
function showMoreFloatA2 (){
    console.log('is working');
            if (isFloatingDescriptionContInactive) {
                floatingDescriptionCont.classList.remove('inactive');
                floatingDescriptionCont.classList.add('active');
            }else{
                floatingDescriptionCont.classList.add('inactive');
                floatingDescriptionCont.classList.remove('active'); 
            };

            if (isFloatingDescriptionA2Inactive) {
                floatingDescriptionA2.classList.remove('inactive')
                floatingDescriptionA2.classList.add('active');
            }else{
                floatingDescriptionA2.classList.add('inactive')
                floatingDescriptionA2.classList.remove('active');                
            } 
    }

    function showMoreFloatB1 (){
        console.log('is working');
        if (isFloatingDescriptionContInactive) {
            floatingDescriptionCont.classList.remove('inactive');
            floatingDescriptionCont.classList.add('active');
        }else{
            floatingDescriptionCont.classList.add('inactive');
            floatingDescriptionCont.classList.remove('active');  
        };
        if (isFloatingDescriptionB1Inactive) {
            floatingDescriptionB1.classList.remove('inactive')
            floatingDescriptionB1.classList.add('active');
        }else{
            floatingDescriptionB1.classList.add('inactive')
            floatingDescriptionB1.classList.remove('active');  
        }  
    }

    function showMoreFloatC1 (){
        console.log('is working');
        if (isFloatingDescriptionContInactive) {
            floatingDescriptionCont.classList.remove('inactive');
            floatingDescriptionCont.classList.add('active');
        }else{
            floatingDescriptionCont.classList.add('inactive');
            floatingDescriptionCont.classList.remove('active');  
        };
        if (isFloatingDescriptionC1Inactive) {
            floatingDescriptionC1.classList.remove('inactive')
            floatingDescriptionC1.classList.add('active');
        }else{
            floatingDescriptionC1.classList.add('inactive')
            floatingDescriptionC1.classList.remove('active');      
        }    
    }

    function showMoreFloatRenew (){
        console.log('is working');
        if (isFloatingDescriptionContInactive) {
            floatingDescriptionCont.classList.remove('inactive');
            floatingDescriptionCont.classList.add('active');
        }else{
            floatingDescriptionCont.classList.add('inactive');
            floatingDescriptionCont.classList.remove('active');
        };
        if (isFloatingDescriptionRenewInactive) {
            floatingDescriptionRenew.classList.remove('inactive')
            floatingDescriptionRenew.classList.add('active');
        }else{
            floatingDescriptionRenew.classList.add('inactive')
            floatingDescriptionRenew.classList.remove('active');    
        }       
    }

//Función para cerrar ventana flotante
function closeFloat (){
    floatingDescriptionCont.classList.remove('active');
    floatingDescriptionCont.classList.add('inactive');
    console.log('Está fucionando');
}