const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	let promotion;
	let totalPriceDiscount= 0;
	let discountValue = 0;
	let regularPrice = 0;
	let discount;

	//Produtos filtrados por ids
	const products = productsList.filter(({id}) => ids.includes(id));

	//Quantidade de categorias distintas
	const distinctCategories = [...new Set(products.map(x => x.category))];

	//Promoção que será aplicada a partir da distinção de categorias
	promotion = promotions[distinctCategories.length-1];

	//Calcula Preço Total com desconto e Preço Total regular
	totalPriceDiscount = products.reduce((prev, cur) => {
		let itemValue = 0;
		regularPrice += cur.regularPrice;
		cur.promotions.map(obj => {
		  if (obj.looks.includes(promotion)) {
			itemValue = obj.price;
		  }
		});
		return prev + (itemValue > 0 ? itemValue : cur.regularPrice);
	  }, 0);

	//Calcula valor do desconto
	discountValue = regularPrice - totalPriceDiscount;

	//Calcula % do desconto
	discount = (100*discountValue.toFixed(2)/regularPrice.toFixed(2));

	//Monta Json
	const finalJson = {
		products: products.map(prod => ({
			name: prod.name,
			category: prod.category
		})),
		promotion: promotion,
		totalPrice: totalPriceDiscount.toFixed(2),
		discountValue: discountValue.toFixed(2),
		discount: (discount.toFixed(2) + "%")
	}

	return finalJson;
}

module.exports = { getShoppingCart };
