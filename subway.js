const sandwiches = [
    { name: "ベジーデライト", price: 430 },
    { name: "ハム", price: 470 },
    { name: "たまご", price: 490 },
    { name: "ツナ", price: 490 },
    { name: "アボカドベジー", price: 500 },
    { name: "サラダチキン", price: 500 },
    { name: "チリチキン", price: 520 },
    { name: "BLT", price: 550 },
    { name: "てり焼きチキン", price: 570 },
    { name: "えびたま", price: 570 },
    { name: "チーズサラダチキン", price: 570 },
    { name: "えびアボカド", price: 590 },
    { name: "生ハム＆マスカルポーネ", price: 590 },
    { name: "ハムクラブハウス", price: 590 },
    { name: "アボカドチキン", price: 620 },
    { name: "ハムアボカド", price: 620 },
    { name: "スパイシークラブハウス", price: 670 },
    { name: "ローストビーフ", price: 750 }
    // 他のサンドイッチ
];

const breads = [
    "ホワイト",
    "ウィート",
    "ハニーオーツ",
    "セサミ"
];

const paidToppings = [
    { name: "ナチュラルスライスチーズ２枚", price: 80 },
    { name: "クリームタイプチーズ", price: 90 },
    { name: "マスカルポーネチーズ", price: 100 },
    { name: "たまご", price: 100 },
    { name: "ベーコン１枚", price: 100 },
    { name: "ツナ", price: 100 },
    { name: "エビ５尾", price: 100 },
    { name: "アボカド", price: 100 },
    { name: "シュレッドチーズミックス", price: 100 },
    { name: "ハム３枚", price: 100 },
    { name: "有料トッピングなし", price: 0 }
    // 他の有料トッピング
];

const veggies = [
    "レタス",
    "トマト",
    "ピーマン",
    "オニオン",
    "ピクルス"
];

const accentVeggies = [
    "ピクルス",
    "オリーブ",
    "ホットペッパー"
];

const sauces = [
    "オイルビネガー塩コショウ",
    "シーザードレッシング",
    "野菜クリーミードレッシング",
    "まろやかレモンドレッシング",
    "わさび醤油ソース",
    "バジルソース",
    "マヨネーズタイプ",
    "チリソース（激辛）",
    "チボトレソース"
];

const images = [
    "folder/1.png",
    "folder/2.png",
    "folder/3.png",
    "folder/4.png",
    "folder/5.png",
    "folder/6.png",
    ]

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
    const image = getRandomItem(images);

    const totalPrice = sandwich.price + paidTopping.price;

    document.getElementById("sandwich").textContent = sandwich.name;
    document.getElementById("bread").textContent = bread;
    document.getElementById("paidToppings").textContent = paidTopping.name;
    document.getElementById("veggies").textContent = veggieSelection;
    document.getElementById("accentVeggies").textContent = accentVeggie;
    document.getElementById("sauce").textContent = sauce;
    document.getElementById("price").textContent = totalPrice;
    document.getElementById("Image").src = image;
}
