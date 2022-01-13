import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitScroll from "@hooks/initScroll";

import Header from './components/home/Header';

import Terms from "./pages/Terms/";
import Updates from "./pages/Updates/";
import Resources from "./pages/Resources/";
import Crowdfunding from "./pages/Crowdfunding/";
import Home from "./pages/Home/";

import Footer from './components/home/Footer';

export default function App() {
    return (
        <BrowserRouter>
            <InitScroll effect="soft" />

            <Header />

            <Routes>
                <Route path="/terms" element={<Terms />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/crowdfunding" element={<Crowdfunding />} />
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
