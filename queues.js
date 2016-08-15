/*
	A Testing Module for Queue Objects.
	the testing functions are:
	push-/pop()
	print()
	isEmpty()
	len()
	lastElement()
	popAll()
*/
function Queue() {
	this.front = null;
	this.back = null;
	this.storage = [];
	this.pop = function() {
		var temp = storage[0];
		var newStorage = [];
		for (var i=1; i<this.len(); i++) {
			newStorage.push(this.storage[i]);		
		}
	this.storage = newStorage;
		return temp;
	}
	this.push = function(el) {
		this.storage.push(el);
		this.front = this.storage[0];
		this.back = this.storage[this.len()-1];
	}
	this.pop = function() {
		var obj = this.storage[0];
		var newStorage = [];
		var len = this.len() -1 ;
		for (var index=0; index<len; index++) {
			newStorage.push(this.storage[index+1]);
		}
		this.storage = newStorage;
		this.front = this.storage[0];
		this.back = this.storage[this.len()-1];		
		return obj;
	}
	this.print = function() {
		for (var i=0;  i < this.len(); i++) {
			console.log(this.storage[i]);
		}
		return;
	}
	this.len = function() {
		var len = this.storage.length;
		return len;
	}
	this.isEmpty = function() {
		if (this.len() === 0) {
			return true;
		}else {
			return false;
		}
	}
	this.lastElement = function() {
		return back;
	}
	this.firstElement = function() {
		return front;
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
var Q = new Queue();
Q.push(1);
Q.push(2);
Q.push(3);
Q.push(4);
Q.push(5);
Q.push(6);
Q.push(7);
Q.push(8);

Q.print();

Q.pop();
Q.print();
*/