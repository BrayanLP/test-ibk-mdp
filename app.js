const JSmodal = function(id){
    console.log('ID', id)
    let modal = document.getElementById(id);
    modal.classList.add("show");

    /** Cerrar el modal  */
    closeModal = () => {
        modal.classList.remove("show");
    }
   
    /** Eliminar Overlay  */
    removeOverlay = () =>{
        let modalOverlay = document.getElementsByClassName("modal-overlay");
        for (let i = 0; i < modalOverlay.length; i++) { 
            modalOverlay[i].remove(); 
        }
    }
    /** Ejecuta el cierre y eliminacion */
    closeAll = () =>{
        closeModal();
        removeOverlay();
    }
     /** Crear un elemento para el overlay */
     (createOverlay = () => {
        const overlay = document.createElement('div');
        const valueOverlay = document.createAttribute("class");
        valueOverlay.value = 'modal-overlay';
        overlay.setAttributeNode(valueOverlay) 
        document.body.appendChild(overlay);
    })();

    /** Modulo independiente de Button Close */
    ( closeButtons = ()=>{
        let closeButtons = modal.getElementsByClassName("modal-close");  
        for (let i = 0; i < closeButtons.length; i++) { 
            closeButtons[i].addEventListener('click', ()=> closeAll()); 
        }
    })();
 
}

document.getElementById("openModal").addEventListener('click', function() { JSmodal("modal"); });
document.getElementById("openMenu").addEventListener('click', function() { JSmodal("menu"); });
