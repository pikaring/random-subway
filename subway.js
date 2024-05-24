const sandwiches = [
    { name: "ローストビーフ", price: 500 },
    { name: "ターキー", price: 450 },
    { name: "BLT", price: 400 },
    // 他のサンドイッチ
];

const breads = [
    "ホワイト",
    "ウィート",
    "ハニーオーツ",
    "セサミ",
    "フラットブレッド"
];

const paidToppings = [
    { name: "アボカド", price: 100 },
    { name: "エクストラチーズ", price: 50 },
    { name: "ベーコン", price: 150 },
    // 他の有料トッピング
];

const veggies = [
    "レタス",
    "トマト",
    "ピーマン",
    "オニオン",
    "ピクルス",
    "オリーブ"
];

const accentVeggies = [
    "ハラペーニョ",
    "ピクルス",
    "オリーブ",
    "バナナペッパー",
    "チリ"
];

const sauces = [
    "マヨネーズ",
    "マスタード",
    "ケチャップ",
    "BBQソース",
    "イタリアンドレッシング"
];

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateRandomMenu() {
    const sandwich = getRandomItem(sandwiches);
    const bread = getRandomItem(breads);
    const paidTopping = getRandomItem(paidToppings);
    const veggieSelection = getRandomItem(veggies);
    const accentVeggie = getRandomItem(accentVeggies);
    const sauce = getRandomItem(sauces);

    const totalPrice = sandwich.price + paidTopping.price;

    document.getElementById("sandwich").textContent = sandwich.name;
    document.getElementById("bread").textContent = bread;
    document.getElementById("paidToppings").textContent = paidTopping.name;
    document.getElementById("veggies").textContent = veggieSelection;
    document.getElementById("accentVeggies").textContent = accentVeggie;
    document.getElementById("sauce").textContent = sauce;
    document.getElementById("price").textContent = totalPrice;
}
