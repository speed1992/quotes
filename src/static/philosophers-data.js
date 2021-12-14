import { doOperationsOnData } from "./utils/utils";

const data = [
    {
        value: "ALL",
        displayName: "All",
        fullName: "All"
    },
    {
        value: "NIETZSCHE",
        displayName: "Nietzsche",
        fullName: "Friedrich Nietzsche"
    },
    {
        value: "MARIE_KONDO",
        displayName: "Marie Kondo", fullName: "Marie Kondo"
    },
    {
        value: "SCHOPENHAUER",
        displayName: "Schopenhauer",
        fullName: "Arthur Schopenhauer"
    },
    {
        value: "CAMUS", displayName: "Albert Camus",
        fullName: "Albert Camus"
    },
    {
        value: "DOSTOEVSKY", displayName: "Dostoevsky",
        fullName: "Fyodor Dostoevsky"
    },
    {
        value: "PESSOA", displayName: "Pessoa",
        fullName: "Fernando Pessoa"
    },
    {
        value: "KAFKA", displayName: "Kafka",
        fullName: "Franz Kafka"
    },
    {
        value: "HERACLITUS", displayName: "Heraclitus",
        fullName: "Heraclitus"
    },
    {
        value: "SARTRE", displayName: "Sartre",
        fullName: "Jean - Paul Sartre"
    },
    {
        value: "MAO", displayName: "Mao Zedong",
        fullName: "Mao Zedong"
    },
    {
        value: "SADE",
        displayName: "Sade",
        fullName: "Marquis de Sade"
    },
    {
        value: "FREUD",
        displayName: "Freud",
        fullName: "Sigmund Freud"
    },
    {
        value: "VOLTAIRE",
        displayName: "Voltaire",
        fullName: "Voltaire"
    },
    {
        value: "CIORAN",
        displayName: "Cioran",
        fullName: "Emile M. Cioran"
    },
    {
        value: "DIOGENES",
        displayName: "Diogenes",
        fullName: "Diogenes"
    },
    {
        value: "KISSINGER",
        displayName: "Kissinger",
        fullName: "Henry A. Kissinger"
    },
    {
        value: "CLAUSEWITZ",
        displayName: "Clausewitz",
        fullName: "Carl von Clausewitz"
    },
    {
        value: "BUKOWSKI",
        displayName: "Bukowski",
        fullName: "Charles Bukowski"
    },
    {
        value: "OSCAR_WILDE",
        displayName: "Oscar Wilde",
        fullName: "Oscar Wilde"
    },
    {
        value: "ROCHEFOUCAULD",
        displayName: "Rochefoucauld",
        fullName: "Francois de La Rochefoucauld"
    },
    {
        value: "MARSHALL_MCLUHAN",
        displayName: "Marshall McLuhan",
        fullName: "Marshall McLuhan"
    },
    {
        value: "PASCAL",
        displayName: "Pascal",
        fullName: "Blaise Pascal"
    },
    {
        value: "SIMONE_WEIL",
        displayName: "Simone Weil",
        fullName: "Simone Weil"
    },
    {
        value: "HITLER",
        displayName: "Hitler",
        fullName: "Adolf Hitler"
    },
    {
        value: "KANT",
        displayName: "Immanuel Kant",
        fullName: "Immanuel Kant"
    },
    {
        value: "OSHO",
        displayName: "Osho",
        fullName: "Osho"
    },
    {
        value: "VIRGINIA_WOOLF",
        displayName: "Virginia Woolf",
        fullName: "Virginia Woolf"
    },
    {
        value: "BEAUVOIR",
        displayName: "Simone De Beauvoir",
        fullName: "Simone De Beauvoir"
    },
    {
        value: "CARL_JUNG",
        displayName: "Carl Jung",
        fullName: "Carl Jung"
    },
    {
        value: "SALVADOR_DALI",
        displayName: "Salvador",
        fullName: "Salvador Dali"
    },
    {
        value: "VINCENT_VAN_GOGH",
        displayName: "Vincent Gogh",
        fullName: "Vincent Van Gogh"
    },
    {
        value: "ALAN_WATTS",
        displayName: "Alan Watts",
        fullName: "Alan Watts"
    },
    {
        value: "HIPPOCRATES",
        displayName: "Hippocrates",
        fullName: "Hippocrates"
    },
    {
        value: "KRISHNAMURTI",
        displayName: "Krishnamurti",
        fullName: "Jiddu Krishnamurti"
    },
    {
        value: "PETERSON",
        displayName: "Peterson",
        fullName: "Jordan Peterson"
    },
    {
        value: "VICTOR_FRANKL",
        displayName: "Victor Frankl",
        fullName: "Victor Frankl"
    },
    {
        value: "AURELIUS",
        displayName: "Marcus Aurelius",
        fullName: "Marcus Aurelius"
    },
    {
        value: "ROBERT_GREENE",
        displayName: "Robert Greene",
        fullName: "Robert Greene"
    },
    {
        value: "NAVAL_RAVIKANT",
        displayName: "Naval Ravikant",
        fullName: "Naval Ravikant"
    },
    {
        value: "LIGOTTI",
        displayName: "Thomas Liggoti",
        fullName: "Thomas Liggoti"
    },
    {
        value: "SENECA",
        displayName: "Seneca",
        fullName: "Seneca"
    },
    {
        value: "ZIZEK",
        displayName: "Zizek",
        fullName: "Slavoj Žižek"
    },
    {
        value: "BECKETT",
        displayName: "Samuel Beckett",
        fullName: "Samuel Beckett"
    },
    {
        value: "DARWISH",
        displayName: "Darwish",
        fullName: "Mahmoud Darwish"
    },
    {
        value: "HUXLEY",
        displayName: "Huxley",
        fullName: "Aldous Huxley"
    },
    {
        value: "ORWELL",
        displayName: "Orwell",
        fullName: "George Orwell"
    },
    {
        value: "RUMI",
        displayName: "Rumi",
        fullName: "Rumi"
    },
    {
        value: "LAO_TZU",
        displayName: "Lao Tzu",
        fullName: "Lao Tzu"
    },
    {
        value: "RUSSELL",
        displayName: "Bertrand Russell",
        fullName: "Bertrand Russell"
    },
    {
        value: "NASSIM_TALEB",
        displayName: "Nassim Taleb",
        fullName: "Nassim Nicholas Taleb"
    },
    {
        value: "HARARI",
        displayName: "Yuval Harari",
        fullName: "Yuval Noah Harari"
    },
    {
        value: "ADYASHANTI",
        displayName: "Adyashanti",
        fullName: "Adyashanti"
    },
    {
        value: "C_S_LEWIS",
        displayName: "C.S. Lewis",
        fullName: "C.S. Lewis"
    },
    {
        value: "CONFUCIUS",
        displayName: "Confucius",
        fullName: "Confucius"
    },
    {
        value: "EZRA_POUND",
        displayName: "Ezra Pound",
        fullName: "Ezra Pound"
    },
    {
        value: "GIBRAN",
        displayName: "Khalil Gibran",
        fullName: "Khalil Gibran"
    },
    {
        value: "HERMANN_HESSE",
        displayName: "Hermann Hesse",
        fullName: "Hermann Hesse"
    },
    {
        value: "KIERKEGAARD",
        displayName: "Kierkegaard",
        fullName: "Kierkegaard"
    },
    {
        value: "MACHIAVELLI",
        displayName: "Machiavelli",
        fullName: "Niccolò Machiavelli"
    },
    {
        value: "RIDLEY",
        displayName: "Matt Ridley",
        fullName: "Matt Ridley"
    },
    {
        value: "SUN_TZU",
        displayName: "Sun Tzu",
        fullName: "Sun Tzu"
    },
    {
        value: "SYLVIA_PLATH",
        displayName: "Sylvia Plath",
        fullName: "Sylvia Plath"
    },
    {
        value: "ZHUANGZI",
        displayName: "Zhuangzi",
        fullName: "Zhuangzi"
    },
    {
        value: "DOUGLASS",
        displayName: "Douglass",
        fullName: "Frederick Douglass"
    },
    {
        value: "KAMAL_RAVIKANT",
        displayName: "Kamal Ravikant",
        fullName: "Kamal Ravikant"
    },
    {
        value: "HEIDEGGER",
        displayName: "Heidegger",
        fullName: "Martin Heidegger"
    },
    {
        value: "ANTHONY_DE_MELLO",
        displayName: "Anthony De Mello",
        fullName: "Anthony De Mello"
    },
    {
        value: "MICHAEL_SINGER",
        displayName: "Michael Singer",
        fullName: "Michael Singer"
    },
    {
        value: "ROVELLI",
        displayName: "Carlo Rovelli",
        fullName: "Carlo Rovelli"
    },
    {
        value: "JED_MCKENNA",
        displayName: "Jed McKenna",
        fullName: "Jed McKenna"
    },
    {
        value: "PLATO",
        displayName: "Plato",
        fullName: "Plato"
    },
    {
        value: "SOCRATES",
        displayName: "Socrates",
        fullName: "Socrates"
    },
    {
        value: "BRUCE_LEE",
        displayName: "Bruce Lee",
        fullName: "Bruce Lee"
    },
    {
        value: "FEYMAN",
        displayName: "Richard Feyman",
        fullName: "Richard Feyman"
    },
    {
        value: "KAPIL_GUPTA",
        displayName: "Kapil Gupta",
        fullName: "Kapil Gupta"
    }
]

doOperationsOnData(data);

export default data