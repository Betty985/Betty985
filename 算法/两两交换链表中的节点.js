// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummy = new ListNode();
    dummy.next = head;
    let curr = dummy;
    // 如果最后只有一个节点就不需要交换了
    while (curr.next !== null && curr.next.next !== null) {
        let n1 = curr.next;
        let n2 = curr.next.next;
        curr.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        curr = n1;
    }
    return dummy.next;
};

