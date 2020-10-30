const Stack = require('./stack')
const Queue = require('./queue')
const DoubleQueue = require('./doubleQueue')
const StackQueue = require('./stackQueue')
function pairDancing(males, females){
  let spares = 0
  console.log('The dance partners are')
  while(!isQEmpty(males) && !isQEmpty(females)){
    console.log(`${males.dequeue()} and ${females.dequeue()}`)
  }
  if(isQEmpty(males) && !isQEmpty(females)){
    while(!isQEmpty(females)){
      spares = spares +=1
      females.dequeue()
    }
    console.log(`There are ${spares} women without a dance partner`)
  } else if(!isQEmpty(males) && isQEmpty(females)){
    while(!isQEmpty(males)){
      spares = spares +=1
      males.dequeue()
    }
    console.log(`There are ${spares} men without a dance partner`)
  }
}
function ophidianBank(q){
  let die;
  while(q.first){
    die = Math.floor(Math.random() * 4) + 1  
    if(die === 1){
      q.enqueue(q.dequeue())
      console.log('customer must try again')
    } else {
      q.dequeue()
      console.log('customer escaped successfully')
    }
  }
}
function peek(stack){
  let result = null
  if(stack.top){
result = stack.top.data
  }
   
  return result
}
function displayQ(q){
  let currNode = q.first;
  while(currNode){
    console.log(currNode)
    currNode = currNode.next
  }
}
function qPeek(que){
  let result = null
  if(que.first){
result = que.first.data
  }
   
  return result
}

function isQEmpty(q){
  let result = true;
  if(q.first){
    result = false
  }
  return result
}
function sortStack(stack){
  let tempStack = new Stack;
while(!isEmpty(stack)){
  let temp = stack.pop()
  while(!isEmpty(tempStack) && peek(tempStack) > temp){
    stack.push(tempStack.pop())
  }
  tempStack.push(temp)
}
while(!isEmpty(tempStack)){
  stack.push(tempStack.pop())
}
return stack  
 }
function closedParends(string){
  let stringStack = new Stack;
  let result;
  let errorLocation;
  for(let i = 0; i < string.length; i++){
    
    
if(string[i] === '('){
      stringStack.push(string[i])
      errorLocation = i
      
    }
    if(string[i] === ')'){
      if(peek(stringStack) !== '('){
        throw new Error('Expected to see ( saw )')
      } else {
        errorLocation = null
        stringStack.pop()
      }
    }
    
    
  }
  for(let i = 0; i <= errorLocation; i++){
if(i === errorLocation){
  
        throw new Error(`Unclosed ${string[i]}`)
      }
  }
  
    if(!peek(stringStack)){
    result = 'All good!'
  }
  return result;
}
function isEmpty(stack){
  if(stack.top){
    return false
  }
  return true
}
function display(stack){
  let currNode = stack.top
  while(currNode){
console.log(currNode.data)
currNode = currNode.next
  }
}
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let result = false
    let newString = ''
    let string = new Stack
    for(let i = 0; i < s.length; i++){
     string.push(s[i])
    }
    for(let i = 0; i < s.length; i++){
      newString = newString + peek(string);
      string.pop()
      //console.log(newString)
    }
    if(newString === s){
      result = true
    }
    return result
}
function main() {
   let starTrek = new Stack
   let test = new Stack
   test.push(5)
   test.push(3)
   test.push(2)
   test.push(6)
  starTrek.push('Kirk')
  starTrek.push('Spock')
  starTrek.push('McCoy')
  starTrek.pop()
  starTrek.push('Scotty')
  let starTrekQ = new Queue
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhara')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  starTrekQ.dequeue()
  starTrekQ.dequeue()
  starTrekQ.enqueue('Kirk')
  let males = new Queue
  let females = new Queue
  males.enqueue('Chad')
  males.enqueue('Josh')
  males.enqueue('Sam')
  females.enqueue('Theresa')
  females.enqueue('Tina')

  //console.log(peek(starTrek))
  //display(starTrek)
//  console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"))
//console.log(closedParends(`)`))
//display(sortStack(test))
//console.log(isQEmpty(starTrekQ))
//display(starTrekQ)
//pairDancing(males, females)
ophidianBank(starTrekQ)
}
main()