
function Node (elem) {
    this.next = null;
    this.elem = elem;
}


function LinkedList() {
    var head = null;

    this.add = function (item) {

        var node = new Node(item);

        if (head === null) {
            head = node;
        } else {
            var current = head;

            while (current.next !== null) {
                current = current.next;
            }

            head.next = node;
        }

    }

    this.deleteAll = function () {
    }

    this.getLength = function () {
        return 0;
    }
}


module.exports = LinkedList;

