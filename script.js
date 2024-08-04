const wordInput = document.getElementById('wordInput');
const rhymeList = document.getElementById('rhymeList');

const rhymes = {
  "cat": ["hat", "bat", "mat", "sat"],
  "dog": ["fog", "log", "bog", "hog"],
  "run": ["fun", "sun", "gun", "bun"],
  "see": ["tree", "free", "bee", "sea"],
  "go": ["slow", "grow", "know", "show"],
  "play": ["stay", "day", "ray", "say"],
  "eat": ["feet", "meet", "seat", "heat"],
  "car": ["far", "star", "bar", "jar"],
  "book": ["look", "took", "cook", "hook"],
  "love": ["dove", "glove", "shove", "above"],
  "happy": ["happy", "flappy", "snappy", "trappy"],
  "sad": ["mad", "glad", "bad", "shad"],
  "big": ["wig", "dig", "fig", "pig"],
  "small": ["ball", "call", "tall", "mall"],
  "red": ["fed", "led", "bed", "shed"],
  "blue": ["true", "clue", "glue", "shoe"],
  "green": ["seen", "queen", "bean", "keen"],
  "yellow": ["fellow", "mellow", "pillow", "wellow"],
  "black": ["back", "crack", "lack", "sack"],
  "white": ["night", "light", "fight", "kite"],
  "fast": ["last", "past", "cast", "mast"],
  "slow": ["grow", "show", "know", "blow"],
  "happy": ["flappy", "snappy", "trappy", "happy"],
  "sad": ["mad", "glad", "bad", "shad"],
  "big": ["wig", "dig", "fig", "pig"],
  "small": ["ball", "call", "tall", "mall"],
  "red": ["fed", "led", "bed", "shed"],
  "blue": ["true", "clue", "glue", "shoe"],
  "green": ["seen", "queen", "bean", "keen"],
  "yellow": ["fellow", "mellow", "pillow", "wellow"],
  "black": ["back", "crack", "lack", "sack"],
  "white": ["night", "light", "fight", "kite"],
  "fast": ["last", "past", "cast", "mast"],
  "slow": ["grow", "show", "know", "blow"]
};


function findRhymes() {
    const word = wordInput.value.toLowerCase();
    rhymeList.innerHTML = ''; // Clear previous results

    if (rhymes[word]) {
        rhymes[word].forEach(rhyme => {
            const listItem = document.createElement('li');
            listItem.textContent = rhyme;
            rhymeList.appendChild(listItem);
        });
    } else {
        rhymeList.textContent = "No rhymes found";
    }
}
