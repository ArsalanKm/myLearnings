const fs = require("fs");

fs.readdir("/", (err, filenames) => {
  if (err) {
    console.log(err);
  }

  console.log(filenames);
});
