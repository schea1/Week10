// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

// Populate the list with countries

const datalist = document.getElementById('countryList');
countryList.forEach(country => {
  const option = document.createElement('option');
  option.value = country;
  datalist.appendChild(option);
});