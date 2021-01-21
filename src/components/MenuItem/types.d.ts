interface Item {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;

}

interface Props {
	item: Item;
}

export {Props, Item};
