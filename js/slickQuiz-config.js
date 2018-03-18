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
            "q": "Zat antimikroba kolistin efektif dalam membunuh atau menghambat patogen dengan cara...",
            "a": [
                {"option": "Merusak membran sel",               "correct": true},
                {"option": "Menghambat sintesis protein",       "correct": false},
                {"option": "Menghambat sintesis dinding sel",   "correct": false},
                {"option": "Menghambat sintesis asam nukleat",  "correct": false},
                {"option": "Menghambat pembentukan organel",    "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 2 - Multiple Choice, Single True Answers
            "q": "Berikut ini merupakan penyakit-penyakit yang muncul saat bakteri <em>Eschericia coli</em> diluar batas ambang flora normal ialah...",
            "a": [
                {"option": "Diare, ISPA, dan TBC",                          "correct": false},
                {"option": "Diare, gonorhoea, dan TBC",                     "correct": false},
                {"option": "ISPA, meningitis, dan batuk rejan",             "correct": false},
                {"option": "ISPA, infeksi kandung kemih, dan disentri",     "correct": false},
                {"option": "Diare, meningitis, dan infeksi saluran kemih",  "correct": true}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Berikut ini merupakan teknik penularan infeksi oleh mikroba melalui udara, kecuali melalui...",
            "a": [
                {"option": "Spora dari tanaman",           "correct": false},
                {"option": "Sel epitel squamosa",          "correct": false},
                {"option": "Transfer melalui fekal-oral",  "correct": true},
                {"option": "Droplet traktus respiratorius","correct": false},
                {"option": "Droplet traktus respiratorius","correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 4
            "q": "Penularan penyakit dari penderita hepatitis B dapat dilakukan dengan cara di bawah ini, kecuali...",
            "a": [
                {"option": "Berbagi makanan dengan penderita hepatitis B",    "correct": true},
                {"option": "Berganti-ganti pasangan dan berhubungan seks tanpa alat pengaman",     "correct": false},
                {"option": "Ibu yang sedang hamil dapat menularkan penyakit ini pada bayinya saat persalinan",      "correct": false},
                {"option": "Menggunakan alat suntik yang sudah terkontaminasi darah penderita hepatitis B",   "correct": false},
                {"option": "Petugas kesehatan (paramedis) yang sering berurusan dengan darah manusia penderita Hepatitis B",   "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 5
            "q": "Berikut ini merupakan teknik pencegahan penularan virus ebola yang paling sederhana dan aman untuk orang-orang yang rentan alergi ialah...",
            "a": [
                {"option": "Melakukan vaksin untuk virus ebola",    "correct": false},
                {"option": "Hindari kontak fisik dengan orang yang terinfeksi",     "correct": true},
                {"option": "Jangan sembarangan menangani mayat korban ebola",     "correct": false},
                {"option": "Menggunakan masker saat berpergian ke daerah terkontaminasi",     "correct": false},
                {"option": "Hindari membeli atau memakan binatang liar, termasuk primata yang dijual di pasar lokal",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        },
        { // Soal 6
            "q": "Tindakan preventif yang sesuai untuk mencegah penyebaran virus Difteri yang mudah menyebar di udara adalah...",
            "a":[
                {"option": "Melakukan vaksinasi", "correct": false},
                {"option": "Menggunakan masker", "correct": true},
                {"option": "Melakukan imuniasasi", "correct": false},
                {"option": "Memberikan antibiotik", "correct": false},
                {"option": "Menghindari kontak langsung dengan penderita", "correct": false}
            ],
            "correct": "<p><span>Anda benar :)</span></p>",
            "incorrect": "<p><span>Ups salah :(</span></p>" // no comma here
        }
        // no comma here
    ]
};
