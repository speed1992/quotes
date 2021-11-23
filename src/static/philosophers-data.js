import { BUKOWSKI } from "./bukowski";
import { CAMUS } from "./camus";
import { CIORAN } from "./cioran";
import { CLAUSEWITZ } from "./clausewitz";
import { DIOGENES } from "./diogenes";
import { DOSTOEVSKY } from "./dostoevsky";
import { FREUD } from "./freud";
import { HERACLITUS } from "./heraclitus";
import { HITLER } from "./hitler";
import { KAFKA } from "./kafka";
import { KISSINGER } from "./kissinger";
import { MAO_ZEDONG } from "./mao";
import { MARIE_KONDO } from "./marie-kondo";
import { MARSHALL_MCLUHAN } from "./marshall-mcluhan";
import { NIETZSCHE } from "./nietzshe";
import { OSCAR_WILDE } from "./oscar_wilde";
import { PASCAL } from "./pascal";
import { PESSOA } from "./pessoa";
import { ROCHEFOUCAULD } from "./rochefoucauld";
import { SADE } from "./sade";
import { SARTRE } from "./sartre";
import { SCHOPENHAUER } from "./schopenhauer";
import { SIMONE_WEIL } from "./simone-weil";
import { convertQuoteArray } from "./utils/utils";
import { VOLTAIRE } from "./voltaire";

const data = [
    {
        id: 1,
        quotes: NIETZSCHE,
        value: "NIETZSCHE",
        displayName: "Nietzsche",
        fullName: "Friedrich Nietzsche"
    },
    {
        id: 2,
        quotes: MARIE_KONDO,
        value: "MARIE_KONDO",
        displayName: "Marie Kondo", fullName: "Marie Kondo"
    },
    {
        id: 3,
        quotes: SCHOPENHAUER,
        value: "SCHOPENHAUER",
        displayName: "Schopenhauer",
        fullName: "Arthur Schopenhauer"
    },
    {
        id: 4,
        quotes: CAMUS,
        value: "CAMUS", displayName: "Albert Camus",
        fullName: "Albert Camus"
    },
    {
        id: 5,
        quotes: DOSTOEVSKY,
        value: "DOSTOEVSKY", displayName: "Dostoevsky",
        fullName: "Fyodor Dostoevsky"
    },
    {
        id: 6,
        quotes: PESSOA,
        value: "PESSOA", displayName: "Pessoa",
        fullName: "Fernando Pessoa"
    },
    {
        id: 7,
        quotes: KAFKA,
        value: "KAFKA", displayName: "Kafka",
        fullName: "Franz Kafka"
    },
    {
        id: 8,
        quotes: HERACLITUS,
        value: "HERACLITUS", displayName: "Heraclitus",
        fullName: "Heraclitus"
    },
    {
        id: 9,
        quotes: SARTRE,
        value: "SARTRE", displayName: "Sartre",
        fullName: "Jean - Paul Sartre"
    },
    {
        id: 10,
        quotes: MAO_ZEDONG,
        value: "MAO_ZEDONG", displayName: "Mao Zedong",
        fullName: "Mao Zedong"
    },
    {
        id: 11,
        quotes: SADE,
        value: "SADE",
        displayName: "Sade",
        fullName: "Marquis de Sade"
    },
    {
        id: 12,
        quotes: FREUD,
        value: "FREUD",
        displayName: "Freud",
        fullName: "Sigmund Freud"
    },
    {
        id: 13,
        quotes: VOLTAIRE,
        value: "VOLTAIRE",
        displayName: "Voltaire",
        fullName: "Voltaire"
    },
    {
        id: 14,
        quotes: CIORAN,
        value: "CIORAN",
        displayName: "Cioran",
        fullName: "Emile M. Cioran"
    },
    {
        id: 15,
        quotes: DIOGENES,
        value: "DIOGENES",
        displayName: "Diogenes",
        fullName: "Diogenes"
    },
    {
        id: 16,
        quotes: KISSINGER,
        value: "KISSINGER",
        displayName: "Kissinger",
        fullName: "Henry A. Kissinger"
    },
    {
        id: 17,
        quotes: CLAUSEWITZ,
        value: "CLAUSEWITZ",
        displayName: "Clausewitz",
        fullName: "Carl von Clausewitz"
    },
    {
        id: 18,
        quotes: BUKOWSKI,
        value: "BUKOWSKI",
        displayName: "Bukowski",
        fullName: "Charles Bukowski"
    },
    {
        id: 19,
        quotes: OSCAR_WILDE,
        value: "OSCAR_WILDE",
        displayName: "Oscar Wilde",
        fullName: "Oscar Wilde"
    },
    {
        id: 20,
        quotes: ROCHEFOUCAULD,
        value: "ROCHEFOUCAULD",
        displayName: "Rochefoucauld",
        fullName: "Francois de La Rochefoucauld"
    },
    {
        id: 21,
        quotes: MARSHALL_MCLUHAN,
        value: "MARSHALL_MCLUHAN",
        displayName: "Marshall McLuhan",
        fullName: "Marshall McLuhan"
    },
    {
        id: 22,
        quotes: PASCAL,
        value: "PASCAL",
        displayName: "Pascal",
        fullName: "Blaise Pascal"
    },
    {
        id: 23,
        quotes: SIMONE_WEIL,
        value: "SIMONE_WEIL",
        displayName: "Simone Weil",
        fullName: "Simone Weil"
    },
    {
        id: 24,
        quotes: HITLER,
        value: "HITLER",
        displayName: "Hitler",
        fullName: "Adolf Hitler"
    }
]

var allQuotesCombined = data.reduce((acc, { quotes, fullName }) => {

    let newQuoteArray = convertQuoteArray(quotes, fullName)

    acc.quotes = [...acc.quotes, ...newQuoteArray]

    return acc

}, { id: 99, value: "ALL", displayName: "All", fullName: "", quotes: [] })

data.unshift(allQuotesCombined);

data.sort((a, b) => a.displayName.localeCompare(b.displayName))

export default data



