import data from '../data/foodList.js';

function ClearMYfood(){
    data.Myfood = [];
}

function deleteMYfood(i){
    if(data.Myfood[i].count > 1){
        data.Myfood[i].count -= 1;
    }else{
        data.Myfood.splice(i, 1);
    }
}