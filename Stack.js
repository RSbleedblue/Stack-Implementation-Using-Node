class Stack {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
        return this.items
    }
    pop(){
        if(this.items.length !== 0){
            this.items.splice(this.items.length - 1)
            return this.items;
        }
        return null;
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = [];
    }
}
export default Stack;   