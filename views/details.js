const details = console => {
  return `
  <!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"/>
  <title>RetroGaming | ${console.name}</title>
</head>
<body>
  <nav>
    <a href="/">Home</a>
  </nav>
  <h1>${console.name} (${console.abbrev.toUpperCase()})</h1>
  <h2>Released ${console.releaseYear}</h2>
  <div class="single-console-container" >
    <img src="${console.abbrev}.png" id="${console.abbrev}-image"/>
    <p>${console.details}</p>
  </div>
</body>
</html>
  `;
};

module.exports = details;
