// 83
function ListNode(val) {
  this.val = val
  this.next = null
}
function createList(arr) {
  var head = new ListNode(arr[0])
  var currentNode = head
  for (var i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i])
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



var deleteDuplicates = function (head) {
  if (!head) return null
  var cur = head
  var val = cur.val
  var next = cur.next
  while (next !== null) {
    if (next.val !== val) {
      cur.next = next
      cur = next
      next = next.next
      val = cur.val
    } else {
      next = next.next
      cur.next = next
    }
  }
  return head
};

var arr = [1, 1, 2, 3, 3]
var head = createList(arr)
var head2 = deleteDuplicates(head)

// 86
// 如果在原链表上修改呢？
var partition = function (head, x) {
  var small_pre = new ListNode(0)
  var big_pre = new ListNode(0)
  var small = small_pre
  var big = big_pre
  while (head) {
    if (head.val < x) {
      small.next = new ListNode(head.val)
      small = small.next
    } else {
      big.next = new ListNode(head.val)
      big = big.next
    }
    head = head.next
  }
  small.next = big_pre.next
  return small_pre.next
};


// 328
var oddEvenList = function (head) {
  if (!head) return null
  var type = 'even'
  var next = head.next,
    nodeOdd = head,
    nodeEven = head.next,
    cur
  while (next) {
    cur = next
    next = next.next
    if (type == 'odd') {
      nodeEven.next = cur.next
      cur.next = nodeOdd.next
      nodeOdd.next = cur
      nodeOdd = cur
      type = 'even'
    } else {
      nodeEven = cur
      type = 'odd'
    }
  }
  return head
};




// 2

var addTwoNumbers = function (l1, l2) {
  var l3 = new ListNode(0),
    head1 = l1,
    head2 = l2,
    head3 = l3,
    cur = head3,
    add = 0,
    sum = 0
  while (head1 || head2) {
    cur.next = new ListNode(0)
    if (head1 && head2) {
      sum = head1.val + head2.val + add
      if (sum >= 10) {
        sum -= 10
        add = 1
      } else {
        add = 0
      }
      cur.val = sum
      head1 = head1.next
      head2 = head2.next
    } else if (head1 && !head2) {
      sum = head1.val + add
      cur.val = sum
      add = 0
      head1 = head1.next
    } else {
      sum = head2.val + add
      cur.val = sum
      add = 0
      head1 = head2.next
    }
    cur = cur.next
  }
  if (add == 1) {
    cur.val = 1
  } else {
    console.log(cur)
    console.log(add)
    cur = null
  }
  return head3
};



function ListNode(val) {
  this.val = val
  this.next = null
}
function createList(arr) {
  var head = new ListNode(arr[0])
  var currentNode = head
  for (var i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i])
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
var arr = [2, 4, 3]
var arr2 = [5, 6, 4]
var head1 = createList(arr)
var head2 = createList(arr2)
printList(head)
var head3 = addTwoNumbers(head1, head2)
printList(head3)

// 455
