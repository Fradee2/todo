let i=0;
let tasks=[];
let main_footer = document.getElementById('main_footer');
let button_create=document.getElementById('button');
let button_delete;

button_create.onclick=function(){
    let value=document.getElementById("input_value").value;
     if(i>0){
         for(let r=1;r!=tasks.length;r++){
             console.log(typeof(tasks[r]));
             if (typeof(tasks[r])!="object"){
                 main_footer.insertAdjacentHTML('afterbegin',`<div class="ne_gotovo text" id="processing${r}"><p>${value}</p><button id="${r}" onclick="gotovo(this)" >Выполнена</button><button onClick="delet(this)" id="delete${r}">Удалить</button></>`);
                 break;
             }
         }
     }else{
    main_footer.insertAdjacentHTML('afterbegin',`<div class="ne_gotovo text" id="processing${i}"><p>${value}</p><button id="${i}" onclick="gotovo(this)" >Выполнена</button><button onClick="delet(this)" id="delete${i}">Удалить</button></>`);
     }
    tasks[i]={task:value,
        class_name:"ne_gotovo"};

    i++;
}

function delet(obj){ //удаление одной задачи 
     let a=obj.parentNode;
     let b=obj.previousSibling.id;
     a.remove();
     delete tasks[b];
}


function gotovo(obj){ //готово/не готово
    let r=obj.id;
    let a=obj.parentNode.id;
    if (tasks[r].class_name=="gotovo"){
        document.getElementById(a).className="ne_gotovo";
        tasks[r].class_name="ne_gotovo";
    } else {
        document.getElementById(a).className="gotovo";
        tasks[r].class_name="gotovo";
    }
}

function delete_all(){
    let a=document.getElementById('main_footer');
    a.innerHTML="";
}

function delete_alll() { //удаляет все элементы хронящиеся в main_footer
delete_all();
  for (let r=0;r<=i;r++){
    delete tasks[r];
  }
  i=0;
}

function filter_all(){
    delete_all();
    for (let r=0; r<=i; r++){
        main_footer.insertAdjacentHTML('afterbegin',`<div class="${tasks[r].class_name}" id="processing${r}"><p>${tasks[r].task}</p><button id="${r}" onclick="gotovo(this)" >Выполнена</button><button onClick="delet(this)" id="delete${r}">Удалить</button></>`);
    }
}

function filter_ne_gotovo(){
    delete_all();
    for (let r=0; r<=i; r++){
        if(tasks[r].class_name=="ne_gotovo"){
                main_footer.insertAdjacentHTML('afterbegin',`<div class="${tasks[r].class_name}" id="processing${r}"><p>${tasks[r].task}</p><button id="${r}" onclick="gotovo(this)" >Выполнена</button><button onClick="delet(this)" id="delete${r}">Удалить</button></>`);
        } else 
            break;
        
    }
}

function filter_gotovo(){
    delete_all();
    for (let r=0; r<=i; r++){
        if(tasks[r].class_name=="gotovo"){
                main_footer.insertAdjacentHTML('afterbegin',`<div class="${tasks[r].class_name}" id="processing${r}"><p>${tasks[r].task}</p><button id="${r}" onclick="gotovo(this)" >Выполнена</button><button onClick="delet(this)" id="delete${r}">Удалить</button></>`);
        } 

    }
}