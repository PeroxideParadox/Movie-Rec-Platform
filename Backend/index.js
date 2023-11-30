const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const csvFilePath = path.join(__dirname, 'data', 'netflix_titles.csv');

let data = [];

// Middle_ware
const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// File read

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    data.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error.message);
  });

app.post('/api/search', (req, res) => {
  try {
    const { category, name } = req.body;
    console.log({
      category,
      name
    });

    if (!category && !name) {
      return res.status(400).json({
        success: false,
        message: "Error in fetch info"
      });
    }

    const searchData = data.filter((item) => {
      const clientCategory = category.trim().toLowerCase();
      const clientName = name.trim().toLowerCase();
    
      return (
        item.Category &&
        item.Name &&
        item.Category.trim().toLowerCase() === clientCategory &&
        item.Name.trim().toLowerCase() === clientName
      );
      });
      
      res.status(200).json({
        success: true,
        searchData,
      });
      
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, this is your Express backend!');
});