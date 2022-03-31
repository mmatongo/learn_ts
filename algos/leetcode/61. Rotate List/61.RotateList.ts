function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;
  k = k % len;
  let curr = head;
  for (let i = 0; i < len - k - 1; i++) {
    curr = curr.next;
  }
  head = curr.next;
  curr.next = null;
  return head;
};