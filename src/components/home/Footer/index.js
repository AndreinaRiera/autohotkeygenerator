import './style.scss';
import { NavLink } from "react-router-dom";
import {useState} from 'react';

import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey, autohotkeyGenerator } from "@i18n/list";

import Animate from '@helpfulComponents/Animate';

import BtnBuymeacoffee from '@commonComponents/BtnBuymeacoffee';
import ModalNewsletterForm from '@commonComponents/ModalNewsletterForm';

import { Scroll } from '@helpfulComponents/Scroll';

import popupImages from '@functions/popupImages'
import { beautifyURL } from '@functions/utils';

export default function Footer() {
    const [stateModalNewsletter, setstateModalNewsletter] = useState(false);

    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const blank = {
        target: "_blank",
        rel: "noopener"
    }

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    const { product, company } = autohotkeyGenerator;

    const twitter = product.socialNetworks.twitter;
    const buymeacoffee = product.socialNetworks.buymeacoffee;
    const email = product.email.main;
    const address = company.address;

    function showPopupImages() {
        popupImages({
            src: "",
            images: [
                "https://media3.giphy.com/media/Pxj2KTQfem75GWBxjo/giphy.gif?cid=ecf05e4731e15ebee8fff1177fe34cc5325454be3a51faf4&rid=giphy.gif&ct=g",
                "https://media1.giphy.com/media/NyniJ2Nf2ZzlE8GYsl/200w.webp?cid=ecf05e47686081fc02d6ac2d2159c1cae58983b6609dbc14&rid=200w.webp&ct=g",
                "https://media4.giphy.com/media/h5p1o4TMGYbyZ2UexI/200w.webp?cid=ecf05e47686081fc02d6ac2d2159c1cae58983b6609dbc14&rid=200w.webp&ct=g",
                "https://media0.giphy.com/media/5kC4JAjX6ruaZCG2AI/200w.webp?cid=ecf05e47686081fc02d6ac2d2159c1cae58983b6609dbc14&rid=200w.webp&ct=g",
                "https://media0.giphy.com/media/5kC4JAjX6ruaZCG2AI/200w.webp?cid=ecf05e47686081fc02d6ac2d2159c1cae58983b6609dbc14&rid=200w.webp&ct=g",
                "https://media0.giphy.com/media/5kC4JAjX6ruaZCG2AI/200w.webp?cid=ecf05e47686081fc02d6ac2d2159c1cae58983b6609dbc14&rid=200w.webp&ct=g",
                "https://media3.giphy.com/media/13IjZrEsZpEJLW/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media3.giphy.com/media/13IjZrEsZpEJLW/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media2.giphy.com/media/3tpzkqpbVdshXX1By7/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media2.giphy.com/media/3tpzkqpbVdshXX1By7/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media2.giphy.com/media/9sEmlm8kV4PSM/giphy.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=giphy.webp&ct=g",
                "https://media1.giphy.com/media/dkhLpFGa1qvYOQgUxk/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media1.giphy.com/media/Y0J6LMnBmjJvrjqAYj/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                "https://media1.giphy.com/media/ld2t4ZrMNNRZYMhof6/200w.webp?cid=ecf05e47ac6a94e47530c2831d6d448a6237f407ec23d0b1&rid=200w.webp&ct=g",
                
            ]   
        })
    }

    return ( 
        <footer className="bg-success-dark" id="footer">
            <div className="container py-3">
                <div className="row details mt-5 pb-3">
                    <div className="col-12 col-md">
                        <h5> {t("footer.socialNetworks")} </h5>

                        <p><a href={twitter} {...blank} >{beautifyURL(twitter)}</a></p>
                        <p><a href={buymeacoffee} {...blank} >{beautifyURL(buymeacoffee)}</a> </p>
                        <p></p>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.contacts")} </h5>

                        <p className='pointer' onClick={() => { setstateModalNewsletter(true) }}> {t("footer.newsletter")} </p>
                        <address>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                            <p><a href={`https://www.google.com/maps/place/${address}`} {...blank} > {address}</a></p>
                        </address>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.product")} </h5>

                        <p><Scroll to="#ideas" accordion={true} link={false}> {t("footer.documentation")}</Scroll></p>
                        <p className='pointer' onClick={showPopupImages}> {t("footer.prices")} </p>
                        <p><NavLink to="/terms" className={({ isActive }) => isActive? "active": ''}> {t("footer.terms")} </NavLink></p>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.developing")} </h5>

                        <p><NavLink to="/resources" className={({ isActive }) => isActive? "active": ''}> {t("footer.resources")} </NavLink></p>
                        <p><NavLink to="/crowdfunding" className={({ isActive }) => isActive? "active": ''}> {t("footer.crowdfunding")} </NavLink></p>
                        <p><NavLink to="/updates" className={({ isActive }) => isActive? "active": ''}> {t("footer.updates")} </NavLink></p>
                    </div>
                </div>

                <hr />

                <div className="row mt-4">
                    <div className="col-12 col-sm-auto ">
                        <BtnBuymeacoffee />
                    </div>
                    <div className="col-12 col-sm-auto ">
                        <a href={`${documentationURL}/AutoHotkey.htm`} {...blank} className="btn btn-outline-light">
                            {t("footer.bottom.documentation")}
                        </a>
                    </div>

                    <div className="col text-center text-sm-right color-success-light">
                        {t("footer.bottom.made")}
                        <Animate  entrance="heartbeat" iteration="infinite">
                            <i className="fas fa-heart mx-2"></i>
                        </Animate>
                        {t("footer.bottom.by")}
                    </div>
                </div>
            </div>

            <ModalNewsletterForm show={stateModalNewsletter} setState={setstateModalNewsletter} />
        </footer>
    )
}