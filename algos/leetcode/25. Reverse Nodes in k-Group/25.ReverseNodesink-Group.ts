class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k < 2) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  let count = 0;
  while (cur) {
    count++;
    if (count % k === 0) {
      prev = reverse(prev, cur.next);
      cur = prev.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;

  function reverse(prev: ListNode, next: ListNode) {
    let cur = prev.next;
    let temp = cur.next;
    while (temp !== next) {
      cur.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
      temp = cur.next;
    }
    return cur;
  }
};