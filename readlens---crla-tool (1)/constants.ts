export const INITIAL_ASSESSMENT_DATA: any = {
    "1": { // Grade 1
        "default": {
            task1: { title: "Letter Naming", items: ['a', 'W', 'U', 'm', 'O', 'P', 'ng', 'b', 't', 'Y'], type: "letter" },
            task2: { sentences: ["Ang bata nagdula sa gawas.", "Si Nanay nagluto og pagkaon."] },
            task3: { title: "Rhyming Words", items: [{pair: "bulsa - tasa"}, {pair: "libro - kwarto"}, {pair: "balay - kalay"}, {pair: "sapatos - lapis"}, {pair: "lingin - pinggan"}], type: "rhyme" },
            story: { time: 60 }
        }
    },
    "2": { // Grade 2
        "filipino": {
            task1: { title: "Sentence Recognition (Filipino)", items: ["Ang bola ay bilog.", "Kumain ka na ba?", "Tumakbo ang aso.", "Mainit ang araw.", "Masaya si Ana.", "Nasaan ang libro?", "Uminom ng tubig.", "Bukas ang pinto.", "Sino ang kasama mo?", "Malaki ang bahay."], type: "sentence" },
            task2: { sentences: ["Si Ben ay may bagong bola.", "Naglalaro siya sa parke kasama ang kanyang aso."] },
            task3: { title: "Word Identification (Filipino)", items: ["Aso", "Pusa", "Ibon", "Isda", "Manok", "Baboy", "Kalabaw", "Kambing", "Baka", "Kabayo"], type: "word" },
            story: { time: 120 }
        },
        "bisaya": {
            task1: { title: "Sentence Recognition (Bisaya)", items: ["Lingin ang bola.", "Nikaon na ka?", "Nidagan ang iro.", "Init ang adlaw.", "Nalipay si Ana.", "Hain ang libro?", "Inom og tubig.", "Abli ang pultahan.", "Kinsa imong kuyog?", "Dako ang balay."], type: "sentence" },
            task2: { sentences: ["Naay bag-ong bola si Ben.", "Nagdula siya sa parke uban sa iyang iro."] },
            task3: { title: "Word Identification (Bisaya)", items: ["Iro", "Iring", "Langgam", "Isda", "Manok", "Baboy", "Kabaw", "Kanding", "Baka", "Kabayo"], type: "word" },
            story: { time: 120 }
        }
    },
    "3": { // Grade 3
        "filipino": {
            task1: { title: "Sentence Recognition (Filipino)", items: ["Nagluto si Nanay ng masarap na adobo.", "Pumunta kami sa dagat noong Linggo.", "Ang mga bata ay nag-aaral ng mabuti.", "Malinis ang aming silid-aralan.", "Si Juan ay mahusay kumanta.", "Nagsisimba kami tuwing Linggo.", "Bumili si Tatay ng bagong sapatos.", "Mabilis tumakbo ang kabayo.", "Mahal ko ang aking pamilya.", "Maganda ang mga bulaklak sa hardin."], type: "sentence" },
            task2: { sentences: ["Ang pamilya Reyes ay masayang namumuhay sa bukid.", "Tumutulong ang mga anak sa gawaing bahay."] },
            task3: { title: "Word Identification (Filipino)", items: ["Paaralan", "Simbahan", "Palengke", "Ospital", "Pulisya", "Munisipyo", "Plasa", "Kalsada", "Tulay", "Bukid"], type: "word" },
            story: { time: 180 }
        },
        "bisaya": {
            task1: { title: "Sentence Recognition (Bisaya)", items: ["Nagluto si Mama og lami nga adobo.", "Niadto mi sa dagat pag-Dominggo.", "Ang mga bata nagtuon og maayo.", "Limpyo ang among classroom.", "Maayo mokanta si Juan.", "Magsimba mi kada Domingo.", "Nipalit si Papa og bag-ong sapatos.", "Kusog modagan ang kabayo.", "Gihigugma nako ang akong pamilya.", "Nindot ang mga bulaklak sa hardin."], type: "sentence" },
            task2: { sentences: ["Ang pamilya Reyes malipayong nagpuyo sa uma.", "Nagtabang ang mga anak sa buluhaton sa balay."] },
            task3: { title: "Word Identification (Bisaya)", items: ["Eskwelahan", "Simbahan", "Merkado", "Ospital", "Pulisya", "Munisipyo", "Plasa", "Kalsada", "Tulay", "Uma"], type: "word" },
            story: { time: 180 }
        },
        "english": {
            task1: { title: "Sentence Recognition (English)", items: ["The sun is shining brightly today.", "We went to the beach last Sunday.", "The children are studying hard.", "Our classroom is clean and tidy.", "Juan sings very well.", "We go to church every Sunday.", "Father bought a new pair of shoes.", "The horse runs very fast.", "I love my family very much.", "The flowers in the garden are beautiful."], type: "sentence" },
            task2: { sentences: ["The Reyes family lives happily on the farm.", "The children help with the household chores."] },
            task3: { title: "Word Identification (English)", items: ["School", "Church", "Market", "Hospital", "Station", "Municipal", "Plaza", "Street", "Bridge", "Farm"], type: "word" },
            story: { time: 180 }
        }
    }
};

export const STORY_PASSAGES = [
    {
        title: "Ang Pagbisita ni Lola Neneng",
        content: "Si Lola Neneng mianhi sa among balay. Dala-dala niya ang iyang bag nga puno og mga regalo. Nalipay kami nga makakita kaniya. Iyang gikuha ang mga tsokolate ug mga libro gikan sa iyang bag. Among gikuha ang mga regalo ug among gisugdan ang among panihapon.",
        questions: [{q: "Unsa ang dala ni Lola Neneng?", a: "bag"}, {q: "Nalipay ba sila?", a: "Oo"}, {q: "Unsa ang sulod?", a: "tsokolate"}, {q: "Unsa gibuhat?", a: "nanihapon"}, {q: "Kinsa mibisita?", a: "Lola Neneng"}]
    }
];
