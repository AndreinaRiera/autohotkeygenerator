import './style.scss';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';


import {Quote}            from '../../components/utils/Quote';
//import SideAd           from '../../components/utils/SideAd';

import Header             from '../../components/home/Header';
import CarouselMessages   from '../../components/home/CarouselMessages';
import ListItemsGenerator from '../../components/home/ListItemsGenerator';
import FAQ                from '../../components/home/FAQ';
import Contact            from '../../components/home/Contact';
import Footer             from '../../components/home/Footer';
import Steps              from './Steps';

import Generator          from '../../components/common/Generator';

export default function Home() {
  const { t, i18n } = useTranslation();

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
              {t("home.AutoHotkey")}
            </Quote>
          </div>
        </div>

        <Steps number="1" step={t("home.stepDownload")}>
            <div className="col-12 col-md-auto text-center">
              <a href="https://www.autohotkey.com/" target="_blank" className="btn btn-secondary  btn_download" >{t("home.download")}</a>
            </div>
        </Steps>

        <Steps number="2">
          {t("home.stepCreate")}
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
            <img src="/images/file.png" alt={t("home.altImgFile")} />
          </div>
          <div className="col">
          <Steps number="3">
            {t("home.stepEunAutomatically")}
          </Steps>
          </div>
        </div>

        <Steps number="4">
          {t("home.stepReady")}
        </Steps>
      </div>

      {/* <Templates /> */}

      <section className='container section pt-1'>
        <ListItemsGenerator activators={listActivators} actions={listActions} />
      </section>
      

      <div className="section">
        <FAQ />
      </div>
     

      <Contact />
      <Footer />
    </div>
  );
}
