const sort1 = document.querySelector('.sort1');
const sort2 = document.querySelector('.sort2');
const delete1 = document.querySelector('.delete');
const input = document.querySelector('.input');
const dobavitbtn = document.querySelector('.dobavitbtn');
const inputcontainer = document.querySelector('.inputcontainer');
const plusbtn = document.querySelector('.plusbtn');
const buttons = document.querySelector('.buttons');
const body = document.querySelector('body');
const crestfallen = document.querySelector('.crestfallen');
const searchinput = document.querySelector('.searchinput');
const searchiconn = document.querySelector('.searchiconn');


const listcont = document.createElement('ul');
listcont.classList.add('listcontain');


sort1.addEventListener('mouseover', ()=>{
    sort1.src = "images/Group73.svg";
})
sort1.addEventListener('mouseout', ()=>{
    sort1.src = "images/Group38.svg";
})
sort2.addEventListener('mouseover', ()=>{
    sort2.src = "images/Group91.svg";
})
sort2.addEventListener('mouseout', ()=>{
    sort2.src = "images/Group90.svg";
})
delete1.addEventListener('mouseover', ()=>{
    delete1.src = "images/Group70.svg";
})
delete1.addEventListener('mouseout', ()=>{
    delete1.src = "images/Group56.svg";
})

delete1.addEventListener('click', ()=>{
    input.value = '';
})

dobavitbtn.addEventListener('click', ()=>{
    if(input.value.length > 0 && input.value.length <= 20){
        listcont.style.display = 'block';
       const li = document.createElement('li');
        listcont.append(li);
        crestfallen.append(listcont);
        li.classList.add('listinside');
        const p = document.createElement('p');
        p.innerHTML = input.value;
        li.append(p);
       const div = document.createElement('div');
        div.classList.add('editdeletecont')
       const edit = document.createElement('div');
        edit.innerText='e'
        edit.classList.add('edit');
        div.append(edit);
       const imgg = document.createElement('img');
        imgg.src = 'images/Group56.svg';
        imgg.classList.add('delete2');
        div.append(imgg);
        li.append(div);
        input.value = '';
        inputcontainer.style.display = 'none';


        const delete2 = document.querySelectorAll('.delete2')
        for(let i=0; i<delete2.length; i++){
           delete2[i].addEventListener('mouseover', ()=>{
           delete2[i].src = "images/Group70.svg"
            })
            delete2[i].addEventListener('mouseout', ()=>{
            delete2[i].src = "images/Group56.svg"
            })
        }
           const edits = document.querySelectorAll('.edit');
           const paragraf1 = document.querySelectorAll('p');
           const listinsides = document.querySelectorAll('.listinside');

         for(let i=0; i<edits.length; i++){
            edits[i].addEventListener('click', ()=>{
                inputcontainer.style.display = 'block';
                input.value = `${paragraf1[i].innerText}`;
                listinsides[i].style.display = 'none';
               })
                edits[i].addEventListener('mouseover',()=>{
                    edits[i].style.background='green';
                    edits[i].style.color='white';
                    edits[i].style.border='1.3px solid green';
                 })
                edits[i].addEventListener('mouseout',()=>{
                    edits[i].style.background='white';
                    edits[i].style.color='#c4c4c4';
                    edits[i].style.border='1.3px solid #c4c4c4';
                })
           }
          
            const udalit = document.querySelectorAll('.delete2');
            const lists = document.querySelectorAll('li');
             for(let i=0; i<udalit.length; i++){
                udalit[i].addEventListener('click', ()=>{
                lists[i].remove();

                if(listcont.children.length==0){
                    listcont.style.display = 'none'
                    inputcontainer.style.display = 'block';
                }
             })
        }
          plusbtn.addEventListener('click', ()=>{
            inputcontainer.style.display = 'block';
 })
    }
})

 sort1.addEventListener('click', ()=>{
        sort1.style.display = 'none';
        sort2.style.display = 'block';
        const paragraf2 = document.querySelectorAll('p');
        let ecow = [];
        for(let i=0; i<paragraf2.length; i++){
            ecow.push(paragraf2[i].innerText);     
        }
        ecow.sort();
        for(let i=0; i<ecow.length; i++){
            paragraf2[i].innerHTML = ecow[i];   
        }
    })
     sort2.addEventListener('click', ()=>{
        sort2.style.display = 'none';
        sort1.style.display = 'block';
        const paragraf2 = document.querySelectorAll('p');
        let ecow = [];
        for(let i=0; i<paragraf2.length; i++){
            ecow.push(paragraf2[i].innerText);    
        }
        ecow.sort().reverse();
        for(let i=0; i<ecow.length; i++){
            paragraf2[i].innerHTML = ecow[i];
        }
       })
    searchiconn.addEventListener('click', ()=>{
         searchinput.style.display = 'block';
         searchinput.addEventListener('keyup', (e)=>{
        const searchp = document.querySelectorAll('p');
        const searchlists = document.querySelectorAll('li')
         for(let i=0; i<searchp.length; i++){
         for(let j=0; j<searchp[i].innerText.length; j++){
          if(searchp[i].textContent.toLowerCase().includes(searchinput.value.toLowerCase())){
             searchlists[i].style.display = "";    
             }
           else{
             searchlists[i].style.display = "none";
              }
              }
            }
           })
})
       searchiconn.addEventListener('dblclick', ()=>{
        searchinput.style.display = 'none';
    })
    new Sortable(listcont, {
        animation: 350
    });