console.log("practice.js loaded");

let foodList = [
    { name: "ข้าวผัด", type: "จานเดียว", price: 45 },
    { name: "ผัดกะเพรา", type: "จานเดียว", price: 50 },
    { name: "ต้มยำกุ้ง", type: "ของแกง", price: 120 },
    { name: "แกงเขียวหวาน", type: "ของแกง", price: 80 },
    { name: "ส้มตำ", type: "ยำ", price: 40 },
    { name: "ลาบหมู", type: "ยำ", price: 60 },
    { name: "ผัดไทย", type: "ก่วยเตี๋ยว", price: 50 },
    { name: "ก่วยเตี๋ยวเนื้อ", type: "ก่วยเตี๋ยว", price: 55 },
    { name: "ข้าวมันไก่", type: "จานเดียว", price: 50 },
    { name: "ข้าวหมูกรอบ", type: "จานเดียว", price: 55 },
    { name: "ผัดซีอิ๊ว", type: "จานเดียว", price: 45 },
    { name: "ข้าวต้มปลา", type: "จานเดียว", price: 60 },
    { name: "แกงจืดเต้าหู้", type: "ของแกง", price: 40 },
    { name: "ผัดผักบุ้งไฟแดง", type: "ผัด", price: 40 },
    { name: "ไก่ทอด", type: "ทอด", price: 70 },
    { name: "ปลาทอด", type: "ทอด", price: 90 },
    { name: "ยำวุ้นเส้น", type: "ยำ", price: 50 },
    { name: "ข้าวเปล่า", type: "ข้าว", price: 10 },
    { name: "น้ำเปล่า", type: "เครื่องดื่ม", price: 10 },
    { name: "น้ำอัดลม", type: "เครื่องดื่ม", price: 20 }
];

let Myfood = [];

function renderMenu() {
    const box = document.getElementById("foodList");
    box.innerHTML = "";

    foodList.forEach((f, index) => {
        const card = document.createElement("div");
        card.className =
            "bg-white w-full h-[200px] rounded-lg mb-2 p-2 flex flex-col";

        const content = document.createElement("div");
        content.className = "flex w-full flex-1 space-x-2";

        const img = document.createElement("div");
        img.className = "bg-gray-300 w-[30%] h-full rounded-lg";

        const info = document.createElement("div");
        info.className = "w-[70%] h-full flex flex-col";

        const name = document.createElement("h4");
        name.className = "font-bold text-lg";
        name.textContent = f.name;

        const desc = document.createElement("p");
        desc.className = "text-sm text-gray-600 flex-1 line-clamp-3";
        desc.textContent =
            "A deliciously prepared menu item made with fresh ingredients, carefully cooked to bring out rich flavors and a satisfying taste in every bite.";

        const price = document.createElement("p");
        price.className = "text-sm mt-1";
        price.innerHTML = `Price: <span class="font-semibold">${f.price}</span> THB`;

        const btnAdd = document.createElement("button");
        btnAdd.className =
            "mt-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 w-full";
        btnAdd.textContent = "Add";
        btnAdd.onclick = () => {
            addMYfood(f);
            updateOrde();
        };

        info.append(name, desc, price);
        content.append(img, info);
        card.append(content, btnAdd);
        box.appendChild(card);
    });
}


function renderMyfood() {
    const box = document.getElementById("Orderlist");
    box.innerHTML = "";

    Myfood.forEach((f, index) => {
        const card = document.createElement("div");
        card.className = "bg-white w-full h-[175px] rounded-lg mb-2 p-2";

        const topRow = document.createElement("div");
        topRow.className = "flex flex-row w-full space-x-2";

        const imgBox = document.createElement("div");
        imgBox.className = "bg-gray-300 w-[30%] h-[100px] rounded-lg mb-2";

        const infoBox = document.createElement("div");
        infoBox.className = "w-[70%] h-[100px] rounded-lg mb-2 flex flex-col";

        const nameH4 = document.createElement("h4");
        nameH4.className = "font-bold text-lg";
        nameH4.textContent = f.name;

        const descP = document.createElement("p");
        descP.className = "text-sm text-gray-600 flex-1 line-clamp-3";
        descP.textContent =`Quantity: ${f.count}`;
        
        const priceP = document.createElement("p");
        priceP.className = "text-sm";
        priceP.innerHTML = `Price: <span class="font-semibold">${f.price}</span> THB`;

        infoBox.append(nameH4, descP, priceP);
        topRow.append(imgBox, infoBox);

        const btnRow = document.createElement("div");
        btnRow.className = "flex space-x-2";

        const btnAdd = document.createElement("button");
        btnAdd.className = "mt-1 bg-gray-300 text-white px-4 py-2 rounded hover:bg-green-400 w-[50%]";
        btnAdd.textContent = "Add";
        btnAdd.onclick = () => {
            addMYfood(f);
            updateOrde();
        };

        const btnRemove = document.createElement("button");
        btnRemove.className = "mt-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400 w-[50%]";
        btnRemove.textContent = "Remove";
        btnRemove.onclick = () => {
            deleteMYfood(index);
            updateOrde();
        };

        btnRow.append(btnAdd, btnRemove);
        card.append(topRow, btnRow);
        box.appendChild(card);
    });
}



function addMYfood(food){
    if (Myfood.some(f => f.name === food.name)) {
        let index = Myfood.findIndex(f => f.name === food.name);
        Myfood[index].count += 1
        Myfood[index].price += food.price;
    }else{
        Myfood.push({...food, count: 1});
    }
    updateOrde();
}

function ClearMYfood(){
    Myfood.splice(0, Myfood.length);
    updateOrde();
}

function deleteMYfood(i){
    if(Myfood[i].count > 1){
        Myfood[i].count -= 1;
        Myfood[i].price -= foodList.find(f => f.name === Myfood[i].name).price;
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
    document.getElementById("subtotal").textContent = totalPrice;

    const tax = totalPrice * 1.1;
    document.getElementById("grandTotal").textContent = tax.toFixed(2);
}

function updateOrde() {
    renderMyfood();
    calculateTotals();
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บเสร็จ
window.onload = function() {
    renderMenu();
}
