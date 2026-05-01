const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN, 
  tracesSampleRate: 1.0,
});

console.log("Sentry is watching!");
throw new Error("Testing Sentry from the Live Server!");