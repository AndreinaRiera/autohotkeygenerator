import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';
import listLocales, { getCurrentLocale, getListCurrentLocales, autohotkeyGenerator } from "../../../i18n/list";

import Swal from 'sweetalert2'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Animate from '@helpfulComponents/Animate';
import { Scroll } from '@helpfulComponents/Scroll'



export default function MainNavbar() {
  const { t, i18n } = useTranslation();
  const currentLocale = getCurrentLocale(i18n.language);

  const fireMsg = () => {
    Swal.fire({
      title: t("navbar.navbarText.swal.title"),
      icon: 'question',
      confirmButtonText: t("navbar.navbarText.swal.confirmButtonText"),
      html: t("navbar.navbarText.swal.html")
    })
  };



  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" id="main_navbar" variant="dark">
      <Navbar.Brand as={Link} to="/"> {autohotkeyGenerator['product']['name']} <small><span className="badge badge-dark text-muted">beta</span></small></Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Scroll to="#Generator" className="nav-link">{t("navbar.generator")}</Scroll>
          <Scroll to="#contact" className="nav-link">{t("navbar.contact")}</Scroll>
        </Nav>
        <Nav>
          <Navbar.Text className="pointer" onClick={fireMsg}>
            <Animate entrance="flicker" iteration="infinite">
              {t("navbar.navbarText.label")}
            </Animate>
          </Navbar.Text>

          <NavDropdown className='ml-md-4' title={listLocales.hasOwnProperty(currentLocale) ? listLocales[currentLocale]['nativeName'] : ""}>
            {getListCurrentLocales().map(language => (
              <NavDropdown.Item
                key={language}
                disabled={(language === currentLocale) ? true : false}
                onClick={() => { i18n.changeLanguage(language) }}
              >
                {listLocales.hasOwnProperty(language) ? listLocales[language]['nativeName'] : language}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}