const homePage = consoleList => {
  return `
  <!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"/>
  <title>RetroGaming</title>
</head>
<body>
  <h1>Welcome to RetroGaming</h1>
  <div class="consoles-container" >
  ${consoleList
    .map(console => {
      return `<div id="${console.abbrev}" class="console">
                <a href="/${console.abbrev}" >${console.name}</a>
              </div>`;
    })
    .join('')}
  </div>
</body>
</html>
  `;
};

module.exports = homePage;
