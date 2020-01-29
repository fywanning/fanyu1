//1.使用发布订阅模式，实现vue得$on和$emit、$off 方法

const eventList={}

const $on = (eventName, callback) => {
  if (!eventList[eventName]) {
    eventList[eventName] = [];
  }
  eventList[eventName].push(callback)
}

const $emit = (eventName, params) => {
  if (eventList[eventName]) {
    let arr = eventList[eventName];
    arr.map((cb) => {
      cb(params);
    })
  }
}

const $off = (eventName, callback) => {
  if (eventList[eventName]) {
    if (callback) {
      let index = eventList[eventName].indexOf(callback);
      eventList[eventName].splice(index, 1);
    } else {
      eventList[eventName].length = 0;
    }
  }
}


// 2.实现instanceOf方法


function instance(a, b) {
  const proto = a.__proto__
  if (proto) {
    if (proto === b.prototype) {
      return true
    } else {
      return instance(proto, b)
    }
  } else {
    return false
  }
}

class Base { }

class A extends Base { }
class B extends Base { }
const a = new A()

console.log(a instanceof Base)
console.log(instance(a, B))

  
// 3.红绿灯问题，绿灯3秒，红灯2秒，黄灯1秒，每隔一秒打印一条记录 这样循环，要求：可以在控制台可以运行的代码，并且正确输出
// 绿灯 3
// 绿灯 2
// 绿灯 1
// 红灯 2
// 红灯 1
// 黄灯 1
// 绿灯 3
function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
async function changeColor(color, duration) {
  console.log('traffic-light ', color)
  await sleep(duration)
}
async function main() {
  while (true) {
    await changeColor('red', 2000);
    await changeColor('yellow', 1000);
    await changeColor('green', 3000);
  }
}
main()


