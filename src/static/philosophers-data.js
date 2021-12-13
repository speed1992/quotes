import { doOperationsOnData } from "./utils/utils";

const data = [
    {
        value: "ALL",
        displayName: "All",
        fullName: { english: "All" }
    },
    {
        value: "NIETZSCHE",
        displayName: "Nietzsche",
        fullName: { english: "Friedrich Nietzsche" }
    },
    {
        value: "MARIE_KONDO",
        displayName: "Marie Kondo", fullName: { english: "Marie Kondo" }
    },
    {
        value: "SCHOPENHAUER",
        displayName: "Schopenhauer",
        fullName: { english: "Arthur Schopenhauer" }
    },
    {
        value: "CAMUS", displayName: "Albert Camus",
        fullName: { english: "Albert Camus" }
    },
    {
        value: "DOSTOEVSKY", displayName: "Dostoevsky",
        fullName: { english: "Fyodor Dostoevsky" }
    },
    {
        value: "PESSOA", displayName: "Pessoa",
        fullName: { english: "Fernando Pessoa" }
    },
    {
        value: "KAFKA", displayName: "Kafka",
        fullName: { english: "Franz Kafka" }
    },
    {
        value: "HERACLITUS", displayName: "Heraclitus",
        fullName: { english: "Heraclitus" }
    },
    {
        value: "SARTRE", displayName: "Sartre",
        fullName: { english: "Jean - Paul Sartre" }
    },
    {
        value: "MAO", displayName: "Mao Zedong",
        fullName: { english: "Mao Zedong" }
    },
    {
        value: "SADE",
        displayName: "Sade",
        fullName: { english: "Marquis de Sade" }
    },
    {
        value: "FREUD",
        displayName: "Freud",
        fullName: { english: "Sigmund Freud" }
    },
    {
        value: "VOLTAIRE",
        displayName: "Voltaire",
        fullName: { english: "Voltaire" }
    },
    {
        value: "CIORAN",
        displayName: "Cioran",
        fullName: { english: "Emile M. Cioran" }
    },
    {
        value: "DIOGENES",
        displayName: "Diogenes",
        fullName: { english: "Diogenes" }
    },
    {
        value: "KISSINGER",
        displayName: "Kissinger",
        fullName: { english: "Henry A. Kissinger" }
    },
    {
        value: "CLAUSEWITZ",
        displayName: "Clausewitz",
        fullName: { english: "Carl von Clausewitz" }
    },
    {
        value: "BUKOWSKI",
        displayName: "Bukowski",
        fullName: { english: "Charles Bukowski" }
    },
    {
        value: "OSCAR_WILDE",
        displayName: "Oscar Wilde",
        fullName: { english: "Oscar Wilde" }
    },
    {
        value: "ROCHEFOUCAULD",
        displayName: "Rochefoucauld",
        fullName: { english: "Francois de La Rochefoucauld" }
    },
    {
        value: "MARSHALL_MCLUHAN",
        displayName: "Marshall McLuhan",
        fullName: { english: "Marshall McLuhan" }
    },
    {
        value: "PASCAL",
        displayName: "Pascal",
        fullName: { english: "Blaise Pascal" }
    },
    {
        value: "SIMONE_WEIL",
        displayName: "Simone Weil",
        fullName: { english: "Simone Weil" }
    },
    {
        value: "HITLER",
        displayName: "Hitler",
        fullName: { english: "Adolf Hitler" }
    },
    {
        value: "KANT",
        displayName: "Immanuel Kant",
        fullName: { english: "Immanuel Kant" }
    },
    {
        value: "OSHO",
        displayName: "Osho",
        fullName: { english: "Osho" }
    },
    {
        value: "VIRGINIA_WOOLF",
        displayName: "Virginia Woolf",
        fullName: { english: "Virginia Woolf" }
    },
    {
        value: "BEAUVOIR",
        displayName: "Simone De Beauvoir",
        fullName: { english: "Simone De Beauvoir" }
    },
    {
        value: "CARL_JUNG",
        displayName: "Carl Jung",
        fullName: { english: "Carl Jung" }
    },
    {
        value: "SALVADOR_DALI",
        displayName: "Salvador",
        fullName: { english: "Salvador Dali" }
    },
    {
        value: "VINCENT_VAN_GOGH",
        displayName: "Vincent Gogh",
        fullName: { english: "Vincent Van Gogh" }
    },
    {
        value: "ALAN_WATTS",
        displayName: "Alan Watts",
        fullName: { english: "Alan Watts" }
    },
    {
        value: "HIPPOCRATES",
        displayName: "Hippocrates",
        fullName: { english: "Hippocrates" }
    },
    {
        value: "KRISHNAMURTI",
        displayName: "Krishnamurti",
        fullName: { english: "Jiddu Krishnamurti" }
    },
    {
        value: "PETERSON",
        displayName: "Peterson",
        fullName: { english: "Jordan Peterson" }
    },
    {
        value: "VICTOR_FRANKL",
        displayName: "Victor Frankl",
        fullName: { english: "Victor Frankl" }
    },
    {
        value: "AURELIUS",
        displayName: "Marcus Aurelius",
        fullName: { english: "Marcus Aurelius" }
    },
    {
        value: "ROBERT_GREENE",
        displayName: "Robert Greene",
        fullName: { english: "Robert Greene" }
    },
    {
        value: "NAVAL_RAVIKANT",
        displayName: "Naval Ravikant",
        fullName: { english: "Naval Ravikant" }
    },
    {
        value: "LIGOTTI",
        displayName: "Thomas Liggoti",
        fullName: { english: "Thomas Liggoti" }
    },
    {
        value: "SENECA",
        displayName: "Seneca",
        fullName: { english: "Seneca" }
    },
    {
        value: "ZIZEK",
        displayName: "Zizek",
        fullName: { english: "Slavoj Žižek" }
    },
    {
        value: "BECKETT",
        displayName: "Samuel Beckett",
        fullName: { english: "Samuel Beckett" }
    },
    {
        value: "DARWISH",
        displayName: "Darwish",
        fullName: { english: "Mahmoud Darwish" }
    },
    {
        value: "HUXLEY",
        displayName: "Huxley",
        fullName: { english: "Aldous Huxley" }
    },
    {
        value: "ORWELL",
        displayName: "Orwell",
        fullName: { english: "George Orwell" }
    },
    {
        value: "RUMI",
        displayName: "Rumi",
        fullName: { english: "Rumi" }
    },
    {
        value: "LAO_TZU",
        displayName: "Lao Tzu",
        fullName: { english: "Lao Tzu" }
    },
    {
        value: "RUSSELL",
        displayName: "Bertrand Russell",
        fullName: { english: "Bertrand Russell" }
    },
    {
        value: "NASSIM_TALEB",
        displayName: "Nassim Taleb",
        fullName: { english: "Nassim Nicholas Taleb" }
    },
    {
        value: "HARARI",
        displayName: "Yuval Harari",
        fullName: { english: "Yuval Noah Harari" }
    },
    {
        value: "ADYASHANTI",
        displayName: "Adyashanti",
        fullName: { english: "Adyashanti" }
    },
    {
        value: "C_S_LEWIS",
        displayName: "C.S. Lewis",
        fullName: { english: "C.S. Lewis" }
    },
    {
        value: "CONFUCIUS",
        displayName: "Confucius",
        fullName: { english: "Confucius" }
    },
    {
        value: "EZRA_POUND",
        displayName: "Ezra Pound",
        fullName: { english: "Ezra Pound" }
    },
    {
        value: "GIBRAN",
        displayName: "Khalil Gibran",
        fullName: { english: "Khalil Gibran" }
    },
    {
        value: "HERMANN_HESSE",
        displayName: "Hermann Hesse",
        fullName: { english: "Hermann Hesse" }
    },
    {
        value: "KIERKEGAARD",
        displayName: "Kierkegaard",
        fullName: { english: "Kierkegaard" }
    },
    {
        value: "MACHIAVELLI",
        displayName: "Machiavelli",
        fullName: { english: "Niccolò Machiavelli" }
    },
    {
        value: "RIDLEY",
        displayName: "Matt Ridley",
        fullName: { english: "Matt Ridley" }
    },
    {
        value: "SUN_TZU",
        displayName: "Sun Tzu",
        fullName: { english: "Sun Tzu" }
    },
    {
        value: "SYLVIA_PLATH",
        displayName: "Sylvia Plath",
        fullName: { english: "Sylvia Plath" }
    },
    {
        value: "ZHUANGZI",
        displayName: "Zhuangzi",
        fullName: { english: "Zhuangzi" }
    },
    {
        value: "DOUGLASS",
        displayName: "Douglass",
        fullName: { english: "Frederick Douglass" }
    },
    {
        value: "KAMAL_RAVIKANT",
        displayName: "Kamal Ravikant",
        fullName: { english: "Kamal Ravikant" }
    },
    {
        value: "HEIDEGGER",
        displayName: "Heidegger",
        fullName: { english: "Martin Heidegger" }
    },
    {
        value: "ANTHONY_DE_MELLO",
        displayName: "Anthony De Mello",
        fullName: { english: "Anthony De Mello" }
    },
    {
        value: "MICHAEL_SINGER",
        displayName: "Michael Singer",
        fullName: { english: "Michael Singer" }
    },
    {
        value: "ROVELLI",
        displayName: "Carlo Rovelli",
        fullName: { english: "Carlo Rovelli" }
    },
    {
        value: "JED_MCKENNA",
        displayName: "Jed McKenna",
        fullName: { english: "Jed McKenna" }
    },
    {
        value: "PLATO",
        displayName: "Plato",
        fullName: { english: "Plato" }
    },
    {
        value: "SOCRATES",
        displayName: "Socrates",
        fullName: { english: "Socrates" }
    },
    {
        value: "BRUCE_LEE",
        displayName: "Bruce Lee",
        fullName: { english: "Bruce Lee" }
    },
    {
        value: "FEYMAN",
        displayName: "Richard Feyman",
        fullName: { english: "Richard Feyman" }
    },
    {
        value: "KAPIL_GUPTA",
        displayName: "Kapil Gupta",
        fullName: { english: "Kapil Gupta" }
    }
]

doOperationsOnData(data);

export default data