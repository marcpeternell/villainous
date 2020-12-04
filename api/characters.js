const _characters = [
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: '51ab6914-5bca-4618-8e4d-75834e16f067',
        name: {
            de: 'Käpt\'n Hook',
            en: 'Captain Hook',
        },
        image: 'hook'
    },
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: '651d28da-ac30-45a5-acbf-86c69309a488',
        name: {
            de: 'Malefiz',
            en: 'Maleficent',
        },
        image: 'maleficent'
    },
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: '36d74eca-1a2a-483e-88fe-d4731f3ce0c6',
        name: {
            de: 'Ursula',
            en: 'Ursula',
        },
        image: 'ursula'
    },
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: 'fffe91e3-f592-4bf3-9ab4-fe5734a70735',
        name: {
            de: 'Prinz John',
            en: 'Prince John',
        },
        image: 'john'
    },
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: '339560b9-4153-4c72-8be5-30dc8bce2474',
        name: {
            de: 'Dschafar',
            en: 'Jafar',
        }
        ,
        image: 'jafar'
    },
    {
        game_id: '9d24354a-1d3e-467d-a5d0-1fb773ea1de6',
        id: '83c40693-ac66-4b2a-bfbf-4e3ab2170642',
        name: {
            de: 'Herzkönigin',
            en: 'Queen of hearts',
        },
        image: 'queen'

    },
    {
        game_id: '182bc46f-d515-40f7-bd56-295177f7177a',
        id: 'efd9b0b4-7319-4f46-af74-4517fdf82fd9',
        name: {
            de: 'Dr. Facilier',
            en: 'Dr. Facilier',
        }
        ,
        image: 'facilier'
    }
    ,
    {
        game_id: '182bc46f-d515-40f7-bd56-295177f7177a',
        id: '88456a83-0d70-4776-a94d-1934f2764072',
        name: {
            de: 'Böse Königin',
            en: 'Evil Queen',
        },
        image: 'evil_queen'
    },
    {
        game_id: '182bc46f-d515-40f7-bd56-295177f7177a',
        id: '5548ad31-d140-4f39-9ca2-79d961a3df61',
        name: {
            de: 'Hades',
            en: 'Hades',
        },
        image: 'hades'
    },
    {
        game_id: '4b604c56-70f5-430b-a149-915c94f1afdb',
        id: '65287c72-69f7-45a0-a44b-3943fcec5088',
        name: {
            de: 'Rattenzahn',
            en: 'Ratigan',
        },
        image: 'ratigan'
    },
    {
        game_id: '4b604c56-70f5-430b-a149-915c94f1afdb',
        id: '875d9275-38c8-468f-8ba8-818982170ec2',
        name: {
            de: 'Scar',
            en: 'Scar',
        },
        image: 'scar'
    },
    {
        game_id: '4b604c56-70f5-430b-a149-915c94f1afdb',
        id: 'e201fc31-eec6-42ab-a1cb-7b4886f4f9bd',
        name: {
            de: 'Isma',
            en: 'Yzma',
        },
        image: 'yzma'
    }
]


export default {
    getAllCharacter(cb) {
        setTimeout(() => cb(_characters), Math.random() * 1000)
    },
    getGameCharacters(id) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve({
                game: _characters.filter((element) => {
                    return element.game_id === id
                })
            }), Math.random() * 1000)
        })
    }
}
