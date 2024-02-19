function getRandomFortune() {
    var fortunes = [
        "Masasagasaan ka!",
        "Magiging kaibigan mo crush mo.",
        "Hi miss na miss ka na ni Earl please kausapin mo na ako baby!",
        "Hindi mapigilang mag-isip.",
        "Babagsak ako sayo.",
        "Bibigyan ka nang assurance claim it!",
        "Hindi ko na kaya miss ko na talaga bb q:<",
        "With honors ka this Semester",
        "Matatanggap ka vivamax",
        "Hi kumain kana ba(para lang sa bb q)",
        "Gago ka ba",
        "Tigil tigilan mo kakalapit sa bb q ko pre",
        "Boring pag hindi tayo nag-ussap",
        "Putcha random fortune teller pala to",
        "Ang hirap pag wala ka",
        "Mananalo ka sa lotto with a chance of 0.1%",
        "Ahhh, kaibigan mo lang pala? HAHAHAHAH okay lanh",
        "wassup newga"
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function revealFortune() {
    var fortuneContainer = document.getElementById('fortune-container');
    var fortune = getRandomFortune();
    fortuneContainer.innerHTML = '<p>Your fortune: ' + fortune + '</p>';
}
       