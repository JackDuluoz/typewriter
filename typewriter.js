let message = "hello there from lighthouse labs";
let delay = 100;

const typewriter = function(sentence) {
  for (let character of sentence) {
    setTimeout(() => {
      process.stdout.write(character);
    }, delay);
    delay = delay + 100;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay + 100);
};
typewriter(message);