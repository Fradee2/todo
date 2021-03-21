let $input=document.querySelector('#input');
let $container = document.querySelector('#tasks');
let $counter = document.querySelector('#counter');
let counter_number=0;
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
		counter_number++;
		$counter.textContent = `${counter_number} item left`;
	}else{
		Checked(perentContainer);
		counter_number--;
		$counter.textContent = `${counter_number} item left`;
	}
}

const delClass=()=>{
	const filter_all = document.querySelector('#filter_all').classList;
	const filter_active = document.querySelector('#filter_active').classList;
	const filter_completed = document.querySelector('#filter_completed').classList;
	filter_all.toggle('active',false);
	filter_active.toggle('active', false);
	filter_completed.toggle('active', false);
}

const filter=(target,button)=>{
	delClass();
	button.classList.add('active')
	let element = $container.children;
	for (let i=0; i<element.length;i++){
		if (element[i].dataset.checked!=target){
			element[i].classList.toggle('clr',true);
		}else{
			element[i].classList.toggle('clr', false);
		}
		;
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
				let element = $container.children;
				for (let i = 0; i < element.length; i++) {
						element[i].classList.toggle('clr', false);
				}
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
			let element = $container.children;
			for (let i = 0; i < element.length; i++) {
				if (element[i].dataset.checked == 'true') {
					console.log(element[i]);
					element[i].innerHTML=" ";
					element[i].remove();
				}
			}
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
		 counter_number++;
		 $counter.textContent = `${counter_number} item left`;
	 }
	 
})

