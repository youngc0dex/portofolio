import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Get the basename from package.json homepage or default to '/'
const getBasename = () => {
	// Extract the path from homepage URL in package.json
	// Example: "https://youngc0dex.github.io/portofolio/" -> "/portofolio/"
	try {
		const homepage = process.env.PUBLIC_URL;
		// Extract path from URL 
		return homepage;
	} catch (error) {
		return '/';
	}
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter basename={getBasename()}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
