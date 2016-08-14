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
		this.array.push(el);
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
  	for (var count=1; count < this.len(); count++) {
  		this.pop();
  	}
  	return;
  }
}

var temp = new Stack();
temp.push(4);
temp.push(4);
temp.push(4);
temp.push(4);
temp.push(4);
temp.push(4);
temp.push(4);
temp.push(4);

temp.popAll();

console.log(temp.isEmpty());


