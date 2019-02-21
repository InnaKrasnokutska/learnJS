var budget = +prompt("Enter your budget");
var shopName = prompt("Enter name of your shop");

obj = {
	budget,
	shopName,
	shopGoods: ['a', 'b'],
	employeers: { },
	isOpen: true
	};

obj.shopGoods[0] = prompt("What kind of goods are you selling?");
obj.shopGoods[1] = prompt("What kind of goods are you selling?");
obj.shopGoods[2] = prompt("What kind of goods are you selling?");

alert("The budget for one day =" + budget/30);

