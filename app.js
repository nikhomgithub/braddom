
/*
เมื่อเรามีหน้า html บน chrome 
เรากด F12 ไปที่ แทบ console
เราสามารถพิมพ์ลงไปได้

พิมคำว่า document  จะปรากฎ object ของ document ขึ้นมา

เราใช้ id ใน element ได้ ซึ่งเป็น unique 

let a=document.getElementByID('ชื่อไอดีนั้น')
เรากำหนดค่า element ที่เราดึงมาให้เท่ากับ a ได้ด้วย เอาไปใช้ได้เรื่อย เช่น 
เปลี่ยน content ของ html 
หรือ style ของ css

เราใช้ class ในการจับ element ก็ได้ 
let a = document.getElementsByClassName('ชื่อคลาส')
เราจะได้ element ทั้งหมดของ คลาสนี้มา 
เช่น (2) [h1.ชื่อคลาส,h2.ชื่อคลาส] อันนี้คือ collection ไม่ใช้ array แต่คล้ายๆ  
เราเข้าถึงแต่ละตัวได้ด้วย index เหมือน array
เช่น a[1] 

เราใช้ tag ก็ได้
let a = document.getElementsByTagName('h1')
และเข้าถึงแต่ละตัวด้วย index เช่นกัน
เช่น a[1]

เราเปลี่ยน html collection เป็น array ได้ด้วย
var b = Array.from(a) จะเปลี่ยนจาก collection เป็น array และตรวจสอบได้ด้วย 
console.log(Array.isArray(b)) ถ้าเป็น array เป็น true

Array.from(a).forEach(()=>{})
============================
============================
*/
/*
const wmf=document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf)
//<span class="name">The Wise Man's Fear</span>
*/

/*
var books=document.querySelector('#book-list li .name');
console.log(books)
//<span class="name">Name of the Wind</span>
//return only first one
*/

var books=document.querySelectorAll('#book-list li .name');
console.log(books)
//NodeList(4) [span.name, span.name, span.name, span.name]
//return all collection of element