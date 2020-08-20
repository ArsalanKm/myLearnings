#!/usr/bin/env node
const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // Bad Code Here!!!!

  for (let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if (err) console.log(err);

      console.log(filename, stats.isFile());
    });
  }

  //   solution 1

  
});
