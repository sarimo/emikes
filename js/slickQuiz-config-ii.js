// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "",
        "main":    "<p>Pilihlah jawaban yang menurut Saudara paling benar!</p><hr/>",
//        "results": "<h5>Pelajari lagi</h5><p>Belajar dan belajar kini sampai nanti.</p><br/><br/>",
        "results": "",
        "level1":  "Saudara level 1",
        "level2":  "Saudara level 2",
        "level3":  "Saudara level 3",
        "level4":  "Saudara level 4",
        "level5":  "Saudara level 5" // no comma here
    },
    "questions": [
        { // Soal 1 - Multiple Choice, Single True Answer
            "q": "Berikut ini merupakan keuntungan metode dilusi dalam uji antimikroba ialah...",
            "a": [
                {"option": "Dapat menggunakan paper disk sehingga lebih murah", "correct": false},
                {"option": "Dapat dilaksanakan dalam waktu yang relatif singkat",       "correct": false},
                {"option": "Dapat mendeteksi kadar hambat minimum antimikroba",   "correct": false},
                {"option": "Pengamatan reaksi antimikroba nampak jelas melalui zona hambat",  "correct": false},
                {"option": "Dapat mendeteksi kadar hambat minimum dan kadar bunuh minimum dari antimikroba",    "correct": true}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 2 - Multiple Choice, Single True Answers
            "q": "Teknik yang paling tepat digunakan untuk mendeteksi bakterisidal dan bakteristatik pada uji antimikroba ialah dengan mengetahui....",
            "a": [
                {"option": "Kadar bunuh minimum",                          "correct": false},
                {"option": "Kadar hambat minimum",                     "correct": false},
                {"option": "Kadar hambat dan bunuh minimum",             "correct": true},
                {"option": "Resistensi bakteri terhadap antimikroba",     "correct": false},
                {"option": "Kecepatan bakteri dalam menginfeksi inang",  "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Berikut ini merupakan uji antimikroba dengan penggunaan metode difusi dengan menggunakan parit berisi senyawa antimikroba ialah....",
            "a": [
                {"option": "Cara pengenceran",      "correct": false},
                {"option": "Cara cetak lubang",     "correct": false},
                {"option": "Cara silinder gelas",   "correct": true},
                {"option": "Cara kertas cakram",    "correct": false},
                {"option": "Cara penapisan lempeng agar",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 4
            "q": "Karakteristik pengujian antimikroba secara in vivo ialah...",
            "a": [
                {"option": "Dilakukan di laborotarium",    "correct": false},
                {"option": "Dilakukan melalui metode dilusi dan difusi",     "correct": false},
                {"option": "Dilakukan melalui uji pirogenitas dan uji respon inang",      "correct": true},
                {"option": "Dilakukan untuk mengetahui aktivitas antimikroba terhadap mikroba",   "correct": false},
                {"option": "Dilakukan untuk menentukan konsentrasi antimikroba yang paling efektif",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 5
            "q": "Seorang mahasiswa ingin menguji efektivitas antimikroba dari ekstrak lemon yang dapat membunuh bakteri penyebab jerawat dengan berbagai sereal konsentrasi dapat menggunakan metode uji antimikroba...",
            "a": [
                {"option": "Metode penapisan lempeng agar",    "correct": false},
                {"option": "Metode kertas cakram",     "correct": false},
                {"option": "Metode pengenceran",     "correct": true},
                {"option": "Metode in vitro",     "correct": false},
                {"option": "Metode in vivo",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        }
        // no comma here
    ]
};
