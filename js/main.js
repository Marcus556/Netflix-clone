const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e) {
  removeBorder()
  removeShow()
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
//listen for tabclick
tabItems.forEach(item => item.addEventListener('click', selectItem));

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}



const quoteParagraph = document.getElementById('quote');
const movieParagraph = document.getElementById('movie');
const quotes = [
  { q: "Frankly, my dear, I don't give a damn.", m: "Gone With the Wind, 1939" },
  { q: "I'm going to make him an offer he can't refuse.", m: "Godfather, 1972" },
  { q: "Toto, I've got a feeling we're not in Kansas anymore", m: "The Wizard of Oz, 1939" },
  { q: "Here's looking at you, kid.", m: "Casablanca, 1942" },
  { q: "Go ahead, make my day.", m: "Sudden Impact, 1983" },
  { q: "All right, Mr. DeMille, I'm ready for my close-up.", m: "Sunset Blvd., 1950" },
  { q: "May the Force be with you.", m: "Star Wars, 1977" },
  { q: "Fasten your seatbelts. It's going to be a bumpy night.", m: "All About Eve, 1950" },
  { q: "You talking to me?", m: "Taxi Driver, 1976" },
  { q: "E.T. phone home.", m: "E.T. The Extra-Terrestrial, 1982" },
  { q: "Bond. James Bond.", m: "Dr. No, 1962" },
  { q: "You can't handle the truth!", m: "A Few Good Men, 1992" },
  { q: "You're gonna need a bigger boat.", m: "Jaws, 1975" },
];

getRandomQuote = () => {
  rndQuoteNumber = Math.floor(Math.random() * quotes.length)
  return rndQuoteNumber;
}
const generatedQuote = getRandomQuote();
quoteParagraph.innerText = "\“" + quotes[generatedQuote].q + "\”";
movieParagraph.innerText = quotes[generatedQuote].m;

