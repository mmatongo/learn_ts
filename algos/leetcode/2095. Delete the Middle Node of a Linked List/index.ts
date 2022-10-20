class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  let length = 0;
  let currentNode = head;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  const middleIndex = Math.floor(length / 2);
  if (middleIndex === 0) {
    return head.next;
  }
  currentNode = head;
  for (let i = 0; i < middleIndex - 1; i++) {
    currentNode = currentNode.next;
  }
  currentNode.next = currentNode.next.next;
  return head;
}
