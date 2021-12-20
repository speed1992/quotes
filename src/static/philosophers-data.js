import { doOperationsOnData } from "./utils/utils";

const data = [{
    value: "ALL",
    displayName: "All",
    fullName: "All",
    fullNameInOtherLanguages: {
        hi: ""
    }
}, {
    value: "NIETZSCHE",
    displayName: "Nietzsche",
    fullName: "Friedrich Nietzsche",
    fullNameInOtherLanguages: {
        hi: "फ्रेडरिक नीत्शे"
    }
}, {
    value: "MARIE_KONDO",
    displayName: "Marie Kondo",
    fullName: "Marie Kondo",
    fullNameInOtherLanguages: {
        hi: "मैरी कोंडो"
    }
}, {
    value: "SCHOPENHAUER",
    displayName: "Schopenhauer",
    fullName: "Arthur Schopenhauer",
    fullNameInOtherLanguages: {
        hi: "आर्थर शोपेनहावर"
    }
}, {
    value: "CAMUS",
    displayName: "Albert Camus",
    fullName: "Albert Camus",
    fullNameInOtherLanguages: {
        hi: "एलबर्ट कामू"
    }
}, {
    value: "DOSTOEVSKY",
    displayName: "Dostoevsky",
    fullName: "Fyodor Dostoevsky",
    fullNameInOtherLanguages: {
        hi: "फ्योदोर दोस्तोवस्की"
    }
}, {
    value: "PESSOA",
    displayName: "Pessoa",
    fullName: "Fernando Pessoa",
    fullNameInOtherLanguages: {
        hi: "फर्नांडो पेसोआ"
    }
}, {
    value: "KAFKA",
    displayName: "Kafka",
    fullName: "Franz Kafka",
    fullNameInOtherLanguages: {
        hi: "फ्रांज काफ्का"
    }
}, {
    value: "HERACLITUS",
    displayName: "Heraclitus",
    fullName: "Heraclitus",
    fullNameInOtherLanguages: {
        hi: "हेराक्लीटस"
    }
}, {
    value: "SARTRE",
    displayName: "Sartre",
    fullName: "Jean-Paul Sartre",
    fullNameInOtherLanguages: {
        hi: "जीन-पॉल सार्त्र"
    }
}, {
    value: "MAO",
    displayName: "Mao Zedong",
    fullName: "Mao Zedong",
    fullNameInOtherLanguages: {
        hi: "माओ से-तुंग"
    }
}, {
    value: "SADE",
    displayName: "Sade",
    fullName: "Marquis De Sade",
    fullNameInOtherLanguages: {
        hi: "मार्क्विस डे सादे"
    }
}, {
    value: "FREUD",
    displayName: "Freud",
    fullName: "Sigmund Freud",
    fullNameInOtherLanguages: {
        hi: "सिगमंड फ्रॉयड"
    }
}, {
    value: "VOLTAIRE",
    displayName: "Voltaire",
    fullName: "Voltaire",
    fullNameInOtherLanguages: {
        hi: "वॉल्टेयर"
    }
}, {
    value: "CIORAN",
    displayName: "Cioran",
    fullName: "Emile M. Cioran",
    fullNameInOtherLanguages: {
        hi: "एमिल एम. सियोरान"
    }
}, {
    value: "DIOGENES",
    displayName: "Diogenes",
    fullName: "Diogenes",
    fullNameInOtherLanguages: {
        hi: "डायोजनीज"
    }
}, {
    value: "KISSINGER",
    displayName: "Kissinger",
    fullName: "Henry A. Kissinger",
    fullNameInOtherLanguages: {
        hi: "हेनरी ए किसिंजर"
    }
}, {
    value: "CLAUSEWITZ",
    displayName: "Clausewitz",
    fullName: "Carl Von Clausewitz",
    fullNameInOtherLanguages: {
        hi: "कार्ल वॉन क्लॉज़विट्ज़"
    }
}, {
    value: "BUKOWSKI",
    displayName: "Bukowski",
    fullName: "Charles Bukowski",
    fullNameInOtherLanguages: {
        hi: "चार्ल्स बुकोवस्की"
    }
}, {
    value: "OSCAR_WILDE",
    displayName: "Oscar Wilde",
    fullName: "Oscar Wilde",
    fullNameInOtherLanguages: {
        hi: "ऑस्कर वाइल्ड"
    }
}, {
    value: "ROCHEFOUCAULD",
    displayName: "Rochefoucauld",
    fullName: "Francois De La Rochefoucauld",
    fullNameInOtherLanguages: {
        hi: "फ्रेंकोइस डे ला रोशेफौकॉल्ड"
    }
}, {
    value: "MARSHALL_MCLUHAN",
    displayName: "Marshall McLuhan",
    fullName: "Marshall McLuhan",
    fullNameInOtherLanguages: {
        hi: "मार्शल मैक्लुहान"
    }
}, {
    value: "PASCAL",
    displayName: "Pascal",
    fullName: "Blaise Pascal",
    fullNameInOtherLanguages: {
        hi: "ब्लेस पास्कल"
    }
}, {
    value: "SIMONE_WEIL",
    displayName: "Simone Weil",
    fullName: "Simone Weil",
    fullNameInOtherLanguages: {
        hi: "सिमोन वेइल"
    }
}, {
    value: "HITLER",
    displayName: "Hitler",
    fullName: "Adolf Hitler",
    fullNameInOtherLanguages: {
        hi: "एडॉल्फ हिटलर"
    }
}, {
    value: "KANT",
    displayName: "Immanuel Kant",
    fullName: "Immanuel Kant",
    fullNameInOtherLanguages: {
        hi: "इम्मैनुएल कांत"
    }
}, {
    value: "OSHO",
    displayName: "Osho",
    fullName: "Osho",
    fullNameInOtherLanguages: {
        hi: "ओशो"
    }
}, {
    value: "VIRGINIA_WOOLF",
    displayName: "Virginia Woolf",
    fullName: "Virginia Woolf",
    fullNameInOtherLanguages: {
        hi: "वर्जीनिया वूल्फ"
    }
}, {
    value: "BEAUVOIR",
    displayName: "Simone De Beauvoir",
    fullName: "Simone De Beauvoir",
    fullNameInOtherLanguages: {
        hi: "सिमोन डी ब्यूवोइर"
    }
}, {
    value: "CARL_JUNG",
    displayName: "Carl Jung",
    fullName: "Carl Gustav Jung",
    fullNameInOtherLanguages: {
        hi: "कार्ल गुस्टाफ युंग"
    }
}, {
    value: "SALVADOR_DALI",
    displayName: "Salvador",
    fullName: "Salvador Dali",
    fullNameInOtherLanguages: {
        hi: "साल्वाडोर डाली"
    }
}, {
    value: "VINCENT_VAN_GOGH",
    displayName: "Vincent Gogh",
    fullName: "Vincent Van Gogh",
    fullNameInOtherLanguages: {
        hi: "विंसेंट वान गाग"
    }
}, {
    value: "ALAN_WATTS",
    displayName: "Alan Watts",
    fullName: "Alan Watts",
    fullNameInOtherLanguages: {
        hi: "एलन वाट्स"
    }
}, {
    value: "HIPPOCRATES",
    displayName: "Hippocrates",
    fullName: "Hippocrates",
    fullNameInOtherLanguages: {
        hi: "हिप्पोक्रेट्स"
    }
}, {
    value: "KRISHNAMURTI",
    displayName: "Krishnamurti",
    fullName: "Jiddu Krishnamurti",
    fullNameInOtherLanguages: {
        hi: "जिद्दू कृष्णमूर्ति"
    }
}, {
    value: "PETERSON",
    displayName: "Peterson",
    fullName: "Jordan Peterson",
    fullNameInOtherLanguages: {
        hi: "जॉर्डन पीटरसन"
    }
}, {
    value: "VICTOR_FRANKL",
    displayName: "Victor Frankl",
    fullName: "Victor Frankl",
    fullNameInOtherLanguages: {
        hi: "विक्टर फ्रैंकल"
    }
}, {
    value: "AURELIUS",
    displayName: "Marcus Aurelius",
    fullName: "Marcus Aurelius",
    fullNameInOtherLanguages: {
        hi: "मार्कस ऑरेलियस"
    }
}, {
    value: "ROBERT_GREENE",
    displayName: "Robert Greene",
    fullName: "Robert Greene",
    fullNameInOtherLanguages: {
        hi: "रॉबर्ट ग्रीन"
    }
}, {
    value: "NAVAL_RAVIKANT",
    displayName: "Naval Ravikant",
    fullName: "Naval Ravikant",
    fullNameInOtherLanguages: {
        hi: "नवल रविकांत"
    }
}, {
    value: "LIGOTTI",
    displayName: "Thomas Liggoti",
    fullName: "Thomas Liggoti",
    fullNameInOtherLanguages: {
        hi: "थॉमस लिगोटी"
    }
}, {
    value: "SENECA",
    displayName: "Seneca",
    fullName: "Seneca",
    fullNameInOtherLanguages: {
        hi: "सेनेका"
    }
}, {
    value: "ZIZEK",
    displayName: "Zizek",
    fullName: "Slavoj Žižek",
    fullNameInOtherLanguages: {
        hi: "स्लावोज ज़िज़ेक"
    }
}, {
    value: "BECKETT",
    displayName: "Samuel Beckett",
    fullName: "Samuel Beckett",
    fullNameInOtherLanguages: {
        hi: "सैमुअल बेकेट"
    }
}, {
    value: "DARWISH",
    displayName: "Darwish",
    fullName: "Mahmoud Darwish",
    fullNameInOtherLanguages: {
        hi: "महमूद दरविश"
    }
}, {
    value: "HUXLEY",
    displayName: "Huxley",
    fullName: "Aldous Huxley",
    fullNameInOtherLanguages: {
        hi: "ऐलडस हक्सले"
    }
}, {
    value: "ORWELL",
    displayName: "Orwell",
    fullName: "George Orwell",
    fullNameInOtherLanguages: {
        hi: "जॉर्ज ऑरवेल"
    }
}, {
    value: "RUMI",
    displayName: "Rumi",
    fullName: "Rumi",
    fullNameInOtherLanguages: {
        hi: "रूमि"
    }
}, {
    value: "LAO_TZU",
    displayName: "Lao Tzu",
    fullName: "Lao Tzu",
    fullNameInOtherLanguages: {
        hi: "लाओ त्सू"
    }
}, {
    value: "RUSSELL",
    displayName: "Bertrand Russell",
    fullName: "Bertrand Russell",
    fullNameInOtherLanguages: {
        hi: "बर्ट्रेंड रसेल"
    }
}, {
    value: "NASSIM_TALEB",
    displayName: "Nassim Taleb",
    fullName: "Nassim Nicholas Taleb",
    fullNameInOtherLanguages: {
        hi: "नसीम निकोलस तालेब"
    }
}, {
    value: "HARARI",
    displayName: "Yuval Harari",
    fullName: "Yuval Noah Harari",
    fullNameInOtherLanguages: {
        hi: "युवल नोहा हरारी"
    }
}, {
    value: "ADYASHANTI",
    displayName: "Adyashanti",
    fullName: "Adyashanti",
    fullNameInOtherLanguages: {
        hi: "अद्यशांती"
    }
}, {
    value: "C_S_LEWIS",
    displayName: "C.S. Lewis",
    fullName: "C.S. Lewis",
    fullNameInOtherLanguages: {
        hi: "सी.एस. लुईस"
    }
}, {
    value: "CONFUCIUS",
    displayName: "Confucius",
    fullName: "Confucius",
    fullNameInOtherLanguages: {
        hi: "कन्फ्यूशियस"
    }
}, {
    value: "EZRA_POUND",
    displayName: "Ezra Pound",
    fullName: "Ezra Pound",
    fullNameInOtherLanguages: {
        hi: "एज्रा पाउंड"
    }
}, {
    value: "GIBRAN",
    displayName: "Khalil Gibran",
    fullName: "Khalil Gibran",
    fullNameInOtherLanguages: {
        hi: "खलील जिब्रान"
    }
}, {
    value: "HERMANN_HESSE",
    displayName: "Hermann Hesse",
    fullName: "Hermann Hesse",
    fullNameInOtherLanguages: {
        hi: "हरमन हेस्से"
    }
}, {
    value: "KIERKEGAARD",
    displayName: "Kierkegaard",
    fullName: "Søren Kierkegaard",
    fullNameInOtherLanguages: {
        hi: "सॉरन किअर्केगार्ड"
    }
}, {
    value: "MACHIAVELLI",
    displayName: "Machiavelli",
    fullName: "Niccolò Machiavelli",
    fullNameInOtherLanguages: {
        hi: "निकोलो मैकियावेली"
    }
}, {
    value: "RIDLEY",
    displayName: "Matt Ridley",
    fullName: "Matt Ridley",
    fullNameInOtherLanguages: {
        hi: "मैट रिडले"
    }
}, {
    value: "SUN_TZU",
    displayName: "Sun Tzu",
    fullName: "Sun Tzu",
    fullNameInOtherLanguages: {
        hi: "सन त्ज़ु"
    }
}, {
    value: "SYLVIA_PLATH",
    displayName: "Sylvia Plath",
    fullName: "Sylvia Plath",
    fullNameInOtherLanguages: {
        hi: "सिल्विया प्लाथ"
    }
}, {
    value: "ZHUANGZI",
    displayName: "Zhuangzi",
    fullName: "Zhuangzi",
    fullNameInOtherLanguages: {
        hi: "ज़ुआंग-ज़ी"
    }
}, {
    value: "DOUGLASS",
    displayName: "Douglass",
    fullName: "Frederick Douglass",
    fullNameInOtherLanguages: {
        hi: "फ्रेडरिक डगलस"
    }
}, {
    value: "KAMAL_RAVIKANT",
    displayName: "Kamal Ravikant",
    fullName: "Kamal Ravikant",
    fullNameInOtherLanguages: {
        hi: "कमल रविकांत"
    }
}, {
    value: "HEIDEGGER",
    displayName: "Heidegger",
    fullName: "Martin Heidegger",
    fullNameInOtherLanguages: {
        hi: "मार्टिन हाइडेगर"
    }
}, {
    value: "ANTHONY_DE_MELLO",
    displayName: "Anthony De Mello",
    fullName: "Anthony De Mello",
    fullNameInOtherLanguages: {
        hi: "एंथोनी डी मेलो"
    }
}, {
    value: "MICHAEL_SINGER",
    displayName: "Michael Singer",
    fullName: "Michael Singer",
    fullNameInOtherLanguages: {
        hi: "माइकल सिंगर"
    }
}, {
    value: "ROVELLI",
    displayName: "Carlo Rovelli",
    fullName: "Carlo Rovelli",
    fullNameInOtherLanguages: {
        hi: "कार्लो रोवेली"
    }
}, {
    value: "JED_MCKENNA",
    displayName: "Jed McKenna",
    fullName: "Jed McKenna",
    fullNameInOtherLanguages: {
        hi: "जेड मैककेना"
    }
}, {
    value: "PLATO",
    displayName: "Plato",
    fullName: "Plato",
    fullNameInOtherLanguages: {
        hi: "प्लेटो"
    }
}, {
    value: "SOCRATES",
    displayName: "Socrates",
    fullName: "Socrates",
    fullNameInOtherLanguages: {
        hi: "सुकरात"
    }
}, {
    value: "BRUCE_LEE",
    displayName: "Bruce Lee",
    fullName: "Bruce Lee",
    fullNameInOtherLanguages: {
        hi: "ब्रूस ली"
    }
}, {
    value: "FEYMAN",
    displayName: "Richard Feyman",
    fullName: "Richard Feyman",
    fullNameInOtherLanguages: {
        hi: "रिचर्ड फेमैन"
    }
}, {
    value: "KAPIL_GUPTA",
    displayName: "Kapil Gupta",
    fullName: "Kapil Gupta",
    fullNameInOtherLanguages: {
        hi: "कपिल गुप्ता"
    }
}, {
    value: "EMERSON",
    displayName: "Ralph Emerson",
    fullName: "Ralph Waldo Emerson",
    fullNameInOtherLanguages: {
        hi: "राल्फ वाल्डो इमर्सन"
    }
}, {
    value: "ELON_MUSK",
    displayName: "Elon Musk",
    fullName: "Elon Reeve Musk",
    fullNameInOtherLanguages: {
        hi: "एलन मस्क"
    }
}, {
    value: "ZAPFFE",
    displayName: "Peter Zapffe",
    fullName: "Peter Wessel Zapffe",
    fullNameInOtherLanguages: {
        hi: "पीटर वेसल जैपफे"
    }
}, {
    value: "HEGEL",
    displayName: "Hegel",
    fullName: "Georg Wilhelm Friedrich Hegel",
    fullNameInOtherLanguages: {
        hi: "जार्ज विलहेम फ्रेड्रिक हेगेल"
    }
},
]
doOperationsOnData(data);
export default data