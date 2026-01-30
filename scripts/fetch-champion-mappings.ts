import { CDRAGON } from "./constants";

type ChampionSummary = {
  id: number;
  name: string;
};

async function fetchSummary<T>(): Promise<Record<string, T>> {
  const response = await fetch(CDRAGON.champions.summary());

  if (!response.ok) {
    throw new Error(`Failed to fetch champions summary: ${response.status}`);
  }

  return response.json();
}

async function getChampionMappings<
  T extends { id: number; name: string }
>(
  championsSummary: Record<string, T>
): Promise<Record<string, number>> {
  return Object.fromEntries(
    Object.values(championsSummary).map(champ => [
      champ.name,
      champ.id
    ])
  );
}

const commands = {
  championMappings: async () => {
    const summary = await fetchSummary<ChampionSummary>();
    const mappings = await getChampionMappings(summary);
    console.log(mappings);
  },
};

async function main() {
  const cmd = process.argv[2];

  if (!cmd || !(cmd in commands)) {
    console.log("Usage: npm run champions -- <championMappings>");
    process.exit(1);
  }

  await commands[cmd as keyof typeof commands]();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
