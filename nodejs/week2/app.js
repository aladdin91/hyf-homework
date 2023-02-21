const express = require("express");
const app = express();
const documents = require("./documents.json")
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.get('/search', (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            res.send(documents);
        } else {
            const matchingDocs = documents.filter(doc =>
                Object.values(doc).some(value =>
                    value.toString().toLowerCase().includes(query.toLowerCase())
                )
            );
            if (matchingDocs.length === 0) {
                res.status(404).json({ "message": "no data found" })
            } else {
                res.send(matchingDocs);
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'something went wrong' });
    }
});


app.get('/documents/:id', (req, res) => {
    try {
        const id = req.params.id;
        const document = documents.find(doc => doc.id === Number(id));
        if (document) {
            res.send(document);
        } else {
            res.status(404).send('no id found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'something went wrong' });
    }
});

app.post('/search', (req, res) => {
    const { query, fields } = req.body;
    if (query && fields) {
        res.status(400).send('Both q and fields cannot be provided');
        return;
    }
    try {
        let results = documents;

        if (query) {
            results = results.filter(doc =>
                Object.values(doc).some(val =>
                    typeof val === 'string' && val.includes(query)
                )
            );
        }
        if (fields) {
            results = results.filter(doc =>
                Object.entries(fields).every(([field, value]) =>
                    doc[field] === value
                )
            );
        }
        res.send(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'something went wrong' });
    }
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});