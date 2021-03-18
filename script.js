
let input_value = document.getElementById('input_value').value;
let task={};
let main_footer = document.getElementById('main_footer');
function creat_new_task(task){
    main_footer.insertAdjacentHTML('afterend', `<div><p id="main_footer__name">${input_value}</p><input type="button"></input></div>`);
}


button.onclick=function(){
    creat_new_task(task);
    task={
        task:input_value,
        performed:false,
    }
    }