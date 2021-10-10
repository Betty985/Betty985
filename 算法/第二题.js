var addTwoNumbers = function(l1, l2) {
//   ListNode函数实例化
    let dummy=new ListNode();
//  为了避免dummy丢掉之前的值，所以把它复制给curr，相当于当前指针
    let curr=dummy;
//  记录需要进位的值
    let carry=0;
//  两个链表有一个非空，进入循环
    while(l1!==null||l2!==null){
//  l1 l2和carry的和
        let sum=0;
        if(l1!==null){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2!==null){
            sum+=l2.val;
            l2=l2.next;
        }
        sum+=carry;
//      一个链表，值是个位数
        curr.next=new ListNode(sum%10);
//     取整得到十位数  
        carry=Math.floor(sum/10);
//      curr向后移动
        curr=curr.next;
    }
    if(carry>0){
         curr.next=new ListNode(carry);
    }
    return dummy.next;
};
