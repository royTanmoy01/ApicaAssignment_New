// src/components/SetCache.js

import React, { useState } from "react";
import axios from "axios";

const SetCache = () => {
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");
	const [ttl, setTtl] = useState("");

	const handleSet = async () => {
		try {
			await axios.post("/cache", { key, value, ttl: parseInt(ttl, 10) });
			alert("Key set successfully");
			setKey("");
			setValue("");
			setTtl("");
		} catch (err) {
			alert(`Error setting key ${err}`);
		}
	};

	return (
		<div>
			<h2>Set Cache Value</h2>
			<input
				type="text"
				value={key}
				onChange={(e) => setKey(e.target.value)}
				placeholder="Enter key"
			/>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Enter value"
			/>
			<input
				type="text"
				value={ttl}
				onChange={(e) => setTtl(e.target.value)}
				placeholder="Enter time (ms)"
			/>
			<button onClick={handleSet}>Submit</button>
		</div>
	);
};

export default SetCache;
