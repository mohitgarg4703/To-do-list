const input = document.querySelector('input');
const btn = document.querySelector('.add-task > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13? addList(e) : null);
})

function addList(e){
    const notCompleted = document.querySelector('.Not-Completed');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    delBtn.innerHTML = '<i class="fa-solid fa-trash-can-arrow-up"></i>';

    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);


    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
        checkBtn.style.color ='green';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        delBtn.style.color ='red';
        parent.remove();
    });


}}