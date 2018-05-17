// var box = {
// 	"width":100,
// 	"height":200,
// 	"border":"2px #ddd solid",
// 	"size":1
// };
// for(var key in box){
// 	console.log('1',key);
// }

// console.log('2',Object.getOwnPropertyNames(box));

// var newBox = [
// 	{
// 		"width":1,
// 		"height":2,
// 	},{
// 		"width":3,
// 		"height":4,
// 	}
// ]

// newBox.forEach((val) =>{
// 	val.newLine = '111';
// 	console.log(val);
// })

// var a =0;
// for(var i=0; i<newBox.length; i++){
// 	a++;
// 	newBox[i].newShare = a;
// }
// console.log(newBox)

// 循环
var base = {
	"interal":3,
	"order":2,
	"time":"15:00:00"
}
console.log('base');

var work = [
	{
		"workId":1,
		"order":1
	},
	{
		"workId":2,
		"order":2
	},
	{
		"workId":3,
		"order":3
	}
]
console.log('work');

var student = [];
// var studentWork = {};
console.log('student');
console.log(base);
console.log(work);
var year = String(new Date().getFullYear());
var month = String(new Date().getMonth()+1);
if(Number(month)<10){
	month = '0'+month;
}
var day =String(new Date().getDate());
if(Number(day)<10){
	day = '0' + day;
}
var now = year+'-'+month+'-'+day;
console.log(now);

for(var i=0;i<work.length; i++){
	var studentWork = {};
	// if(i>0){
	// 	break;
	// }
	console.log('for');
	studentWork['order'] = work[i].order;
	studentWork['workId'] = work[i].workId;
	if(i==0){
		day = String(Number(day)+1);
		if(Number(day)<10){
			day = '0' + day;
		}
	} else {
		day = String(Number(day)+base.interal);
		if(Number(day)<10){
			day = '0' + day;
		}
	}
	studentWork['sentTime'] = year+'-'+month+'-'+day + ' ' + base.time;
	console.log(studentWork);
	student[i] = studentWork; 
	console.log(student);
}

console.log('end',new Date().getDate());
console.log(student);


// 闭包
// var newfunc = function(){
// 	var start = 1;
// 	return end:function(){
// 	};
// }
// newfunc();
// 1匿名自我调用的函数 
(function(){
    var hello="hello,world";
    function welcome(hi){
        console.log(hi);        //解析到作用域链的第一个对象的属性
        console.log(hello);    //解析到作用域链的第二个对象的属性
    }
    welcome("It's easy");
})();

// 2 以下函数实际上是一个 匿名函数 (函数没有名称)。
// 函数存储在变量中，不需要函数名称，通常通过变量名来调用。
var foo = function(){
    var name = "exe";
    return function inner(){
        console.log( name );
    }
}
var bar = foo();//这里虽然得到的是函数inner的引用，而不是那一坨代码
bar();//这里开始执行inner函数，回头看看上面加粗的那句话

// 3
var day=0;
var timer=setInterval(dayChanges(),(24*60*60*1000)); //定时器，
function dayChanges(){
	day++;
} //每过24小时 次函数运行一次，我的年龄又多了一天
function isMyHome(){ //我家 
	var myAge=0; //我的身份证信息
	if(day%365==0){ //我的年龄变化
		myAge+=1;
	}
	function myHomeKey(){ // 我家钥匙
		return myAge; //return 就是间谍猫
	}
	return myHomeKey; //给你我家的钥匙。
}
var key=isMyHome(); //你拿到我家钥匙
var you=key();     //得到年龄。


// var add = (1)();
// console.log(add());

// var myFunction = new Function("a", "b", "return a * b");
// myFunction(4,3)
// var myFunction = function (a, b) {return a * b}
// var x = myFunction(4, 3);

// 实例
// 需要查清楚为什么会返回1
var getNum;//------------------------1
function getCounter() { // ----------2
	// debugger;
    var n = 1; 
	// debugger;
    var inner = function () { return n++; }
	// debugger;
    return inner;

}

getNum = getCounter();//------------3
	// debugger;
console.log(getNum()); //1 ---------4
	// debugger;
console.log(getNum()); //2 ---------5


// 闭包基础
function showName(firstName,lastName){
	var name = 'your name is ';
	function makeFullName(){
		return name + firstName + ' ' + lastName;
	}
	return console.log(makeFullName());
}
showName('zhang','guorong');

// 闭包改变存储值
// function celebrityID () {
//   var celebrityID = 999;
//   //用内部函数返回一个对象
//   //所有的内部函数可以访问外部函数的变量
//   return {
//     getID: function ()  { //这个内部函数将返回更新celebrityID变量
//       return celebrityID;
//       //它将返回celebrityID的当前值，即使changeTheID函数更改
//    },
//     setID: function (theNewID)  { //这个内部函数会随时改变外部函数的变量
//       celebrityID = theNewID;
//     }
//   }
// ​}
// ​
// ​var mjID = celebrityID (); // 此时，该celebrityID外部函数返回。
// mjID.getID(); // 999​
// mjID.setID(567); // 改变外部函数变量
// mjID.getID(); // 567

function celebrityId(){
	var celebrity = 111;
	return {
		getId:function(){
			return celebrity;
		},
		setId:function(theNewId){
			celebrity = theNewId;
			console.log(celebrity);
		}
	}
}
var newCelebrity = celebrityId();
newCelebrity.getId();
console.log(newCelebrity.getId())
newCelebrity.setId(432);
newCelebrity.getId();
console.log(newCelebrity.getId())
