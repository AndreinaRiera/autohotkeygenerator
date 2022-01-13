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

         if (link.dataset.hasOwnProperty('accordion')) {
            openElementAccordion(link.dataset.accordion);
         }
      });
   });
}

export function goTo(destination) {
   destination.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
   });
}

export function openElementAccordion(idElement) {
   const BTN_CARD_ACCORDION = document.querySelector(idElement + " button");

   if (BTN_CARD_ACCORDION && BTN_CARD_ACCORDION.classList.contains("collapsed")) {
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


export function stringStartsWith(URL, word) {
   var words = Array.isArray(word) ? word : [word];
   URL = URL.toUpperCase();

   words.forEach(word => {
      if (URL.startsWith(word.toUpperCase)) {
         return true;
      }
   });

   return false;
}


export function strRemove(phrase, remove) {
   var removes = Array.isArray(remove) ? remove : [remove];

   removes.forEach(word => {
      phrase = phrase.replaceAll(word, '');
   });

   return phrase;
}

export function randomSortArray(unshuffled) {
   return unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
}







// @1 URL, REDIRECCIONAMIENTOS E HIPERVINCULOS

export function isValidURL(URL) {
   if (stringStartsWith(URL, ['https:', 'http:', 'www.'])) {
      return true;
   }

   return false;
}


export function beautifyURL(URL) {
   return strRemove(URL, ['https://', 'http://', 'https:', 'http:', 'www.']);
}


export function openURL(URL, blank = "_blank") {
   if (URL) {
      window.open(URL, blank);
   }
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

export function getClipboard() {
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

export function imageSize(src) {
   return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
         resolve([this.width, this.height]);
      }

      img.onerror = function (e) {
         resolve([0, 0]);
         //reject(e);
      }

      img.src = src;
   });
}

export function imageCurrentResize(sizes, currentHeight, sizeOfWidth = true) {
   if (sizes && sizes[0] && sizes[1]) {
      var width = sizeOfWidth ? sizes[0] : sizes[1];
      var height = sizeOfWidth ? sizes[1] : sizes[0];

      var percertageWidth = (width * 100) / height;
      var currentWidth = ((currentHeight * percertageWidth) / 100);

      return currentWidth;
   }

   return 0;
}



// @1 URL Y METADATA

/* export function getMetadata(URL) {
   const ogs = require('open-graph-scraper');

   return new Promise((resolve, reject) => {
      ogs({ url: URL }).then(({ error, result, response }) => {
         if (error) {
            reject(result);
         } else {
            resolve(response);
         }

          console.log('error:', error);  // This returns true or false. True if there was an error. The error itself is inside the results object.
         console.log('result:', result); // This contains all of the Open Graph results
         console.log('response:', response); // This contains the HTML of page 
      }).catch (e => console.error(e));
   });
} */