
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var reverseEven = function(head, n) {
      if (!head || !head["next"]) {
    return head;
  }

  var prev = null;
  var curr = head;
  var last = null;
  var rev_end = null;
  var group_count = 0;

  while (curr) {
    rev_end = curr;
    last = prev;
    var count = 0;

    while (curr && count < group_count + 1) {
      prev = curr;
      curr = curr["next"];
      count += 1;
    }

    if (count % 2 == 0) {
      last["next"] = reverse(rev_end, curr);
      rev_end["next"] = curr;
      prev = rev_end;
    }

    group_count += 1;
  }

  return head;

  // Define the reverse function inside the reverseEvenLengthGroups function
  function reverse(head, until) {
    var prev2 = null;
    var p2 = head;

    while (p2 != until) {
      var q2 = p2["next"];
      p2["next"] = prev2;
      prev2 = p2;
      p2 = q2;
    }

    return prev2;
  }
    
}

