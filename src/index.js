import "./styles/index.scss";
import "./styles/animations.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom";
import App from "./App";

import './i18n/i18n';

function loaded() {
	setTimeout(() => {
		document.getElementById("loading").classList.add("fade-out-loading");
	}, 600);
};

ReactDOM.render(
	//<React.StrictMode>
	<App />
	/*</React.StrictMode>*/,
	document.getElementById("root"),
	loaded()
);




/* const script = document.createElement("script");
	script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
	script.async = false;

const dataValues = {
	name       : "BMC-Widget",
	cfasync    : "false",
	id         : "andreinariera",
	description: "Support me on Buy me a coffee!",
	message    : "Thank you for using this tool that I designed with great enthusiasm. You can support my developments from buymeacoffee! It would be very useful to me",
	color      : "#FFDD00",
	position   : "Right",
	x_margin   : "18",
	y_margin   : "18"
};

for (const name in dataValues) {
	script.dataset[name] = dataValues[name];
}

document.body.appendChild(script); */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
