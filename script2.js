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

const delClass=()=>{
	const $filter_all = document.querySelector('#filter_all').classlist;
	const $filter_active = document.querySelector('#filter_active').classList;
	const $filter_completed = document.querySelector('#filter_completed').classList;
	if ($filter_all =='active'){

		$filter_all.remove('active');
		$filter_active.remove('active');
	}
	if ($filter_active =='active'){
		$filter_active.remove('active');
	}else{
		$filter_completed.remove('active');
		$filter_active.remove('active');
	}
}

const filter=(target,button)=>{
	delClass();
	button.classList.add('active')
	let element = $container.children;
	console.log(element[1]);
	for (let i=1; i<=element.length;i++){
		if (element[i].dataset.checked===target){
			
		}else;
	}
}

document.addEventListener('click',e=>{
	const action=e.target.dataset.action;
	const target=e.target;
	switch (action){
		case ACTION.FILTER:{
			if (target.dataset.filter == 'completed'){
				filter('false', target);
			} else if (target.dataset.filter == 'all'){
				delClass();
				target.classList.add('active')

			}else if(target.dataset.filter =='active'){
				filter('true',target);
			}
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

