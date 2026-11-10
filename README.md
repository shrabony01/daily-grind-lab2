# Lab 2: Server-to-Server Communication

API for "The Daily Grind" coffee shop digital display. Fetches random facts from Useless Facts API using Node native fetch and returns a minimal JSON payload.

# Reflection Questions
1. Why re-format the data?

It keeps the payload minimal, sending only what the frontend display needs (text), and decouples our client from changes in the external API structure.

2. Why send a generic error message?

Prevents leaking internal server paths, network headers, or sensitive stack traces to the public client.

3. How to support other languages?

Check req.query.language and append ?language=${req.query.language || 'en'} to the external fetch URL.