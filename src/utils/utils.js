// @1 PETICIONES Y SELECTORES

export function $(element) {
   return document.querySelector(element);
}

export function linkScroll(anchorSelector = 'a.scroll') {  
   document.querySelectorAll(anchorSelector).forEach(link => {
      link.addEventListener("click", function (e) {
         e.preventDefault(); 
         let destination = document.querySelector(this.hash);
         goTo(destination);
         
         if(link.dataset.hasOwnProperty('accordion')){
            openElementAccordion(link.dataset.accordion);
         }
     });
  });
}

export function goTo(destination) {
   destination.scrollIntoView({
      behavior: 'smooth'
  });
}

export function openElementAccordion(idElement){
   const BTN_CARD_ACCORDION = document.querySelector(idElement+" button");
   console.log(idElement, BTN_CARD_ACCORDION);
   if(BTN_CARD_ACCORDION.classList.contains("collapsed")){
      BTN_CARD_ACCORDION.click();
   }
}




// @1 STRING, OBJETOS Y ARRAYS

export function replaceAllObj(str, mapObj) {
   for (const key in mapObj) {
      str = str.replaceAll(key, mapObj[key])
   }

   return str;
}

export function htmlEntities(str) {
   return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}



// @1 PORTAPAPELES

export function setClipboard(text) {
   /* Copy the text in clipboard */
   navigator.clipboard.writeText(text);
}

/*export function popoverClipboard(element) {
   element.onclick = function () {
      this.setAttribute("title", "¡Copiado al portapapeles!");
   };

   element.onmouseout = function () { alert();
      this.setAttribute("title", "Copiar al portapapeles");
   };
}*/

export function getClipboard(){
   return new Promise((resolve, reject) => {
      navigator.clipboard.readText().then(function (text) {
         resolve(text);
      }).catch(err => {
         console.error('Failed to read clipboard contents: ', err);
         reject(err);
      });
   });
}








// @1 ARCHIVOS 

export function createFile(data) {
   const blob = new Blob([data]);
   const fileDownloadUrl = URL.createObjectURL(blob);

   return fileDownloadUrl;
}

export function downloadFile(href, name) {
   var a = document.createElement('a');
    a.href = href;
    a.download = name;
    a.click();
}