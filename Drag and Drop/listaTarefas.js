var x = 0;

function criarTarefa(){
		
		
		//Criando a Div que vai conter a Tarefa
		let tarefas = document.createElement('div');
		tarefas.classList.add('list-item');
		tarefas.setAttribute('draggable','true');
		tarefas.setAttribute('id', 't' + x);
		tarefas.setAttribute('ondragstart','return dragStart(event)');
		x++;
		let listaTarefa = document.querySelector(".list");
		listaTarefa.appendChild(tarefas);		
		//adicionando o Texto da Div
		let conteudo = document.getElementById('texto').value;
		let contTarefa = document.createTextNode(conteudo);	
		tarefas.appendChild(contTarefa);	
	}


function dragStart(ev){
	
	ev.dataTransfer.setData('ID', ev.target.getAttribute('id'));
}

function dragOver(ev){

	return false;
}

function dragDrop(ev){
	
	var tarefaSelecionada = ev.dataTransfer.getData('ID');
	ev.target.appendChild(document.getElementById(tarefaSelecionada));
}




