/*
	A Testing Module for Stack Objects.
	the testing functions are:
	print()
	isEmpty()
	len()
	lastElement()
	popAll()
*/
function Stack() {
	this.array = [];
	this.top = null;
	this.push = function(el) {
		var newArray = [];
		newArray.push(el);
		for (var i=1; i<=this.len(); i++) {
			newArray.push(this.array[i-1]);
		}
		this.array = newArray;
		this.top = this.array[0];
		return;
	}
	this.pop = function() {
		var temp = this.array[0];
		var newArray = [];
		for(var i=1; i<this.len(); i++) {
			newArray.push(this.array[i]);
		}
		this.array = newArray;
		return temp; 
	}
	this.print = function() {
		for (var i=0;  i < this.len(); i++) {
			console.log(this.array[i]);
		}
		return;
	}
	this.isEmpty = function() {
		if (this.len() === 0) {
			return true;
		}else {
			return false;
		}
	}
	this.len = function() {
		var len = this.array.length;
		return len;
	}
	this.lastElement = function() {
		if (!this.isEmpty()){
			return this.array[this.len()-1];
		}else {
			return null;
		}
	}
  this.popAll = function() {
  	var l = this.len();
  	for (var count=0; count < l; count++) {
  		this.pop();
  	}
  	return;
  }
}

/*
	Function: testing that the module works correctly

var temp = new Stack();
temp.push(1);
temp.push(2);
temp.push(3);
temp.push(4);
temp.push(5);
temp.push(6);
temp.push(7);
temp.push(8);

temp.print();

temp.popAll();
console.log("After popAll():");
temp.print();

console.log(temp.isEmpty());
*/

