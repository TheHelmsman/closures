// Lexical scoping means that the accessibility of variables is determined by the 
// position of the variables inside the nested scopes.

// Simpler, the lexical scoping means that inside the inner scope you can access 
// variables of outer scopes.

// It’s called lexical (or static) because the engine determines (at lexing time) 
// the nesting of scopes just by looking at the JavaScript source code, without 
// executing it.

const myGlobal = 0;

function func() {

  const myVar = 1;
  console.log(myGlobal); // logs "0"

  function innerOfFunc() {

    const myInnerVar = 2;
    console.log(myVar, myGlobal); // logs "1 0"

    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
    }

    innerOfInnerOfFunc();
  }

  innerOfFunc();
}

func();