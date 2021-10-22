const axios = require("axios");
const express = require("express");
const vision = require("@google-cloud/vision");
const router = express.Router();

router.post("/", async (req, res) => {
  const { route } = req.body;
  try {
    const client = new vision.ImageAnnotatorClient({
      keyFilename: "./APIKey.json",
    });
    const [result] = await client.textDetection(route);
    const annonations = result.textAnnotations;
    console.log(annonations[0].description);
    res.status(200).json({ code: annonations[0].description });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error!" });
  }
});

router.post("/output", async (req, res, next) => {
  const { code,language } = req.body;
  //We can input language and code from frontend
  const x = await axios.post("https://api.jdoodle.com/v1/execute", {
    clientId: "ab42481cb8b420578f54ce9c4f7e87ab",
    clientSecret:
      "80d1afaa4977ef4cee4d8de40b83294a851b51f0250ad15dd8f555ff4d86e1f8",
    script: "print('Hello')",
    versionIndex: "0",
    language: "python3",
  });
  res.status(200).json({
    output: x.data.output,
    memory: x.data.memory,
    cputime: x.data.cpuTime,
  });
});

module.exports = router;
