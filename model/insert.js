import data from '../data/foodList.js';

export default function addMYfood(food){
    if (data.Myfood.some(f => f.name === food.name)) {
        let index = data.Myfood.findIndex(f => f.name === food.name);
        data.Myfood[index].count += 1
    }else{
        data.Myfood.push({...food, count: 1});
    }
}