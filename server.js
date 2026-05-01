const Sentry = require("@sentry/node");
const express = require("express");
const app = express();

// 1. Initialize Sentry (The Spy)
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

app.use(express.json());

// 2. The "ModSafe" Connection Point
app.post("/flag-slang", async (req, res) => {
  try {
    const { text } = req.body;
    
    // This is where we will add the real AI/Slang logic soon
    console.log("Checking text:", text);
    
    res.json({ status: "success", message: "Text received" });

  } catch (error) {
    // 3. If ANYTHING goes wrong, Sentry tells you immediately
    Sentry.captureException(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ModSafe Backend is listening on port ${PORT}`);
});