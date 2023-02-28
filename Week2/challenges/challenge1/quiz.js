//Challenge 1: Given an array of numbers, return an array of each number, squared

const nums = [1,2,3,4,5];

const newNums = nums.map(num => num * num);
console.log(newNums);

//Challenge 2: Given an array of strings, return an array where the first letter of each string is capitalized

const names = ["alice", "bob", "charlie", "danielle"];

const newNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(newNames);

//Challenge 3: Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];

const newPokemon = pokemons.map(pokemon => `<p>${pokemon}</p>`);

console.log(newPokemon);


//Challenge 4:

// 1.What does the .map() array method do?
// my answer => return the new array which was modified in map method

// 2.What do we usually use .map() for in React?
// my answer => ex. for using props. And if you want to use data as dynamic

// 3.Why is using .map() better than just creating the components manually by typing them out?
// my answer => less typing and it's easy to what data it is