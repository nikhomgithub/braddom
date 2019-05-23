
//Examine Document Object//
//=============================
//console.dir(document);
//============================
/* show all attribute of DOM
#document
URL: "http://127.0.0.1:5500/index.html"
activeElement: body
all: HTMLAllCollection(29) [html, link#dark-mode,... 
baseURI: "http://127.0.0.1:5500/index.html"
*/
//console.log(document)
/*show html code in console 
<!doctype html>...
*/

//เราสามารถเข้าถึง attr ของ Document ได้ 
//console.log(document.domain)
//127.0.0.1
//เราสามารถแก้ไข ค่าใน attr ของ DOM ได้ด้วย
//document.title="New Website"
//เราสามารถเข้าถึงทุก element ได้ด้วย
//console.log(document.all);
//HTMLAllCollection(27) ...
//หรือเราจะดูเฉพาะ Element ได้ด้วย
//console.log(document.head)
//<head></head>
//เนื่องจาก ใน document เป็น collection ซึ่งคล้าย array ก็ใช้ index ได้ แต่มันไม่ใช่ array
//console.log(document.all[10])
//<header id="" ......
//จริงๆ เรา สามารถแก้ไข้ไฟล์ html ได้เลยด้วย
//document.all[10].textContent="Nikhom"

//====================================
//====================================
//====================================
//การ query element มีหลายๆ คำสั่ง
//ใช้เพื่อเข้าถึง textContent,style


//document.getElementById();

//console.log(document.getElementById('header-title'));
//<h1 id="header=title"...
//let a=document.getElementById('header-title')
//====================================
//a.textContent="aaa";
//a.innerText="OK" 
//สองคำสั่งก็คล้ายๆกัน แต่ไม่เหมือนกันทีเดียวคือ style="display-none" ตัว innerText จะไม่แสดงออกมา แต่ textContent แสดง 
//ดังนั้น textContent ดีกว่า 
//การใส่ tag เข้า ไปใน tag
//===================================
//a.innerHTML='<h3>aaa<h3>'
//การเปลี่ยน style 
//a.style.border='solid black 4px'

//document.getElementsByClassName
//let b=document.getElementsByClassName('list-group-item')
//console.log(b)
//HTMLCollection(4)
//การเข้าถึงก็เหมือนเดิม
//b[0].textContent="Nikhom" 
//จะเปลี่ยนอันแรกเป็นชื่อ Nikhom
//b[0].style.color="pink"
//อันนี้เปลี่ยน style เป็นสีชมพู

//ถ้าเข้าถึงทุกอันก็ต้อง แปลง จาก collection เป็น arry โดยใช้ Array.from แล้วถึงใช้ forEach ได้
//Array.from(b).forEach(m=>m.style.color="pink")
//เปลี่ยนทุกอันเป็นสีชมพู

//document.getElementsByTagName('li')
//let c=document.getElementsByTagName('li');
//Array.from(c).forEach(m=>m.style.color='pink')
//เปลี่ยทุกอันเป็นสีชมพูเหมือนกัน

//document.querySelector
//let d=document.querySelector('#main-header');
//d.textContent="aaaa"
//d.style.textTransform="uppercase"

//let e=document.querySelector('input');
//e.value='Hello World'

//let f=document.querySelector('input[type="submit"]');
//f.value="send";

//let g=document.querySelector('.list-group-item:last-child');
//g.style.color="pink"

//let h=document.querySelector('.list-group-item:nth-child(2)');
//h.style.color="pink";

//let i=document.querySelectorAll('.title');
//console.log(i)

//Array.from(i).forEach(m=>m.style.color="red");


//===================================
//===================================
//===================================
//Traversing the dom//
//let j=document.querySelector('#items');
//parentNode
//console.log(j.parentNode)
//<div id="main".....
//j.parentNode.style.backgroundColor="pink"
//j.parentNode.parentNode.style.backgroundColor="pink"

//console.log(j.parentElement);
//<div id="main".....
//เกือบจะเหมือนๆ กันนะ

// อันนี้จะไม่รวม line break
//console.log(j.children);
//j.children[1].style.color="pink"

/*
console.log(j.firstElementChild);
console.log(j.lastElementChild);
j.lastElementChild.textContent="Go Go"
*/


//let k=document.querySelector('.form-inline')
//console.log(k.nextElementSibling);
//จะได้ <h2 class="title">Items</h2>
//console.log(k.previousElementSibling)
//จะได้ <h2 class="title">Add Items</h2>

//Jquery plugin ดีมากๆ สำหรับ Animation 


// ทำการ create Element 
/*
const newDiv=document.createElement('h2');
newDiv.className='hello'
newDiv.id="Nikhom1"
newDiv.setAttribute('style','color:red; text-transform:uppercase')

const newDivTextContent=document.createTextNode('Hello World')

newDiv.appendChild(newDivTextContent);

const l=document.querySelector('header .container');
const m=document.querySelector('header h1');
l.insertBefore(newDiv,m);
console.log(newDiv);
*/


//============================
//-===========================
//============================
//Event of DOM

// ผูกฟังชังใช้ไว้ในประโยคเดียวกัน
/*
let n=document.querySelector('#btn3').addEventListener('click',()=>{
    alert(3);
})

//แยกฟังก์ชันออกมากรณี ยาวมากๆ 
let o=document.querySelector('#btn4')
.addEventListener('click',()=>{
    funcB();
})

const funcB=()=>{
    alert(4);
    document.querySelector('header h1').textContent="Trade War"
    document.querySelector('#btn3').style.backgroundColor="red";
}
*/



//ถ้าไม่ใช้ คอลอิน ฟังก์ชันต้องใส่ funcD มาก่อนไม่งั้นหาไม่เจอ และไม่ต้องใส่วงเล็บภายใน เพราะมันจะยังไม่ทำงานนะ
//เราเข้าถึงหลายๆอย่างใน e attribute ได้
/*
const funcD=(e)=>{
    //alert(5);

    console.log(e)
    console.log(e.type)
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);
    console.log(e.altKey);

}
let p=document.querySelector('#btn5').addEventListener('click',funcD);
*/

// e คืออธิบายว่า คือ อิเวนอะไร มีค่าอะไรบ้างในอีเว้น

//หรือใช้คอลอินฟังก์ชัน ต้องใส่วงเล็บด้วยเพื่อให้ทำงนา
/*
let p=document.querySelector('#btn5').addEventListener('click',(e)=>{funcD(e)});
const funcD=(e)=>{
    alert(5);
    console.log(e)
}
*/

/*
let q=document.querySelector('#btn6').addEventListener('click',(e)=>{funcD(e)})

const funcD=(e)=>{
    console.log(e);
    //MouseEvent...พร้อมด้วยรายละเอียดอีเวน
    console.log(e.target);
    //<button id="btn6" class="btn btn-dark btn-block">Button 6</button> 
    console.log(e.target.id);
    //btn6
    console.log(e.target.className);
    //btn btn-dark btn-block

}
*/
/*
let r=document.querySelector('#btn7').addEventListener('click',(e)=>{
    const s=document.querySelector('#output');
    s.innerHTML='<h3>'+e.target.id+'</h3>'
})
*/

//document.querySelector('#btn8').addEventListener('click',(e)=>{showType(e)});

//document.querySelector('#btn8').addEventListener('dblclick',(e)=>{showType(e)});

//document.querySelector('#btn8').addEventListener('mousedown',(e)=>{showType(e)});

//document.querySelector('#btn8').addEventListener('mouseup',(e)=>{showType(e)});

/*
const showType=(input)=>{
    console.log('Event Type:'+input.type)
}
*/

//let u=document.querySelector('#box');
//let v=document.querySelector('#outputlocation')
//u.addEventListener('mouseenter',(e)=>{showType(e)})
//u.addEventListener('mouseleave',(e)=>{showType(e)})

//u.addEventListener('mouseover',(e)=>{showType(e)})
//u.addEventListener('mouseout',(e)=>{showType(e)})
/*
u.addEventListener('mousemove',(e)=>{showType(e)})
u.addEventListener('mouseleave',()=>{u.style.backgroundColor="grey"})

const showType=(input)=>{
    console.log('Event Type:'+input.type)
    v.textContent=input.offsetX+':'+input.offsetY;
    u.style.backgroundColor="darkgreen"
}
*/

/*
let itemInput=document.querySelector('input[type="text"]');
let form=document.querySelector('form');

itemInput.addEventListener('focus',e=>{funcH(e)})
itemInput.addEventListener('blur',e=>{funcH(e)})
itemInput.addEventListener('cut',e=>{funcH(e)})
itemInput.addEventListener('paste',e=>{funcH(e)})
itemInput.addEventListener('input',e=>{funcH(e)})

const funcH=(input)=>{
    console.log(input.type);
    //document.body.style.display='none'
}

itemInput.addEventListener('keydown',(e)=>{
    console.log(e.type)
    //console.log(e.target.value)
    //document.querySelector('#outputlocation').textContent=e.target.value
})
*/

/*
let select=document.querySelector('#selecting');
select.addEventListener('change',(e)=>{
    console.log(e.target.value)
})
*/

let itemInput=document.querySelector('input[type="text"]');

let form=document.querySelector('form');
form.addEventListener('submit',(e)=>funcK(e));

const funcK=(input)=>{
    input.preventDefault();
    console.log(input.type)
    console.log(itemInput.value)
}
