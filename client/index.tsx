import React from "react";
import { createRoot } from "react-dom/client";
import './src/assets/styles/main.css';
import App from "./src/App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>
);