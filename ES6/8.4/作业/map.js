let map = new Map();
let data = [
    { name: "A", score: 90 },
    { name: "B", score: 82 },
    { name: "C", score: 100 },
    { name: "D", score: 71 },
    { name: "E", score: 81 },
    { name: "F", score: 92 },
    { name: "G", score: 72 },
    { name: "H", score: 61 },
    { name: "I", score: 71 },
    { name: "J", score: 51 },
    { name: "K", score: 90 },
    { name: "L", score: 82 },
    { name: "M", score: 74 },
    { name: "N", score: 71 },
    { name: "O", score: 81 },
];

data = data.map((leval) => {
    if (leval.score >= 85 && leval.score <= 100) {
        leval.score = '优秀';
    } else if (leval.score >= 75 && leval.score <= 84) {
        leval.score = '良好';
    } else if (leval.score >= 60 && leval.score <= 74) {
        leval.score = '中等';
    } else {
        leval.score = '差';
    }
    return leval;
})

data.forEach((item) => {
    if (!map.get(item.score)) {
        map.set(item.score, 1);
    } else {
        map.set(item.score, map.get(item.score) + 1);
    }
})

console.log(map);