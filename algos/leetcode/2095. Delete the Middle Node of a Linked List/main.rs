impl Solution {
    pub fn delete_middle(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut len = 0;
        let mut cur = &head;
        while let Some(node) = cur {
            len += 1;
            cur = &node.next;
        }
        let mut cur = &mut head;
        for _ in 0..(len / 2 - 1) {
            cur = &mut cur.as_mut().unwrap().next;
        }
        cur.as_mut().unwrap().next = cur.as_mut().unwrap().next.as_mut().unwrap().next.take();
        head 
    }
}
