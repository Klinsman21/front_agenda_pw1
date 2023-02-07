

export function getInfoUser(user) {
    let data = {}
    switch (user) {
        case "klinsman":
            data = {
                name: "Klinsman Jorge",
                idade: 24,
                hobby: "Robótica",
                profissao: "Programação",
                email: "klinsman@mail.com",
                id: "klinsman",
            }
            break;
        case "joseane":
            data = {
                name: "Joseane Brilhante",
                idade: 29,
                hobby: "Ocúlos",
                profissao: "Programação",
                email: "josy@mail.com",
                id: "joseane",
            }
            break;
        case "maria":
            data = {
                name: "Maria Louise",
                idade: 0.2,
                hobby: "Dormir",
                profissao: "Comer",
                email: "maria@mail.com",
                id: "maria",
            }
            break;

        default:
            break;
    }
    return data;
}

export function getAllInfoUser() {
    let data = [
        {
            name: "Klinsman Jorge",
            idade: 24,
            hobby: "Robótica",
            profissao: "Programação",
            email: "klinsman@mail.com",
            id: "klinsman",
        },
        {
            name: "Joseane Brilhante",
            idade: 29,
            hobby: "Ocúlos",
            profissao: "Programação",
            email: "josy@mail.com",
            id: "joseane",
        },
        {
            name: "Maria Louise",
            idade: 0.2,
            hobby: "Dormir",
            profissao: "Comer",
            email: "maria@mail.com",
            id: "maria",
        }
    ]
    return data;
}