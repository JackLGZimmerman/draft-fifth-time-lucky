export const DDRAGON_BASE_URL =
    'https://ddragon.leagueoflegends.com'

export const CDRAGON_BASE_URL =
    'https://cdn.communitydragon.org'

export const DDRAGON_API_URL =
    `${DDRAGON_BASE_URL}/api`

export const DDRAGON_VERSIONS_URL =
    `${DDRAGON_API_URL}/versions.json`

export const DDRAGON_CHAMPION_IMAGE_URL = (
    patch: string,
    championId: string
): string =>
    `${DDRAGON_BASE_URL}/cdn/${patch}/img/champion/${championId}.png`

export const DDRAGON = {
    champion: {
        square: (patch: string, championId: string): string =>
            `${DDRAGON_BASE_URL}/cdn/${patch}/img/champion/${championId}.png`
    }
}

export const CDRAGON = {
    champion: {
        square: (patch: string, championId: string): string =>
            `${CDRAGON_BASE_URL}/${patch}/champion/${championId}/tile`,

        portrait: (patch: string, championId: string): string =>
            `${CDRAGON_BASE_URL}/${patch}/champion/${championId}/portrait`,

        splashCentered: (patch: string, championId: string): string =>
            `${CDRAGON_BASE_URL}/${patch}/champion/${championId}/splash-art/centered`
    },
    champions: {
        summary: () => 
            `${CDRAGON_BASE_URL}/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json`
    }
}
