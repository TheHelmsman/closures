// When the button is clicked, handleClick() is executed somewhere inside of the DOM code. 
// The execution happens far from the place of definition.

// But being a closure, handleClick() captures countClicked from the lexical scope and 
// updates it when a click happens. Even more, myText is captured too.

let countClicked = 0;

myButton.addEventListener('click', function handleClick() {
  countClicked++;
  myText.innerText = `You clicked ${countClicked} times`;
});