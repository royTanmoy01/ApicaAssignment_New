// src/App.js

import React from "react";
import GetCache from "./components/getCacheData";
import SetCache from "./components/setCache";

const App = () => {
	return (
		<div>
			<h1>LRU Cache App</h1>
			<GetCache />
			<SetCache />
		</div>
	);
};

export default App;
