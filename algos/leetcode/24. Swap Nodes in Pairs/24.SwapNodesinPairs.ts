class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur && cur.next) {
    let next = cur.next;
    prev.next = next;
    cur.next = next.next;
    next.next = cur;
    prev = cur;
    cur = cur.next;
  }
  return dummy.next;
};