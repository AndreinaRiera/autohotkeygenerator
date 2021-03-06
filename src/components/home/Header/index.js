import "./style.scss";
import { useTranslation, Trans } from 'react-i18next';

import MainNavbar from "../Navbar";
import { PopoverBootstrap } from "@helpfulComponents/Popover";
import React from "react";

export default function Header() {
	const { t } = useTranslation();

	return (
		<header className="bg_primary" id="main_header">
			<MainNavbar />

			<div className="container">
				<div className="row">
					<section className="col p-4">
						<div className="description">
							<Trans i18nKey="header.description" components={{ p: <p /> }} />
						</div>
					</section>
					<div className="col-sm-4 text-center p-4 image">
						<PopoverBootstrap
							title={<><Trans i18nKey="header.popoverImg.title" components={{ a: <a className="link" target="_blank" rel="noopener noreferrer" href='https://www.freepik.es/search?query=teletrabajo&selection=1' /> }} /></>}
							content={<> <Trans i18nKey="header.popoverImg.content" components={{ p: <p /> }} /> </>}
						>
							<img src="/images/header.png" with="100%" alt="Imagen sobre automatizacion" />
						</PopoverBootstrap>
					</div>
				</div>
			</div>
		</header>
	);
}