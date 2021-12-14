// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0){
        return []
    }
    let top =0;
    let left=0;
    let bottom=matrix.length-1;
    let right=matrix[0].length-1;
    let direction="right";
    let number=[];
    while(top<=bottom&&left<=right){
        if(direction==="right"){
            for(let i=left;i<=right;i++){
                number.push(matrix[top][i]);
            }
            direction="down";
            top++;
        }else if(direction==="down"){
            for(let i=top;i<=bottom;i++){
                number.push(matrix[i][right]);
            }
             direction="left";
             right--;
        }else if(direction==="left"){
            for(let i=right;i>=left;i--){
                number.push(matrix[bottom][i]);
            }
             direction="top";
             bottom--;
        }else if(direction==="top"){
            for(let i=bottom;i>=top;i--){
                number.push(matrix[i][left]);
            }
             direction="right";
             left++;
        }
    }
    return number;
};
