
var box = document.getElementById('box');
console.log(box);

var y = box.getElementsByTagName('p');
console.log(y)

// 直接向文档流输出
document.write('p+'+y[0].innerHTML);

// 改变html属性内容语法
// document.getElementById(id).innerHTML = new HTML
// document.getElementById('child').innerHTML = 'new text';
var element = document.getElementById('child');
element.innerHTML = 'new text';

// 改变html属性内容语法
var attr = document.getElementById('attr');
attr.className = 'attr1';
// src 图片地址


// 改变css样式
// document.getElementById(id).style.property = new style
document.getElementById('attr').style.color = '#009245';

// style.visibility    元素消失  hidden/visible

// 三个属性
// nodeName
// nodeValue
// nodeType

var side = document.getElementById('side');


// 新增class
// var 这是第一行


for(let i=0; i<5; i++){
	var childSide = document.createElement('div');
	// 新增id
	childSide.className = 'youyou';
	childSide.id = 'newSide'+i;
	var boxChild = document.createTextNode('这里就是内容'+i);
	childSide.appendChild(boxChild);
	// var newSide = '<div class="newSide">这里就是内容</div>';

	// 添加图片
	var imgTest = document.createElement('img');
	imgTest.src = 'img.jpg';
	childSide.appendChild(imgTest);
	console.log(i);
	side.appendChild(childSide);
}

// side.appendChild(childSide);

side.removeChild(document.getElementById('newSide3'));

attr.onclick=function(){
	alert('1')
	side.removeChild(document.getElementById('newSide0'));
}


// var sideBox = document.createElement('div');
// sideBox.className = 'middle';
// var tmier = setInterval(function getNowTime(){
// 	// sideBox.removeChild();
// 	var childBox = document.createTextNode('');
// 	var nowTime = new Date().toLocaleTimeString();
// 	console.log(nowTime);
// 	var childBox = document.createTextNode(nowTime);
// 	console.log(childBox);
// 	sideBox.appendChild(childBox);
// 	box.appendChild(sideBox);
// },1000);


// 基本数据类型
// 字符串string
// 数字number
// 布尔boolean
// 对象object
// 	数组array
// 	函数function
// 	日期date
// 	正则表达式regexp
// undefined
// null
// symbol

//对象声明方法
var obj = new Object();
var obj = {};//对象字面量,优先使用

var obj = {
	name:"cateor",
	"for":"max",
	details:{
		color:"yellow",
		size:12
	}
}
console.log(obj.for,obj.details.color,obj.for,obj['for']);


function Person(name,age){
	this.name = name;
	this.age = age;
}
var You = new Person('You',24);

console.log(You.name)

// 从es5开始,对象属性都可以不用双引号,直接声明即可

// 数组是特殊的对象
// 创建数组
var a = new Array();
a[0] = 'dog';
a[1] = 'ship';
a[4] = 'now';
console.log(a,a[2]);

// 使用数组字面量
var b = ['a','b','c'];


// for循环遍历数组
// es5新增了遍历数组的另外方法
// forEach();
b.forEach(function(currentValue,index,array){
	console.log(currentValue);
	console.log(index);
	console.log(array);
	b[index] = index;
	console.log(b);
})

b.push(4);
console.log(b)

// 数组自带的方法
console.log(b.toString());
console.log(b.toLocaleString());
console.log(b.concat([1,2,3]));
console.log(b.join('sep'));  //通过指定sep分隔
console.log(b.pop());//删除并返回数组中最后一个元素
console.log(b.push(4),b);
console.log(b.reverse());//数组逆序(会更改原始数组)
console.log(b.shift());//删除并返回数组第一个元素
console.log(b.slice(0,2));//返回子数组,以start开头,end结束
console.log(b.sort()); //依据参数排序
console.log(b.splice(2,1));//从第2位开始删除一个元素;
console.log(b.unshift(10),b);//将值插入数组头部并返回新数组长度



// 函数理解
function add(x,y){
	var total = x + y;
	return total;
}

// 接收任意个参数的函数写法
function newAdd(){
	console.log(arguments);
	var sum = 0;
	for(var i=0,j=arguments.length;i<j;i++){
		sum += arguments[i];
	}
	return console.log(sum,sum/arguments.length);
}
newAdd(2,3,4,5,6,7,8,9);

// 允许使用任意函数对象的apply()方法来调用该函数,并传递给他一个包含参数的数组
function avg(arr){
	console.log(arr);
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum += arr[i];
	}
	return console.log(sum,sum/arr.length);
}
avg.apply(null,[2,3,4,5])
// apply()第二个参数是一个数组,将会被当做avg的参数

// js允许创建匿名函数
var avg = (function(){
	console.log(arguments);
	var sum = 0;
	for(var i=0,j=arguments.length;i<j;i++){
		sum += arguments[i];
	}
	return console.log(sum,sum/arguments.length);
})(1,2,3,4,5)
console.log(avg);

// 递归方式调用函数,处理树形结构非常有用
function countChars(elm){
	if(elm.nodeType ==3){
		return elm.nodeValue.length;
	}
	var count = 0;
	for (var i=0,child; child = elm.childNodes[i];i++){
		count += countChars(child);
	}
	return count;
}
// tips:javasc 的函数 是他们本身的对象,可以添加属性,更改属性

function Person(first,last){
	this.first = first;
	this.last = last;
}
Person.prototype.fullName = function(){
	return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function(){
	return this.last + ' ' + this.first;
}
var d = new Person('cooker','steve');
console.log(d.fullName());

// apply()/call()????


// javaScript 允许函数内部定义函数,并且他们可以访问父函数的作用域变量
function betterExampleNeeded(){
	var a=1;
	function oneMoreThanA(){
		return a+1;
	}
	return oneMoreThanA();
}
console.log(betterExampleNeeded());


// 闭包
function makerAdder(a){
	return function (b){
		return a+b;
	}
}
var x = makerAdder(5);
var y = makerAdder(20);
console.log(x(6),y(7))
;