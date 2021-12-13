import { doOperationsOnData } from "./utils/utils";

const data = [
    {
        value: "ALL",
        displayName: "All",
        fullName: { en: "All", hi: "" }
    },
    {
        value: "NIETZSCHE",
        displayName: "Nietzsche",
        fullName: { en: "Friedrich Nietzsche", hi: "फ्रेडरिक नीत्शे" }
    },
    {
        value: "MARIE_KONDO",
        displayName: "Marie Kondo", fullName: { en: "Marie Kondo", hi: "मैरी कोंडो" }
    },
    {
        value: "SCHOPENHAUER",
        displayName: "Schopenhauer",
        fullName: { en: "Arthur Schopenhauer", hi: "आर्थर शोपेनहावर" }
    },
    {
        value: "CAMUS", displayName: "Albert Camus",
        fullName: { en: "Albert Camus", hi: "एलबर्ट कामू" }
    },
    {
        value: "DOSTOEVSKY", displayName: "Dostoevsky",
        fullName: { en: "Fyodor Dostoevsky", hi: "फ्योदोर दोस्तोवस्की" }
    },
    {
        value: "PESSOA", displayName: "Pessoa",
        fullName: { en: "Fernando Pessoa", hi: "फर्नांडो पेसोआ" }
    },
    {
        value: "KAFKA", displayName: "Kafka",
        fullName: { en: "Franz Kafka", hi: "फ्रांज काफ्का" }
    },
    {
        value: "HERACLITUS", displayName: "Heraclitus",
        fullName: { en: "Heraclitus", hi: "हेराक्लीटस" }
    },
    {
        value: "SARTRE", displayName: "Sartre",
        fullName: { en: "Jean-Paul Sartre", hi: "जीन-पॉल सार्त्र" }
    },
    {
        value: "MAO", displayName: "Mao Zedong",
        fullName: { en: "Mao Zedong", hi: "माओ से-तुंग" }
    },
    {
        value: "SADE",
        displayName: "Sade",
        fullName: { en: "Marquis De Sade", hi: "मार्क्विस डे सादे" }
    },
    {
        value: "FREUD",
        displayName: "Freud",
        fullName: { en: "Sigmund Freud", hi: "सिगमंड फ्रॉयड" }
    },
    {
        value: "VOLTAIRE",
        displayName: "Voltaire",
        fullName: { en: "Voltaire", hi: "वॉल्टेयर" }
    },
    {
        value: "CIORAN",
        displayName: "Cioran",
        fullName: { en: "Emile M. Cioran", hi: "एमिल एम. सियोरान" }
    },
    {
        value: "DIOGENES",
        displayName: "Diogenes",
        fullName: { en: "Diogenes", hi: "डायोजनीज" }
    },
    {
        value: "KISSINGER",
        displayName: "Kissinger",
        fullName: { en: "Henry A. Kissinger", hi: "हेनरी ए किसिंजर" }
    },
    {
        value: "CLAUSEWITZ",
        displayName: "Clausewitz",
        fullName: { en: "Carl Von Clausewitz", hi: "कार्ल वॉन क्लॉज़विट्ज़" }
    },
    {
        value: "BUKOWSKI",
        displayName: "Bukowski",
        fullName: { en: "Charles Bukowski", hi: "चार्ल्स बुकोवस्की" }
    },
    {
        value: "OSCAR_WILDE",
        displayName: "Oscar Wilde",
        fullName: { en: "Oscar Wilde", hi: "ऑस्कर वाइल्ड" }
    },
    {
        value: "ROCHEFOUCAULD",
        displayName: "Rochefoucauld",
        fullName: { en: "Francois De La Rochefoucauld", hi: "फ्रेंकोइस डे ला रोशेफौकॉल्ड" }
    },
    {
        value: "MARSHALL_MCLUHAN",
        displayName: "Marshall McLuhan",
        fullName: { en: "Marshall McLuhan", hi: "मार्शल मैक्लुहान" }
    },
    {
        value: "PASCAL",
        displayName: "Pascal",
        fullName: { en: "Blaise Pascal", hi: "ब्लेस पास्कल" }
    },
    {
        value: "SIMONE_WEIL",
        displayName: "Simone Weil",
        fullName: { en: "Simone Weil", hi: "सिमोन वेइल" }
    },
    {
        value: "HITLER",
        displayName: "Hitler",
        fullName: { en: "Adolf Hitler", hi: "एडॉल्फ हिटलर" }
    },
    {
        value: "KANT",
        displayName: "Immanuel Kant",
        fullName: { en: "Immanuel Kant", hi: "इम्मैनुएल कांत" }
    },
    {
        value: "OSHO",
        displayName: "Osho",
        fullName: { en: "Osho", hi: "ओशो" }
    },
    {
        value: "VIRGINIA_WOOLF",
        displayName: "Virginia Woolf",
        fullName: { en: "Virginia Woolf", hi: "वर्जीनिया वूल्फ" }
    },
    {
        value: "BEAUVOIR",
        displayName: "Simone De Beauvoir",
        fullName: { en: "Simone De Beauvoir", hi: "सिमोन डी ब्यूवोइर" }
    },
    {
        value: "CARL_JUNG",
        displayName: "Carl Jung",
        fullName: { en: "Carl Gustav Jung", hi: "कार्ल गुस्टाफ युंग" }
    },
    {
        value: "SALVADOR_DALI",
        displayName: "Salvador",
        fullName: { en: "Salvador Dali", hi: "साल्वाडोर डाली" }
    },
    {
        value: "VINCENT_VAN_GOGH",
        displayName: "Vincent Gogh",
        fullName: { en: "Vincent Van Gogh", hi: "विंसेंट वान गाग" }
    },
    {
        value: "ALAN_WATTS",
        displayName: "Alan Watts",
        fullName: { en: "Alan Watts", hi: "एलन वाट्स" }
    },
    {
        value: "HIPPOCRATES",
        displayName: "Hippocrates",
        fullName: { en: "Hippocrates", hi: "हिप्पोक्रेट्स" }
    },
    {
        value: "KRISHNAMURTI",
        displayName: "Krishnamurti",
        fullName: { en: "Jiddu Krishnamurti", hi: "जिद्दू कृष्णमूर्ति" }
    },
    {
        value: "PETERSON",
        displayName: "Peterson",
        fullName: { en: "Jordan Peterson", hi: "जॉर्डन पीटरसन" }
    },
    {
        value: "VICTOR_FRANKL",
        displayName: "Victor Frankl",
        fullName: { en: "Victor Frankl", hi: "विक्टर फ्रैंकल" }
    },
    {
        value: "AURELIUS",
        displayName: "Marcus Aurelius",
        fullName: { en: "Marcus Aurelius", hi: "मार्कस ऑरेलियस" }
    },
    {
        value: "ROBERT_GREENE",
        displayName: "Robert Greene",
        fullName: { en: "Robert Greene", hi: "रॉबर्ट ग्रीन" }
    },
    {
        value: "NAVAL_RAVIKANT",
        displayName: "Naval Ravikant",
        fullName: { en: "Naval Ravikant", hi: "नवल रविकांत" }
    },
    {
        value: "LIGOTTI",
        displayName: "Thomas Liggoti",
        fullName: { en: "Thomas Liggoti", hi: "थॉमस लिगोटी" }
    },
    {
        value: "SENECA",
        displayName: "Seneca",
        fullName: { en: "Seneca", hi: "सेनेका" }
    },
    {
        value: "ZIZEK",
        displayName: "Zizek",
        fullName: { en: "Slavoj Žižek", hi: "स्लावोज ज़िज़ेक" }
    },
    {
        value: "BECKETT",
        displayName: "Samuel Beckett",
        fullName: { en: "Samuel Beckett", hi: "सैमुअल बेकेट" }
    },
    {
        value: "DARWISH",
        displayName: "Darwish",
        fullName: { en: "Mahmoud Darwish", hi: "महमूद दरविश" }
    },
    {
        value: "HUXLEY",
        displayName: "Huxley",
        fullName: { en: "Aldous Huxley", hi: "ऐलडस हक्सले" }
    },
    {
        value: "ORWELL",
        displayName: "Orwell",
        fullName: { en: "George Orwell", hi: "जॉर्ज ऑरवेल" }
    },
    {
        value: "RUMI",
        displayName: "Rumi",
        fullName: { en: "Rumi", hi: "रूमि" }
    },
    {
        value: "LAO_TZU",
        displayName: "Lao Tzu",
        fullName: { en: "Lao Tzu", hi: "लाओ त्सू" }
    },
    {
        value: "RUSSELL",
        displayName: "Bertrand Russell",
        fullName: { en: "Bertrand Russell", hi: "बर्ट्रेंड रसेल" }
    },
    {
        value: "NASSIM_TALEB",
        displayName: "Nassim Taleb",
        fullName: { en: "Nassim Nicholas Taleb", hi: "नसीम निकोलस तालेब" }
    },
    {
        value: "HARARI",
        displayName: "Yuval Harari",
        fullName: { en: "Yuval Noah Harari", hi: "युवल नोहा हरारी" }
    },
    {
        value: "ADYASHANTI",
        displayName: "Adyashanti",
        fullName: { en: "Adyashanti", hi: "अद्यशांती" }
    },
    {
        value: "C_S_LEWIS",
        displayName: "C.S. Lewis",
        fullName: { en: "C.S. Lewis", hi: "सी.एस. लुईस" }
    },
    {
        value: "CONFUCIUS",
        displayName: "Confucius",
        fullName: { en: "Confucius", hi: "कन्फ्यूशियस" }
    },
    {
        value: "EZRA_POUND",
        displayName: "Ezra Pound",
        fullName: { en: "Ezra Pound", hi: "एज्रा पाउंड" }
    },
    {
        value: "GIBRAN",
        displayName: "Khalil Gibran",
        fullName: { en: "Khalil Gibran", hi: "खलील जिब्रान" }
    },
    {
        value: "HERMANN_HESSE",
        displayName: "Hermann Hesse",
        fullName: { en: "Hermann Hesse", hi: "हरमन हेस्से" }
    },
    {
        value: "KIERKEGAARD",
        displayName: "Kierkegaard",
        fullName: { en: "Søren Kierkegaard", hi: "सॉरन किअर्केगार्ड" }
    },
    {
        value: "MACHIAVELLI",
        displayName: "Machiavelli",
        fullName: { en: "Niccolò Machiavelli", hi: "निकोलो मैकियावेली" }
    },
    {
        value: "RIDLEY",
        displayName: "Matt Ridley",
        fullName: { en: "Matt Ridley", hi: "मैट रिडले" }
    },
    {
        value: "SUN_TZU",
        displayName: "Sun Tzu",
        fullName: { en: "Sun Tzu", hi: "सन त्ज़ु" }
    },
    {
        value: "SYLVIA_PLATH",
        displayName: "Sylvia Plath",
        fullName: { en: "Sylvia Plath", hi: "सिल्विया प्लाथ" }
    },
    {
        value: "ZHUANGZI",
        displayName: "Zhuangzi",
        fullName: { en: "Zhuangzi", hi: "ज़ुआंग-ज़ी" }
    },
    {
        value: "DOUGLASS",
        displayName: "Douglass",
        fullName: { en: "Frederick Douglass", hi: "फ्रेडरिक डगलस" }
    },
    {
        value: "KAMAL_RAVIKANT",
        displayName: "Kamal Ravikant",
        fullName: { en: "Kamal Ravikant", hi: "कमल रविकांत" }
    },
    {
        value: "HEIDEGGER",
        displayName: "Heidegger",
        fullName: { en: "Martin Heidegger", hi: "मार्टिन हाइडेगर" }
    },
    {
        value: "ANTHONY_DE_MELLO",
        displayName: "Anthony De Mello",
        fullName: { en: "Anthony De Mello", hi: "एंथोनी डी मेलो" }
    },
    {
        value: "MICHAEL_SINGER",
        displayName: "Michael Singer",
        fullName: { en: "Michael Singer", hi: "माइकल सिंगर" }
    },
    {
        value: "ROVELLI",
        displayName: "Carlo Rovelli",
        fullName: { en: "Carlo Rovelli", hi: "कार्लो रोवेली" }
    },
    {
        value: "JED_MCKENNA",
        displayName: "Jed McKenna",
        fullName: { en: "Jed McKenna", hi: "जेड मैककेना" }
    },
    {
        value: "PLATO",
        displayName: "Plato",
        fullName: { en: "Plato", hi: "प्लेटो" }
    },
    {
        value: "SOCRATES",
        displayName: "Socrates",
        fullName: { en: "Socrates", hi: "सुकरात" }
    },
    {
        value: "BRUCE_LEE",
        displayName: "Bruce Lee",
        fullName: { en: "Bruce Lee", hi: "ब्रूस ली" }
    },
    {
        value: "FEYMAN",
        displayName: "Richard Feyman",
        fullName: { en: "Richard Feyman", hi: "रिचर्ड फेमैन" }
    },
    {
        value: "KAPIL_GUPTA",
        displayName: "Kapil Gupta",
        fullName: { en: "Kapil Gupta", hi: "कपिल गुप्ता" }
    }
]

doOperationsOnData(data);

export default data