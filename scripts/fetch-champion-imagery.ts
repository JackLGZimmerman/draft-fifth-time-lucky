function fetchLandscapeImages() {
  return 0;
}

function fetchSquareImages() {
  return 0;
}

const commands = {
  landscape: fetchLandscapeImages,
  square: fetchSquareImages,
};

const cmd = process.argv[2];

if (!cmd || !(cmd in commands)) {
  console.log("Usage: npm run champions -- <fetch|skins|manifest>");
  process.exit(1);
}

commands[cmd as keyof typeof commands]();