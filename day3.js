// 1.接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果
const numbers = flatten2([1, [[2], 3, 4], 5]) 
numbers.next().value // => 1 
numbers.next().value // => 2 
numbers.next().value // => 3 
numbers.next().value // => 4 
numbers.next().value // => 5


function *flatten2(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    Array.isArray(item) ? yield* flatten2(item) : yield item;
  }
}

// 2.复习数组方法 封装实现 数组 map、filter、every 方法
//filter:
Array.prototype.myFilter = function(cb, context) {
  let newArr = [];
  let self = this;
  for (let i=0; i<self.length; i++) {
    let result = cb.call(context, self[i], i, self);
    if (result) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
//例
let arr = [1, 2, 3,4, 5];
let result1 = arr.myFilter(function(item) {
  console.log(this)
  return item > 2;
}, [1, 2, 3])

//map:
Array.prototype.myMap= function(cb, context) {
  let newArr = [];
  let self = this;
  for (let i=0; i<self.length; i++) {
    newArr.push(cb.call(context, self[i], i, self))
  }
  return newArr;
}
//例
let result2 = arr.myMap(function(item) {
 console.log(this)
  return item*2;
}, [1, 2, 3])

// every：
Array.prototype.myEvery= function(cb, context) {
  let self = this;
  for (let i=0; i<self.length; i++) {
    let result3 = cb.call(context, self[i], i, self)
    if (!result3) {
      return false
    } 
  }
  return true;
}
let result4 = arr.myEvery(function(item) {
  console.log(this)
  return item > 1;
}, [1, 2, 3])

