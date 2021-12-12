import "./style.scss";
import MainNavbar from "../Navbar";
import { PopoverBootstrap } from "../../utils/Popover";
import React from "react";

export default function Header() {

	return (
		<header className="bg_primary" id="main_header">
			<MainNavbar />

			<div className="container-fluid">
				<div className="row">
					<section className="col p-4">
						<div className="description">
							<p>Crea hotkeys</p>
							<p>Mejora tu productividad</p>
							<p>Optimiza tu vida</p>
						</div>
					</section>
					<div className="col-sm-4 text-center p-4 image">
						<PopoverBootstrap
							title={<>Este vector es cortesia de <a target="_blank" rel="noopener noreferrer" href='https://www.freepik.es/search?query=teletrabajo&selection=1'>freepik.es</a></>}
							content={<>Freepik es una biblioteca de imagenes, vectores y videos libres de copyright <br /><br /> ¡Con mucho contenido gratis para todos tus proyectos!</>}
						>
							<img src="/images/header.png" with="100%" alt="Imagen sobre automatizacion" />
						</PopoverBootstrap>
					</div>
					<div className="col-sm-1"></div>
				</div>
			</div>
		</header>
	);
}