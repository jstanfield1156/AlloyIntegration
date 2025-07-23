const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
    console.log("✅ Received form submission:", req.body);  // Logging the incoming data

    const data = req.body;

    const auth = Buffer.from(`${process.env.ALLOY_TOKEN}:${process.env.ALLOY_SECRET}`).toString("base64");

    try {
        const response = await axios.post("https://sandbox.alloy.co/v1/evaluations/", data, {
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
            }
        });

        console.log("✅ Alloy API outcome:", response.data.summary.outcome);  // Optional logging
        res.json({ outcome: response.data.summary.outcome });
    } catch (err) {
        if (err.response) {
            console.error("❌ Alloy API Error:", err.response.status, err.response.data);
            res.status(500).json({ error: err.response.data });
        } else {
            console.error("❌ Unknown error:", err.message);
            res.status(500).json({ error: err.message });
        }
    }
});

app.listen(3001, () => {
    console.log("🚀 Server running at http://localhost:3001");
});
