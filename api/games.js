const _games = [
    {
        id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        'title': {
            de: 'Disney Villainous - Basis Spiel',
            en: 'Disney Villainous - Base Game'
        },
        image: 'base_game',
    },
    {
        id: '182bc46f-d515-40f7-bd56-295177f7177a',
        title: {
            de: 'Disney Villainous - Böse bis ins Mark',
            en: 'Disney Villainous - Wicked to the core'
        },
        image: 'first_expansion',
    },
    {
        id: '4b604c56-70f5-430b-a149-915c94f1afdb',
        title: {
            de: 'Disney Villainous - Das Böse schläft nie',
            en: 'Disney Villainous - Evil comes prepared'
        },
        image: 'second_expansion',
    },
]

export default {

    getAllGames(cb) {
        setTimeout(() => cb(_games), Math.random() * 1000)
    },
    getGame(cb, id) {
        setTimeout(() => cb(_games.filter((element) => {
            return element.id === id
        })), Math.random() * 1000)
    },
}
