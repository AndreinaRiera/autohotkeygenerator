import './style.scss';
import {useState} from 'react';

import {Quote}           from '../../components/utils/Quote';
//import SideAd          from '../../components/utils/SideAd';

import Header           from '../../components/home/Header';
import CarouselMessages from '../../components/home/CarouselMessages';
import FAQ              from '../../components/home/FAQ';
import Contact          from '../../components/home/Contact';
import Footer           from '../../components/home/Footer';
import Steps            from './Steps';

import Generator        from '../../components/common/Generator';

export default function Home() {

  const [listActivators, setListActivators] = useState({});
  const [listActions, setListActions]       = useState({});

  return (
    <div id="App">
      <Header />
      <CarouselMessages />

      <div className="container mt-4 pt-4">
        <div className="row">
          <div className="col-12 offset-md-1 col-md-10">
            <Quote cite="AutoHotKey official site" url="https://www.autohotkey.com/" >
              AutoHotkey is a free, open-source scripting language for Windows that allows users to easily create small to complex scripts for all kinds of tasks such as: form fillers, auto-clicking, macros, etc.
            </Quote>
          </div>
        </div>

        <Steps number="1" step="Si aun no lo has hecho, <strong>descarga autohotkey</strong> desde su pagina oficial. Y sigue los pasos hasta instalarlo correctamente. ">
            <div className="col-12 col-md-auto text-center">
              <a href="https://www.autohotkey.com/" target="_blank" className="btn btn-secondary  btn_download" >Ir a la pagina oficial</a>
            </div>
        </Steps>

        <Steps number="2">
          <strong>¡Ahora es momento de crear tus atajos!</strong> Utiliza el generador de abajo para agregar la descripcion de tu atajo, luego el activador que desencadenara la accion, y por ultimo lo que quieres que ocurra. Al terminar, presiona el boton para crear el hotkey. 
          Puedes agregar tantos hotkeys como quieras. Al terminar presiona el boton para generar y descargar tu archivo AHK
        </Steps>
      </div>
        
      <div className="container-fluid">
        <div className="row section mt-4 pt-4">
          <div className="col-12">
            <Generator { ...{listActivators, listActions, setListActivators, setListActions} } />
          </div>
        </div>  
      </div>

      <div className="container mt-4 pt-4">
        <div className="row">
          <div className="col-4 col-lg-2 d-none d-md-block p-4 margin-auto">
            <img src="/images/file.png" alt="Imagen de archivo llamado myHotkeys.ahk" />
          </div>
          <div className="col">
          <Steps number="3">
            Para ejecutar tus hotkeys solo tienes que hacer dobleclick sobre el archivo que creaste. ¡Pero hacer eso cada vez que inicies la computadora seria improductivo! Por eso, <strong> vamos a configurarlo para que se inicie automaticamente. </strong> 
            <br /><br /> Lo primero que debes hacer es crear un acceso directo al archivo ahk que creaste antes, con todos tus atajos. Para esto haz click derecho sobre el archivo y presiona "crear acceso directo". 
            <br /><br /> Para windows 11 o windows 10, pulsa la tecla Windows junto con la tecla de la letra R  (<kbd>⌘</kbd> + <kbd>R</kbd>). Se abrira la ventana de "ejecutar" donde debes escribir "shell:startup" (sin las comillas). Eso a su vez abrira una ventana del administrador de archivos, donde debes colocar el acceso directo a tu archivo de hotkeys. Corta el acceso directo que creaste antes, y pegalo en la carpeta que se abrio.
          </Steps>
          </div>
        </div>

        <Steps number="4">
          <strong> ¡Ya estan listos tus atajos!</strong> ¡Y puedes tener tantos atajos y hotkeys en funcionamiento como quieras ¡Nunca son demasiados! <br />
          Recuerda que <strong>si descargas un nuevo archivo</strong> de hotkeys para actualizarlos, <strong>debes repetir el paso 6 nuevamente.</strong> Para asegurarte que esos hotkeys tambien se ejecutaran automaticamente cada vez que inicies la computadora.
        </Steps>
      </div>

      {/* <Templates /> */}

      <div className="section">
        <FAQ />
      </div>
     

      <Contact />
      <Footer />
    </div>
  );
}
