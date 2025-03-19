window.onclick = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  function generateExcuse() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const getRandomElement = listElements => {
      let elemento = "";
      elemento = listElements[Math.floor(Math.random() * listElements.length)];
      return elemento;
    };
    let excuseGen = document.querySelector("#excuse");
    excuseGen.innerHTML =
      getRandomElement(who) +
      " " +
      getRandomElement(action) +
      " " +
      getRandomElement(what) +
      " " +
      getRandomElement(when);
    console.log(excuseGen);
  }
  generateExcuse();
};