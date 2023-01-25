class Task{ tbody
    constructor(){
        this.id = 1;
        this.arrayTask = []
        this.editId = null}
//
        listTask(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = ''
        for(let i=0; i < this.arrayTask.length; i++){
            let tr = tbody.insertRow();
            let td_id= tr.insertCell();
            let td_task = tr.insertCell();
            

            td_id.innerText = this.arrayTask[i].newtask
            td_id.classList.add();

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png'
            imgEdit.setAttribute("onclick", "task.edit("+JSON.stringify(this.arrayTask[i]) +")")

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png'
            imgDelete.setAttribute("onclick","task.delete("+ this.arrayTask[i].id + ")")

            td_task.appendChild(imgDelete)
            td_task.appendChild(imgEdit)
        }
    }
//
    att(id,task){
        for(let i = 0;i <this.arrayTask.length;i++){
            if(this.arrayTask[i].id == id){
                this.arrayTask[i].newtask = task.newtask
            }
        }
    } 
// 
    edit(data){
        this.editId = data.id
        document.getElementById('task').value=data.newtask
        document.getElementById('btn1').innerText = 'editar tarefa'}
//    
    del(){
        document.getElementById('task').value=''}
//    
    add(){
        let task = this.creat_task();

    if(this.validateInputs(task)){
        if(this.editId == null){
            this.savetask(task)
        } else{this.att(this.editId,task)}
        }
    this.listTask();
    this.del();}
//
    savetask(task){
        this.arrayTask.push(task)
        this.id++}
//
    creat_task(){
        let task = {}
        task.id = this.id;
        task.newtask = document.getElementById('task').value;
        return task}
//
    validateInputs(task){
        let msg = '';
        if(task.newtask == ''){
            msg +='-Add new task \n'}
        if (msg != ''){
            alert(msg)
            return false} return true}
    del(){
         document.getElementById('task').value=''
         document.getElementById('btn1').innerText = 'Adicionar'
         this.editId = null;
        
        }
//        
    delete(id){
        if(confirm('Deseja realmente deletar a tarefa'+ id)){
            let tbody = document.getElementById('tbody')
            for(let i=0;i<this.arrayTask.length;i++){
                if(this.arrayTask[i].id == id){
                    this.arrayTask.splice(i,1)
                    tbody.deleteRow(i)};};};}
                    }

//
var select = document.getElementById("id");

var task = new Task()