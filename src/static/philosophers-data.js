import { ALAN_WATTS, AURELIUS, BEAUVOIR, BECKETT, BUKOWSKI, CAMUS, CARL_JUNG, CIORAN, CLAUSEWITZ, DARWISH, DIOGENES, DOSTOEVSKY, FREUD, HERACLITUS, HIPPOCRATES, HITLER, HUXLEY, KAFKA, KANT, KISSINGER, KRISHNAMURTI, LAO_TZU, LIGOTTI, MAO, MARIE_KONDO, MARSHALL_MCLUHAN, NASSIM_TALEB, NAVAL_RAVIKANT, NIETZSCHE, ORWELL, OSCAR_WILDE, OSHO, PASCAL, PESSOA, PETERSON, ROBERT_GREENE, ROCHEFOUCAULD, RUMI, RUSSELL, SADE, SALVADOR_DALI, SARTRE, SCHOPENHAUER, SENECA, SIMONE_WEIL, VICTOR_FRANKL, VINCENT_VAN_GOGH, VIRGINIA_WOOLF, VOLTAIRE, ZIZEK } from './assets';
import { doOperationsOnData } from "./utils/utils";

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
        quotes: MAO,
        value: "MAO", displayName: "Mao Zedong",
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
    },
    {
        id: 25,
        quotes: KANT,
        value: "KANT",
        displayName: "Immanuel Kant",
        fullName: "Immanuel Kant"
    },
    {
        id: 26,
        quotes: OSHO,
        value: "OSHO",
        displayName: "Osho",
        fullName: "Osho"
    },
    {
        id: 27,
        quotes: VIRGINIA_WOOLF,
        value: "VIRGINIA_WOOLF",
        displayName: "Virginia Woolf",
        fullName: "Virginia Woolf"
    },
    {
        id: 28,
        quotes: BEAUVOIR,
        value: "BEAUVOIR",
        displayName: "Beauvoir",
        fullName: "Simone De Beauvoir"
    },
    {
        id: 29,
        quotes: CARL_JUNG,
        value: "CARL_JUNG",
        displayName: "Carl Jung",
        fullName: "Carl Jung"
    },
    {
        id: 30,
        quotes: SALVADOR_DALI,
        value: "SALVADOR_DALI",
        displayName: "Salvador",
        fullName: "Salvador Dali"
    },
    {
        id: 31,
        quotes: VINCENT_VAN_GOGH,
        value: "VINCENT_VAN_GOGH",
        displayName: "Vincent Gogh",
        fullName: "Vincent Van Gogh"
    },
    {
        id: 32,
        quotes: ALAN_WATTS,
        value: "ALAN_WATTS",
        displayName: "Alan Watts",
        fullName: "Alan Watts"
    },
    {
        id: 33,
        quotes: HIPPOCRATES,
        value: "HIPPOCRATES",
        displayName: "Hippocrates",
        fullName: "Hippocrates"
    },
    {
        id: 34,
        quotes: KRISHNAMURTI,
        value: "KRISHNAMURTI",
        displayName: "Krishnamurti",
        fullName: "Jiddu Krishnamurti"
    },
    {
        id: 35,
        quotes: PETERSON,
        value: "PETERSON",
        displayName: "Peterson",
        fullName: "Jordan Peterson"
    },
    {
        id: 36,
        quotes: VICTOR_FRANKL,
        value: "VICTOR_FRANKL",
        displayName: "Victor Frankl",
        fullName: "Victor Frankl"
    },
    {
        id: 37,
        quotes: AURELIUS,
        value: "AURELIUS",
        displayName: "Marcus Aurelius",
        fullName: "Marcus Aurelius"
    },
    {
        id: 38,
        quotes: ROBERT_GREENE,
        value: "ROBERT_GREENE",
        displayName: "Robert Greene",
        fullName: "Robert Greene"
    },
    {
        id: 39,
        quotes: NAVAL_RAVIKANT,
        value: "NAVAL_RAVIKANT",
        displayName: "Naval Ravikant",
        fullName: "Naval Ravikant"
    },
    {
        id: 40,
        quotes: LIGOTTI,
        value: "LIGOTTI",
        displayName: "Thomas Liggoti",
        fullName: "Thomas Liggoti"
    },
    {
        id: 41,
        quotes: SENECA,
        value: "SENECA",
        displayName: "Seneca",
        fullName: "Seneca"
    },
    {
        id: 42,
        quotes: ZIZEK,
        value: "ZIZEK",
        displayName: "Zizek",
        fullName: "Slavoj Žižek"
    },
    {
        id: 43,
        quotes: BECKETT,
        value: "BECKETT",
        displayName: "Samuel Beckett",
        fullName: "Samuel Beckett"
    },
    {
        id: 44,
        quotes: DARWISH,
        value: "DARWISH",
        displayName: "Darwish",
        fullName: "Mahmoud Darwish"
    },
    {
        id: 45,
        quotes: HUXLEY,
        value: "Huxley",
        displayName: "Huxley",
        fullName: "Aldous Huxley"
    },
    {
        id: 46,
        quotes: ORWELL,
        value: "Orwell",
        displayName: "Orwell",
        fullName: "George Orwell"
    },
    {
        id: 47,
        quotes: RUMI,
        value: "Rumi",
        displayName: "Rumi",
        fullName: "Rumi"
    },
    {
        id: 48,
        quotes: LAO_TZU,
        value: "Lao Tzu",
        displayName: "Lao Tzu",
        fullName: "Lao Tzu"
    },
    {
        id: 49,
        quotes: RUSSELL,
        value: "Russell",
        displayName: "Bertrand Russell",
        fullName: "Bertrand Russell"
    },
    {
        id: 50,
        quotes: NASSIM_TALEB,
        value: "Nassim Taleb",
        displayName: "Nassim Taleb",
        fullName: "Nassim Taleb"
    }
]

doOperationsOnData(data);

export default data



