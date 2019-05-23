
let form=document.querySelector('#addForm');

let items=document.querySelector('#items');//ul

let filter=document.querySelector('#filter');

//Form Submit Event
form.addEventListener('submit',e=>funcA(e));
items.addEventListener('click',e=>removeItem(e))
filter.addEventListener('keyup',e=>filterFunc(e));


const funcA=input=>{
    input.preventDefault();

    let item=document.querySelector('#item');//add input

    if(item.value!==""){

    const li=document.createElement('li');
    li.className='list-group-item';
    li.textContent=item.value;
    //li.appendChild(document.createTextNode(item.value))


    
    const newbtn=document.createElement('button')
    newbtn.className='btn btn-danger btn-sm float-right delete';
    newbtn.textContent="X"

    li.appendChild(newbtn);

    items.appendChild(li)
    }

}

const removeItem=(input)=>{
    if(input.target.classList.contains('delete')){
        if(confirm('R you sure?')){
            let li=input.target.parentElement;
            console.log(li);
            items.removeChild(li);
        }
    }
}

const filterFunc=(input)=>{
    input.preventDefault();
    //convert to lowercase
    const word=input.target.value.toLowerCase();
    //aa
    let lis=items.querySelectorAll('li')
    
    //convert collection to array
    Array.from(lis).forEach(m=>{

        //let wording=m.firstChild
        // จะได้ "Item 1" ...
        let wording=m.firstChild.textContent;
        // จะได้ Item 1 ...
        //console.log(wording);
        if(wording.toLowerCase().indexOf(word)!=-1){
            m.style.display="block"
        }
        else{
            m.style.display="none"
        }
    })


}