import { getAllCountries } from "../../services/countryServices"

export const useGame = async ( itemsQuantity ) => {
    let countries = await getAllCountries();
    shuffleArray(countries);
    let items = [];

    for (let i = 0; i < itemsQuantity; i++) {
        const country = countries.pop();
        let options = [];
        for (let i = 0; i < 3; i++) {
            options[i] = countries.pop().name.common;
        }
        options[3] = country.name.common;
        shuffleArray(options);
        const item = {
            name: country.name.common,
            flag: country.flags.svg,
            options: options
        }
        items.push(item);
    }
    return {
        items,
        turn: 0,
    }
}

// The Fisher-Yates algorithm
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}