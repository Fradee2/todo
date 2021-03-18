let i=0
let task={};
let main_footer = document.getElementById('main_footer');
button.onclick=function(){
    let input_value = document.getElementById("input_value").value;
    id="${i}"
    main_footer.insertAdjacentHTML('afterend', `<div id="${i}"><p id="main_footer__name ">${input_value}</p><button onClick="deletes(this)"  id="button_delete${i}" ></button></div>`);
    i++;
    // task={
    //     task:input_value,
    //     performed:false,
    // }
    }
function deletes(obj){
    let a=obj.parentNode.id;
    a.remuve();
    

}
