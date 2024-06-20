// src/components/GetCache.js

import React, { useState } from "react";
import axios from "axios";

const GetCache = () => {
	const [key, setKey] = useState("");
	const [value, setValue] = useState(null);
	const [error, setError] = useState("");

	const handleGet = async () => {
		try {
			const response = await axios.get(`/cache/${key}`);
			setValue(response.data.value);
			setError("");
		} catch (err) {
			setError("Key not found or expired");
			setValue(null);
		}
	};

	return (
		<div>
			<h2>Request Cache Data</h2>
			<input
				type="text"
				value={key}
				onChange={(e) => setKey(e.target.value)}
				placeholder="Enter key"
			/>
			<button onClick={handleGet}>Submit</button>
			{value && <div>Value: {value}</div>}
			{error && <div style={{ color: "red" }}>{error}</div>}
		</div>
	);
};

export default GetCache;
