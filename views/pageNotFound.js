const pageNotFound = () => {
  return `
  <!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"/>
  <title>RetroGaming | Page Not Found</title>
</head>
<body>
  <a href="/">
    <img src="404.webp" id="404-image"/>
  </a>
</body>
</html>
  `;
};

module.exports = pageNotFound;
