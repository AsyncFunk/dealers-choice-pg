const pg = require('pg');

const client = new pg.Client('postgres://localhost/retrogaming');

client.connect();
client.query(`
DROP TABLE IF EXISTS retroconsoles;
CREATE TABLE retroconsoles(
  id SERIAL PRIMARY KEY ,
  abbrev VARCHAR(4),
  name VARCHAR(50),
  releaseYear DATE,
  numberOfPlayers INTEGER, 
  details TEXT
);

INSERT INTO retroconsoles (abbrev, name, releaseYear, numberOfPlayers, details) 
VALUES('NES', 'NINTENDO ENTERTAINMENT SYSTEM', '1986-09-27', 2, 'The Nintendo Entertainment System (NES) is an 8-bit third-generation home video game console produced by Nintendo. It was first released in Japan in 1983 as the Family Computer (FC), commonly known as the Famicom. The NES, a redesigned version, was released in American test markets on October 18, 1985, before becoming widely available in North America and other countries. After developing a series of successful arcade games in the early 1980s, Nintendo planned to create a home video game console. Rejecting more complex proposals, the Nintendo president Hiroshi Yamauchi called for a simple, cheap console that ran games stored on cartridges.'),
('SNES', 'SUPER NINTENDO ENTERTAINMENT SYSTEM', '1990-09-21', 2, 'The Super Nintendo Entertainment System (SNES), commonly shortened to Super NES or Super Nintendo, is a 16-bit home video game console developed by Nintendo that was released in 1990 in Japan and South Korea, 1991 in North America, 1992 in Europe and Oceania, and 1993 in South America. In Japan, it is called the Super Famicom (SFC). In South Korea, it is called the Super Comboy[e] and was distributed by Hyundai Electronics. The system was released in Brazil on August 30, 1993, by Playtronic. Although each version is essentially the same, several forms of regional lockout prevent cartridges for one version from being used in other versions.'),
('N64', 'NINTENDO 64', '1996-09-29', 4, 'The Nintendo 64 (N64) is a home video game console developed by Nintendo. The successor to the Super Nintendo Entertainment System, it was released on June 23, 1996, in Japan, on September 29, 1996, in North America, and March 1, 1997, in Europe and Australia. It was the last major home console to use cartridges as its primary storage format until the Nintendo Switch in 2017. It competed primarily with the Sony PlayStation and the Sega Saturn.Development began in 1993 in partnership with Silicon Graphics, using the codename Project Reality, then a test model and arcade platform called Ultra 64. The final design was named after its 64-bit CPU.'),
('SMS', 'SEGA MASTER SYSTEM', '1986-09-01', 2, 'The Master System is an 8-bit third-generation home video game console manufactured by Sega. It was originally a remodeled export version of the Sega Mark III, the third iteration of the SG-1000 series of consoles, which was released in Japan in 1985 and featured enhanced graphical capabilities over its predecessors. The Master System launched in North America in 1986, followed by Europe in 1987, and then in Brazil and Korea in 1989. A Japanese version of the Master System was also launched in 1987, which features a few enhancements over the export models (and by proxy the original Mark III): a built-in FM audio chip, a rapid-fire switch, and a dedicated port for the 3D glasses.'),
('SMD', 'SEGA GENESIS', '1989-08-14', 2, 'The Sega Genesis, known as the Mega Drive outside North America, is a 16-bit fourth-generation home video game console developed and sold by Sega. The Genesis was Segas third console and the successor to the Master System. Sega released it in 1988 in Japan as the Mega Drive, and in 1989 in North America as the Genesis. In 1990, it was distributed as the Mega Drive by Virgin Mastertronic in Europe, Ozisoft in Australasia, and Tec Toy in Brazil. In South Korea, it was distributed by Samsung as the Super Gam*Boy and later the Super Aladdin Boy. Designed by an R&D team supervised by Hideki Sato and Masami Ishikawa, the Genesis was adapted from Segas System 16 arcade board, centered on a Motorola 68000 processor as the CPU.')

`);

module.exports = client;
