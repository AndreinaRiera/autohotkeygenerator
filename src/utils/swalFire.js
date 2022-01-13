import Swal from 'sweetalert2'
import { goTo, openElementAccordion } from '@functions/utils';

export function swalDelete({ 
    title, 
    text
}) {
    
    return new Promise((resolve, reject) => {
        Swal.fire({
            title            : title || "¿Estas seguro?",
            text             : text || "Esta accion es irreversible",
            icon             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText : 'No, cancelar',
            reverseButtons   : true,
            customClass      : {
                confirmButton: 'btn btn-danger',
                cancelButton : 'btn btn-secondary mr-4'
            },
            buttonsStyling: false
          }).then((result) => {
            if (result.isConfirmed) {
                resolve(true);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // cancel btn clicked
                resolve(false);
            }else{
                //dismiss alert
                resolve(0);
            }
        }).catch((err) => {
            console.error(err);
            reject(err);
        });
    });
}


export function swalAlert(config) {

    const {
        title, 
        text,
        confirmButtonText,
        cancelButtonText,
        showCancelButton,
        showCloseButton,
        html,
        footer,
        linkScroll
    } = config;
    

    return new Promise((resolve, reject) => {
        Swal.fire({
            title            : title || "¿Estas seguro?",
            text             : text || (html ? "" : "Esta accion es irreversible"),
            html             : html || "",
            footer           : footer ? `<p style="text-align: center;" >${footer}</p>` : "",
            icon             : 'info',
            showCancelButton : config.hasOwnProperty('showCancelButton') ? showCancelButton : true,
            showCloseButton: config.hasOwnProperty('showCloseButton') ? showCloseButton : true,
            confirmButtonText: confirmButtonText || 'Si, continuar',
            cancelButtonText : cancelButtonText || 'No, cancelar',
            reverseButtons   : true,
            customClass      : {
                confirmButton: 'btn btn-success',
                cancelButton : 'btn btn-secondary mr-4'
            },
            buttonsStyling: false
          }).then((result) => {
            if (result.isConfirmed) {
                resolve(true);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // cancel btn clicked
                resolve(false);
            }else{
                //dismiss alert
                resolve(0);
            }
        }).catch((err) => {
            console.error(err);
            reject(err);
        });

        if(linkScroll){
            const link = document.querySelectorAll(".swal2-container a");
            
            if(link && link.length){
                

                for (let i = 0; i < link.length; i++) {
                    link[i].onclick = function (e) {
                        e.preventDefault();
                        Swal.close();

                        setTimeout(() => {
                            goTo(document.querySelector(e.target.hash));
                            
                            setTimeout(() => {
                                if (e.target.dataset.hasOwnProperty('accordion')) {
                                    openElementAccordion(e.target.dataset.accordion);
                                }
                            }, 700);
                        }, 300);
                    }; 
                }
            }
        }
    });
}