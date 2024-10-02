const items = [
    { name: 'Maçã', price: 1 },
    { name: 'Laranja', price: 2 },
    { name: 'Manga', price: 3 },
];

const totalPrice = items.reduce((accumulator, item) => {
    return accumulator += item.price;
}, 0);

console.log(totalPrice);

const itemsSimilar = [
    { name: 'Maçã', category: 'Fruta' },
    { name: 'Cebola', category: 'Vegetal' },
    { name: 'Laranja', category: 'Fruta' },
    { name: 'Alface', category: 'Vegetal' },
];

const groupedItems = itemsSimilar.reduce((accumulator, item) => {
    const category = item.category;
    if (!accumulator[category]) {
        accumulator[category] = [];
    }
    accumulator[category].push(item.name);
    return accumulator;
}, {});

console.log(groupedItems);

const duplicateNumbers = [1, 2, 3, 4, 1, 2, 3, 4, 7, 8, 7, 8];

const noDuplicateNumbers = duplicateNumbers.reduce((accumulator, item) => {
    if (!accumulator.includes(item)) {
        accumulator.push(item);
    }
    return accumulator;
}, []);

console.log(noDuplicateNumbers);