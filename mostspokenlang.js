function mostSpokenLanguages(countries, n) {
  let languageCounts = {};

  // Count the number of countries that speak each language
  countries.forEach(country => {
    country.languages.forEach(language => {
      if (language in languageCounts) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    });
  });

  // Convert the languageCounts object to an array of objects
  let languageCountsArray = [];
  for (let language in languageCounts) {
    languageCountsArray.push({[language]: languageCounts[language]});
  }

  // Sort the languageCountsArray in descending order of count
  languageCountsArray.sort((a, b) => {
    return Object.values(b)[0] - Object.values(a)[0];
  });

  // Return the top n entries
  return languageCountsArray.slice(0, n);
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
