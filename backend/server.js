const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// GET endpoint to return name
app.get('/', (req, res) => {
res.json({"name":"Manish"});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

