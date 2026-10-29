/**
 * ReadLens - Reading Drill Module
 * Interactive, audio-supported, and picture-assisted reading drills
 * Supports: Letter Sounds, CVC Words, Fuller Method, Sound Blending,
 * Multi-format Importer (PDF/DOCX/OCR), Image Library, and Progress Tracking.
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. DEFAULT READING DRILL CURRICULUM
    // =========================================================================

    const DEFAULT_LETTER_SOUNDS = [
        { id: 'ls_a', letter: 'Aa', sound: 'ah', ipa: '/æ/', name: 'A', enWord: 'apple', filWord: 'araw', icon: '🍎', customImg: '' },
        { id: 'ls_b', letter: 'Bb', sound: 'b', ipa: '/b/', name: 'B', enWord: 'ball', filWord: 'bola', icon: '⚽', customImg: '' },
        { id: 'ls_c', letter: 'Cc', sound: 'k', ipa: '/k/', name: 'C', enWord: 'cat', filWord: 'kambing', icon: '🐱', customImg: '' },
        { id: 'ls_d', letter: 'Dd', sound: 'd', ipa: '/d/', name: 'D', enWord: 'dog', filWord: 'dahon', icon: '🐶', customImg: '' },
        { id: 'ls_e', letter: 'Ee', sound: 'eh', ipa: '/ɛ/', name: 'E', enWord: 'egg', filWord: 'elepante', icon: '🥚', customImg: '' },
        { id: 'ls_f', letter: 'Ff', sound: 'f', ipa: '/f/', name: 'F', enWord: 'fish', filWord: 'isda', icon: '🐟', customImg: '' },
        { id: 'ls_g', letter: 'Gg', sound: 'g', ipa: '/ɡ/', name: 'G', enWord: 'grapes', filWord: 'gatas', icon: '🍇', customImg: '' },
        { id: 'ls_h', letter: 'Hh', sound: 'h', ipa: '/h/', name: 'H', enWord: 'hat', filWord: 'halaman', icon: '🎩', customImg: '' },
        { id: 'ls_i', letter: 'Ii', sound: 'ih', ipa: '/ɪ/', name: 'I', enWord: 'igloo', filWord: 'ibon', icon: '🐦', customImg: '' },
        { id: 'ls_j', letter: 'Jj', sound: 'j', ipa: '/dʒ/', name: 'J', enWord: 'jam', filWord: 'dyip', icon: '🫙', customImg: '' },
        { id: 'ls_k', letter: 'Kk', sound: 'k', ipa: '/k/', name: 'K', enWord: 'kite', filWord: 'kutsara', icon: '🪁', customImg: '' },
        { id: 'ls_l', letter: 'Ll', sound: 'l', ipa: '/l/', name: 'L', enWord: 'lion', filWord: 'lapis', icon: '🦁', customImg: '' },
        { id: 'ls_m', letter: 'Mm', sound: 'm', ipa: '/m/', name: 'M', enWord: 'moon', filWord: 'mangga', icon: '🌙', customImg: '' },
        { id: 'ls_n', letter: 'Nn', sound: 'n', ipa: '/n/', name: 'N', enWord: 'net', filWord: 'nanay', icon: '🕸️', customImg: '' },
        { id: 'ls_o', letter: 'Oo', sound: 'aw', ipa: '/ɒ/', name: 'O', enWord: 'orange', filWord: 'orasan', icon: '🍊', customImg: '' },
        { id: 'ls_p', letter: 'Pp', sound: 'p', ipa: '/p/', name: 'P', enWord: 'pen', filWord: 'pusa', icon: '🖊️', customImg: '' },
        { id: 'ls_q', letter: 'Qq', sound: 'kw', ipa: '/kw/', name: 'Q', enWord: 'queen', filWord: 'kandila', icon: '👑', customImg: '' },
        { id: 'ls_r', letter: 'Rr', sound: 'r', ipa: '/r/', name: 'R', enWord: 'ring', filWord: 'relo', icon: '💍', customImg: '' },
        { id: 'ls_s', letter: 'Ss', sound: 's', ipa: '/s/', name: 'S', enWord: 'sun', filWord: 'sapatos', icon: '☀️', customImg: '' },
        { id: 'ls_t', letter: 'Tt', sound: 't', ipa: '/t/', name: 'T', enWord: 'tree', filWord: 'tasa', icon: '🌳', customImg: '' },
        { id: 'ls_u', letter: 'Uu', sound: 'uh', ipa: '/ʌ/', name: 'U', enWord: 'umbrella', filWord: 'ulan', icon: '☂️', customImg: '' },
        { id: 'ls_v', letter: 'Vv', sound: 'v', ipa: '/v/', name: 'V', enWord: 'van', filWord: 'bintana', icon: '🚐', customImg: '' },
        { id: 'ls_w', letter: 'Ww', sound: 'w', ipa: '/w/', name: 'W', enWord: 'watch', filWord: 'watawat', icon: '⌚', customImg: '' },
        { id: 'ls_x', letter: 'Xx', sound: 'ks', ipa: '/ks/', name: 'X', enWord: 'box', filWord: 'kahon', icon: '📦', customImg: '' },
        { id: 'ls_y', letter: 'Yy', sound: 'y', ipa: '/j/', name: 'Y', enWord: 'yarn', filWord: 'yoyo', icon: '🧶', customImg: '' },
        { id: 'ls_z', letter: 'Zz', sound: 'z', ipa: '/z/', name: 'Z', enWord: 'zebra', filWord: 'sora', icon: '🦓', customImg: '' }
    ];

    const DEFAULT_CVC_WORDS = [
        // Short A
        { id: 'cvc_cat', word: 'cat', vowel: 'a', family: '-at', sounds: ['c', 'a', 't'], icon: '🐱', customImg: '', sentence: 'The cat sat on the mat.' },
        { id: 'cvc_bat', word: 'bat', vowel: 'a', family: '-at', sounds: ['b', 'a', 't'], icon: '🦇', customImg: '', sentence: 'A bat flew in the dark.' },
        { id: 'cvc_mat', word: 'mat', vowel: 'a', family: '-at', sounds: ['m', 'a', 't'], icon: '🟫', customImg: '', sentence: 'Sit on the brown mat.' },
        { id: 'cvc_rat', word: 'rat', vowel: 'a', family: '-at', sounds: ['r', 'a', 't'], icon: '🐀', customImg: '', sentence: 'The rat ran very fast.' },
        { id: 'cvc_hat', word: 'hat', vowel: 'a', family: '-at', sounds: ['h', 'a', 't'], icon: '🎩', customImg: '', sentence: 'He wore a black hat.' },
        { id: 'cvc_pan', word: 'pan', vowel: 'a', family: '-an', sounds: ['p', 'a', 'n'], icon: '🍳', customImg: '', sentence: 'Cook the egg in the pan.' },
        { id: 'cvc_van', word: 'van', vowel: 'a', family: '-an', sounds: ['v', 'a', 'n'], icon: '🚐', customImg: '', sentence: 'We ride in the big van.' },
        { id: 'cvc_map', word: 'map', vowel: 'a', family: '-ap', sounds: ['m', 'a', 'p'], icon: '🗺️', customImg: '', sentence: 'Look at the road map.' },
        { id: 'cvc_cap', word: 'cap', vowel: 'a', family: '-ap', sounds: ['c', 'a', 'p'], icon: '🧢', customImg: '', sentence: 'Put on your blue cap.' },

        // Short E
        { id: 'cvc_pen', word: 'pen', vowel: 'e', family: '-en', sounds: ['p', 'e', 'n'], icon: '🖊️', customImg: '', sentence: 'Write with a blue pen.' },
        { id: 'cvc_hen', word: 'hen', vowel: 'e', family: '-en', sounds: ['h', 'e', 'n'], icon: '🐔', customImg: '', sentence: 'The red hen laid an egg.' },
        { id: 'cvc_ten', word: 'ten', vowel: 'e', family: '-en', sounds: ['t', 'e', 'n'], icon: '🔟', customImg: '', sentence: 'Count from one to ten.' },
        { id: 'cvc_bed', word: 'bed', vowel: 'e', family: '-ed', sounds: ['b', 'e', 'd'], icon: '🛏️', customImg: '', sentence: 'Time to sleep in bed.' },
        { id: 'cvc_red', word: 'red', vowel: 'e', family: '-ed', sounds: ['r', 'e', 'd'], icon: '🔴', customImg: '', sentence: 'The apple is bright red.' },
        { id: 'cvc_net', word: 'net', vowel: 'e', family: '-et', sounds: ['n', 'e', 't'], icon: '🥅', customImg: '', sentence: 'Catch the ball in the net.' },
        { id: 'cvc_pet', word: 'pet', vowel: 'e', family: '-et', sounds: ['p', 'e', 't'], icon: '🐕', customImg: '', sentence: 'I love my cute pet.' },

        // Short I
        { id: 'cvc_pig', word: 'pig', vowel: 'i', family: '-ig', sounds: ['p', 'i', 'g'], icon: '🐷', customImg: '', sentence: 'The pink pig is playing.' },
        { id: 'cvc_pin', word: 'pin', vowel: 'i', family: '-in', sounds: ['p', 'i', 'n'], icon: '📌', customImg: '', sentence: 'Stick the note with a pin.' },
        { id: 'cvc_bin', word: 'bin', vowel: 'i', family: '-in', sounds: ['b', 'i', 'n'], icon: '🗑️', customImg: '', sentence: 'Put trash in the bin.' },
        { id: 'cvc_sit', word: 'sit', vowel: 'i', family: '-it', sounds: ['s', 'i', 't'], icon: '🪑', customImg: '', sentence: 'Sit down on the chair.' },
        { id: 'cvc_lip', word: 'lip', vowel: 'i', family: '-ip', sounds: ['l', 'i', 'p'], icon: '👄', customImg: '', sentence: 'Touch your bottom lip.' },
        { id: 'cvc_zip', word: 'zip', vowel: 'i', family: '-ip', sounds: ['z', 'i', 'p'], icon: '🤐', customImg: '', sentence: 'Zip up your warm jacket.' },

        // Short O
        { id: 'cvc_dog', word: 'dog', vowel: 'o', family: '-og', sounds: ['d', 'o', 'g'], icon: '🐶', customImg: '', sentence: 'The friendly dog barks.' },
        { id: 'cvc_fox', word: 'fox', vowel: 'o', family: '-ox', sounds: ['f', 'o', 'x'], icon: '🦊', customImg: '', sentence: 'The quick brown fox jumped.' },
        { id: 'cvc_box', word: 'box', vowel: 'o', family: '-ox', sounds: ['b', 'o', 'x'], icon: '📦', customImg: '', sentence: 'Open the gift box.' },
        { id: 'cvc_pot', word: 'pot', vowel: 'o', family: '-ot', sounds: ['p', 'o', 't'], icon: '🍲', customImg: '', sentence: 'Soup cooks in the pot.' },
        { id: 'cvc_hot', word: 'hot', vowel: 'o', family: '-ot', sounds: ['h', 'o', 't'], icon: '🔥', customImg: '', sentence: 'The sunny day is hot.' },
        { id: 'cvc_mop', word: 'mop', vowel: 'o', family: '-op', sounds: ['m', 'o', 'p'], icon: '🧹', customImg: '', sentence: 'Mop the wet floor clean.' },

        // Short U
        { id: 'cvc_cup', word: 'cup', vowel: 'u', family: '-up', sounds: ['c', 'u', 'p'], icon: '☕', customImg: '', sentence: 'Drink water from the cup.' },
        { id: 'cvc_sun', word: 'sun', vowel: 'u', family: '-un', sounds: ['s', 'u', 'n'], icon: '☀️', customImg: '', sentence: 'The bright sun shines high.' },
        { id: 'cvc_bus', word: 'bus', vowel: 'u', family: '-us', sounds: ['b', 'u', 's'], icon: '🚌', customImg: '', sentence: 'We take the yellow bus.' },
        { id: 'cvc_bug', word: 'bug', vowel: 'u', family: '-ug', sounds: ['b', 'u', 'g'], icon: '🐛', customImg: '', sentence: 'A tiny green bug crawled.' },
        { id: 'cvc_tub', word: 'tub', vowel: 'u', family: '-ub', sounds: ['t', 'u', 'b'], icon: '🛁', customImg: '', sentence: 'Splash in the water tub.' },
        { id: 'cvc_hut', word: 'hut', vowel: 'u', family: '-ut', sounds: ['h', 'u', 't'], icon: '🛖', customImg: '', sentence: 'A nipa hut in the farm.' }
    ];

    const DEFAULT_FULLER_STEPS = [
        {
            id: 'fuller_1',
            order: 1,
            title: 'Step 1: Introduction of Short /a/',
            description: 'Vowel sound /a/ and initial letter recognition',
            letters: ['A', 'a'],
            sounds: ['/a/ as in apple'],
            syllables: ['am', 'an', 'at'],
            words: ['at', 'am', 'an'],
            sentences: ['An apple.', 'At the mat.'],
            icon: '🍎'
        },
        {
            id: 'fuller_2',
            order: 2,
            title: 'Step 2: Consonant /m/ & Blending',
            description: 'Combining consonant M with Short /a/',
            letters: ['M', 'm'],
            sounds: ['/m/ as in moon'],
            syllables: ['ma', 'am'],
            words: ['mat', 'man', 'map', 'Sam'],
            sentences: ['A mat.', 'A man on a mat.'],
            icon: '🌙'
        },
        {
            id: 'fuller_3',
            order: 3,
            title: 'Step 3: Consonant /s/ & Blending',
            description: 'Combining consonant S with learned sounds',
            letters: ['S', 's'],
            sounds: ['/s/ as in sun'],
            syllables: ['sa', 'as'],
            words: ['sat', 'sap', 'sam'],
            sentences: ['Sam sat.', 'Sam sat on a mat.'],
            icon: '☀️'
        },
        {
            id: 'fuller_4',
            order: 4,
            title: 'Step 4: Consonant /t/ & Word Formation',
            description: 'Forming meaningful words with /t/',
            letters: ['T', 't'],
            sounds: ['/t/ as in tree'],
            syllables: ['ta', 'at'],
            words: ['tap', 'tan', 'tag'],
            sentences: ['Tap the mat.', 'Sam has a tan tag.'],
            icon: '🌳'
        },
        {
            id: 'fuller_5',
            order: 5,
            title: 'Step 5: Consonant /b/ & Syllable Building',
            description: 'Combining /b/ with short vowels',
            letters: ['B', 'b'],
            sounds: ['/b/ as in ball'],
            syllables: ['ba', 'ab'],
            words: ['bat', 'bag', 'ban'],
            sentences: ['A bat in a bag.', 'Sam hit the bat.'],
            icon: '⚽'
        },
        {
            id: 'fuller_6',
            order: 6,
            title: 'Step 6: Consonant /p/ & Sentence Reading',
            description: 'Expanded reading with consonant /p/',
            letters: ['P', 'p'],
            sounds: ['/p/ as in pen'],
            syllables: ['pa', 'ap'],
            words: ['pan', 'pat', 'pad', 'map'],
            sentences: ['Pat the pan.', 'A map on the pad.'],
            icon: '🖊️'
        }
    ];

    const DEFAULT_BLENDING_WORDS = [
        { id: 'b_cat', word: 'cat', sounds: ['c', 'a', 't'], ipa: ['/k/', '/æ/', '/t/'], level: '3-Phoneme', icon: '🐱', customImg: '' },
        { id: 'b_dog', word: 'dog', sounds: ['d', 'o', 'g'], ipa: ['/d/', '/ɒ/', '/ɡ/'], level: '3-Phoneme', icon: '🐶', customImg: '' },
        { id: 'b_sun', word: 'sun', sounds: ['s', 'u', 'n'], ipa: ['/s/', '/ʌ/', '/n/'], level: '3-Phoneme', icon: '☀️', customImg: '' },
        { id: 'b_pen', word: 'pen', sounds: ['p', 'e', 'n'], ipa: ['/p/', '/ɛ/', '/n/'], level: '3-Phoneme', icon: '🖊️', customImg: '' },
        { id: 'b_pig', word: 'pig', sounds: ['p', 'i', 'g'], ipa: ['/p/', '/ɪ/', '/ɡ/'], level: '3-Phoneme', icon: '🐷', customImg: '' },
        { id: 'b_cup', word: 'cup', sounds: ['c', 'u', 'p'], ipa: ['/k/', '/ʌ/', '/p/'], level: '3-Phoneme', icon: '☕', customImg: '' },
        { id: 'b_at', word: 'at', sounds: ['a', 't'], ipa: ['/æ/', '/t/'], level: '2-Phoneme', icon: '📍', customImg: '' },
        { id: 'b_in', word: 'in', sounds: ['i', 'n'], ipa: ['/ɪ/', '/n/'], level: '2-Phoneme', icon: '📥', customImg: '' },
        { id: 'b_on', word: 'on', sounds: ['o', 'n'], ipa: ['/ɒ/', '/n/'], level: '2-Phoneme', icon: '🔛', customImg: '' },
        { id: 'b_up', word: 'up', sounds: ['u', 'p'], ipa: ['/ʌ/', '/p/'], level: '2-Phoneme', icon: '⬆️', customImg: '' },
        { id: 'b_frog', word: 'frog', sounds: ['f', 'r', 'o', 'g'], ipa: ['/f/', '/r/', '/ɒ/', '/ɡ/'], level: '4-Phoneme Blend', icon: '🐸', customImg: '' },
        { id: 'b_stop', word: 'stop', sounds: ['s', 't', 'o', 'p'], ipa: ['/s/', '/t/', '/ɒ/', '/p/'], level: '4-Phoneme Blend', icon: '🛑', customImg: '' },
        { id: 'b_clap', word: 'clap', sounds: ['c', 'l', 'a', 'p'], ipa: ['/k/', '/l/', '/æ/', '/p/'], level: '4-Phoneme Blend', icon: '👏', customImg: '' }
    ];

    // Clean phoneme audio mapping and authentic prerecorded library paths
    const PHONICS_AUDIO_MAP = {
        phonemes: {
            'a': './audio/phonics/short-vowels/a.mp3',
            'b': './audio/phonics/consonants/b.mp3',
            'c': './audio/phonics/consonants/c.mp3',
            'd': './audio/phonics/consonants/d.mp3',
            'e': './audio/phonics/short-vowels/e.mp3',
            'f': './audio/phonics/consonants/f.mp3',
            'g': './audio/phonics/consonants/g.mp3',
            'h': './audio/phonics/consonants/h.mp3',
            'i': './audio/phonics/short-vowels/i.mp3',
            'j': './audio/phonics/consonants/j.mp3',
            'k': './audio/phonics/consonants/k.mp3',
            'l': './audio/phonics/consonants/l.mp3',
            'm': './audio/phonics/consonants/m.mp3',
            'n': './audio/phonics/consonants/n.mp3',
            'o': './audio/phonics/short-vowels/o.mp3',
            'p': './audio/phonics/consonants/p.mp3',
            'q': './audio/phonics/consonants/q.mp3',
            'r': './audio/phonics/consonants/r.mp3',
            's': './audio/phonics/consonants/s.mp3',
            't': './audio/phonics/consonants/t.mp3',
            'u': './audio/phonics/short-vowels/u.mp3',
            'v': './audio/phonics/consonants/v.mp3',
            'w': './audio/phonics/consonants/w.mp3',
            'x': './audio/phonics/consonants/x.mp3',
            'y': './audio/phonics/consonants/y.mp3',
            'z': './audio/phonics/consonants/z.mp3',
            'ah': './audio/phonics/short-vowels/a.mp3',
            'eh': './audio/phonics/short-vowels/e.mp3',
            'ih': './audio/phonics/short-vowels/i.mp3',
            'aw': './audio/phonics/short-vowels/o.mp3',
            'uh': './audio/phonics/short-vowels/u.mp3',
            'kw': './audio/phonics/consonants/q.mp3',
            'ks': './audio/phonics/consonants/x.mp3',
            'ch': './audio/phonics/blending/ch.mp3',
            'sh': './audio/phonics/blending/sh.mp3',
            'th': './audio/phonics/blending/th.mp3',
            'bl': './audio/phonics/blending/bl.mp3',
            'br': './audio/phonics/blending/br.mp3',
            'cl': './audio/phonics/blending/cl.mp3',
            'cr': './audio/phonics/blending/cr.mp3',
            'dr': './audio/phonics/blending/dr.mp3',
            'fl': './audio/phonics/blending/fl.mp3',
            'fr': './audio/phonics/blending/fr.mp3',
            'gl': './audio/phonics/blending/gl.mp3',
            'gr': './audio/phonics/blending/gr.mp3',
            'pl': './audio/phonics/blending/pl.mp3',
            'pr': './audio/phonics/blending/pr.mp3',
            'st': './audio/phonics/blending/st.mp3'
        },
        letterNames: {
            'a': './audio/phonics/letter-names/a.ogg',
            'b': './audio/phonics/letter-names/b.ogg',
            'c': './audio/phonics/letter-names/c.ogg',
            'd': './audio/phonics/letter-names/d.ogg',
            'e': './audio/phonics/letter-names/e.ogg',
            'f': './audio/phonics/letter-names/f.ogg',
            'g': './audio/phonics/letter-names/g.ogg',
            'h': './audio/phonics/letter-names/h.ogg',
            'i': './audio/phonics/letter-names/i.ogg',
            'j': './audio/phonics/letter-names/j.ogg',
            'k': './audio/phonics/letter-names/k.ogg',
            'l': './audio/phonics/letter-names/l.ogg',
            'm': './audio/phonics/letter-names/m.ogg',
            'n': './audio/phonics/letter-names/n.m4a',
            'o': './audio/phonics/letter-names/o.ogg',
            'p': './audio/phonics/letter-names/p.ogg',
            'q': './audio/phonics/letter-names/q.ogg',
            'r': './audio/phonics/letter-names/r.ogg',
            's': './audio/phonics/letter-names/s.m4a',
            't': './audio/phonics/letter-names/t.m4a',
            'u': './audio/phonics/letter-names/u.ogg',
            'v': './audio/phonics/letter-names/v.ogg',
            'w': './audio/phonics/letter-names/w.ogg',
            'x': './audio/phonics/letter-names/x.ogg',
            'y': './audio/phonics/letter-names/y.ogg',
            'z': './audio/phonics/letter-names/z.ogg'
        },
        syllables: {
            'at': './audio/phonics/syllables/at.mp3',
            '-at': './audio/phonics/syllables/at.mp3',
            'an': './audio/phonics/syllables/an.mp3',
            '-an': './audio/phonics/syllables/an.mp3',
            'et': './audio/phonics/syllables/et.mp3',
            '-et': './audio/phonics/syllables/et.mp3',
            'it': './audio/phonics/syllables/it.mp3',
            '-it': './audio/phonics/syllables/it.mp3',
            'ot': './audio/phonics/syllables/ot.mp3',
            '-ot': './audio/phonics/syllables/ot.mp3',
            'ut': './audio/phonics/syllables/ut.mp3',
            '-ut': './audio/phonics/syllables/ut.mp3',
            'un': './audio/phonics/syllables/un.mp3',
            '-un': './audio/phonics/syllables/un.mp3',
            'um': './audio/phonics/syllables/um.mp3',
            '-um': './audio/phonics/syllables/um.mp3',
            'ig': './audio/phonics/syllables/ig.mp3',
            '-ig': './audio/phonics/syllables/ig.mp3'
        },
        words: {
            'cat': './audio/phonics/words/cat.mp3',
            'bat': './audio/phonics/words/bat.mp3',
            'hat': './audio/phonics/words/hat.mp3',
            'dog': './audio/phonics/words/dog.mp3',
            'bed': './audio/phonics/words/bed.mp3',
            'net': './audio/phonics/words/net.mp3',
            'pig': './audio/phonics/words/pig.mp3',
            'wig': './audio/phonics/words/wig.mp3',
            'pot': './audio/phonics/words/pot.mp3',
            'hot': './audio/phonics/words/hot.mp3',
            'van': './audio/phonics/words/van.mp3',
            'man': './audio/phonics/words/man.mp3',
            'bug': './audio/phonics/words/bug.mp3',
            'rug': './audio/phonics/words/rug.mp3',
            'fox': './audio/phonics/words/fox.mp3',
            'ball': './audio/phonics/words/ball.mp3',
            'bell': './audio/phonics/words/bell.mp3',
            'frog': './audio/phonics/words/frog.mp3',
            'fish': './audio/phonics/words/fish.mp3'
        }
    };

    // =========================================================================
    // 2. AUDIO & PHONICS CONTROLLER
    // =========================================================================

    const DrillAudio = {
        currentRate: 0.85,
        selectedVoiceURI: null,
        isPlaying: false,
        currentAudio: null,

        init() {
            if (window.appStorage) {
                this.selectedVoiceURI = window.appStorage.getItem('readLens_drillVoiceURI') || null;
                const storedRate = window.appStorage.getItem('readLens_drillRate');
                if (storedRate) this.currentRate = parseFloat(storedRate) || 0.85;
            }

            // Unlock audio playback on first user gesture (required on iOS Safari, Android, and modern Chrome HTTPS)
            const unlockHandler = () => {
                this.unlockAudio();
            };
            ['click', 'touchstart', 'keydown'].forEach(evt => {
                window.addEventListener(evt, unlockHandler, { once: true, passive: true });
            });
        },

        getVoices() {
            if (!('speechSynthesis' in window)) return [];
            return window.speechSynthesis.getVoices() || [];
        },

        getSelectedVoice() {
            const voices = this.getVoices();
            if (this.selectedVoiceURI) {
                const found = voices.find(v => v.voiceURI === this.selectedVoiceURI);
                if (found) return found;
            }
            if (window.appStorage) {
                const globalVoice = window.appStorage.getItem('readLens_voiceURI');
                if (globalVoice) {
                    const found = voices.find(v => v.voiceURI === globalVoice);
                    if (found) return found;
                }
            }
            return null;
        },

        setVoice(voiceURI) {
            this.selectedVoiceURI = voiceURI || null;
            if (window.appStorage) {
                if (voiceURI) {
                    window.appStorage.setItem('readLens_drillVoiceURI', voiceURI);
                } else {
                    window.appStorage.removeItem('readLens_drillVoiceURI');
                }
            }
        },

        getCustomAudio(type, key) {
            if (!window.appStorage) return null;
            const cleanKey = String(key || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
            return window.appStorage.getItem(`readLens_customAudio_${type}_${cleanKey}`);
        },

        setCustomAudio(type, key, dataUrl) {
            if (!window.appStorage) return;
            const cleanKey = String(key || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
            window.appStorage.setItem(`readLens_customAudio_${type}_${cleanKey}`, dataUrl);
        },

        removeCustomAudio(type, key) {
            if (!window.appStorage) return;
            const cleanKey = String(key || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
            window.appStorage.removeItem(`readLens_customAudio_${type}_${cleanKey}`);
        },

        getAllCustomAudio() {
            const list = [];
            const prefix = 'readLens_customAudio_';
            const keys = new Set();

            if (window.appStorage && window.appStorage.cache) {
                Object.keys(window.appStorage.cache).forEach(k => {
                    if (k.startsWith(prefix)) keys.add(k);
                });
            }
            try {
                for (let i = 0; i < localStorage.length; i++) {
                    const k = localStorage.key(i);
                    if (k && k.startsWith(prefix)) keys.add(k);
                }
            } catch (e) {}

            keys.forEach(k => {
                const parts = k.substring(prefix.length).split('_');
                const type = parts[0];
                const key = parts.slice(1).join('_');
                const dataUrl = (window.appStorage && window.appStorage.getItem(k)) || localStorage.getItem(k);
                if (type && key && dataUrl) {
                    list.push({ type, key, dataUrl });
                }
            });

            return list;
        },

        resolveUrl(relPath) {
            if (!relPath) return '';
            if (/^(https?:|data:|blob:)/i.test(relPath)) return relPath;
            try {
                let base = document.baseURI || window.location.href;
                base = base.split('?')[0].split('#')[0];
                if (/\/[^/]+\.[^/]+$/.test(base)) {
                    base = base.replace(/\/[^/]+\.[^/]+$/, '/');
                } else if (!base.endsWith('/')) {
                    base = base + '/';
                }
                const clean = relPath.replace(/^\.\//, '');
                return new URL(clean, base).href;
            } catch (e) {
                return relPath;
            }
        },

        getCandidates(src) {
            if (!src) return [];
            if (/^(data:|blob:)/i.test(src)) return [src];

            const candidates = [];
            const resolved = this.resolveUrl(src);
            candidates.push(resolved);

            // Format alternative (.mp3 <-> .ogg)
            if (resolved.endsWith('.mp3')) {
                candidates.push(resolved.replace(/\.mp3$/, '.ogg'));
            } else if (resolved.endsWith('.ogg')) {
                candidates.push(resolved.replace(/\.ogg$/, '.mp3'));
            }

            // Raw GitHub User Content fallback if deployed on GitHub Pages
            try {
                const u = new URL(resolved);
                if (u.hostname.endsWith('github.io')) {
                    const user = u.hostname.replace('.github.io', '');
                    const pathParts = u.pathname.replace(/^\//, '').split('/');
                    const repo = pathParts[0];
                    const filePath = pathParts.slice(1).join('/');
                    if (user && repo && filePath) {
                        candidates.push(`https://raw.githubusercontent.com/${user}/${repo}/main/${filePath}`);
                        candidates.push(`https://raw.githubusercontent.com/${user}/${repo}/master/${filePath}`);
                    }
                }
            } catch (e) {}

            return candidates;
        },

        unlockAudio() {
            if (this._unlocked) return;
            try {
                const silent = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
                silent.volume = 0.01;
                const p = silent.play();
                if (p && p.then) {
                    p.then(() => {
                        silent.pause();
                        this._unlocked = true;
                    }).catch(() => {});
                }
            } catch (e) {}
        },

        playAudioFile(src, onEnd = null, onError = null) {
            this.stop();
            this.isPlaying = true;

            const candidates = this.getCandidates(src);
            let idx = 0;

            const tryNext = () => {
                if (idx >= candidates.length) {
                    this.isPlaying = false;
                    this.currentAudio = null;
                    const err = new Error(`Audio load failed for: ${src}`);
                    console.warn('[DrillAudio]', err.message);
                    if (onError) onError(err);
                    else if (onEnd) onEnd(err);
                    return;
                }

                const currentSrc = candidates[idx++];
                try {
                    const audio = new Audio(currentSrc);
                    this.currentAudio = audio;
                    audio.playbackRate = this.currentRate || 1.0;

                    audio.onended = () => {
                        this.isPlaying = false;
                        this.currentAudio = null;
                        if (onEnd) onEnd();
                    };

                    audio.onerror = (err) => {
                        console.warn(`[DrillAudio] Candidate failed (${currentSrc}), trying next...`);
                        tryNext();
                    };

                    const promise = audio.play();
                    if (promise !== undefined) {
                        promise.catch(err => {
                            if (err && err.name === 'NotAllowedError') {
                                this.isPlaying = false;
                                this.currentAudio = null;
                                this.showAudioNotification('Please tap anywhere on the screen first to enable audio playback in your browser.', 'info');
                                if (onEnd) onEnd(err);
                                return;
                            }
                            console.warn(`[DrillAudio] Playback error on ${currentSrc}:`, err);
                            tryNext();
                        });
                    }
                } catch (e) {
                    console.error(`[DrillAudio] Exception initializing audio for ${currentSrc}:`, e);
                    tryNext();
                }
            };

            tryNext();
        },

        playPhoneme(char, onEnd = null) {
            const clean = String(char || '').toLowerCase().trim().replace(/^\//, '').replace(/\/$/, '');
            if (!clean) return onEnd && onEnd();

            // 1. Teacher custom upload takes highest priority
            const custom = this.getCustomAudio('phoneme', clean);
            if (custom) {
                this.playAudioFile(custom, onEnd, (err) => {
                    this.showAudioNotification(`Custom audio for /${clean}/ failed to play.`, 'warning');
                    if (onEnd) onEnd(err);
                });
                return;
            }

            // 2. Prerecorded authentic phoneme
            const src = PHONICS_AUDIO_MAP.phonemes[clean];
            if (src) {
                this.playAudioFile(src, onEnd, (err) => {
                    console.warn(`[DrillAudio] Prerecorded phoneme audio not reachable at ${src}.`);
                    this.showAudioNotification(`Phoneme sound /${clean}/ audio file was not found on GitHub/server (${src}). Please ensure the "audio" folder was uploaded to your GitHub repository, or upload a custom recording in Teacher Management.`, 'warning');
                    if (onEnd) onEnd(err);
                });
                return;
            }

            // 3. Fallback: clearly notify that sound is missing. NEVER use inaccurate TTS letter name!
            console.warn(`[DrillAudio] Prerecorded phoneme audio not found for /${clean}/.`);
            this.showAudioNotification(`Phoneme sound /${clean}/ audio is not available. You can upload a recording in Teacher Management.`, 'warning');
            if (onEnd) onEnd();
        },

        playLetterName(char, onEnd = null) {
            const clean = String(char || '').toLowerCase().trim().charAt(0);
            if (!clean) return onEnd && onEnd();

            // 1. Teacher custom upload
            const custom = this.getCustomAudio('name', clean);
            if (custom) {
                this.playAudioFile(custom, onEnd, () => {
                    this.speak(clean.toUpperCase(), 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 2. Prerecorded authentic letter name
            const src = PHONICS_AUDIO_MAP.letterNames[clean];
            if (src) {
                this.playAudioFile(src, onEnd, () => {
                    // Fallback to TTS letter name if prerecorded file fails to load
                    this.speak(clean.toUpperCase(), 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 3. Fallback to TTS letter name
            this.speak(clean.toUpperCase(), 'en-US', this.currentRate, onEnd);
        },

        playWord(word, onEnd = null) {
            const clean = String(word || '').toLowerCase().trim();
            if (!clean) return onEnd && onEnd();

            // 1. Teacher custom upload
            const custom = this.getCustomAudio('word', clean);
            if (custom) {
                this.playAudioFile(custom, onEnd, () => {
                    this.speak(clean, 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 2. Prerecorded word audio
            const src = PHONICS_AUDIO_MAP.words[clean];
            if (src) {
                this.playAudioFile(src, onEnd, () => {
                    // Fallback to speech synthesis if audio file failed to load from GitHub
                    this.speak(clean, 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 3. Fallback to speech synthesis (complete words synthesize accurately)
            this.speak(clean, 'en-US', this.currentRate, onEnd);
        },

        playSyllable(syllable, onEnd = null) {
            const clean = String(syllable || '').toLowerCase().trim();
            if (!clean) return onEnd && onEnd();

            // 1. Teacher custom upload
            const custom = this.getCustomAudio('syllable', clean);
            if (custom) {
                this.playAudioFile(custom, onEnd, () => {
                    this.speak(clean, 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 2. Prerecorded syllable audio
            const src = PHONICS_AUDIO_MAP.syllables[clean];
            if (src) {
                this.playAudioFile(src, onEnd, () => {
                    this.speak(clean, 'en-US', this.currentRate, onEnd);
                });
                return;
            }

            // 3. Fallback to speech synthesis
            this.speak(clean, 'en-US', this.currentRate, onEnd);
        },

        blendPhonemes(soundsArray, wholeWord, onHighlightTile = null, onComplete = null) {
            if (!soundsArray || soundsArray.length === 0) {
                this.playWord(wholeWord, onComplete);
                return;
            }

            this.stop();
            let step = 0;
            const playNext = () => {
                if (step < soundsArray.length) {
                    const currentSound = soundsArray[step];
                    if (onHighlightTile) onHighlightTile(step, currentSound);
                    this.playPhoneme(currentSound, () => {
                        step++;
                        setTimeout(playNext, 250);
                    });
                } else {
                    if (onHighlightTile) onHighlightTile(-1, wholeWord);
                    setTimeout(() => {
                        this.playWord(wholeWord, () => {
                            if (onComplete) onComplete();
                        });
                    }, 400);
                }
            };

            playNext();
        },

        speak(text, lang = 'en-US', rate = null, onEnd = null) {
            if (!('speechSynthesis' in window)) {
                if (onEnd) onEnd();
                return;
            }

            this.stop();
            this.isPlaying = true;

            const utterance = new SpeechSynthesisUtterance(String(text).trim());
            utterance.rate = rate || this.currentRate;

            const voice = this.getSelectedVoice();
            if (voice) {
                utterance.voice = voice;
            } else {
                utterance.lang = lang;
            }

            utterance.onend = () => {
                this.isPlaying = false;
                if (onEnd) onEnd();
            };

            utterance.onerror = (e) => {
                this.isPlaying = false;
                if (onEnd) onEnd();
            };

            window.speechSynthesis.speak(utterance);
        },

        stop() {
            if (this.currentAudio) {
                try {
                    this.currentAudio.pause();
                    this.currentAudio.currentTime = 0;
                } catch(e) {}
                this.currentAudio = null;
            }
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            this.isPlaying = false;
        },

        pause() {
            if (this.currentAudio) {
                this.currentAudio.pause();
            }
            if ('speechSynthesis' in window) {
                window.speechSynthesis.pause();
            }
        },

        resume() {
            if (this.currentAudio) {
                this.currentAudio.play();
            }
            if ('speechSynthesis' in window) {
                window.speechSynthesis.resume();
            }
        },

        setRate(newRate) {
            this.currentRate = parseFloat(newRate) || 0.85;
            if (window.appStorage) {
                window.appStorage.setItem('readLens_drillRate', String(this.currentRate));
            }
            if (this.currentAudio) {
                this.currentAudio.playbackRate = this.currentRate;
            }
        },

        showAudioNotification(msg, type = 'info') {
            let toast = document.getElementById('drillAudioToast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'drillAudioToast';
                toast.className = 'drill-audio-toast';
                document.body.appendChild(toast);
            }
            toast.textContent = msg;
            toast.className = `drill-audio-toast show ${type}`;
            setTimeout(() => {
                if (toast) toast.className = 'drill-audio-toast';
            }, 3500);
        }
    };

    // =========================================================================
    // 3. MAIN READING DRILL MODULE STATE
    // =========================================================================

    const ReadingDrill = {
        currentCategory: 'letters', // 'letters' | 'cvc' | 'fuller' | 'blending' | 'manage' | 'progress'
        activeSubMode: 'explorer',  // varies by category

        // State data
        materials: {
            letterSounds: [],
            cvcWords: [],
            fullerMethod: [],
            soundBlending: []
        },
        imageLibrary: [],
        progressRecords: [],

        // Active learner tracking
        activeLearner: null,

        // Quiz / Game state
        quiz: {
            currentIndex: 0,
            items: [],
            score: 0,
            total: 0,
            mistakes: []
        },

        // Importer state
        stagedImportItems: [],

        async init() {
            console.log('[Reading Drill] Initializing module...');
            DrillAudio.init();
            await this.loadData();
            this.bindEvents();
            this.render();
        },

        async loadData() {
            if (!window.appStorage) {
                console.warn('[Reading Drill] appStorage not ready yet.');
                return;
            }

            // 1. Load drill materials
            const savedMaterials = window.appStorage.getItem('readLens_drillMaterials');
            if (savedMaterials) {
                try {
                    const parsed = JSON.parse(savedMaterials);
                    this.materials = {
                        letterSounds: parsed.letterSounds || DEFAULT_LETTER_SOUNDS,
                        cvcWords: parsed.cvcWords || DEFAULT_CVC_WORDS,
                        fullerMethod: parsed.fullerMethod || DEFAULT_FULLER_STEPS,
                        soundBlending: parsed.soundBlending || DEFAULT_BLENDING_WORDS
                    };
                } catch (e) {
                    this.materials = {
                        letterSounds: [...DEFAULT_LETTER_SOUNDS],
                        cvcWords: [...DEFAULT_CVC_WORDS],
                        fullerMethod: [...DEFAULT_FULLER_STEPS],
                        soundBlending: [...DEFAULT_BLENDING_WORDS]
                    };
                }
            } else {
                this.materials = {
                    letterSounds: [...DEFAULT_LETTER_SOUNDS],
                    cvcWords: [...DEFAULT_CVC_WORDS],
                    fullerMethod: [...DEFAULT_FULLER_STEPS],
                    soundBlending: [...DEFAULT_BLENDING_WORDS]
                };
                await this.saveMaterials();
            }

            // 2. Load image library
            const savedImages = window.appStorage.getItem('readLens_drillImageLibrary');
            if (savedImages) {
                try { this.imageLibrary = JSON.parse(savedImages) || []; } catch (e) { this.imageLibrary = []; }
            } else {
                this.imageLibrary = [];
            }

            // 3. Load progress records
            const savedProgress = window.appStorage.getItem('readLens_drillProgress');
            if (savedProgress) {
                try { this.progressRecords = JSON.parse(savedProgress) || []; } catch (e) { this.progressRecords = []; }
            } else {
                this.progressRecords = [];
            }

            // 4. Resolve active learner
            this.syncActiveLearner();
        },

        async saveMaterials() {
            if (window.appStorage) {
                await window.appStorage.setItem('readLens_drillMaterials', JSON.stringify(this.materials));
            }
        },

        async saveImageLibrary() {
            if (window.appStorage) {
                await window.appStorage.setItem('readLens_drillImageLibrary', JSON.stringify(this.imageLibrary));
            }
        },

        async saveProgress() {
            if (window.appStorage) {
                await window.appStorage.setItem('readLens_drillProgress', JSON.stringify(this.progressRecords));
            }
        },

        syncActiveLearner() {
            if (window.learners && window.learners.length > 0) {
                if (window.currentLearnerId) {
                    this.activeLearner = window.learners.find(l => l.id === window.currentLearnerId) || window.learners[0];
                } else {
                    this.activeLearner = window.learners[0];
                }
            } else {
                this.activeLearner = null;
            }
        },

        bindEvents() {
            // Global delegate for audio buttons & click-to-speak elements
            document.addEventListener('click', (e) => {
                // 1. Direct open custom audio recorder/uploader for sound
                const customTrigger = e.target.closest('[data-open-sound-custom]');
                if (customTrigger) {
                    const soundType = customTrigger.getAttribute('data-open-sound-custom');
                    const soundKey = customTrigger.getAttribute('data-sound-key');
                    this.showAudioLibraryModal(soundType, soundKey);
                    return;
                }

                // 2. Pure phoneme playback (never TTS!)
                const phonemeTarget = e.target.closest('[data-play-phoneme]');
                if (phonemeTarget) {
                    const sound = phonemeTarget.getAttribute('data-play-phoneme');
                    DrillAudio.playPhoneme(sound);
                    return;
                }

                // 3. Spoken letter name playback
                const nameTarget = e.target.closest('[data-play-name]');
                if (nameTarget) {
                    const char = nameTarget.getAttribute('data-play-name');
                    DrillAudio.playLetterName(char);
                    return;
                }

                // 4. Decodable word playback (prerecorded audio first, TTS fallback)
                const wordTarget = e.target.closest('[data-play-word]');
                if (wordTarget) {
                    const word = wordTarget.getAttribute('data-play-word');
                    DrillAudio.playWord(word);
                    return;
                }

                // 5. Syllable playback
                const syllableTarget = e.target.closest('[data-play-syllable]');
                if (syllableTarget) {
                    const syl = syllableTarget.getAttribute('data-play-syllable');
                    DrillAudio.playSyllable(syl);
                    return;
                }

                // 6. Generic data-speak fallback
                const target = e.target.closest('[data-speak]');
                if (target) {
                    const text = (target.getAttribute('data-speak') || '').trim();
                    const lang = target.getAttribute('data-speak-lang') || 'en-US';
                    const isPhoneme = target.getAttribute('data-is-phoneme') === 'true';

                    if (isPhoneme) {
                        DrillAudio.playPhoneme(text);
                    } else if (text.length === 1 && /^[a-zA-Z]$/.test(text)) {
                        DrillAudio.playLetterName(text);
                    } else if (!text.includes(' ') && PHONICS_AUDIO_MAP.words[text.toLowerCase()]) {
                        DrillAudio.playWord(text);
                    } else {
                        DrillAudio.speak(text, lang);
                    }
                }
            });

            if ('speechSynthesis' in window) {
                window.speechSynthesis.addEventListener('voiceschanged', () => {
                    this.populateVoiceSelectors();
                });
            }
        },

        populateVoiceSelectors() {
            const voiceSelectors = [
                document.getElementById('drillVoiceSelector'),
                document.getElementById('mgmtDrillVoiceSelector')
            ].filter(Boolean);

            if (voiceSelectors.length === 0) return;

            const voices = DrillAudio.getVoices();
            const currentVoice = DrillAudio.getSelectedVoice();
            const currentURI = currentVoice ? currentVoice.voiceURI : (DrillAudio.selectedVoiceURI || '');

            voiceSelectors.forEach(sel => {
                sel.innerHTML = '<option value="">Default System Voice</option>';

                if (voices && voices.length > 0) {
                    const sortedVoices = [...voices].sort((a, b) => {
                        const aLang = (a.lang || '').toLowerCase();
                        const bLang = (b.lang || '').toLowerCase();
                        const aIsPrimary = aLang.startsWith('en') || aLang.startsWith('fil') || aLang.startsWith('tl');
                        const bIsPrimary = bLang.startsWith('en') || bLang.startsWith('fil') || bLang.startsWith('tl');
                        if (aIsPrimary && !bIsPrimary) return -1;
                        if (!aIsPrimary && bIsPrimary) return 1;
                        return a.name.localeCompare(b.name);
                    });

                    sortedVoices.forEach(v => {
                        const opt = document.createElement('option');
                        opt.value = v.voiceURI;
                        opt.textContent = `${v.name} (${v.lang})`;
                        if (v.voiceURI === currentURI) {
                            opt.selected = true;
                        }
                        sel.appendChild(opt);
                    });
                }
            });
        },

        switchCategory(category, subMode = 'explorer') {
            this.currentCategory = category;
            this.activeSubMode = subMode;
            this.render();
        },

        // =====================================================================
        // 4. MAIN RENDERER & SHELL
        // =====================================================================

        render() {
            const container = document.getElementById('taskreadingdrill');
            if (!container) return;

            this.syncActiveLearner();

            container.innerHTML = `
                <div class="drill-module">
                    <!-- Top Header -->
                    <div class="drill-header">
                        <div class="drill-header-title">
                            <div class="drill-header-icon">
                                <i class="fas fa-spell-check"></i>
                            </div>
                            <div>
                                <h2>Reading Drill Module</h2>
                                <p>Interactive, audio-supported & picture-assisted foundational reading activities.</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                            <div class="drill-active-learner-badge">
                                <i class="fas fa-user-graduate"></i>
                                <span>Active Learner: <strong>${this.activeLearner ? this.activeLearner.name : 'No Learner Selected'}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- Audio Controls Bar -->
                    <div class="drill-audio-bar">
                        <div class="drill-audio-controls">
                            <button type="button" class="drill-btn-icon" id="drillAudioStopBtn" title="Stop Audio">
                                <i class="fas fa-stop"></i>
                            </button>
                            <button type="button" class="drill-btn-icon" id="drillAudioPauseBtn" title="Pause Audio">
                                <i class="fas fa-pause"></i>
                            </button>
                            <button type="button" class="drill-btn-icon" id="drillAudioResumeBtn" title="Resume Audio">
                                <i class="fas fa-play"></i>
                            </button>
                            <div class="drill-voice-select-wrap">
                                <span class="drill-ctrl-label"><i class="fas fa-microphone-alt"></i> Voice:</span>
                                <select id="drillVoiceSelector" class="form-input drill-select-compact" title="Select Voice for Reading Drill">
                                    <option value="">Default Voice</option>
                                </select>
                                <button type="button" class="drill-btn-icon-sm" id="drillVoiceTestBtn" title="Test Voice Pronunciation">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                            </div>
                            <div class="drill-speed-select-wrap">
                                <span class="drill-ctrl-label"><i class="fas fa-tachometer-alt"></i> Speed:</span>
                                <select id="drillSpeedSelector" class="form-input drill-select-compact" title="Adjust Speech Rate">
                                    <option value="0.7">0.7x (Phonics/Slow)</option>
                                    <option value="0.85" selected>0.85x (Guided Reading)</option>
                                    <option value="1.0">1.0x (Normal)</option>
                                    <option value="1.15">1.15x (Fluent)</option>
                                </select>
                            </div>
                        </div>
                        <div class="drill-audio-hint">
                            <i class="fas fa-volume-up" style="color: #10b981;"></i> Click any letter, word, or sound tile to hear pronunciation.
                        </div>
                    </div>

                    <!-- Top Category Navigation Tabs -->
                    <div class="drill-nav-tabs">
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'letters' ? 'active' : ''}" data-cat="letters" title="Letter Sound Recognition">
                            <i class="fas fa-font"></i> <span>Letter Sounds</span>
                            <span class="badge">${this.materials.letterSounds.length}</span>
                        </button>
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'cvc' ? 'active' : ''}" data-cat="cvc" title="CVC Word Practice">
                            <i class="fas fa-cubes"></i> <span>CVC Words</span>
                            <span class="badge">${this.materials.cvcWords.length}</span>
                        </button>
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'fuller' ? 'active' : ''}" data-cat="fuller" title="Fuller Method">
                            <i class="fas fa-layer-group"></i> <span>Fuller Method</span>
                            <span class="badge">${this.materials.fullerMethod.length}</span>
                        </button>
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'blending' ? 'active' : ''}" data-cat="blending" title="Sound Blending">
                            <i class="fas fa-wave-square"></i> <span>Sound Blending</span>
                            <span class="badge">${this.materials.soundBlending.length}</span>
                        </button>
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'manage' ? 'active' : ''}" data-cat="manage" title="Teacher Content Management & Importer">
                            <i class="fas fa-file-import"></i> <span>Teacher Management</span>
                        </button>
                        <button type="button" class="drill-nav-btn ${this.currentCategory === 'progress' ? 'active' : ''}" data-cat="progress" title="Progress & Monitoring">
                            <i class="fas fa-chart-pie"></i> <span>Progress</span>
                        </button>
                    </div>

                    <!-- Dynamic Category View Content -->
                    <div id="drillCategoryContentArea" style="width: 100%;">
                        <!-- Populated below -->
                    </div>
                </div>
            `;

            // Attach tab switches
            container.querySelectorAll('.drill-nav-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const cat = btn.getAttribute('data-cat');
                    this.switchCategory(cat);
                });
            });

            // Audio Bar Controls
            const stopBtn = document.getElementById('drillAudioStopBtn');
            const pauseBtn = document.getElementById('drillAudioPauseBtn');
            const resumeBtn = document.getElementById('drillAudioResumeBtn');
            const speedSel = document.getElementById('drillSpeedSelector');

            if (stopBtn) stopBtn.addEventListener('click', () => DrillAudio.stop());
            if (pauseBtn) pauseBtn.addEventListener('click', () => DrillAudio.pause());
            if (resumeBtn) resumeBtn.addEventListener('click', () => DrillAudio.resume());
            if (speedSel) {
                speedSel.value = String(DrillAudio.currentRate);
                speedSel.addEventListener('change', (e) => DrillAudio.setRate(e.target.value));
            }

            const voiceSel = document.getElementById('drillVoiceSelector');
            if (voiceSel) {
                voiceSel.addEventListener('change', (e) => {
                    DrillAudio.setVoice(e.target.value);
                    const mgmtVoiceSel = document.getElementById('mgmtDrillVoiceSelector');
                    if (mgmtVoiceSel) mgmtVoiceSel.value = e.target.value;
                });
            }

            const voiceTestBtn = document.getElementById('drillVoiceTestBtn');
            if (voiceTestBtn) {
                voiceTestBtn.addEventListener('click', () => {
                    DrillAudio.speak("Hello! Reading Drill voice ready. Cat, apple, hat.", 'en-US');
                });
            }

            this.populateVoiceSelectors();

            // Render current view
            const area = document.getElementById('drillCategoryContentArea');
            if (!area) return;

            switch (this.currentCategory) {
                case 'letters':
                    this.renderLetterSoundsView(area);
                    break;
                case 'cvc':
                    this.renderCVCWordsView(area);
                    break;
                case 'fuller':
                    this.renderFullerMethodView(area);
                    break;
                case 'blending':
                    this.renderSoundBlendingView(area);
                    break;
                case 'manage':
                    this.renderTeacherManagementView(area);
                    break;
                case 'progress':
                    this.renderProgressMonitoringView(area);
                    break;
            }
        },

        // =========================================================================
        // 5. MODULE 1: LETTER SOUND RECOGNITION
        // =========================================================================

        renderLetterSoundsView(area) {
            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 18px;">
                    <!-- Sub-mode bar -->
                    <div class="drill-filter-bar">
                        <div class="drill-pill-group">
                            <button class="drill-pill ${this.activeSubMode === 'explorer' ? 'active' : ''}" data-sub="explorer">
                                <i class="fas fa-compass"></i> Sound Explorer
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'quiz_letter' ? 'active' : ''}" data-sub="quiz_letter">
                                <i class="fas fa-question-circle"></i> Letter Sound Quiz
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'quiz_picture' ? 'active' : ''}" data-sub="quiz_picture">
                                <i class="fas fa-images"></i> Sound-to-Picture Match
                            </button>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">Language Audio:</span>
                            <select id="lsLangSelector" class="form-input" style="padding: 4px 10px; font-size: 0.85rem; width: auto;">
                                <option value="en-US">English</option>
                                <option value="fil-PH">Filipino / Tagalog</option>
                                <option value="fil-PH">Sinugbuanong Bisaya</option>
                            </select>
                        </div>
                    </div>

                    <div id="lsSubModeContainer">
                        <!-- Content depends on sub-mode -->
                    </div>
                </div>
            `;

            // Submode pills click
            area.querySelectorAll('.drill-pill').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.activeSubMode = btn.getAttribute('data-sub');
                    this.renderLetterSoundsView(area);
                });
            });

            const subContainer = document.getElementById('lsSubModeContainer');
            if (this.activeSubMode === 'explorer') {
                this.renderLetterExplorer(subContainer);
            } else if (this.activeSubMode === 'quiz_letter') {
                this.startLetterQuiz(subContainer, 'letter');
            } else if (this.activeSubMode === 'quiz_picture') {
                this.startLetterQuiz(subContainer, 'picture');
            }
        },

        renderLetterExplorer(container) {
            const langSel = document.getElementById('lsLangSelector');
            const lang = langSel ? langSel.value : 'en-US';

            let cardsHtml = '';
            this.materials.letterSounds.forEach(item => {
                const imgDisplay = item.customImg
                    ? `<img src="${item.customImg}" alt="${item.letter}">`
                    : `<span class="drill-card-img-placeholder">${item.icon || '📖'}</span>`;

                const wordToPlay = lang === 'fil-PH' ? item.filWord : item.enWord;
                const letterSound = (item.sound || item.letter.charAt(0)).toLowerCase();
                const letterName = item.name || item.letter.charAt(0);
                const hasCustomPhoneme = !!DrillAudio.getCustomAudio('phoneme', letterSound);

                cardsHtml += `
                    <div class="drill-card" data-id="${item.id}">
                        <div class="drill-card-img-wrap" data-play-word="${wordToPlay}" title="Click to hear '${wordToPlay}'">
                            ${imgDisplay}
                        </div>
                        <div class="drill-card-letter" data-play-phoneme="${letterSound}" title="Click to hear authentic phoneme /${letterSound}/">
                            ${item.letter}
                        </div>
                        <div class="drill-card-phoneme" title="Phonetic IPA">${item.ipa}</div>
                        <div class="drill-card-word" data-play-word="${wordToPlay}" title="Click to hear '${wordToPlay}'">
                            ${wordToPlay}
                        </div>
                        <div class="drill-card-actions">
                            <button type="button" class="drill-btn-sound" data-play-phoneme="${letterSound}" title="Play pure phonetic sound (Prerecorded)">
                                <i class="fas fa-volume-up"></i> Sound ${item.ipa}
                            </button>
                            <button type="button" class="drill-btn-sound" style="background:#f1f5f9; color:#475569; border-color:#cbd5e1;" data-play-name="${letterName}" title="Play spoken letter name">
                                Name "${letterName}"
                            </button>
                            <button type="button" class="drill-btn-sound" style="flex: 0 0 34px; padding: 0; background: ${hasCustomPhoneme ? '#ecfdf5' : '#faf5ff'}; color: ${hasCustomPhoneme ? '#059669' : '#7c3aed'}; border-color: ${hasCustomPhoneme ? '#a7f3d0' : '#ddd6fe'};" data-open-sound-custom="phoneme" data-sound-key="${letterSound}" title="${hasCustomPhoneme ? 'Teacher custom recording active. Click to manage.' : 'Record or upload custom audio for /' + letterSound + '/'}">
                                <i class="fas ${hasCustomPhoneme ? 'fa-microphone-alt' : 'fa-microphone'}"></i>
                            </button>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = `
                <div class="drill-cards-grid">
                    ${cardsHtml}
                </div>
            `;
        },

        startLetterQuiz(container, mode) {
            const list = [...this.materials.letterSounds];
            // Shuffle
            const shuffled = list.sort(() => 0.5 - Math.random()).slice(0, 8);

            this.quiz = {
                mode: mode,
                category: 'letters',
                items: shuffled,
                currentIndex: 0,
                score: 0,
                total: shuffled.length,
                mistakes: []
            };

            this.renderQuizStep(container);
        },

        renderQuizStep(container) {
            const q = this.quiz;
            if (q.currentIndex >= q.total) {
                this.renderQuizCompletion(container);
                return;
            }

            const current = q.items[q.currentIndex];
            const progressPercent = Math.round((q.currentIndex / q.total) * 100);

            // Generate 3 random distractors
            const distractors = this.materials.letterSounds
                .filter(item => item.id !== current.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            const options = [current, ...distractors].sort(() => 0.5 - Math.random());

            let promptTitle = q.mode === 'letter'
                ? 'Listen to the sound. Which letter makes this sound?'
                : 'Listen to the sound. Which picture starts with this sound?';

            let optionsHtml = '';
            options.forEach(opt => {
                if (q.mode === 'letter') {
                    optionsHtml += `
                        <div class="drill-option-card" data-opt-id="${opt.id}">
                            <span style="font-size: 2.6rem; font-family: 'Comic Sans MS', cursive;">${opt.letter}</span>
                        </div>
                    `;
                } else {
                    const img = opt.customImg
                        ? `<img src="${opt.customImg}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;">`
                        : `<span style="font-size: 50px;">${opt.icon || '📖'}</span>`;

                    optionsHtml += `
                        <div class="drill-option-card" data-opt-id="${opt.id}">
                            ${img}
                            <span style="font-size: 1.15rem; font-weight: 700; color: #334155;">${opt.enWord}</span>
                        </div>
                    `;
                }
            });

            container.innerHTML = `
                <div class="drill-quiz-container">
                    <div style="width: 100%; display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; color: #64748b;">
                        <span>Question ${q.currentIndex + 1} of ${q.total}</span>
                        <span>Score: ${q.score}</span>
                    </div>

                    <div class="drill-progress-bar-wrap">
                        <div class="drill-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>

                    <div class="drill-prompt-box">
                        <h3 style="font-size: 1.2rem; color: #065f46; font-weight: 700;">${promptTitle}</h3>
                        <button type="button" class="drill-prompt-btn-speaker" id="drillQuizPromptAudio" title="Play sound again">
                            <i class="fas fa-volume-up"></i>
                        </button>
                        <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">Tap speaker to listen</span>
                    </div>

                    <div class="drill-options-grid">
                        ${optionsHtml}
                    </div>

                    <div id="drillQuizFeedback" style="min-height: 28px; font-size: 1.1rem; font-weight: 700;"></div>
                </div>
            `;

            // Auto-play sound initially
            setTimeout(() => {
                DrillAudio.playPhoneme(current.sound);
            }, 300);

            const promptBtn = document.getElementById('drillQuizPromptAudio');
            if (promptBtn) {
                promptBtn.addEventListener('click', () => {
                    DrillAudio.playPhoneme(current.sound);
                });
            }

            // Option selection handlers
            const optionCards = container.querySelectorAll('.drill-option-card');
            let answered = false;

            optionCards.forEach(card => {
                card.addEventListener('click', () => {
                    if (answered) return;
                    answered = true;

                    const chosenId = card.getAttribute('data-opt-id');
                    const feedbackEl = document.getElementById('drillQuizFeedback');

                    if (chosenId === current.id) {
                        card.classList.add('correct');
                        q.score++;
                        if (feedbackEl) {
                            feedbackEl.style.color = '#10b981';
                            feedbackEl.innerHTML = '<i class="fas fa-check-circle"></i> Correct! Excellent job!';
                        }
                        if (window.createConfetti) window.createConfetti(card);
                        if (window.playFeedback) window.playFeedback(true);

                        setTimeout(() => {
                            q.currentIndex++;
                            this.renderQuizStep(container);
                        }, 1200);
                    } else {
                        card.classList.add('incorrect');
                        q.mistakes.push(current.letter + ' (' + current.sound + ')');
                        // Highlight correct
                        optionCards.forEach(c => {
                            if (c.getAttribute('data-opt-id') === current.id) c.classList.add('correct');
                        });
                        if (feedbackEl) {
                            feedbackEl.style.color = '#ef4444';
                            feedbackEl.innerHTML = '<i class="fas fa-times-circle"></i> Nice try! The sound is for ' + current.letter;
                        }
                        if (window.playFeedback) window.playFeedback(false);

                        setTimeout(() => {
                            q.currentIndex++;
                            this.renderQuizStep(container);
                        }, 1800);
                    }
                });
            });
        },

        renderQuizCompletion(container) {
            const q = this.quiz;
            const accuracy = Math.round((q.score / q.total) * 100);

            // Save progress record
            this.recordDrillProgress({
                category: q.category,
                activity: q.mode === 'letter' ? 'Letter Sound Quiz' : 'Sound-Picture Match',
                score: q.score,
                total: q.total,
                accuracy: accuracy,
                mistakes: [...new Set(q.mistakes)]
            });

            if (window.createConfetti) window.createConfetti(container);

            container.innerHTML = `
                <div class="drill-quiz-container" style="text-align: center;">
                    <div style="font-size: 65px; margin-bottom: 10px;">🎉</div>
                    <h2 style="font-size: 1.8rem; font-weight: 800; color: #1e293b;">Activity Completed!</h2>
                    <p style="color: #64748b; font-size: 1.05rem;">Great work practicing your letter sounds.</p>

                    <div style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px 40px; margin: 15px 0;">
                        <div style="font-size: 3rem; font-weight: 800; color: ${accuracy >= 75 ? '#10b981' : '#f59e0b'};">
                            ${accuracy}%
                        </div>
                        <div style="font-weight: 700; color: #475569;">${q.score} out of ${q.total} correct</div>
                    </div>

                    ${q.mistakes.length > 0 ? `
                        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 10px; padding: 12px 18px; margin-bottom: 20px; font-size: 0.9rem; color: #991b1b;">
                            <strong>Sounds to practice more:</strong> ${q.mistakes.join(', ')}
                        </div>
                    ` : ''}

                    <div style="display: flex; gap: 12px;">
                        <button type="button" class="btn btn-primary" id="btnRestartQuiz">
                            <i class="fas fa-redo"></i> Try Again
                        </button>
                        <button type="button" class="btn btn-secondary" id="btnBackToExplorer">
                            <i class="fas fa-th"></i> Back to Explorer
                        </button>
                    </div>
                </div>
            `;

            document.getElementById('btnRestartQuiz').addEventListener('click', () => {
                this.startLetterQuiz(container, q.mode);
            });
            document.getElementById('btnBackToExplorer').addEventListener('click', () => {
                this.activeSubMode = 'explorer';
                this.render();
            });
        },

        // =========================================================================
        // 6. MODULE 2: CVC WORD PRACTICE
        // =========================================================================

        renderCVCWordsView(area) {
            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 18px;">
                    <!-- Filter and Mode Bar -->
                    <div class="drill-filter-bar">
                        <div class="drill-pill-group">
                            <button class="drill-pill ${this.activeSubMode === 'explorer' ? 'active' : ''}" data-sub="explorer">
                                <i class="fas fa-th-large"></i> Word Cards & Breakdown
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'quiz_match' ? 'active' : ''}" data-sub="quiz_match">
                                <i class="fas fa-puzzle-piece"></i> Word-Picture Match
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'quiz_listen' ? 'active' : ''}" data-sub="quiz_listen">
                                <i class="fas fa-headphones"></i> Listen & Select Word
                            </button>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                            <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">Filter Vowel:</span>
                            <select id="cvcVowelFilter" class="form-input" style="padding: 4px 10px; font-size: 0.85rem; width: auto;">
                                <option value="all">All Vowels (A, E, I, O, U)</option>
                                <option value="a">Short A (/æ/)</option>
                                <option value="e">Short E (/ɛ/)</option>
                                <option value="i">Short I (/ɪ/)</option>
                                <option value="o">Short O (/ɒ/)</option>
                                <option value="u">Short U (/ʌ/)</option>
                            </select>
                        </div>
                    </div>

                    <div id="cvcSubModeContainer">
                        <!-- Content depends on sub-mode -->
                    </div>
                </div>
            `;

            area.querySelectorAll('.drill-pill').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.activeSubMode = btn.getAttribute('data-sub');
                    this.renderCVCWordsView(area);
                });
            });

            const filterSel = document.getElementById('cvcVowelFilter');
            if (filterSel) {
                filterSel.addEventListener('change', () => {
                    if (this.activeSubMode === 'explorer') {
                        this.renderCVCExplorer(document.getElementById('cvcSubModeContainer'), filterSel.value);
                    }
                });
            }

            const subContainer = document.getElementById('cvcSubModeContainer');
            if (this.activeSubMode === 'explorer') {
                this.renderCVCExplorer(subContainer, 'all');
            } else if (this.activeSubMode === 'quiz_match') {
                this.startCVCQuiz(subContainer, 'match');
            } else if (this.activeSubMode === 'quiz_listen') {
                this.startCVCQuiz(subContainer, 'listen');
            }
        },

        renderCVCExplorer(container, vowelFilter) {
            let list = [...this.materials.cvcWords];
            if (vowelFilter && vowelFilter !== 'all') {
                list = list.filter(w => w.vowel.toLowerCase() === vowelFilter.toLowerCase());
            }

            let cardsHtml = '';
            list.forEach(item => {
                const imgDisplay = item.customImg
                    ? `<img src="${item.customImg}" alt="${item.word}">`
                    : `<span class="drill-card-img-placeholder">${item.icon || '📖'}</span>`;

                const letterChips = (item.sounds || item.word.split('')).map((s, sIdx) => `
                    <span class="fuller-clickable-chip cvc-sound-chip" data-chip-idx="${sIdx}" style="font-size: 1.1rem; padding: 4px 10px;" data-play-phoneme="${s}" title="Hear authentic phoneme /${s}/">
                        ${s}
                    </span>
                `).join('');

                const hasCustomWord = !!DrillAudio.getCustomAudio('word', item.word);

                cardsHtml += `
                    <div class="drill-card cvc-card" style="align-items: stretch; text-align: left;" data-word-id="${item.id}">
                        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 10px;">
                            <div class="drill-card-img-wrap" style="width: 70px; height: 70px; margin: 0; flex-shrink: 0;" data-play-word="${item.word}" title="Click to hear '${item.word}'">
                                ${imgDisplay}
                            </div>
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <div class="drill-card-word" style="font-size: 1.8rem; cursor: pointer; color: #0284c7;" data-play-word="${item.word}" title="Click to hear '${item.word}'">
                                        ${item.word}
                                    </div>
                                    <button type="button" class="btn btn-sm btn-icon" style="background: ${hasCustomWord ? '#ecfdf5' : '#f8fafc'}; color: ${hasCustomWord ? '#059669' : '#64748b'}; border: 1px solid #e2e8f0; border-radius: 6px; padding: 4px 8px;" data-open-sound-custom="word" data-sound-key="${item.word}" title="${hasCustomWord ? 'Custom word audio active. Click to manage.' : 'Record or upload custom audio for ' + item.word}">
                                        <i class="fas ${hasCustomWord ? 'fa-microphone-alt' : 'fa-microphone'}"></i>
                                    </button>
                                </div>
                                <span class="sf1-badge" style="background:#e0f2fe; color:#0369a1; cursor: pointer;" data-play-syllable="${item.family}" title="Click to hear family ${item.family}">Family ${item.family}</span>
                            </div>
                        </div>

                        <div style="font-size: 0.75rem; color: #64748b; font-weight: 700; margin-bottom: 6px;">
                            INDIVIDUAL PHONEMES (AUTHENTIC RECORDINGS):
                        </div>
                        <div class="cvc-sound-chips-row" style="display: flex; gap: 6px; margin-bottom: 12px;">
                            ${letterChips}
                        </div>

                        ${item.sentence ? `
                            <div class="fuller-sentence-box" style="margin-bottom: 12px; font-size: 0.85rem; padding: 6px 10px;" data-speak="${item.sentence}" title="Click to hear sentence aloud">
                                <span><i class="fas fa-volume-up" style="color: #3b82f6;"></i> "${item.sentence}"</span>
                            </div>
                        ` : ''}

                        <button type="button" class="btn btn-sm btn-primary btn-blend-cvc" data-word="${item.word}" data-sounds='${JSON.stringify(item.sounds || item.word.split(''))}' style="width: 100%;">
                            <i class="fas fa-magic"></i> Blend & Pronounce
                        </button>
                    </div>
                `;
            });

            container.innerHTML = `
                <div class="drill-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));">
                    ${cardsHtml}
                </div>
            `;

            // Blending button handlers
            container.querySelectorAll('.btn-blend-cvc').forEach(btn => {
                btn.addEventListener('click', () => {
                    const word = btn.getAttribute('data-word');
                    const sounds = JSON.parse(btn.getAttribute('data-sounds'));
                    const card = btn.closest('.cvc-card');
                    const chips = card ? card.querySelectorAll('.cvc-sound-chip') : [];

                    btn.disabled = true;
                    DrillAudio.blendPhonemes(
                        sounds,
                        word,
                        (highlightIdx) => {
                            chips.forEach((c, idx) => {
                                if (idx === highlightIdx) {
                                    c.style.background = '#fef08a';
                                    c.style.transform = 'scale(1.2)';
                                    c.style.borderColor = '#eab308';
                                } else {
                                    c.style.background = '';
                                    c.style.transform = '';
                                    c.style.borderColor = '';
                                }
                            });
                        },
                        () => {
                            btn.disabled = false;
                            chips.forEach(c => {
                                c.style.background = '';
                                c.style.transform = '';
                                c.style.borderColor = '';
                            });
                        }
                    );
                });
            });
        },

        startCVCQuiz(container, mode) {
            const list = [...this.materials.cvcWords];
            const shuffled = list.sort(() => 0.5 - Math.random()).slice(0, 8);

            this.quiz = {
                mode: mode,
                category: 'cvc',
                items: shuffled,
                currentIndex: 0,
                score: 0,
                total: shuffled.length,
                mistakes: []
            };

            this.renderCVCQuizStep(container);
        },

        renderCVCQuizStep(container) {
            const q = this.quiz;
            if (q.currentIndex >= q.total) {
                this.renderQuizCompletion(container);
                return;
            }

            const current = q.items[q.currentIndex];
            const progressPercent = Math.round((q.currentIndex / q.total) * 100);

            // Distractors
            const distractors = this.materials.cvcWords
                .filter(w => w.id !== current.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            const options = [current, ...distractors].sort(() => 0.5 - Math.random());

            let promptTitle = q.mode === 'match'
                ? 'Look at the picture. Which CVC word matches it?'
                : 'Listen to the word. Which word did you hear?';

            let optionsHtml = '';
            options.forEach(opt => {
                optionsHtml += `
                    <div class="drill-option-card" data-opt-id="${opt.id}">
                        <span style="font-size: 2.2rem; font-weight: 800; color: #0f172a;">${opt.word}</span>
                    </div>
                `;
            });

            const promptDisplay = q.mode === 'match'
                ? (current.customImg
                    ? `<img src="${current.customImg}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 12px; margin-bottom: 8px;">`
                    : `<span style="font-size: 80px; margin-bottom: 4px;">${current.icon || '📖'}</span>`)
                : `
                    <button type="button" class="drill-prompt-btn-speaker" id="drillCvcPromptAudio" title="Hear word again">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">Tap speaker to listen</span>
                `;

            container.innerHTML = `
                <div class="drill-quiz-container">
                    <div style="width: 100%; display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; color: #64748b;">
                        <span>Question ${q.currentIndex + 1} of ${q.total}</span>
                        <span>Score: ${q.score}</span>
                    </div>

                    <div class="drill-progress-bar-wrap">
                        <div class="drill-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>

                    <div class="drill-prompt-box">
                        <h3 style="font-size: 1.2rem; color: #065f46; font-weight: 700; margin-bottom: 8px;">${promptTitle}</h3>
                        ${promptDisplay}
                    </div>

                    <div class="drill-options-grid">
                        ${optionsHtml}
                    </div>

                    <div id="drillQuizFeedback" style="min-height: 28px; font-size: 1.1rem; font-weight: 700;"></div>
                </div>
            `;

            if (q.mode === 'listen') {
                setTimeout(() => DrillAudio.playWord(current.word), 300);
                const pBtn = document.getElementById('drillCvcPromptAudio');
                if (pBtn) pBtn.addEventListener('click', () => DrillAudio.playWord(current.word));
            }

            let answered = false;
            container.querySelectorAll('.drill-option-card').forEach(card => {
                card.addEventListener('click', () => {
                    if (answered) return;
                    answered = true;

                    const chosenId = card.getAttribute('data-opt-id');
                    const feedbackEl = document.getElementById('drillQuizFeedback');

                    if (chosenId === current.id) {
                        card.classList.add('correct');
                        q.score++;
                        if (feedbackEl) {
                            feedbackEl.style.color = '#10b981';
                            feedbackEl.innerHTML = '<i class="fas fa-check-circle"></i> Correct! ' + current.word.toUpperCase();
                        }
                        if (window.createConfetti) window.createConfetti(card);
                        if (window.playFeedback) window.playFeedback(true);
                        DrillAudio.playWord(current.word);

                        setTimeout(() => {
                            q.currentIndex++;
                            this.renderCVCQuizStep(container);
                        }, 1200);
                    } else {
                        card.classList.add('incorrect');
                        q.mistakes.push(current.word);
                        container.querySelectorAll('.drill-option-card').forEach(c => {
                            if (c.getAttribute('data-opt-id') === current.id) c.classList.add('correct');
                        });
                        if (feedbackEl) {
                            feedbackEl.style.color = '#ef4444';
                            feedbackEl.innerHTML = '<i class="fas fa-times-circle"></i> The word is ' + current.word;
                        }
                        if (window.playFeedback) window.playFeedback(false);

                        setTimeout(() => {
                            q.currentIndex++;
                            this.renderCVCQuizStep(container);
                        }, 1800);
                    }
                });
            });
        },

        // =========================================================================
        // 7. MODULE 3: FULLER METHOD
        // =========================================================================

        renderFullerMethodView(area) {
            let stepsHtml = '';
            this.materials.fullerMethod.forEach((step, idx) => {
                const isActive = idx === 0;

                const letterChips = (step.letters || []).map(l => `
                    <div class="fuller-clickable-chip" data-play-name="${l}" title="Hear letter name ${l}">
                        ${l} <i class="fas fa-volume-up" style="font-size: 0.9rem; color: #3b82f6;"></i>
                    </div>
                `).join('');

                const soundChips = (step.sounds || []).map(s => {
                    const cleanSound = s.replace(/^\//, '').replace(/\/.*$/, '').trim();
                    return `
                        <div class="fuller-clickable-chip" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;" data-play-phoneme="${cleanSound}" title="Hear authentic phoneme ${s}">
                            <i class="fas fa-wave-square"></i> ${s}
                        </div>
                    `;
                }).join('');

                const syllableChips = (step.syllables || []).map(syl => `
                    <div class="fuller-clickable-chip" style="background:#fef3c7; color:#92400e; border-color:#fde68a;" data-play-syllable="${syl}" title="Hear syllable ${syl}">
                        ${syl} <i class="fas fa-volume-up" style="font-size: 0.85rem;"></i>
                    </div>
                `).join('');

                const wordChips = (step.words || []).map(w => `
                    <div class="fuller-clickable-chip" style="background:#ecfdf5; color:#065f46; border-color:#a7f3d0;" data-play-word="${w}" title="Hear word ${w}">
                        ${w} <i class="fas fa-volume-up" style="font-size: 0.85rem;"></i>
                    </div>
                `).join('');

                const sentenceBoxes = (step.sentences || []).map(sen => `
                    <div class="fuller-sentence-box" data-speak="${sen}" title="Click to hear sentence aloud">
                        <span>"${sen}"</span>
                        <i class="fas fa-volume-up"></i>
                    </div>
                `).join('');

                stepsHtml += `
                    <div class="fuller-step-card ${isActive ? 'active' : ''}" data-step-id="${step.id}">
                        <div class="fuller-step-header">
                            <div class="fuller-step-title">
                                <span class="fuller-step-num">${step.order || (idx + 1)}</span>
                                <div>
                                    <div>${step.title}</div>
                                    <div style="font-size: 0.85rem; color: #64748b; font-weight: normal;">${step.description}</div>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <button type="button" class="btn btn-sm btn-secondary btn-edit-fuller-step" data-id="${step.id}" title="Edit this step">
                                    <i class="fas fa-edit"></i> Edit
                                </button>
                                <button type="button" class="btn btn-sm btn-danger btn-delete-fuller-step" data-id="${step.id}" title="Delete step">
                                    <i class="fas fa-trash"></i>
                                </button>
                                <i class="fas fa-chevron-down" style="color: #94a3b8; margin-left: 8px;"></i>
                            </div>
                        </div>

                        <div class="fuller-step-body">
                            <!-- 1. Sound Introduction -->
                            <div style="margin-bottom: 16px;">
                                <div style="font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase;">
                                    1. Letter & Sound Introduction
                                </div>
                                <div class="fuller-items-row">
                                    ${letterChips}
                                    ${soundChips}
                                </div>
                            </div>

                            <!-- 2. Syllable Building -->
                            <div style="margin-bottom: 16px;">
                                <div style="font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase;">
                                    2. Syllable Formation
                                </div>
                                <div class="fuller-items-row">
                                    ${syllableChips || '<span style="color:#94a3b8; font-style:italic;">No syllables defined for this step.</span>'}
                                </div>
                            </div>

                            <!-- 3. Word Formation -->
                            <div style="margin-bottom: 16px;">
                                <div style="font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase;">
                                    3. Word Formation & Reading
                                </div>
                                <div class="fuller-items-row">
                                    ${wordChips}
                                </div>
                            </div>

                            <!-- 4. Phrase & Sentence Reading -->
                            <div>
                                <div style="font-size: 0.85rem; font-weight: 700; color: #475569; margin-bottom: 6px; text-transform: uppercase;">
                                    4. Guided Phrases & Sentences (Click to read)
                                </div>
                                <div>
                                    ${sentenceBoxes}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 18px;">
                    <div class="drill-filter-bar">
                        <div>
                            <strong style="color: #0f172a;"><i class="fas fa-chalkboard-teacher"></i> Fuller Method Instructional Sequence</strong>
                            <p style="font-size: 0.85rem; color: #64748b; margin: 0;">Step-by-step phonics-to-sentence reading progression. Teachers can configure, reorder, or add custom lessons.</p>
                        </div>
                        <button type="button" class="btn btn-success" id="btnAddFullerStep" style="background: #16a085; border-color: #16a085;">
                            <i class="fas fa-plus"></i> Add New Step
                        </button>
                    </div>

                    <div class="fuller-stepper">
                        ${stepsHtml}
                    </div>
                </div>
            `;

            // Accordion toggle
            area.querySelectorAll('.fuller-step-header').forEach(header => {
                header.addEventListener('click', (e) => {
                    if (e.target.closest('button')) return; // ignore edit/delete button clicks
                    const card = header.closest('.fuller-step-card');
                    card.classList.toggle('active');
                });
            });

            // Add step
            const addBtn = document.getElementById('btnAddFullerStep');
            if (addBtn) {
                addBtn.addEventListener('click', () => this.showFullerStepEditor(null));
            }

            // Edit step
            area.querySelectorAll('.btn-edit-fuller-step').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = btn.getAttribute('data-id');
                    const step = this.materials.fullerMethod.find(s => s.id === id);
                    if (step) this.showFullerStepEditor(step);
                });
            });

            // Delete step
            area.querySelectorAll('.btn-delete-fuller-step').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    e.stopPropagation();
                    const id = btn.getAttribute('data-id');
                    if (confirm('Are you sure you want to delete this Fuller Method step?')) {
                        this.materials.fullerMethod = this.materials.fullerMethod.filter(s => s.id !== id);
                        await this.saveMaterials();
                        this.renderFullerMethodView(area);
                    }
                });
            });
        },

        showFullerStepEditor(step) {
            const isNew = !step;
            const current = step || {
                id: 'fuller_' + Date.now(),
                order: this.materials.fullerMethod.length + 1,
                title: 'Step ' + (this.materials.fullerMethod.length + 1) + ': New Sound Introduction',
                description: 'Enter description of this lesson step',
                letters: ['D', 'd'],
                sounds: ['/d/'],
                syllables: ['da', 'ad'],
                words: ['dad', 'dam', 'dot'],
                sentences: ['Dad has a dot.']
            };

            const modalHtml = `
                <div class="modal-overlay active" id="fullerEditorModal" style="z-index: 1200;">
                    <div class="modal-content" style="max-width: 650px; max-height: 85vh; display:flex; flex-direction:column;">
                        <div class="modal-header" style="background: linear-gradient(135deg, #16a085, #2c3e50);">
                            <h3 class="modal-title" style="color:white;">
                                <i class="fas fa-edit"></i> ${isNew ? 'Add Fuller Method Step' : 'Edit Fuller Method Step'}
                            </h3>
                        </div>
                        <div class="modal-body" style="overflow-y:auto; flex:1; padding:20px;">
                            <div class="form-group">
                                <label class="form-label">Step Title</label>
                                <input type="text" id="fmStepTitle" class="form-input" value="${current.title}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Description</label>
                                <input type="text" id="fmStepDesc" class="form-input" value="${current.description}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Letters Introduced (comma-separated)</label>
                                <input type="text" id="fmStepLetters" class="form-input" value="${(current.letters || []).join(', ')}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Phonetic Sounds (comma-separated)</label>
                                <input type="text" id="fmStepSounds" class="form-input" value="${(current.sounds || []).join(', ')}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Syllables (comma-separated)</label>
                                <input type="text" id="fmStepSyllables" class="form-input" value="${(current.syllables || []).join(', ')}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Formed Words (comma-separated)</label>
                                <input type="text" id="fmStepWords" class="form-input" value="${(current.words || []).join(', ')}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Practice Sentences (one per line)</label>
                                <textarea id="fmStepSentences" class="form-input" rows="3">${(current.sentences || []).join('\n')}</textarea>
                            </div>
                        </div>
                        <div class="modal-footer" style="padding:15px; border-top:1px solid #eee; display:flex; justify-content:flex-end; gap:10px;">
                            <button type="button" class="btn btn-secondary" id="btnCancelFullerEditor">Cancel</button>
                            <button type="button" class="btn btn-success" id="btnSaveFullerEditor" style="background:#16a085; border-color:#16a085;">
                                <i class="fas fa-save"></i> Save Step
                            </button>
                        </div>
                    </div>
                </div>
            `;

            // Append modal to body
            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper);

            const closeModal = () => wrapper.remove();
            document.getElementById('btnCancelFullerEditor').addEventListener('click', closeModal);

            document.getElementById('btnSaveFullerEditor').addEventListener('click', async () => {
                const title = document.getElementById('fmStepTitle').value.trim();
                const desc = document.getElementById('fmStepDesc').value.trim();
                const letters = document.getElementById('fmStepLetters').value.split(',').map(s => s.trim()).filter(Boolean);
                const sounds = document.getElementById('fmStepSounds').value.split(',').map(s => s.trim()).filter(Boolean);
                const syllables = document.getElementById('fmStepSyllables').value.split(',').map(s => s.trim()).filter(Boolean);
                const words = document.getElementById('fmStepWords').value.split(',').map(s => s.trim()).filter(Boolean);
                const sentences = document.getElementById('fmStepSentences').value.split('\n').map(s => s.trim()).filter(Boolean);

                if (!title) {
                    alert('Please enter a step title.');
                    return;
                }

                current.title = title;
                current.description = desc;
                current.letters = letters;
                current.sounds = sounds;
                current.syllables = syllables;
                current.words = words;
                current.sentences = sentences;

                if (isNew) {
                    this.materials.fullerMethod.push(current);
                }

                await this.saveMaterials();
                closeModal();
                this.render();
            });
        },

        // =========================================================================
        // 8. MODULE 4: SOUND BLENDING
        // =========================================================================

        renderSoundBlendingView(area) {
            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 18px;">
                    <div class="drill-filter-bar">
                        <div class="drill-pill-group">
                            <button class="drill-pill ${this.activeSubMode === 'explorer' ? 'active' : ''}" data-sub="explorer">
                                <i class="fas fa-magic"></i> Interactive Sound Blender
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'quiz_blend' ? 'active' : ''}" data-sub="quiz_blend">
                                <i class="fas fa-headphones"></i> Listen & Blend Challenge
                            </button>
                            <button class="drill-pill ${this.activeSubMode === 'builder' ? 'active' : ''}" data-sub="builder">
                                <i class="fas fa-puzzle-piece"></i> Word Tile Builder
                            </button>
                        </div>
                    </div>

                    <div id="blendingSubModeContainer">
                    </div>
                </div>
            `;

            area.querySelectorAll('.drill-pill').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.activeSubMode = btn.getAttribute('data-sub');
                    this.renderSoundBlendingView(area);
                });
            });

            const subContainer = document.getElementById('blendingSubModeContainer');
            if (this.activeSubMode === 'explorer') {
                this.renderBlenderTool(subContainer);
            } else if (this.activeSubMode === 'quiz_blend') {
                this.startBlendingQuiz(subContainer);
            } else if (this.activeSubMode === 'builder') {
                this.startWordBuilder(subContainer);
            }
        },

        renderBlenderTool(container) {
            const words = this.materials.soundBlending;
            let activeWordIdx = 0;

            const renderCurrentWord = (idx) => {
                activeWordIdx = idx;
                const item = words[idx];

                const tilesHtml = item.sounds.map((s, sIdx) => `
                    <div class="blending-tile" id="blendingTile_${sIdx}" data-sound="${s}">
                        <span class="letter-main">${s}</span>
                        <span class="sound-sub">${item.ipa && item.ipa[sIdx] ? item.ipa[sIdx] : '/' + s + '/'}</span>
                    </div>
                    ${sIdx < item.sounds.length - 1 ? '<div class="blending-connector">+</div>' : ''}
                `).join('');

                container.innerHTML = `
                    <div class="blending-container">
                        <!-- Navigation between words -->
                        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 650px;">
                            <button type="button" class="btn btn-sm btn-secondary" id="btnPrevBlendWord" ${idx === 0 ? 'disabled' : ''}>
                                <i class="fas fa-arrow-left"></i> Previous Word
                            </button>
                            <span style="font-weight: 700; color: #475569;">Word ${idx + 1} of ${words.length} (${item.level})</span>
                            <button type="button" class="btn btn-sm btn-secondary" id="btnNextBlendWord" ${idx === words.length - 1 ? 'disabled' : ''}>
                                Next Word <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>

                        <!-- Active Blender Track -->
                        <div class="blending-track" id="blendingTrackEl">
                            ${tilesHtml}
                        </div>

                        <!-- Action Buttons -->
                        <div style="display: flex; gap: 14px; align-items: center;">
                            <button type="button" class="btn btn-primary" id="btnBlendSoundsAction" style="font-size: 1.15rem; padding: 12px 28px; border-radius: 12px; font-weight: 700;">
                                <i class="fas fa-play"></i> Blend Sounds
                            </button>
                        </div>

                        <!-- Blended Result Card -->
                        <div class="blending-result-card" id="blendingResultCard">
                            ${item.customImg
                                ? `<img src="${item.customImg}" style="width:65px; height:65px; object-fit:cover; border-radius:10px;">`
                                : `<span style="font-size: 45px;">${item.icon || '📖'}</span>`}
                            <div>
                                <div style="font-size: 0.85rem; color: #047857; font-weight: 700;">BLENDED WORD:</div>
                                <div class="blending-result-word">${item.word}</div>
                            </div>
                            <i class="fas fa-volume-up" style="font-size: 24px; color: #10b981; margin-left: auto;"></i>
                        </div>
                    </div>
                `;

                // Single tile click
                container.querySelectorAll('.blending-tile').forEach(tile => {
                    tile.addEventListener('click', () => {
                        const s = tile.getAttribute('data-sound');
                        tile.classList.add('highlighted');
                        DrillAudio.playPhoneme(s, 'en-US', () => {
                            setTimeout(() => tile.classList.remove('highlighted'), 200);
                        });
                    });
                });

                // Blend Button
                const blendBtn = document.getElementById('btnBlendSoundsAction');
                if (blendBtn) {
                    blendBtn.addEventListener('click', () => {
                        blendBtn.disabled = true;
                        DrillAudio.blendPhonemes(
                            item.sounds,
                            item.word,
                            (highlightIdx) => {
                                container.querySelectorAll('.blending-tile').forEach((t, i) => {
                                    if (i === highlightIdx) t.classList.add('highlighted');
                                    else t.classList.remove('highlighted');
                                });
                            },
                            () => {
                                blendBtn.disabled = false;
                                container.querySelectorAll('.blending-tile').forEach(t => t.classList.remove('highlighted'));
                                const resCard = document.getElementById('blendingResultCard');
                                if (resCard) {
                                    resCard.style.transform = 'scale(1.05)';
                                    setTimeout(() => resCard.style.transform = 'scale(1)', 400);
                                }
                            }
                        );
                    });
                }

                // Result card speech
                const resCard = document.getElementById('blendingResultCard');
                if (resCard) {
                    resCard.addEventListener('click', () => DrillAudio.playWord(item.word));
                }

                // Prev/Next
                const prev = document.getElementById('btnPrevBlendWord');
                const next = document.getElementById('btnNextBlendWord');
                if (prev) prev.addEventListener('click', () => renderCurrentWord(idx - 1));
                if (next) next.addEventListener('click', () => renderCurrentWord(idx + 1));
            };

            renderCurrentWord(0);
        },

        startBlendingQuiz(container) {
            const list = [...this.materials.soundBlending];
            const shuffled = list.sort(() => 0.5 - Math.random()).slice(0, 8);

            this.quiz = {
                mode: 'blend',
                category: 'blending',
                items: shuffled,
                currentIndex: 0,
                score: 0,
                total: shuffled.length,
                mistakes: []
            };

            const renderStep = () => {
                const q = this.quiz;
                if (q.currentIndex >= q.total) {
                    this.renderQuizCompletion(container);
                    return;
                }

                const current = q.items[q.currentIndex];
                const progressPercent = Math.round((q.currentIndex / q.total) * 100);

                const distractors = this.materials.soundBlending
                    .filter(w => w.id !== current.id)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3);
                const options = [current, ...distractors].sort(() => 0.5 - Math.random());

                const phonemeDisplay = current.sounds.map(s => `/${s}/`).join(' + ');

                let optionsHtml = '';
                options.forEach(opt => {
                    optionsHtml += `
                        <div class="drill-option-card" data-opt-id="${opt.id}">
                            <span style="font-size: 2.2rem; font-weight: 800; color: #1e293b;">${opt.word}</span>
                        </div>
                    `;
                });

                container.innerHTML = `
                    <div class="drill-quiz-container">
                        <div style="width: 100%; display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; color: #64748b;">
                            <span>Question ${q.currentIndex + 1} of ${q.total}</span>
                            <span>Score: ${q.score}</span>
                        </div>

                        <div class="drill-progress-bar-wrap">
                            <div class="drill-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                        </div>

                        <div class="drill-prompt-box">
                            <h3 style="font-size: 1.2rem; color: #065f46; font-weight: 700; margin-bottom: 6px;">
                                Listen to the segmented sounds. What word do they form?
                            </h3>
                            <div style="font-size: 1.4rem; font-weight: 800; color: #0284c7; margin-bottom: 8px;">
                                ${phonemeDisplay}
                            </div>
                            <button type="button" class="drill-prompt-btn-speaker" id="drillBlendPromptAudio" title="Play sounds again">
                                <i class="fas fa-volume-up"></i>
                            </button>
                            <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">Tap speaker to listen</span>
                        </div>

                        <div class="drill-options-grid">
                            ${optionsHtml}
                        </div>

                        <div id="drillQuizFeedback" style="min-height: 28px; font-size: 1.1rem; font-weight: 700;"></div>
                    </div>
                `;

                const playPrompt = () => {
                    // Play each phoneme with slight pause, without whole word
                    let idx = 0;
                    const nextPhoneme = () => {
                        if (idx < current.sounds.length) {
                            DrillAudio.playPhoneme(current.sounds[idx], () => {
                                idx++;
                                setTimeout(nextPhoneme, 350);
                            });
                        }
                    };
                    nextPhoneme();
                };

                setTimeout(playPrompt, 300);
                const pBtn = document.getElementById('drillBlendPromptAudio');
                if (pBtn) pBtn.addEventListener('click', playPrompt);

                let answered = false;
                container.querySelectorAll('.drill-option-card').forEach(card => {
                    card.addEventListener('click', () => {
                        if (answered) return;
                        answered = true;

                        const chosenId = card.getAttribute('data-opt-id');
                        const feedbackEl = document.getElementById('drillQuizFeedback');

                        if (chosenId === current.id) {
                            card.classList.add('correct');
                            q.score++;
                            if (feedbackEl) {
                                feedbackEl.style.color = '#10b981';
                                feedbackEl.innerHTML = '<i class="fas fa-check-circle"></i> Yes! Blends into ' + current.word.toUpperCase();
                            }
                            if (window.createConfetti) window.createConfetti(card);
                            if (window.playFeedback) window.playFeedback(true);
                            DrillAudio.playWord(current.word);

                            setTimeout(() => {
                                q.currentIndex++;
                                renderStep();
                            }, 1300);
                        } else {
                            card.classList.add('incorrect');
                            q.mistakes.push(current.word);
                            container.querySelectorAll('.drill-option-card').forEach(c => {
                                if (c.getAttribute('data-opt-id') === current.id) c.classList.add('correct');
                            });
                            if (feedbackEl) {
                                feedbackEl.style.color = '#ef4444';
                                feedbackEl.innerHTML = '<i class="fas fa-times-circle"></i> Blends into ' + current.word;
                            }
                            if (window.playFeedback) window.playFeedback(false);

                            setTimeout(() => {
                                q.currentIndex++;
                                renderStep();
                            }, 1800);
                        }
                    });
                });
            };

            renderStep();
        },

        startWordBuilder(container) {
            const list = [...this.materials.soundBlending];
            const current = list[Math.floor(Math.random() * list.length)];

            // Scramble tiles
            const scrambled = [...current.sounds].sort(() => 0.5 - Math.random());
            let placed = [];

            const renderBuilder = () => {
                const slotsHtml = current.sounds.map((_, i) => `
                    <div style="width: 75px; height: 85px; border: 3px dashed #38bdf8; border-radius: 12px; display:flex; align-items:center; justify-content:center; background:#f0f9ff; font-size: 2.5rem; font-weight:800; color:#0369a1;">
                        ${placed[i] || ''}
                    </div>
                `).join('');

                const tilesHtml = scrambled.map((s, idx) => `
                    <button type="button" class="blending-tile btn-pick-tile" data-idx="${idx}" data-sound="${s}" style="width:75px; height:85px; font-size: 2.2rem;">
                        <span class="letter-main">${s}</span>
                    </button>
                `).join('');

                container.innerHTML = `
                    <div class="drill-quiz-container">
                        <div class="drill-prompt-box">
                            <h3 style="font-size: 1.25rem; color: #065f46; font-weight: 700;">
                                Word Builder: Build the word you hear!
                            </h3>
                            ${current.customImg
                                ? `<img src="${current.customImg}" style="width:90px; height:90px; object-fit:cover; border-radius:10px;">`
                                : `<span style="font-size: 50px;">${current.icon || '📖'}</span>`}
                            <button type="button" class="btn btn-sm btn-primary" id="btnHearTargetWord">
                                <i class="fas fa-volume-up"></i> Hear Target Word
                            </button>
                        </div>

                        <!-- Target Slots -->
                        <div style="display: flex; gap: 12px; margin: 10px 0;">
                            ${slotsHtml}
                        </div>

                        <!-- Available sound tiles -->
                        <div style="font-size: 0.85rem; color: #64748b; font-weight: 700;">TAP LETTERS IN THE CORRECT ORDER:</div>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
                            ${tilesHtml}
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button type="button" class="btn btn-secondary" id="btnResetBuilder">
                                <i class="fas fa-undo"></i> Reset Slots
                            </button>
                            <button type="button" class="btn btn-success" id="btnNextBuilder">
                                Next Word <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                `;

                DrillAudio.playWord(current.word);

                document.getElementById('btnHearTargetWord').addEventListener('click', () => DrillAudio.playWord(current.word));
                document.getElementById('btnResetBuilder').addEventListener('click', () => {
                    placed = [];
                    renderBuilder();
                });
                document.getElementById('btnNextBuilder').addEventListener('click', () => {
                    this.startWordBuilder(container);
                });

                container.querySelectorAll('.btn-pick-tile').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const s = btn.getAttribute('data-sound');
                        DrillAudio.playPhoneme(s);
                        if (placed.length < current.sounds.length) {
                            placed.push(s);
                            renderBuilder();

                            // Check completion
                            if (placed.length === current.sounds.length) {
                                if (placed.join('') === current.word) {
                                    if (window.createConfetti) window.createConfetti(container);
                                    if (window.playFeedback) window.playFeedback(true);
                                    setTimeout(() => DrillAudio.playWord(current.word), 400);
                                } else {
                                    if (window.playFeedback) window.playFeedback(false);
                                }
                            }
                        }
                    });
                });
            };

            renderBuilder();
        },

        // =========================================================================
        // 9. TEACHER CONTENT MANAGEMENT & MULTI-FORMAT IMPORTER
        // =========================================================================

        renderTeacherManagementView(area) {
            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <!-- Top instructions card -->
                    <div class="sf1-import-card" style="border-color: #3b82f6; background: #eff6ff;">
                        <div class="sf1-import-info">
                            <div class="sf1-import-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                                <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div>
                                <h4 style="color: #1e40af; margin-bottom: 2px;">Teacher Content Management & Document Importer</h4>
                                <p style="font-size: 0.88rem; color: #475569; margin: 0;">
                                    Import reading lists from <strong>PDF, Word (.docx), Images (OCR),</strong> or manual text. Review and attach pictures to any word before saving.
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <button type="button" class="btn btn-primary" id="btnOpenManualAddModal">
                                <i class="fas fa-plus-circle"></i> Add Single Word/Sound
                            </button>
                            <button type="button" class="btn btn-secondary" id="btnOpenImageLibraryModal">
                                <i class="fas fa-images"></i> Manage Picture Library (${this.imageLibrary.length})
                            </button>
                            <button type="button" class="btn btn-primary" id="btnOpenAudioLibraryModal" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); border-color: #7c3aed;">
                                <i class="fas fa-microphone-alt"></i> Phonics Audio Library & Custom Recordings
                            </button>
                        </div>
                    </div>

                    <!-- Voice & Pronunciation Settings Card -->
                    <div style="background: white; border: 2px solid #e2e8f0; border-radius: 14px; padding: 22px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-sliders-h" style="color: #10b981;"></i> Reading Drill Voice & Speech Settings
                        </h3>
                        <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 16px;">
                            Select your preferred voice and speaking speed for all Reading Drill activities (letter sounds, CVC words, Fuller method, and blending).
                        </p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; align-items: flex-end;">
                            <div>
                                <label class="form-label" style="font-weight: 600;"><i class="fas fa-microphone-alt"></i> Reading Drill Voice</label>
                                <select id="mgmtDrillVoiceSelector" class="form-input" style="padding: 9px 12px;">
                                    <option value="">Default System Voice</option>
                                </select>
                            </div>
                            <div>
                                <label class="form-label" style="font-weight: 600;"><i class="fas fa-tachometer-alt"></i> Default Pace / Speed</label>
                                <select id="mgmtDrillSpeedSelector" class="form-input" style="padding: 9px 12px;">
                                    <option value="0.7">0.7x (Slow Phonics)</option>
                                    <option value="0.85" selected>0.85x (Guided Reading - Recommended)</option>
                                    <option value="1.0">1.0x (Normal Pace)</option>
                                    <option value="1.15">1.15x (Fluent Reading)</option>
                                </select>
                            </div>
                            <div>
                                <label class="form-label" style="font-weight: 600;"><i class="fas fa-volume-up"></i> Test Voice Preview</label>
                                <div style="display: flex; gap: 8px;">
                                    <input type="text" id="mgmtVoiceTestInput" class="form-input" value="The cat sat on the mat." placeholder="Type phrase or word..." style="padding: 8px 12px; flex: 1;">
                                    <button type="button" class="btn btn-primary" id="mgmtBtnTestVoicePreview" style="white-space: nowrap;">
                                        <i class="fas fa-play"></i> Test
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Staged File Uploader Box -->
                    <div style="background: white; border: 2px solid #e2e8f0; border-radius: 14px; padding: 24px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                        <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-file-import" style="color: #3b82f6;"></i> Import Reading Materials (Staged Workflow)
                        </h3>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 16px;">
                            <div>
                                <label class="form-label">1. Target Reading Category</label>
                                <select id="importTargetCategory" class="form-input">
                                    <option value="cvc">CVC Word Practice</option>
                                    <option value="letters">Letter Sound Recognition</option>
                                    <option value="fuller">Fuller Method</option>
                                    <option value="blending">Sound Blending</option>
                                </select>
                            </div>
                            <div>
                                <label class="form-label">2. File Source (PDF, Word DOCX, Image, Text)</label>
                                <input type="file" id="importDocFileInput" class="form-input" accept=".pdf, .docx, .txt, .csv, .jpg, .jpeg, .png, .webp" style="padding: 8px;">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Or Paste Text / Word List Manually</label>
                            <textarea id="importManualText" class="form-input" rows="3" placeholder="Type or paste words, sentences, or phrases here (e.g. cat, dog, pen, hat, sun)..."></textarea>
                        </div>

                        <div style="display: flex; justify-content: flex-end; gap: 10px;">
                            <button type="button" class="btn btn-secondary" id="btnClearImportInput">Clear</button>
                            <button type="button" class="btn btn-primary" id="btnExtractContentAction">
                                <i class="fas fa-search"></i> Extract & Analyze Words
                            </button>
                        </div>

                        <div id="importExtractStatus" style="margin-top: 10px; font-size: 0.9rem; font-weight: 600;"></div>
                    </div>

                    <!-- Staged Review Table Area (Displayed when items are extracted) -->
                    <div id="stagedReviewArea" style="display: none; background: white; border: 2px solid #3b82f6; border-radius: 14px; padding: 24px; box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
                            <div>
                                <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e40af; margin-bottom: 2px;">
                                    <i class="fas fa-check-double"></i> Review & Organize Extracted Words (<span id="stagedItemCount">0</span>)
                                </h3>
                                <p style="font-size: 0.85rem; color: #64748b; margin: 0;">
                                    Correct spelling errors, check items to keep, and attach pictures before saving to drills.
                                </p>
                            </div>
                            <button type="button" class="btn btn-success" id="btnCommitStagedItems" style="background: #16a085; border-color: #16a085;">
                                <i class="fas fa-save"></i> Save Selected to Drills
                            </button>
                        </div>

                        <div style="max-height: 380px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 10px;">
                            <table class="drill-import-table" id="stagedTable">
                                <thead>
                                    <tr>
                                        <th style="width: 40px; text-align: center;"><input type="checkbox" id="stagedSelectAll" checked></th>
                                        <th style="width: 50px;">#</th>
                                        <th style="width: 80px;">Picture</th>
                                        <th>Word / Item</th>
                                        <th style="width: 140px;">Category</th>
                                        <th style="width: 110px;">Audio Test</th>
                                    </tr>
                                </thead>
                                <tbody id="stagedTableBody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;

            // Voice & Speed Settings
            const mgmtVoice = document.getElementById('mgmtDrillVoiceSelector');
            if (mgmtVoice) {
                mgmtVoice.addEventListener('change', (e) => {
                    DrillAudio.setVoice(e.target.value);
                    const topVoice = document.getElementById('drillVoiceSelector');
                    if (topVoice) topVoice.value = e.target.value;
                });
            }

            const mgmtSpeed = document.getElementById('mgmtDrillSpeedSelector');
            if (mgmtSpeed) {
                mgmtSpeed.value = String(DrillAudio.currentRate);
                mgmtSpeed.addEventListener('change', (e) => {
                    DrillAudio.setRate(e.target.value);
                    const topSpeed = document.getElementById('drillSpeedSelector');
                    if (topSpeed) topSpeed.value = e.target.value;
                });
            }

            const mgmtTestBtn = document.getElementById('mgmtBtnTestVoicePreview');
            const mgmtTestInput = document.getElementById('mgmtVoiceTestInput');
            if (mgmtTestBtn && mgmtTestInput) {
                mgmtTestBtn.addEventListener('click', () => {
                    const text = mgmtTestInput.value.trim() || "The quick brown fox jumps over the lazy dog.";
                    DrillAudio.speak(text);
                });
            }

            this.populateVoiceSelectors();

            // Clear button
            document.getElementById('btnClearImportInput').addEventListener('click', () => {
                document.getElementById('importDocFileInput').value = '';
                document.getElementById('importManualText').value = '';
                document.getElementById('importExtractStatus').innerHTML = '';
                document.getElementById('stagedReviewArea').style.display = 'none';
                this.stagedImportItems = [];
            });

            // Extract Action Button
            document.getElementById('btnExtractContentAction').addEventListener('click', async () => {
                const fileInput = document.getElementById('importDocFileInput');
                const manualText = document.getElementById('importManualText').value.trim();
                const targetCat = document.getElementById('importTargetCategory').value;
                const statusEl = document.getElementById('importExtractStatus');

                let extractedText = '';

                if (fileInput.files && fileInput.files[0]) {
                    const file = fileInput.files[0];
                    statusEl.style.color = '#3b82f6';
                    statusEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Extracting content from ' + file.name + '...';

                    try {
                        extractedText = await this.extractTextFromFile(file);
                    } catch (err) {
                        statusEl.style.color = '#ef4444';
                        statusEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error: ' + (err.message || err);
                        return;
                    }
                }

                if (manualText) {
                    extractedText += '\n' + manualText;
                }

                if (!extractedText.trim()) {
                    statusEl.style.color = '#ef4444';
                    statusEl.innerHTML = 'Please choose a file or type words in the text box.';
                    return;
                }

                // Tokenize words
                const words = this.tokenizeExtractedText(extractedText);
                if (words.length === 0) {
                    statusEl.style.color = '#f59e0b';
                    statusEl.innerHTML = 'No distinct words found in the content.';
                    return;
                }

                statusEl.style.color = '#10b981';
                statusEl.innerHTML = `<i class="fas fa-check"></i> Extracted ${words.length} distinct items! Review below.`;

                this.stagedImportItems = words.map((w, idx) => ({
                    id: 'staged_' + idx + '_' + Date.now(),
                    word: w,
                    category: targetCat,
                    picture: '',
                    selected: true
                }));

                this.renderStagedReviewArea();
            });

            // Manual Add Single Item
            document.getElementById('btnOpenManualAddModal').addEventListener('click', () => {
                this.showManualAddModal();
            });

            // Image Library
            document.getElementById('btnOpenImageLibraryModal').addEventListener('click', () => {
                this.showImageLibraryModal();
            });

            // Phonics Audio Library & Custom Recordings
            const btnAudioLib = document.getElementById('btnOpenAudioLibraryModal');
            if (btnAudioLib) {
                btnAudioLib.addEventListener('click', () => {
                    this.showAudioLibraryModal();
                });
            }
        },

        async extractTextFromFile(file) {
            const fileName = file.name.toLowerCase();

            // 1. Plain text / CSV
            if (fileName.endsWith('.txt') || fileName.endsWith('.csv')) {
                return await file.text();
            }

            // 2. Word .docx via JSZip
            if (fileName.endsWith('.docx')) {
                if (!window.JSZip) {
                    throw new Error('JSZip library is required for Word DOCX extraction.');
                }
                const zip = await window.JSZip.loadAsync(file);
                const docFile = zip.file('word/document.xml');
                if (!docFile) throw new Error('Invalid DOCX format: word/document.xml missing.');
                const xmlText = await docFile.async('text');
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const pNodes = xmlDoc.getElementsByTagName('w:p');
                let result = '';
                for (let p of pNodes) {
                    result += p.textContent + '\n';
                }
                return result;
            }

            // 3. PDF via pdf.js
            if (fileName.endsWith('.pdf')) {
                if (!window.pdfjsLib) {
                    throw new Error('PDF.js library is not loaded. Please ensure pdf.min.js is available.');
                }
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.min.js';
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                let fullText = '';
                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const content = await page.getTextContent();
                    const pageText = content.items.map(item => item.str).join(' ');
                    fullText += pageText + '\n';
                }
                return fullText;
            }

            // 4. Image via Tesseract.js OCR
            if (/\.(jpe?g|png|webp|bmp)$/i.test(fileName)) {
                if (window.Tesseract && window.Tesseract.recognize) {
                    const res = await window.Tesseract.recognize(file, 'eng');
                    return res.data ? res.data.text : '';
                } else {
                    throw new Error('OCR library (Tesseract.js) is not ready. You can paste the text manually in the box.');
                }
            }

            throw new Error('Unsupported file format. Please upload PDF, DOCX, TXT, or Image.');
        },

        tokenizeExtractedText(rawText) {
            if (!rawText) return [];
            // Remove special punctuation, extract distinct words
            const tokens = rawText
                .replace(/[^a-zA-Z0-9\s'-]/g, ' ')
                .split(/\s+/)
                .map(w => w.trim().toLowerCase())
                .filter(w => w.length >= 2 && !/^\d+$/.test(w));

            // Return unique items
            return [...new Set(tokens)];
        },

        renderStagedReviewArea() {
            const area = document.getElementById('stagedReviewArea');
            const tbody = document.getElementById('stagedTableBody');
            const countEl = document.getElementById('stagedItemCount');
            if (!area || !tbody) return;

            area.style.display = 'block';
            countEl.textContent = this.stagedImportItems.length;

            tbody.innerHTML = '';
            this.stagedImportItems.forEach((item, idx) => {
                const tr = document.createElement('tr');
                const imgDisplay = item.picture
                    ? `<img src="${item.picture}" class="drill-img-thumb" title="Click to replace">`
                    : `<div class="drill-img-thumb" style="display:flex; align-items:center; justify-content:center; color:#94a3b8; font-size:18px;" title="Attach picture"><i class="fas fa-camera"></i></div>`;

                tr.innerHTML = `
                    <td style="text-align: center;">
                        <input type="checkbox" class="staged-item-cb" data-idx="${idx}" ${item.selected ? 'checked' : ''}>
                    </td>
                    <td>${idx + 1}</td>
                    <td>
                        <div class="staged-img-picker" data-idx="${idx}" style="cursor: pointer;">
                            ${imgDisplay}
                        </div>
                    </td>
                    <td>
                        <input type="text" class="form-input staged-word-input" data-idx="${idx}" value="${item.word}" style="font-weight: 700; font-size: 1rem; padding: 4px 8px;">
                    </td>
                    <td>
                        <select class="form-input staged-cat-select" data-idx="${idx}" style="padding: 4px 6px; font-size: 0.85rem;">
                            <option value="cvc" ${item.category === 'cvc' ? 'selected' : ''}>CVC Word</option>
                            <option value="letters" ${item.category === 'letters' ? 'selected' : ''}>Letter Sound</option>
                            <option value="blending" ${item.category === 'blending' ? 'selected' : ''}>Sound Blending</option>
                            <option value="fuller" ${item.category === 'fuller' ? 'selected' : ''}>Fuller Method</option>
                        </select>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-secondary" data-play-word="${item.word}">
                            <i class="fas fa-volume-up"></i> Test
                        </button>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            // Select all
            const selectAll = document.getElementById('stagedSelectAll');
            if (selectAll) {
                selectAll.addEventListener('change', (e) => {
                    const checked = e.target.checked;
                    this.stagedImportItems.forEach(i => i.selected = checked);
                    tbody.querySelectorAll('.staged-item-cb').forEach(cb => cb.checked = checked);
                });
            }

            // Checkbox changes
            tbody.querySelectorAll('.staged-item-cb').forEach(cb => {
                cb.addEventListener('change', (e) => {
                    const idx = parseInt(cb.getAttribute('data-idx'), 10);
                    if (this.stagedImportItems[idx]) this.stagedImportItems[idx].selected = cb.checked;
                });
            });

            // Word text input
            tbody.querySelectorAll('.staged-word-input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const idx = parseInt(input.getAttribute('data-idx'), 10);
                    if (this.stagedImportItems[idx]) this.stagedImportItems[idx].word = e.target.value.trim();
                });
            });

            // Category select
            tbody.querySelectorAll('.staged-cat-select').forEach(sel => {
                sel.addEventListener('change', (e) => {
                    const idx = parseInt(sel.getAttribute('data-idx'), 10);
                    if (this.stagedImportItems[idx]) this.stagedImportItems[idx].category = e.target.value;
                });
            });

            // Image picker trigger
            tbody.querySelectorAll('.staged-img-picker').forEach(picker => {
                picker.addEventListener('click', () => {
                    const idx = parseInt(picker.getAttribute('data-idx'), 10);
                    this.showPictureAssignModal((base64) => {
                        if (this.stagedImportItems[idx]) {
                            this.stagedImportItems[idx].picture = base64;
                            this.renderStagedReviewArea();
                        }
                    });
                });
            });

            // Commit to Drills
            document.getElementById('btnCommitStagedItems').addEventListener('click', async () => {
                const selected = this.stagedImportItems.filter(i => i.selected && i.word);
                if (selected.length === 0) {
                    alert('Please select at least one word to save.');
                    return;
                }

                let addedCount = 0;
                selected.forEach(item => {
                    const cleanWord = item.word.toLowerCase().trim();

                    if (item.category === 'cvc') {
                        // Check if exists
                        const exists = this.materials.cvcWords.find(w => w.word.toLowerCase() === cleanWord);
                        const vowels = ['a', 'e', 'i', 'o', 'u'];
                        const vMatch = cleanWord.split('').find(ch => vowels.includes(ch)) || 'a';
                        if (exists) {
                            if (item.picture) exists.customImg = item.picture;
                        } else {
                            this.materials.cvcWords.push({
                                id: 'cvc_cust_' + Date.now() + Math.random().toString(36).substring(2, 5),
                                word: cleanWord,
                                vowel: vMatch,
                                family: '-' + cleanWord.slice(-2),
                                sounds: cleanWord.split(''),
                                icon: '📖',
                                customImg: item.picture || '',
                                sentence: `The ${cleanWord} is here.`
                            });
                            addedCount++;
                        }
                    } else if (item.category === 'blending') {
                        const exists = this.materials.soundBlending.find(w => w.word.toLowerCase() === cleanWord);
                        if (exists) {
                            if (item.picture) exists.customImg = item.picture;
                        } else {
                            this.materials.soundBlending.push({
                                id: 'blend_cust_' + Date.now() + Math.random().toString(36).substring(2, 5),
                                word: cleanWord,
                                sounds: cleanWord.split(''),
                                ipa: cleanWord.split('').map(c => `/${c}/`),
                                level: cleanWord.length + '-Phoneme',
                                icon: '📖',
                                customImg: item.picture || ''
                            });
                            addedCount++;
                        }
                    } else if (item.category === 'letters') {
                        const ch = cleanWord.charAt(0).toUpperCase();
                        const exists = this.materials.letterSounds.find(l => l.name.toUpperCase() === ch);
                        if (exists && item.picture) exists.customImg = item.picture;
                    }
                });

                await this.saveMaterials();
                alert(`Successfully saved ${selected.length} items to your Reading Drill collection!`);
                area.style.display = 'none';
                this.stagedImportItems = [];
                this.render();
            });
        },

        // Picture upload and assignment helper
        showPictureAssignModal(onSelected) {
            const modalHtml = `
                <div class="modal-overlay active" id="picAssignModal" style="z-index: 1300;">
                    <div class="modal-content" style="max-width: 600px;">
                        <div class="modal-header" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                            <h3 class="modal-title" style="color:white;"><i class="fas fa-camera"></i> Attach Picture to Word</h3>
                        </div>
                        <div class="modal-body" style="padding: 20px;">
                            <div style="margin-bottom: 20px;">
                                <label class="form-label">Upload New Picture from Device</label>
                                <input type="file" id="picUploadInput" class="form-input" accept="image/png, image/jpeg, image/jpg, image/webp">
                                <div id="picUploadPreview" style="margin-top: 10px; display: none; text-align: center;">
                                    <img id="picPreviewImg" style="max-height: 140px; border-radius: 8px; border: 1px solid #cbd5e1;">
                                </div>
                            </div>

                            ${this.imageLibrary.length > 0 ? `
                                <div>
                                    <label class="form-label">Or Pick from Previously Uploaded Library</label>
                                    <div style="display: flex; gap: 10px; flex-wrap: wrap; max-height: 150px; overflow-y: auto; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;">
                                        ${this.imageLibrary.map((img, i) => `
                                            <img src="${img.data}" class="drill-img-thumb btn-pick-lib-img" data-idx="${i}" style="width: 50px; height: 50px;" title="${img.name}">
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                        <div class="modal-footer" style="padding: 15px; border-top: 1px solid #eee; display: flex; justify-content: flex-end; gap: 10px;">
                            <button type="button" class="btn btn-secondary" id="btnCancelPicAssign">Cancel</button>
                            <button type="button" class="btn btn-danger" id="btnRemovePicAssign">Remove Picture</button>
                            <button type="button" class="btn btn-primary" id="btnConfirmPicAssign">Apply Picture</button>
                        </div>
                    </div>
                </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper);

            let chosenBase64 = null;

            const close = () => wrapper.remove();
            document.getElementById('btnCancelPicAssign').addEventListener('click', close);
            document.getElementById('btnRemovePicAssign').addEventListener('click', () => {
                onSelected('');
                close();
            });

            const uploadInput = document.getElementById('picUploadInput');
            uploadInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (re) => {
                        chosenBase64 = re.target.result;
                        const pWrap = document.getElementById('picUploadPreview');
                        const pImg = document.getElementById('picPreviewImg');
                        if (pWrap && pImg) {
                            pImg.src = chosenBase64;
                            pWrap.style.display = 'block';
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });

            wrapper.querySelectorAll('.btn-pick-lib-img').forEach(imgEl => {
                imgEl.addEventListener('click', () => {
                    const idx = parseInt(imgEl.getAttribute('data-idx'), 10);
                    if (this.imageLibrary[idx]) {
                        chosenBase64 = this.imageLibrary[idx].data;
                        const pWrap = document.getElementById('picUploadPreview');
                        const pImg = document.getElementById('picPreviewImg');
                        if (pWrap && pImg) {
                            pImg.src = chosenBase64;
                            pWrap.style.display = 'block';
                        }
                    }
                });
            });

            document.getElementById('btnConfirmPicAssign').addEventListener('click', async () => {
                if (chosenBase64) {
                    // Also save to library if not duplicate
                    if (!this.imageLibrary.some(img => img.data === chosenBase64)) {
                        this.imageLibrary.push({
                            id: 'img_' + Date.now(),
                            name: 'Image ' + (this.imageLibrary.length + 1),
                            data: chosenBase64
                        });
                        await this.saveImageLibrary();
                    }
                    onSelected(chosenBase64);
                }
                close();
            });
        },

        showImageLibraryModal() {
            const modalHtml = `
                <div class="modal-overlay active" id="imgLibManagerModal" style="z-index: 1200;">
                    <div class="modal-content" style="max-width: 650px;">
                        <div class="modal-header" style="background: linear-gradient(135deg, #10b981, #065f46);">
                            <h3 class="modal-title" style="color:white;"><i class="fas fa-images"></i> Picture Library Management</h3>
                        </div>
                        <div class="modal-body" style="padding: 20px;">
                            <div style="margin-bottom: 16px;">
                                <label class="form-label">Upload Picture into Library</label>
                                <input type="file" id="libUploadInput" class="form-input" accept="image/*">
                            </div>
                            <div style="font-size: 0.85rem; color: #64748b; font-weight: 700; margin-bottom: 8px;">
                                STORED PICTURES (${this.imageLibrary.length})
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 12px; max-height: 250px; overflow-y: auto; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;">
                                ${this.imageLibrary.length === 0 ? '<div style="color:#94a3b8; font-style:italic;">No custom pictures uploaded yet.</div>' : ''}
                                ${this.imageLibrary.map((img, i) => `
                                    <div style="position: relative; text-align: center;">
                                        <img src="${img.data}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; border: 1px solid #cbd5e1;">
                                        <button type="button" class="btn-del-lib-img" data-idx="${i}" style="position:absolute; top:-4px; right:0; background:#ef4444; color:white; border:none; border-radius:50%; width:20px; height:20px; font-size:10px; cursor:pointer;" title="Delete picture">
                                            ×
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="modal-footer" style="padding: 15px; border-top: 1px solid #eee; display: flex; justify-content: flex-end;">
                            <button type="button" class="btn btn-secondary" id="btnCloseImgLibModal">Close</button>
                        </div>
                    </div>
                </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper);

            const close = () => wrapper.remove();
            document.getElementById('btnCloseImgLibModal').addEventListener('click', close);

            const upInput = document.getElementById('libUploadInput');
            upInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = async (re) => {
                        this.imageLibrary.push({
                            id: 'img_' + Date.now(),
                            name: e.target.files[0].name,
                            data: re.target.result
                        });
                        await this.saveImageLibrary();
                        close();
                        this.showImageLibraryModal();
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });

            wrapper.querySelectorAll('.btn-del-lib-img').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const idx = parseInt(btn.getAttribute('data-idx'), 10);
                    this.imageLibrary.splice(idx, 1);
                    await this.saveImageLibrary();
                    close();
                    this.showImageLibraryModal();
                });
            });
        },

        showManualAddModal() {
            const modalHtml = `
                <div class="modal-overlay active" id="manualAddWordModal" style="z-index: 1200;">
                    <div class="modal-content" style="max-width: 550px;">
                        <div class="modal-header" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                            <h3 class="modal-title" style="color:white;"><i class="fas fa-plus-circle"></i> Add Single Word / Reading Item</h3>
                        </div>
                        <div class="modal-body" style="padding: 20px;">
                            <div class="form-group">
                                <label class="form-label">Category</label>
                                <select id="mAddCategory" class="form-input">
                                    <option value="cvc">CVC Word Practice</option>
                                    <option value="blending">Sound Blending Word</option>
                                    <option value="letters">Letter Sound</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Word / Letter</label>
                                <input type="text" id="mAddWord" class="form-input" placeholder="e.g. cat, sun, pig, or letter sound">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Example Sentence (Optional)</label>
                                <input type="text" id="mAddSentence" class="form-input" placeholder="e.g. The cat sat on the mat.">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Picture</label>
                                <div style="display:flex; gap:10px; align-items:center;">
                                    <button type="button" class="btn btn-secondary" id="mAddPickPicBtn">
                                        <i class="fas fa-image"></i> Select / Upload Picture
                                    </button>
                                    <div id="mAddPicThumbWrap"></div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="padding: 15px; border-top: 1px solid #eee; display: flex; justify-content: flex-end; gap: 10px;">
                            <button type="button" class="btn btn-secondary" id="btnCancelManualAdd">Cancel</button>
                            <button type="button" class="btn btn-primary" id="btnConfirmManualAdd">Save Word</button>
                        </div>
                    </div>
                </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper);

            let attachedPic = '';
            const close = () => wrapper.remove();
            document.getElementById('btnCancelManualAdd').addEventListener('click', close);

            document.getElementById('mAddPickPicBtn').addEventListener('click', () => {
                this.showPictureAssignModal((base64) => {
                    attachedPic = base64;
                    const wrap = document.getElementById('mAddPicThumbWrap');
                    if (wrap) {
                        wrap.innerHTML = base64 ? `<img src="${base64}" style="width:45px; height:45px; border-radius:6px; object-fit:cover;">` : '';
                    }
                });
            });

            document.getElementById('btnConfirmManualAdd').addEventListener('click', async () => {
                const word = document.getElementById('mAddWord').value.trim();
                const cat = document.getElementById('mAddCategory').value;
                const sentence = document.getElementById('mAddSentence').value.trim();

                if (!word) {
                    alert('Please enter a word.');
                    return;
                }

                if (cat === 'cvc') {
                    const vowels = ['a', 'e', 'i', 'o', 'u'];
                    const vMatch = word.split('').find(ch => vowels.includes(ch)) || 'a';
                    this.materials.cvcWords.push({
                        id: 'cvc_cust_' + Date.now(),
                        word: word.toLowerCase(),
                        vowel: vMatch,
                        family: '-' + word.slice(-2),
                        sounds: word.toLowerCase().split(''),
                        icon: '📖',
                        customImg: attachedPic,
                        sentence: sentence || `Look at the ${word}.`
                    });
                } else if (cat === 'blending') {
                    this.materials.soundBlending.push({
                        id: 'blend_cust_' + Date.now(),
                        word: word.toLowerCase(),
                        sounds: word.toLowerCase().split(''),
                        ipa: word.split('').map(c => `/${c}/`),
                        level: word.length + '-Phoneme',
                        icon: '📖',
                        customImg: attachedPic
                    });
                }

                await this.saveMaterials();
                alert(`Word "${word}" added successfully!`);
                close();
                this.render();
            });
        },

        showAudioLibraryModal(targetType = null, targetKey = null) {
            // Master list of all standard phonics assets
            const defaultCatalog = [
                // Consonants
                { type: 'phoneme', key: 'b', label: 'Consonant /b/', ipa: '/b/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['b'] },
                { type: 'phoneme', key: 'c', label: 'Consonant /k/ (c)', ipa: '/k/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['c'] },
                { type: 'phoneme', key: 'd', label: 'Consonant /d/', ipa: '/d/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['d'] },
                { type: 'phoneme', key: 'f', label: 'Consonant /f/', ipa: '/f/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['f'] },
                { type: 'phoneme', key: 'g', label: 'Consonant /ɡ/', ipa: '/ɡ/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['g'] },
                { type: 'phoneme', key: 'h', label: 'Consonant /h/', ipa: '/h/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['h'] },
                { type: 'phoneme', key: 'j', label: 'Consonant /dʒ/ (j)', ipa: '/dʒ/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['j'] },
                { type: 'phoneme', key: 'k', label: 'Consonant /k/', ipa: '/k/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['k'] },
                { type: 'phoneme', key: 'l', label: 'Consonant /l/', ipa: '/l/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['l'] },
                { type: 'phoneme', key: 'm', label: 'Consonant /m/', ipa: '/m/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['m'] },
                { type: 'phoneme', key: 'n', label: 'Consonant /n/', ipa: '/n/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['n'] },
                { type: 'phoneme', key: 'p', label: 'Consonant /p/', ipa: '/p/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['p'] },
                { type: 'phoneme', key: 'q', label: 'Consonant /kw/ (q)', ipa: '/kw/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['q'] },
                { type: 'phoneme', key: 'r', label: 'Consonant /r/', ipa: '/r/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['r'] },
                { type: 'phoneme', key: 's', label: 'Consonant /s/', ipa: '/s/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['s'] },
                { type: 'phoneme', key: 't', label: 'Consonant /t/', ipa: '/t/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['t'] },
                { type: 'phoneme', key: 'v', label: 'Consonant /v/', ipa: '/v/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['v'] },
                { type: 'phoneme', key: 'w', label: 'Consonant /w/', ipa: '/w/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['w'] },
                { type: 'phoneme', key: 'x', label: 'Consonant /ks/ (x)', ipa: '/ks/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['x'] },
                { type: 'phoneme', key: 'y', label: 'Consonant /j/ (y)', ipa: '/j/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['y'] },
                { type: 'phoneme', key: 'z', label: 'Consonant /z/', ipa: '/z/', category: 'consonants', defaultSrc: PHONICS_AUDIO_MAP.phonemes['z'] },

                // Short Vowels
                { type: 'phoneme', key: 'a', label: 'Short Vowel /æ/ (a)', ipa: '/æ/', category: 'vowels', defaultSrc: PHONICS_AUDIO_MAP.phonemes['a'] },
                { type: 'phoneme', key: 'e', label: 'Short Vowel /ɛ/ (e)', ipa: '/ɛ/', category: 'vowels', defaultSrc: PHONICS_AUDIO_MAP.phonemes['e'] },
                { type: 'phoneme', key: 'i', label: 'Short Vowel /ɪ/ (i)', ipa: '/ɪ/', category: 'vowels', defaultSrc: PHONICS_AUDIO_MAP.phonemes['i'] },
                { type: 'phoneme', key: 'o', label: 'Short Vowel /ɒ/ (o)', ipa: '/ɒ/', category: 'vowels', defaultSrc: PHONICS_AUDIO_MAP.phonemes['o'] },
                { type: 'phoneme', key: 'u', label: 'Short Vowel /ʌ/ (u)', ipa: '/ʌ/', category: 'vowels', defaultSrc: PHONICS_AUDIO_MAP.phonemes['u'] },

                // Digraphs & Blends
                { type: 'phoneme', key: 'ch', label: 'Digraph /tʃ/ (ch)', ipa: '/tʃ/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['ch'] },
                { type: 'phoneme', key: 'sh', label: 'Digraph /ʃ/ (sh)', ipa: '/ʃ/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['sh'] },
                { type: 'phoneme', key: 'th', label: 'Digraph /θ/ (th)', ipa: '/θ/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['th'] },
                { type: 'phoneme', key: 'bl', label: 'Blend /bl/', ipa: '/bl/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['bl'] },
                { type: 'phoneme', key: 'br', label: 'Blend /br/', ipa: '/br/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['br'] },
                { type: 'phoneme', key: 'cl', label: 'Blend /cl/', ipa: '/kl/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['cl'] },
                { type: 'phoneme', key: 'cr', label: 'Blend /cr/', ipa: '/kr/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['cr'] },
                { type: 'phoneme', key: 'dr', label: 'Blend /dr/', ipa: '/dr/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['dr'] },
                { type: 'phoneme', key: 'fl', label: 'Blend /fl/', ipa: '/fl/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['fl'] },
                { type: 'phoneme', key: 'fr', label: 'Blend /fr/', ipa: '/fr/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['fr'] },
                { type: 'phoneme', key: 'gl', label: 'Blend /gl/', ipa: '/ɡl/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['gl'] },
                { type: 'phoneme', key: 'gr', label: 'Blend /gr/', ipa: '/ɡr/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['gr'] },
                { type: 'phoneme', key: 'pl', label: 'Blend /pl/', ipa: '/pl/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['pl'] },
                { type: 'phoneme', key: 'pr', label: 'Blend /pr/', ipa: '/pr/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['pr'] },
                { type: 'phoneme', key: 'st', label: 'Blend /st/', ipa: '/st/', category: 'blends', defaultSrc: PHONICS_AUDIO_MAP.phonemes['st'] },

                // Letter Names A-Z
                ...'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => ({
                    type: 'name',
                    key: letter,
                    label: `Letter Name "${letter.toUpperCase()}"`,
                    ipa: `[${letter.toUpperCase()}]`,
                    category: 'names',
                    defaultSrc: PHONICS_AUDIO_MAP.letterNames[letter]
                })),

                // Syllables
                { type: 'syllable', key: 'at', label: 'Syllable / family "-at"', ipa: '/æt/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['at'] },
                { type: 'syllable', key: 'an', label: 'Syllable / family "-an"', ipa: '/æn/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['an'] },
                { type: 'syllable', key: 'et', label: 'Syllable / family "-et"', ipa: '/ɛt/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['et'] },
                { type: 'syllable', key: 'it', label: 'Syllable / family "-it"', ipa: '/ɪt/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['it'] },
                { type: 'syllable', key: 'ot', label: 'Syllable / family "-ot"', ipa: '/ɒt/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['ot'] },
                { type: 'syllable', key: 'ut', label: 'Syllable / family "-ut"', ipa: '/ʌt/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['ut'] },
                { type: 'syllable', key: 'un', label: 'Syllable / family "-un"', ipa: '/ʌn/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['un'] },
                { type: 'syllable', key: 'um', label: 'Syllable / family "-um"', ipa: '/ʌm/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['um'] },
                { type: 'syllable', key: 'ig', label: 'Syllable / family "-ig"', ipa: '/ɪɡ/', category: 'syllables', defaultSrc: PHONICS_AUDIO_MAP.syllables['ig'] },

                // Decodable Words
                ...Object.keys(PHONICS_AUDIO_MAP.words).map(w => ({
                    type: 'word',
                    key: w,
                    label: `Word "${w}"`,
                    ipa: `/${w}/`,
                    category: 'words',
                    defaultSrc: PHONICS_AUDIO_MAP.words[w]
                }))
            ];

            let activeCategoryFilter = targetType ? (targetType === 'phoneme' ? 'all' : targetType + 's') : 'all';
            let activeSearchQuery = targetKey ? String(targetKey).toLowerCase() : '';

            // Recording state
            let mediaRecorder = null;
            let audioChunks = [];
            let currentlyRecordingKey = null;
            let currentStream = null;

            const modalHtml = `
                <div class="modal-overlay active" id="audioLibraryModal" style="z-index: 1250;">
                    <div class="modal-content" style="max-width: 920px; max-height: 90vh; display: flex; flex-direction: column; padding: 0;">
                        <div class="modal-header" style="background: linear-gradient(135deg, #7c3aed, #4f46e5); color: white; padding: 18px 24px;">
                            <div>
                                <h3 class="modal-title" style="color: white; font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; gap: 10px;">
                                    <i class="fas fa-music"></i> Phonics Audio Library & Custom Recordings
                                </h3>
                                <p style="font-size: 0.85rem; color: #e0e7ff; margin: 4px 0 0 0;">
                                    Authentic prerecorded audio for phonics, letter names, syllables, and words. Upload replacements or record with your microphone.
                                </p>
                            </div>
                        </div>

                        <div class="modal-body" style="overflow-y: auto; flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                            <!-- Filter & Search Bar -->
                            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; background: #f8fafc; padding: 12px 16px; border-radius: 10px; border: 1px solid #e2e8f0;">
                                <div style="flex: 1; min-width: 200px;">
                                    <input type="text" id="audioLibSearchInput" class="form-input" placeholder="Search sound, letter, or word (e.g. m, cat, at)..." value="${activeSearchQuery}" style="padding: 7px 12px;">
                                </div>
                                <div style="min-width: 170px;">
                                    <select id="audioLibCategoryFilter" class="form-input" style="padding: 7px 12px;">
                                        <option value="all" ${activeCategoryFilter === 'all' ? 'selected' : ''}>All Audio Items</option>
                                        <option value="consonants" ${activeCategoryFilter === 'consonants' ? 'selected' : ''}>Consonant Sounds</option>
                                        <option value="vowels" ${activeCategoryFilter === 'vowels' ? 'selected' : ''}>Short Vowel Sounds</option>
                                        <option value="blends" ${activeCategoryFilter === 'blends' ? 'selected' : ''}>Digraphs & Blends</option>
                                        <option value="names" ${activeCategoryFilter === 'names' ? 'selected' : ''}>Spoken Letter Names</option>
                                        <option value="syllables" ${activeCategoryFilter === 'syllables' ? 'selected' : ''}>Syllables & Families</option>
                                        <option value="words" ${activeCategoryFilter === 'words' ? 'selected' : ''}>Decodable Words</option>
                                        <option value="custom" ${activeCategoryFilter === 'custom' ? 'selected' : ''}>Teacher Custom Only</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-secondary" id="btnToggleAddCustomAudioForm" style="white-space: nowrap;">
                                    <i class="fas fa-plus-circle"></i> Add New Custom Sound
                                </button>
                            </div>

                            <!-- Add New Custom Sound Form (Collapsible) -->
                            <div id="addCustomAudioFormWrap" style="display: none; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 10px; padding: 16px;">
                                <h4 style="font-size: 0.95rem; font-weight: 700; color: #6b21a8; margin-bottom: 10px;">
                                    <i class="fas fa-plus"></i> Add or Override Custom Audio
                                </h4>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 12px;">
                                    <div>
                                        <label class="form-label" style="font-size: 0.8rem;">Sound Category</label>
                                        <select id="newCustomType" class="form-input" style="padding: 6px 10px;">
                                            <option value="phoneme">Phoneme / Letter Sound</option>
                                            <option value="name">Letter Name</option>
                                            <option value="syllable">Syllable / Family</option>
                                            <option value="word">Decodable Word</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="form-label" style="font-size: 0.8rem;">Symbol / Word / Key</label>
                                        <input type="text" id="newCustomKey" class="form-input" placeholder="e.g. m, sh, cat, un" style="padding: 6px 10px;">
                                    </div>
                                    <div>
                                        <label class="form-label" style="font-size: 0.8rem;">Upload Audio File</label>
                                        <input type="file" id="newCustomFileInput" class="form-input" accept="audio/*" style="padding: 4px;">
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                                    <button type="button" class="btn btn-sm btn-secondary" id="btnCancelAddCustomAudio">Cancel</button>
                                    <button type="button" class="btn btn-sm btn-primary" id="btnSaveNewCustomAudio" style="background: #7c3aed; border-color: #6d28d9;">
                                        <i class="fas fa-save"></i> Save Custom Audio
                                    </button>
                                </div>
                            </div>

                            <!-- Audio Items Table -->
                            <div style="border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; max-height: 480px; overflow-y: auto;">
                                <table class="sf1-table" style="width: 100%; margin: 0; font-size: 0.88rem;">
                                    <thead style="position: sticky; top: 0; background: #f1f5f9; z-index: 5;">
                                        <tr>
                                            <th style="width: 120px;">Category</th>
                                            <th style="width: 140px;">Symbol / Word</th>
                                            <th>Audio Source Status</th>
                                            <th style="width: 80px; text-align: center;">Listen</th>
                                            <th style="width: 170px; text-align: center;">Teacher Audio</th>
                                            <th style="width: 70px; text-align: center;">Reset</th>
                                        </tr>
                                    </thead>
                                    <tbody id="audioLibTableBody">
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="modal-footer" style="padding: 14px 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                            <span style="font-size: 0.85rem; color: #64748b;" id="audioLibStatsNotice"></span>
                            <button type="button" class="btn btn-secondary" id="btnCloseAudioLibModal">Close</button>
                        </div>
                    </div>
                </div>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = modalHtml;
            document.body.appendChild(wrapper);

            const closeModal = () => {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                }
                if (currentStream) {
                    currentStream.getTracks().forEach(t => t.stop());
                    currentStream = null;
                }
                wrapper.remove();
            };

            document.getElementById('btnCloseAudioLibModal').addEventListener('click', closeModal);

            const searchInput = document.getElementById('audioLibSearchInput');
            const catFilterSel = document.getElementById('audioLibCategoryFilter');

            searchInput.addEventListener('input', (e) => {
                activeSearchQuery = e.target.value;
                renderTable();
            });

            catFilterSel.addEventListener('change', (e) => {
                activeCategoryFilter = e.target.value;
                renderTable();
            });

            const toggleAddBtn = document.getElementById('btnToggleAddCustomAudioForm');
            const addFormWrap = document.getElementById('addCustomAudioFormWrap');
            toggleAddBtn.addEventListener('click', () => {
                addFormWrap.style.display = addFormWrap.style.display === 'none' ? 'block' : 'none';
            });
            document.getElementById('btnCancelAddCustomAudio').addEventListener('click', () => {
                addFormWrap.style.display = 'none';
            });

            document.getElementById('btnSaveNewCustomAudio').addEventListener('click', () => {
                const type = document.getElementById('newCustomType').value;
                const key = document.getElementById('newCustomKey').value.trim().toLowerCase();
                const fileInput = document.getElementById('newCustomFileInput');

                if (!key) {
                    alert('Please enter a symbol, letter, or word.');
                    return;
                }
                if (!fileInput.files || !fileInput.files[0]) {
                    alert('Please select an audio file to upload.');
                    return;
                }

                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = (re) => {
                    DrillAudio.setCustomAudio(type, key, re.target.result);
                    DrillAudio.showAudioNotification(`Saved custom audio for "${key}"!`, 'success');
                    document.getElementById('newCustomKey').value = '';
                    fileInput.value = '';
                    addFormWrap.style.display = 'none';
                    renderTable();
                    this.render();
                };
                reader.readAsDataURL(file);
            });

            const renderTable = () => {
                const tbody = document.getElementById('audioLibTableBody');
                if (!tbody) return;

                // Merge custom items
                const customItems = DrillAudio.getAllCustomAudio();
                const customMap = {};
                customItems.forEach(ci => {
                    customMap[`${ci.type}_${ci.key}`] = ci.dataUrl;
                });

                // Build full list
                const allItems = [...defaultCatalog];
                customItems.forEach(ci => {
                    if (!allItems.some(item => item.type === ci.type && item.key === ci.key)) {
                        allItems.push({
                            type: ci.type,
                            key: ci.key,
                            label: `Custom ${ci.type.toUpperCase()} "${ci.key}"`,
                            ipa: `/${ci.key}/`,
                            category: 'custom',
                            defaultSrc: null
                        });
                    }
                });

                // Filter
                const q = activeSearchQuery.toLowerCase().trim();
                const filtered = allItems.filter(item => {
                    if (activeCategoryFilter === 'custom' && !customMap[`${item.type}_${item.key}`]) return false;
                    if (activeCategoryFilter !== 'all' && activeCategoryFilter !== 'custom' && item.category !== activeCategoryFilter) return false;
                    if (q) {
                        const matchKey = item.key.toLowerCase().includes(q);
                        const matchLabel = item.label.toLowerCase().includes(q);
                        const matchIpa = (item.ipa || '').toLowerCase().includes(q);
                        if (!matchKey && !matchLabel && !matchIpa) return false;
                    }
                    return true;
                });

                let rowsHtml = '';
                if (filtered.length === 0) {
                    rowsHtml = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#94a3b8;">No phonics audio items match your search.</td></tr>`;
                } else {
                    filtered.forEach(item => {
                        const hasCustom = !!customMap[`${item.type}_${item.key}`];
                        const isRecordingThis = currentlyRecordingKey === `${item.type}_${item.key}`;

                        rowsHtml += `
                            <tr>
                                <td>
                                    <span class="sf1-badge" style="background:#f1f5f9; color:#475569; text-transform:uppercase; font-size:0.75rem;">
                                        ${item.type}
                                    </span>
                                </td>
                                <td>
                                    <strong>${item.key}</strong>
                                    <span style="color:#64748b; font-size:0.8rem; margin-left:4px;">${item.ipa || ''}</span>
                                </td>
                                <td>
                                    ${hasCustom 
                                        ? `<span class="audio-lib-badge-custom"><i class="fas fa-microphone"></i> Custom Recording (Active Override)</span>`
                                        : (item.defaultSrc 
                                            ? `<span class="audio-lib-badge-pre"><i class="fas fa-check-circle"></i> Authentic Prerecorded Default</span>`
                                            : `<span style="background:#fee2e2; color:#b91c1c; padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;"><i class="fas fa-exclamation-triangle"></i> No Default Audio</span>`)}
                                </td>
                                <td style="text-align: center;">
                                    <button type="button" class="btn btn-sm btn-icon btn-play-audio-item" data-type="${item.type}" data-key="${item.key}" title="Play Audio">
                                        <i class="fas fa-play"></i>
                                    </button>
                                </td>
                                <td style="text-align: center;">
                                    <div style="display: flex; gap: 6px; justify-content: center;">
                                        <button type="button" class="btn btn-sm btn-secondary btn-upload-audio-item" data-type="${item.type}" data-key="${item.key}" title="Upload audio file (.mp3, .wav, .m4a)">
                                            <i class="fas fa-upload"></i> File
                                        </button>
                                        <button type="button" class="btn btn-sm ${isRecordingThis ? 'btn-danger audio-rec-pulse' : 'btn-secondary'} btn-record-audio-item" data-type="${item.type}" data-key="${item.key}" title="${isRecordingThis ? 'Click to Stop Recording' : 'Record using microphone'}">
                                            <i class="fas ${isRecordingThis ? 'fa-stop' : 'fa-microphone'}"></i> ${isRecordingThis ? 'Stop' : 'Rec'}
                                        </button>
                                    </div>
                                </td>
                                <td style="text-align: center;">
                                    ${hasCustom ? `
                                        <button type="button" class="btn btn-sm btn-danger btn-reset-audio-item" data-type="${item.type}" data-key="${item.key}" title="Revert to Default">
                                            <i class="fas fa-undo"></i>
                                        </button>
                                    ` : '<span style="color:#cbd5e1;">—</span>'}
                                </td>
                            </tr>
                        `;
                    });
                }

                tbody.innerHTML = rowsHtml;

                const statsEl = document.getElementById('audioLibStatsNotice');
                if (statsEl) {
                    statsEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${allItems.length} sounds (<strong>${customItems.length}</strong> custom teacher recordings active)`;
                }

                // Wire row action buttons
                tbody.querySelectorAll('.btn-play-audio-item').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const type = btn.getAttribute('data-type');
                        const key = btn.getAttribute('data-key');
                        if (type === 'phoneme') {
                            DrillAudio.playPhoneme(key);
                        } else if (type === 'name') {
                            DrillAudio.playLetterName(key);
                        } else if (type === 'syllable') {
                            DrillAudio.playSyllable(key);
                        } else {
                            DrillAudio.playWord(key);
                        }
                    });
                });

                tbody.querySelectorAll('.btn-upload-audio-item').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const type = btn.getAttribute('data-type');
                        const key = btn.getAttribute('data-key');
                        const fileInput = document.createElement('input');
                        fileInput.type = 'file';
                        fileInput.accept = 'audio/*';
                        fileInput.onchange = (e) => {
                            if (e.target.files && e.target.files[0]) {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onload = (re) => {
                                    DrillAudio.setCustomAudio(type, key, re.target.result);
                                    DrillAudio.showAudioNotification(`Custom audio file saved for /${key}/!`, 'success');
                                    renderTable();
                                    this.render();
                                };
                                reader.readAsDataURL(file);
                            }
                        };
                        fileInput.click();
                    });
                });

                tbody.querySelectorAll('.btn-record-audio-item').forEach(btn => {
                    btn.addEventListener('click', async () => {
                        const type = btn.getAttribute('data-type');
                        const key = btn.getAttribute('data-key');
                        const rowKey = `${type}_${key}`;

                        if (currentlyRecordingKey === rowKey && mediaRecorder) {
                            // Stop recording
                            mediaRecorder.stop();
                            return;
                        }

                        // Stop existing recording if any
                        if (mediaRecorder && mediaRecorder.state === 'recording') {
                            mediaRecorder.stop();
                        }

                        try {
                            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                            currentStream = stream;
                            mediaRecorder = new MediaRecorder(stream);
                            audioChunks = [];
                            currentlyRecordingKey = rowKey;

                            mediaRecorder.ondataavailable = (e) => {
                                if (e.data.size > 0) audioChunks.push(e.data);
                            };

                            mediaRecorder.onstop = () => {
                                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    DrillAudio.setCustomAudio(type, key, reader.result);
                                    DrillAudio.showAudioNotification(`Microphone recording saved for /${key}/!`, 'success');
                                    currentlyRecordingKey = null;
                                    if (currentStream) {
                                        currentStream.getTracks().forEach(t => t.stop());
                                        currentStream = null;
                                    }
                                    renderTable();
                                    this.render();
                                };
                                reader.readAsDataURL(audioBlob);
                            };

                            mediaRecorder.start();
                            renderTable();
                        } catch (err) {
                            alert('Microphone access is unavailable or denied: ' + err.message);
                            currentlyRecordingKey = null;
                            renderTable();
                        }
                    });
                });

                tbody.querySelectorAll('.btn-reset-audio-item').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const type = btn.getAttribute('data-type');
                        const key = btn.getAttribute('data-key');
                        if (confirm(`Reset custom audio for "${key}" and restore the default prerecorded sound?`)) {
                            DrillAudio.removeCustomAudio(type, key);
                            DrillAudio.showAudioNotification(`Restored default audio for /${key}/.`, 'info');
                            renderTable();
                            this.render();
                        }
                    });
                });
            };

            renderTable();
        },

        // =========================================================================
        // 10. PROGRESS & MONITORING DASHBOARD
        // =========================================================================

        renderProgressMonitoringView(area) {
            const records = this.progressRecords;
            const totalSessions = records.length;
            const avgAccuracy = totalSessions > 0
                ? Math.round(records.reduce((acc, r) => acc + (r.accuracy || 0), 0) / totalSessions)
                : 0;

            // Gather all struggled words
            const allStruggled = [];
            records.forEach(r => {
                if (r.mistakes && Array.isArray(r.mistakes)) {
                    allStruggled.push(...r.mistakes);
                }
            });

            // Count frequency
            const freqMap = {};
            allStruggled.forEach(w => {
                freqMap[w] = (freqMap[w] || 0) + 1;
            });
            const topStruggled = Object.entries(freqMap)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 8);

            let tableRows = '';
            if (records.length === 0) {
                tableRows = '<tr><td colspan="7" style="text-align:center; color:#94a3b8; padding:20px;">No drill activity sessions recorded yet. Start a quiz to track learner progress!</td></tr>';
            } else {
                records.slice().reverse().forEach((r, idx) => {
                    tableRows += `
                        <tr>
                            <td>${new Date(r.timestamp).toLocaleDateString()} ${new Date(r.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                            <td><strong>${r.learnerName || 'Anonymous Learner'}</strong></td>
                            <td><span class="sf1-badge" style="background:#e0f2fe; color:#0284c7;">${r.category.toUpperCase()}</span></td>
                            <td>${r.activity}</td>
                            <td>${r.score} / ${r.total}</td>
                            <td>
                                <strong style="color: ${r.accuracy >= 75 ? '#10b981' : '#f59e0b'};">
                                    ${r.accuracy}%
                                </strong>
                            </td>
                            <td>${r.mistakes && r.mistakes.length > 0 ? r.mistakes.join(', ') : '<span style="color:#10b981;">None (100%!)</span>'}</td>
                        </tr>
                    `;
                });
            }

            area.innerHTML = `
                <div style="display: flex; flex-direction: column; gap: 20px;">
                    <!-- Top stats cards -->
                    <div class="drill-stats-banner">
                        <div class="drill-stat-box">
                            <div class="drill-stat-icon" style="background: #3b82f6;">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div>
                                <div class="drill-stat-number">${totalSessions}</div>
                                <div class="drill-stat-label">Total Drills Completed</div>
                            </div>
                        </div>

                        <div class="drill-stat-box">
                            <div class="drill-stat-icon" style="background: #10b981;">
                                <i class="fas fa-percentage"></i>
                            </div>
                            <div>
                                <div class="drill-stat-number">${avgAccuracy}%</div>
                                <div class="drill-stat-label">Average Drill Accuracy</div>
                            </div>
                        </div>

                        <div class="drill-stat-box">
                            <div class="drill-stat-icon" style="background: #f59e0b;">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div>
                                <div class="drill-stat-number">${Object.keys(freqMap).length}</div>
                                <div class="drill-stat-label">Sounds/Words Struggled</div>
                            </div>
                        </div>
                    </div>

                    <!-- Frequently Struggled Words Chips -->
                    ${topStruggled.length > 0 ? `
                        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; padding: 16px 20px;">
                            <strong style="color: #92400e; font-size: 0.95rem; display:block; margin-bottom: 8px;">
                                <i class="fas fa-bullseye"></i> Most Frequently Struggled Words & Sounds (Target for Remediation):
                            </strong>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${topStruggled.map(([word, count]) => `
                                    <span class="sf1-badge" style="background: #fef3c7; color: #b45309; border: 1px solid #fcd34d; font-size: 0.85rem; padding: 4px 10px;">
                                        <strong>${word}</strong> (${count} misses)
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <!-- Progress Records Table -->
                    <div style="background: white; border: 2px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">
                                <i class="fas fa-history" style="color:#10b981;"></i> Learner Drill History & Assessment Log
                            </h3>
                            <button type="button" class="btn btn-sm btn-secondary" id="btnClearDrillHistoryBtn">
                                <i class="fas fa-trash-alt"></i> Clear History
                            </button>
                        </div>

                        <div style="overflow-x: auto;">
                            <table class="sf1-table" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th>Date & Time</th>
                                        <th>Learner Name</th>
                                        <th>Category</th>
                                        <th>Activity Name</th>
                                        <th>Score</th>
                                        <th>Accuracy</th>
                                        <th>Identified Missteps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tableRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;

            const clearBtn = document.getElementById('btnClearDrillHistoryBtn');
            if (clearBtn) {
                clearBtn.addEventListener('click', async () => {
                    if (confirm('Are you sure you want to clear the reading drill history?')) {
                        this.progressRecords = [];
                        await this.saveProgress();
                        this.renderProgressMonitoringView(area);
                    }
                });
            }
        },

        recordDrillProgress(data) {
            this.syncActiveLearner();
            const record = {
                id: 'dp_' + Date.now(),
                timestamp: new Date().toISOString(),
                learnerId: this.activeLearner ? this.activeLearner.id : 'anonymous',
                learnerName: this.activeLearner ? this.activeLearner.name : 'Learner',
                category: data.category,
                activity: data.activity,
                score: data.score,
                total: data.total,
                accuracy: data.accuracy,
                mistakes: data.mistakes || []
            };

            this.progressRecords.push(record);
            this.saveProgress();
        }
    };

    // Export module to window
    window.ReadingDrill = ReadingDrill;
    window.DrillAudio = DrillAudio;

})();

