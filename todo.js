var add = document.getElementById("add");
var taskHolder = document.getElementById("taskHolder");
var items = [];


function addItem(){
    if(add.value != ''){
        items.push(add.value);
    show();
    }
    
}

function show (){
    taskHolder.innerHTML = '';
    for(var j = 0; j < items.length; j++)
    taskHolder.innerHTML += '<button onClick = "deleteItem('+j+')">'+items[j]+'</button><br>';
}

function deleteItem(index){
    if(items[index].includes('<del>')&&items[index].includes('</del>')){
        items[index] = items [index].replace('<del>', '');
        items[index] = items [index].replace('</del>', '');
    } else
    items[index] = '<del>'+items[index]+'</del>';
    show();
}