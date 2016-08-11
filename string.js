function checkForDuplicates(a, b) {
	console.log("hh");
}

function name() {  
	console.log(this.lol);
}

var store = {
	items: 0,
	add : function() {
		this.items++;
		console.log();
	}
}

//store.add();

function x() {
	console.log(arguments);
}

//x({kyrre:30}, {ingvild:22});

//

function Node() {
	var next = null;
	var name = "";
}

function LinkedList() {
	var top = null;
	this.add = function(Lname) {
		if (top == null) { // if zero nodes in list
			var newNode = new Node; // create a new node object
			top = newNode; // make top point to newNode
			newNode.name = Lname;
			newNode.next = null;
			return;
		} else {	// if more than zero nodes in list
			var temp = top; // create a nodepointer called temp and set it to the top position
			while(temp.next != null) { //keep looping until we get to the last node
				temp = temp.next;
			}
			var newNode = new Node;
			temp.next = newNode;
			newNode.name = Lname;
			newNode.next = null;
			return;
		}
	};
	this.print = function() {
		var temp = top;
		if (temp == null) { // if empty linked list
			console.log("The LinkedList was empty");
			return;
		} else { // there do exists elements in linked list
			while (temp != null) { //while temp is not an empty node
				console.log(temp.name); //print out node name
				temp = temp.next;
			}
			return;
		}
	}
	this.deletePost = function(numb) {

	};
	this.isEmpty = function(number) {

	};
}

var l = new LinkedList();
l.add("Ingvildk");
l.add("Kayla");
l.add("Maria");
l.print();