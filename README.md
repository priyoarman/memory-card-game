# Memory Card Game

A small Node + Express memory card game served from this repo.

**Prerequisites:**
- **Node.js and npm:** Install from https://nodejs.org (Node 16+ recommended).

**Quick start**

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
# or: node server.js
```

3. Open the game in your browser at http://localhost:3000 (or the port configured in `server.js`).

**What this does**
- Installs the project dependencies listed in `package.json` (`express`, `cors`, `sqlite3`).
- Runs the `start` script (`node server.js`) which serves the frontend files and any API routes.

**Project files**
- `index.html` — frontend entry
- `styles.css` — styles
- `script.js` — client-side game logic
- `server.js` — Express server and API
- `package.json` — project metadata and scripts

**Notes**
- If you change the server port, update the URL you open in the browser.
- To add new dependencies, run `npm install <pkg> --save` and commit the updated `package.json` and `package-lock.json`.

**License**
This project uses the ISC license as declared in `package.json`.
