
// function shiftAlphabet(char,n){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const ALength = alphabet.length;

//     let isUpperCase = char === char.toUpperCase();
//     let lowerChar = char.toLowerCase();

//     let index = alphabet.indexOf(lowerChar);

//     if(index === -1){
//         return char;
//     }

//     let newIndex = (index + n) % ALength;

//     if(newIndex < 0){
//         newIndex += ALength;
//     }

//     return isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
// }

// function replace(str,n){
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         let char = str[i];
//         result += /[a-zA-Z]/.test(char) ? shiftAlphabet(char,n) : char;
//     }
//     return result;
// }

// const inputString = 'Hello, World!';
// const shiftAmount = 3;

// const replacedString = replace(inputString, shiftAmount);
// console.log(replacedString);




// function fibanocci(n){
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibanocci(5));
// console.log(fibanocci(8));
// console.log(fibanocci(3));



//factorial
// function factorial(n){
//     let result =1
//     for(let i=1;i<=n;i++){
//         result = result*i
//     }
//     return result
// }
// console.log(factorial(5));


//prime or not
// function isPrime(n){
//     if(n<2){
//         return false // a prime number is a natural number grater tham one 
//     }
//     for(let i=2;i<=n/2;i++){
//         if(n%i===0){
//             return false
//         }

//     }
//     return true
// }
// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(1));
// console.log(isPrime(8));

//O(n)T


// function isPrime(n){
//     if(n<2){
//         return false // a prime number is a natural number grater tham one 
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){ //if n is divisible by some number p,then n=p*q,where one of thr numbers(p or q)is less than or equal to sqrt of n
//         if(n%i===0){
//             return false
//         }

//     }
//     return true
// }
// console.log(isPrime(2));
// console.log(isPrime(5));  
// console.log(isPrime(4));
// console.log(isPrime(1));
// console.log(isPrime(8));


//O(sqrt(n))T



//poxwer of two
// function isPower(n){
//     if(n%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isPower(8));//2 raised to 3==6


//fibanocci using recursion

// function fibanocci(n){
//     if(n<2){
//         return n

//     }
//     return fibanocci(n-1)+fibanocci(n-2)
// }
// console.log(fibanocci(3));
// O(2^n)T - RECURSIVE
//O(n)T - iterative

//factorial usijng recursion

// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(1));

//BIG O =O(n)T



//linear search
// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([1,2,3,4,5],5));
// console.log(linearSearch([1,2,3,4,5],7));
// console.log(linearSearch([1,2,3,4,5],3));

//Big-O = O(n)  //as if condition is executing same as number of loop working



//binary search

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1

//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) /2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3,4,5],4));

//big O = O(logn)T

//recursive binary search

// function binaryRecursive(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex =Math.floor( (leftIndex +rightIndex)/2)
//     if(target ===arr[middleIndex]){
//         return middleIndex
//     }
//     if(target>arr[middleIndex]){
//         return search(arr,target,middleIndex+1,rightIndex)
//     }else{
//        return search(arr,target,leftIndex,middleIndex-1)
//     }

// }
// console.log(binaryRecursive([1,2,3,4,5],3));

//big O = O(logn)T
//here we do have same function search callign iver and over ,but input sizze is reduced to half

//linkded list

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
// }
// const list = new LinkedList();
// console.log('is empty?', list.isEmpty());
// console.log('size:',list.getSize());


//addind a node to begining of linked list

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;

//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     addNode(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }

//     }
//     print(){
//         let current  = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList()
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);

// list.print()


//adding a node to the end of the list

// class  Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }
//     addToEnd(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head = node
//         }else{
//             let current = this.head
//             while(current.next){
//                 current = current.next
//             }
//             current.next = node
//         }
//     }

//     print(){
//         let current  = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList;
// list.addToEnd(1);
// list.addToEnd(2);

// list.print()

//insert an elemnt in middle

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//     }
//     insert(data,index){
//         if(index<0 || index > this.size){
//             return
//         }
//         const node = new Node(data)
//         if(index === 0){
//             node.next = this.head
//             this.head = node;
//             return
//         }else{
//             let prev = this.head
            
//             for(let i=0;i< index-1;i++){
//                 prev = prev.next

//             }
//             node.next = prev.next
//             prev.next = node
//         }
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }

// }
// const list = new LinkedList()
// list.insert(1,0);
// list.insert(2,1);
// list.insert(3,1)

// list.print()



//removing  a node at given index

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }
//     remove(index){
//         if(index<0|| index> this.size){
//             return
//         }
//         let removeNode
//         if(index==0){
//             removeNode = this.head
//             this.head = this.head.next
//             return
//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             removeNode = prev.next;
//             prev.next = removeNode.next


//         }
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList()

// list.remove(0)
// list.print()



//remove and insert

// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//     }
//     insert(data,index){
//         if(index<0 || index > this.size){
//             return
//         }
//         const node = new Node(data)
//         if(index === 0){
//             node.next = this.head
//             this.head = node;
//             return
//         }else{
//             let prev = this.head
            
//             for(let i=0;i< index-1;i++){
//                 prev = prev.next

//             }
//             node.next = prev.next
//             prev.next = node
//         }
//     }
//     remove(index){
//                 if(index<0|| index> this.size){
//                     return
//                 }
//                 let removeNode
//                 if(index==0){
//                     removeNode = this.head
//                     this.head = this.head.next
//                     return
//                 }else{
//                     let prev = this.head
//                     for(let i=0;i<index-1;i++){
//                         prev = prev.next
//                     }
//                     removeNode = prev.next;
//                     prev.next = removeNode.next
        
        
//                 }
//             }
            
    
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }

// }
// const list = new LinkedList()
// list.insert(1,0);
// list.insert(2,1);
// list.insert(3,1)

// list.remove(1)

// list.print()


//REMOVE NODE WITH A GIVEN VALUE

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     insert(data,index){
//                 if(index<0 || index > this.size){
//                     return
//                 }
//                 const node = new Node(data)
//                 if(index === 0){
//                     node.next = this.head
//                     this.head = node;
//                     return
//                 }else{
//                     let prev = this.head
                    
//                     for(let i=0;i< index-1;i++){
//                         prev = prev.next
        
//                     }
//                     node.next = prev.next
//                     prev.next = node
//                 }
//             }
//     removeNodeValue(data){
//         if(this.size===0){
//             return null
//         }
//         let removeNode
//         if(this.head.data ==data){
//             removeNode = this.head;
//             this.head = this.head.next
//         }else{
//             let prev = this.head;
//             while(prev.next &&prev.next.data != data){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 removeNode= prev.next
//                 prev.next  = removeNode.next
//             }
//             return null

//         }
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList()

// list.insert(10,0);
// list.insert(40,1);
// list.print()

// list.removeNodeValue(10);
// list.print()


//search if avlue exist in the list and return i 

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     getSize(){
//         return this.size
//     }

//     insert(data,index){
//         if(index<0 ||index >this.size){
//             return null
//         }
//         const node = new Node(data)
//         if(index===0){
//             node.next = this.head
//             this.head = node
            

//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next

//             }
//             node.next  = prev.next
//             prev.next = node
//         }
//         this.size++
//     }

//     search(value){
//         let i=0;
//         let curr = this.head;
//         while(curr){
//             if(curr.data == value ){
//                 return i
//             }
//             curr = curr.next;
//             i++
            
//         }
//         return null
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList()
// list.insert(10,0);
// list.insert(20,1);

// list.print();

// console.log(list.search(9));

// console.log(list.getSize());


//revrese a linked list
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//        insert(data,index){
//         if(index<0 ||index >this.size){
//             return null
//         }
//         const node = new Node(data)
//         if(index===0){
//             node.next = this.head
//             this.head = node
            

//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next

//             }
//             node.next  = prev.next
//             prev.next = node
//         }
//         this.size++
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//         current = current.next
//         }
            
//     }


//     revrese(){
//         let prev = null
//         let curr = this.head

//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head  = prev
//     }
// }
// const list = new LinkedList()

// list.insert(1,0);
// list.insert(2,1);
// list.insert(3,2);

// list.print()

// list.revrese();
// list.print()

//prepend to doublt linked list

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.prev = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     prepend(data){
//         const node  = new Node(data)
//         if(this.head===null){
//             this.head = node
//             this.tail = node;
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
//     printReverse(){
//         let current = this.tail
//         while(current){
//             console.log(current.data);
//             current = current.prev
            
//         }
//     }
// }
// const list = new LinkedList()

// list.prepend(1);
// list.prepend(2);
// list.print()
// list.printReverse()


//append to doubly 

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.prev = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null
//         this.size=0
//     }
//     append(data){
//         const node = new Node(data)
//         if(this.head===null){
//             this.head = node
//             this.tail = node
//         }else{
//             node.prev = this.tail
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList
// list.append(2)
// list.append(3)
// list.print()


//remove from begining and end in doubly

// class Node {
//     constructor(data){
//         this.data = data
//         this.next= null
//         this.prev = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head =null
//         this.tail = null
//         this.size =0
//     }
//     prepend(data){
//         const node  = new Node(data)
//         if(this.head===null){
//             this.head = node
//             this.tail = node;
//         }else{
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }


//         print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }

//     removeBeg(){
//         if(this.head===null){
//             return null
//         }
//         const data = this.head.data
//         if(this.head===this.tail){
//             this.head===null;
//             this.tail ===null;
            

//         }else{
            
//             this.head = this.head.next
//             this.head.prev = null
//         }
//         this.size--
//         return data
       

//     }

//     removeEnd(){
//         if(this.tail===null){
//             return null
//         }
//         const data =this.tail.data
//         if(this.tail===this.head){
//             this.tail=null
//             this.head = null
//         }else{
//             this.tail = this.tail.prev
//             this.tail.next = null
//         }
//     }

// }
// const list = new LinkedList()

// list.prepend(1);
// list.prepend(2);
// list.prepend(2);
// list.print()
// list.removeBeg();
// list.print()
// list.removeEnd()
// list.print()



//array max and min

// function find(arr){
//     if(arr.length===0){
//         return null
//     }
//     let max = arr[0]
//     let min = arr[0]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//         if(arr[i]<min){
//             min =arr[i]
//         }
//     }
//     return {max,min}
// }

// console.log(find([1,2,3,4,5]));


//reverse an array

// function reverse(arr){
//     if(arr.length===0){
//         return null
//     }

//     // for(let i=0,j=arr.length-1;i<arr.length/2;i++,j--){
//     //     let temp = arr[i]
//     //     arr[i] = arr[j]
//     //     arr[j] = temp
//     let len = arr.length
//     for(let i=0;i<len/2;i++){
 
//         [arr[i],arr[len-1-i]]=[arr[len-1-i],arr[i]]

//     }

//     return arr
// }
// console.log(reverse([1,2,3,4,5]));


// function check(arr,data){
//     if(arr.length===0){
//         return null
//     }

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==data){
//             return true
//         }
//     }
//     return false
// }
// console.log(check([1,2,3,4,5],5));


//revrese strung
// function reverse(str){
//     let string =str.split('').reverse().join('')
//     return string
    
// }
// console.log(reverse("hello"));



//check pallidrome
// function isPallindrome(str){
//     let string = str.split('').reverse().join('')
//     if(str ==string){
//         return true
//     }else
//     return false
// }

// console.log(isPallindrome("hello"));



//no of vowels in a string


// function check(str){
//     const vowels  = 'aeiouAEIOU';
//     let count = 0
//     for (let char of str){
//         if(vowels.includes(char)) 
//             count++
//     }

// return count

// }

// console.log(check("afeefa"));



//removing duplicates in s singly

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null
//     }

//     append(data){
//         const node = new Node(data)
//         if(!this.head){
//             this.head = node
//         }else{
//             let current  =this.head
//             while(current.next){
//                 current  = current.next
//             }
//             current.next = node

//         }
//     }

//     removeDuplicates(){
//         const seen  = new Set();
//         let curr = this.head
//         let prev  = null

//         while(curr){
//             if(seen.has(curr.data)){
//                 prev.next = curr.next

//             }else{
//                 seen.add(curr.data)
//                 prev = curr
//             }
//             curr = curr.next
//         }


//     }
//     print(){
//         let current = this.head
//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }
// const list = new LinkedList();
// list.append(1)
// list.append(1)
// list.print()
// list.removeDuplicates();
// list.print()



//sum of array using recursion

// function sum(arr){
//     if(arr.length===0){
//         return 0

//     }
//     return arr[0]+sum(arr.slice(1))
// }

// console.log(sum([1,2,3,4,5]));


//reverse string using recusion

// function reverse(str){
//     if(str.length===0){
//         return str
//     }
//     return reverse(str.slice(1))+str[0]
// }

// console.log(reverse("hello"));



//removing vowels

// function remove(str){
//     const vowels = 'aeiouAEIOU'
//     let result = ''

//     for(let char of str ){
//         if(!vowels.includes(char))
//             result+= char
//     }
//     return result
// }
// console.log(remove("hello"));


// function revrese(str){
//     let vowels = 'aeiouAEIOU'
//     let string = str.split('').filter(char=>!vowels.includes(char)).join('')
//     return string
// }
// console.log(revrese("hello"));





class Node {
    constructor(data){
        this.data= data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }
    append(data){
        const node = new Node(data);
        if(this.head===0){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }

            prev.next = node
        }
        this.size++

    }
   
    removeMiddle(){
        let size = this.size/2
        let removeNode

        let current = this.head
        while(current.next){
            

        }

        
        l
        

    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next
            
        }
    }
  
}
const list = new LinkedList
list.append(1);
list.append(2)
list.append(3)
list.print()




