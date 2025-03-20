// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// this will populate the house dropdown list
const houseDropdown = document.getElementById('House');
houses.forEach(house => {
  const option = document.createElement('option');
  option.value = house.code;
  option.textContent = house.name;
  houseDropdown.appendChild(option);
});

// Handle dropdown change event
houseDropdown.addEventListener('change', function() {
  const houseCode = this.value;
  const characters = getCharacters(houseCode);
  const charactersList = document.getElementById('characters');
  charactersList.innerHTML = ''; // Clear previous characters
  characters.forEach(character => {
    const li = document.createElement('li');
    li.textContent = character;
    charactersList.appendChild(li);
  });
});

// Populate characters for the initial selected house
const initialHouseCode = houseDropdown.value;
const initialCharacters = getCharacters(initialHouseCode);
const charactersList = document.getElementById('characters');
initialCharacters.forEach(character => {
  const li = document.createElement('li');
  li.textContent = character;
  charactersList.appendChild(li);
});