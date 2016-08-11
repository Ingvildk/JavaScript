var uuid = require('uuid-v4');

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

function Node(name,id) {
	this.next = null;
	this.name = name;
	this.id = id;
}

function LinkedList() {
	var top = null;
	this.add = function(Lname, Lid) {
		var newNode = new Node(Lname,Lid); // create a new node object
		if (top == null) { // if zero nodes in list
			top = newNode; // make top point to newNode
			newNode.next = null;
			return;
		} else {	// if more than zero nodes in list
			var temp = top; // create a nodepointer called temp and set it to the top position
			while(temp.next != null) { //keep looping until we get to the last node
				temp = temp.next;
			}
			temp.next = newNode;
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
				console.log(temp.name + "  "+ temp.id); //print out node name and id
				temp = temp.next;
			}
			return;
		}
	};
	this.deleteNode = function(name) {
		if (this.isEmpty() === true) {
			console.log("List was empty");
			return;
		}
		var temp = top;
		if (temp.name === name) { // if first node is match
			top = temp.next;	//move top pointer
			delete temp;
			return;
		}else {
			while(temp != null) {
				if(temp.next.name === name) {
					temp.next = temp.next.next;
					var deleteNode = temp.next;
					delete deleteNode;
					return;
				}else { // keep iterating through list
					temp = temp.next;
				}
			}
		}
		console.log("No matching nodes, nothing was deleted");
		return;
	};
	this.isEmpty = function(number) {
		if (top === null) {
			return true;
		}else {
			return false;
		}
	};
}

var l = new LinkedList();
l.add("Ingvildk", uuid());
l.add("Kayla",uuid());
l.add("Maria",uuid());
l.deleteNode("Kayla");
l.print();
