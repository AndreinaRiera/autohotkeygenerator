import Swal from 'sweetalert2'

export function swalDelete({ 
    title = "¿Estas seguro?", 
    text = "Esta accion es irreversible" 
}) {
    console.log(title, text);
    return new Promise((resolve, reject) => {
        Swal.fire({
            title            : title,
            text             : text,
            icon             : 'warning',
            showCancelButton : true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText : 'No, cancelar',
            reverseButtons   : true,
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-secondary mr-4'
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