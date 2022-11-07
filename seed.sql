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
VALUES('NES', 'NINTENDO ENTERTAINMENT SYSTEM', '1986-09-27', 2, 'The Nintendo Entertainment System is an 8-bit 3rd-gen.'),
('SNES', 'SUPER NINTENDO ENTERTAINMENT SYSTEM', '1990-09-21', 2, 'The Super Nintendo Entertainment System a 16-bit.'),
('N64', 'NINTENDO 64', '1996-09-29', 4, 'The Nintendo 64 is a 64-bit 5th gen.'),
('SMS', 'SEGA MASTER SYSTEM', '1986-09-01', 2, 'The Master System is an 8-bit.'),
('SMD', 'SEGA GENESIS', '1989-08-14', 2, 'The Sega Genesis is a 16/32-bit 4th-gen Sega.')