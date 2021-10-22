const express = require('express');
const vision = require('@google-cloud/vision');
const router = express.Router();

router.post("/", async (req, res) => {
    const { route } = req.body;
    try {
        const client = new vision.ImageAnnotatorClient({
            keyFilename: "./APIKey.json"
        })
        const [result] = await client.textDetection(route);
        const annonations = result.textAnnotations;
        res.status(200).json({ "code": annonations[0].description })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "error": "Server Error!" })
    }
})

module.exports = router;