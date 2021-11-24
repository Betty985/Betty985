// 删除链表的倒数第 N 个结点
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//  双指针
var removeNthFromEnd = function(head, n) {
// dummy可以解决链表只有一个节点的问题
    let dummy=new ListNode();
    dummy.next=head;
    let n1=dummy,
    n2=dummy;
    // n1 n2间隔n+1,n1就是倒数第n个节点的前一个节点，n2指向链表最后一个节点的下一个节点也就是null
    for(let i=0;i<=n;i++){
        n2=n2.next;
    }
    while(n2!=null){
        n1=n1.next;
        n2=n2.next;
    }
    n1.next=n1.next.next;
    return dummy.next;
};
