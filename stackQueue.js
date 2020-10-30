const Stack = require('./stack')

class Queue {
  constructor(){
    this.stack1 = new Stack
    this.stack2 = new Stack
  }

  enqueue(value){
    this.stack1.push(value)
  }
  dequeue(){
    while(this.stack1.top){
      this.stack2.push(this.stack1.pop())
    }
    this.stack2.pop()
    while(this.stack2.top){
      this.stack1.push(this.stack2.pop())
    }
  }
}
module.exports=Queue