// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// solution=>




let guests:string[] = ["Muhammad Khalid","Muhammad Kamran Khan","Anser Abass","Muhammad Imran Khan"];

console.log(`you are inviting ${guests.length} people to dinner`);

for(let i=0;i < guests.length;i++ ){
console.log( `Dear ${guests[i]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) ` );

}