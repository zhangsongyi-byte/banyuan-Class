# 作业

1. 使用set完成数组的去重

   ```js
   let array = [2,4,1,8,9,10,2];
   ```

   ```js
   let s = new Set();
   let array = [2, 4, 1, 8, 9, 10, 2];
   
   array.forEach((item) => {
       s.add(item);
   })
   
   console.log(s);
   ```

   

2. 根据下列数据，归类出优良中差的人数，使用array.map与Map实现（85到100是优秀，75到84是良好，60到74是中等，60以下是差）

   ```js
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
   ```

3. 理解let/const与var的区别，以及箭头函数，明早随机抽查。

Let:不允许声明提前，不允许重复声明

var：声明提前，重复声明之后，后面的值会覆盖前面的值



Const:不准改变的值



箭头函数和普通函数的区别：

箭头函数中，this始终指向函数声明所在作用域下的this的值

