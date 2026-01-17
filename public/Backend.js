function nav(){
    fetch("/views/partials/nav.html")
        .then(res => res.text())
        .then(data => {
            const nav = document.getElementById("nav");
            nav.innerHTML = data;
        });
}

console.log("practice.js loaded");

let foodList = [
    { name: "ข้าวผัด", type: "จานเดียว", price: 45, img: "img/KhaoPad.jpg" },
    { name: "ผัดกะเพรา", type: "จานเดียว", price: 50, img: "img/PadKaprao.jpg" },
    { name: "ต้มยำกุ้ง", type: "ของแกง", price: 120, img: "img/TomYamKung.jpg" },
    { name: "แกงเขียวหวาน", type: "ของแกง", price: 80, img: "img/RedCurry.jpg" },
    { name: "ส้มตำ", type: "ยำ", price: 40, img: "img/SomTum.jpg" },
    { name: "ลาบหมู", type: "ยำ", price: 60, img: "img/LabMoo.jpg" },
    { name: "ผัดไทย", type: "ก่วยเตี๋ยว", price: 50, img: "img/PadThai.jpg" },
    { name: "ก่วยเตี๋ยวเนื้อ", type: "ก่วยเตี๋ยว", price: 55, img: "img/Nooddle.jpg" },
    { name: "ข้าวมันไก่", type: "จานเดียว", price: 50, img: "img/KhaoMunGai.jpg" },
    { name: "ข้าวหมูกรอบ", type: "จานเดียว", price: 55, img: "img/KhaoMooKrob.jpg" },
    { name: "ผัดซีอิ๊ว", type: "จานเดียว", price: 45, img: "img/PadSio.jpg" },
    { name: "ข้าวต้มปลา", type: "จานเดียว", price: 60, img: "img/KhaoTomPla.jpg" },
    { name: "แกงจืดเต้าหู้", type: "ของแกง", price: 40, img: "img/CurrySoup.jpg" },
    { name: "ผัดผักบุ้งไฟแดง", type: "ผัด", price: 40, img: "img/PadPakBung.jpg" },
    { name: "ไก่ทอด", type: "ทอด", price: 70, img: "img/KFC.jpg" },
    { name: "ปลาทอด", type: "ทอด", price: 90, img: "img/FriedFish.jpg" },
    { name: "ยำวุ้นเส้น", type: "ยำ", price: 50, img: "img/WoonSen.jpg" },
    { name: "ข้าวเปล่า", type: "ข้าว", price: 10, img: "img/Khao.jpg" },
    { name: "น้ำเปล่า", type: "เครื่องดื่ม", price: 10, img: "img/Water.jpg" },
    { name: "น้ำอัดลม", type: "เครื่องดื่ม", price: 20, img: "img/Soda.jpg" },
];

let Myfood = [];

function renderMenu() {
    const box = document.getElementById("shop-menu");
    box.innerHTML = "";
    foodList.forEach((f, index) => {
        let card =
        `<div class="bg-white h-[180px] w-full rounded-lg flex flex-col space-y-2 p-2">
            <div class="bg-gray-400 h-[75%] w-full rounded-lg flex flex-row">                            
                <div class="h-full w-[25vh] rounded-lg bg-cover bg-center" style="background-image: url('${f.img}')"></div>
                <div class="bg-gray-200 h-full w-full ml-2 rounded-lg px-2">
                    <h4 class="font-bold text-lg">${f.name}</h4>
                    <p class="text-sm text-gray-800">
                        A deliciously prepared menu item made with fresh ingredients
                    </p>
                    <p class="text-sm mt-1">Price: <span class="font-semibold">${f.price}</span> THB</p>
                </div>
            </div>
            <button onclick="addFood('${f.name}')" class="bg-green-500 h-[25%] w-full rounded-lg hover:bg-green-400 flex items-center justify-center font-bold text-white"> Add </button>
        </div>`;
        
        box.innerHTML += card;
    });
}

function renderMyfood() {
    const box = document.getElementById("myFoodList");
    box.innerHTML = "";
    Myfood.forEach((f, index) => {
        let card =
        `<div class="bg-white h-[180px] w-full rounded-lg flex flex-col space-y-2 p-2">
            <div class="bg-gray-400 h-[75%] w-full rounded-lg flex flex-row">                            
                <div class="h-full w-[25vh] rounded-lg bg-cover bg-center" style="background-image: url('${f.img}')"></div>
                <div class="bg-gray-200 h-full w-full ml-2 rounded-lg px-2">
                    <h4 class="font-bold text-lg">${f.name}</h4>
                    <p class="text-sm mt-1">Quantity: <span class="font-semibold">${f.count}</span></p>
                    <p class="text-sm mt-1">Price: <span class="font-semibold">${f.price}</span> THB</p>
                </div>
            </div>
            <div class="bg-gray-300 h-[25%] w-full flex flex-row space-x-2">
                <button onclick="addFood('${f.name}')" class=" bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 w-[50%]">Add</button>
                <button onclick="deleteMYfood(${index})" class=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 w-[50%]">Delete</button>
            </div>
        </div>`;
        box.innerHTML += card;
    });
}

function addFood(name) {
    const food = foodList.find(f => f.name === name);
    if (!food) return;

    const item = Myfood.find(f => f.name === name);

    if (item) {
        item.count++;
        item.price += item.unitPrice;
    } else {
        Myfood.push({
            name: food.name,
            unitPrice: food.price,
            price: food.price,
            img: food.img,
            count: 1
        });
    }
    updateOrde();
}

function deleteMYfood(i){
    if(Myfood[i].count > 1){
        let price = foodList.find(f => f.name === Myfood[i].name).price;
        Myfood[i].count -= 1;
        Myfood[i].price -= price;
    }else{
        Myfood.splice(i, 1);
    }
    updateOrde();
}

function calculateTotals() {
    const totalItems = Myfood.reduce((sum, f) => sum + f.count, 0);
    document.getElementById("totalItems").textContent = totalItems;

    const totalTypes = Myfood.length;
    document.getElementById("totalTypes").textContent = totalTypes;

    const totalPrice = Myfood.reduce((sum, f) => sum + f.price, 0);
    document.getElementById("totalsub").textContent = totalPrice;

    const tax = totalPrice * 1.1;
    document.getElementById("totalgrand").textContent = tax.toFixed(2);
}

function updateOrde() {
    renderMyfood();
    calculateTotals();
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บเสร็จ
window.onload = function() {
    renderMenu();
}
