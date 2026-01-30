import { CDRAGON, DDRAGON, DDRAGON_VERSIONS_URL } from './constants'

function fetchCenteredImages() {

}

async function fetchTileImages() {

}

function fetchPortraitImages() {

}



async function fetchPatch(): Promise<string[]> {
  const response = await fetch(DDRAGON_VERSIONS_URL)

  if (!response.ok) {
    throw new Error(`Failed to fetch patches: ${response.status}`)
  }

  const data: string[] = await response.json()
  return data
}

async function getLatestVersion(): Promise<string> {
  const versions = await fetchPatch()
  return versions[0]
}

const commands = {
  portrait: fetchPortraitImages,
  tile: fetchTileImages,
  centered: fetchCenteredImages
};

const cmd = process.argv[2];

if (!cmd || !(cmd in commands)) {
  console.log("Usage: npm run champions -- <fetch|skins|manifest>");
  process.exit(1);
}

commands[cmd as keyof typeof commands]();