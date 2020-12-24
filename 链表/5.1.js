// 链表：首先要确定next指针链接向哪里

// 206
function NodeList(val) {
  this.val = val
  this.next = null
}
function createList(arr) {
  var head = new NodeList(arr[0])
  var currentNode = head
  for (var i = 1; i < arr.length; i++) {
    currentNode.next = new NodeList(arr[i])
    currentNode = currentNode.next
  }
  return head
}
function printList(head) {
  var currentNode = head
  var str = ''
  while (currentNode) {
    str += currentNode.val + '->'
    currentNode = currentNode.next
  }
  str += 'NULL'
  console.log(str)
}
var arr = [1, 2, 3, 4, 5]
var head = createList(arr)
printList(head)


var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  var pre = null
  var cur = head
  while (cur) {
    var next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  var head = pre
  return head
}

var head2 = reverseList(head)
printList(head2)


// 92