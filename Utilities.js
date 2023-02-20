class Utilities {
    static camelCase(str) {
      const words = str.split(" ");
      // capitalize the first letter of each word after the first word
      const capitalizedWords = words.map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)
      );
      // join the words together without any spaces
      return capitalizedWords.join("");
    }
  }
  console.log(Utilities.camelCase("hello there"))
       
       console.log(Utilities.camelCase("HELLO THERE"))
       
       console.log(Utilities.camelCase("I love cookies"))

       console.log(Utilities.camelCase("Monkey Banana"))