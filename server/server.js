const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const DANIEL_DNA_FILE = 'genome_Daniel_Zautner_v4_Full_20180401133702.txt';
const PORT = process.env.PORT || 8080;

let dna = '';

app.get('/', function(req, res) {
  res.send(dna);
});

const dnaFile = path.join(__dirname, '../', DANIEL_DNA_FILE);

fs.readFile(dnaFile, function(err, data) {
  dna = data.toString('utf8');
  app.listen(PORT);
  console.log('Running daniel on port ' + PORT);
});
