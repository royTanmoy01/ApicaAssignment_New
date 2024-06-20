const express = require("express");
const handler = require("./cache");

const app = express();

const cache = handler(5);

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/cache/:key", (req, res) => {
	const { key } = req.params;
	const value = cache.get(key);
	if (value === null) {
		return res.status(404).json({ error: "Key not found or expired" });
	}
	res.json({ key, value });
});

app.post("/cache", (req, res) => {
	const { key, value, ttl } = req.body;
	if (!key || !value || !ttl) {
		return res.status(400).json({ error: "Key, value and ttl are required" });
	}
	cache.set(key, value, ttl);
	res.status(201).json({ message: "Key set successfully" });
});

app.delete("/cache/:key", (req, res) => {
	const { key } = req.params;
	cache.delete(key);
	res.json({ message: "Key deleted successfully" });
});


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
