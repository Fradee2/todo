let $input=document.querySelector('#input');
let $container = document.querySelector('#tasks');
const addNewTask = (text) => `            <div class="tasks_item"  data-checked="false">
                <button data-action="toggleComplete" class="task_uncomplete">✔</button>
                <p class="uncomplete">${text}</p>
            </div>`
 const ACTION={
	 TOGGLE_COMPLETE:'toggleComplete',
	 FILTER:'filter',
	 CLEAR_COMPLETED:'clearCompleted'
 }

const Checked=(parent)=>{
	parent.dataset.checked="true";
	const button=parent.querySelector('.task_uncomplete');
	const p = parent.querySelector('.uncomplete');
	 button.classList.remove('task_uncomplete');
	button.classList.add('task_complete');
	p.classList.remove('uncomplete');
	 p.classList.add('complete');
 }

const Unchecked = (parent)=>{
	parent.dataset.checked = "false";
	const button = parent.querySelector('.task_complete');
	const p = parent.querySelector('.complete');
	button.classList.remove('task_complete');
	button.classList.add('task_uncomplete');
	p.classList.remove('complete');
	p.classList.add('uncomplete');
}

 const toggleTodo = (button)=>{
	const perentContainer=button.parentNode;
	 const isChecked = perentContainer.dataset.checked==='true';
	if (isChecked){
		Unchecked(perentContainer);
	}else{
		Checked(perentContainer);
	}
}

document.addEventListener('click',e=>{
	const action=e.target.dataset.action;
	const target=e.target;
	switch (action){
		case ACTION.FILTER:{
			break;
		}
		case ACTION.TOGGLE_COMPLETE:{
			toggleTodo(target);
			break;
		}
		case ACTION.CLEAR_COMPLETED:{
			break;
		}
	}
})

$input.addEventListener('keydown', (e)=>{
	const value = e.target.value;
	const newTodo_element = addNewTask(value);
	const isEnterPressed = e.key === 'Enter';
	 if (isEnterPressed && value){
		 $container.insertAdjacentHTML("afterbegin",newTodo_element);
		 $input.value="";
	 }
})

