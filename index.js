const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
    console.log("getting ",scores);
    res.send(Object.fromEntries(scores));
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
    console.log("setting",req.body);
    scores = new Map(Object.entries(req.body));
    console.log(scores);
    res.send(Object.fromEntries(scores));
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let scores = new Map();