window.onload = function() {
	// canvas技术的练习
	// 获取canvas对象
	var can = document.getElementById("myc");
	// 获取上下文环境对象context
	var cxt = can.getContext("2d");
	cxt.strokeStyle = "silver"
	//  开始绘制
	cxt.moveTo(25, 20);
	cxt.lineTo(50, 60);
	cxt.moveTo(25, 20);
	cxt.lineTo(50, 100);
	cxt.stroke();
	// 绘制描边矩形
	cxt.strokeStyle = "#DA70D6";
	cxt.strokeRect(30, 30, 100, 300);
	// 绘制填充矩形
	//  渐变点开始的x,y和结束的x,y
	var gradient = cxt.createLinearGradient(80, 80, 160, 160);
	gradient.addColorStop(0, "#DDA0DD");
	gradient.addColorStop(0.5, "#BA55D3");
	gradient.addColorStop(0.8, "#8A2BE2");
	gradient.addColorStop(1, "#7B68EE");
	// createLinearGradient() 方法创建线性的渐变对象。不加双引号
	cxt.fillStyle = gradient;
	cxt.fillRect(80, 80, 80, 80);
	// clearRect()方法来清空“指定矩形区域”。
	cxt.clearRect(90, 90, 10, 10);
	creatStar(cxt, 300, 50, 50, 25, gradient);
	cxt.fillStyle = gradient;
	cxt.fill();
}
function creatStar(cxt, x, y, R, r) {
	cxt.beginPath();
	for (var i = 0; i < 5; i++) {
		// 外围突出点坐标
		let X1 = Math.cos((18 + i * 72) * Math.PI / 180) * R;
		let Y1 = -Math.sin((18 + i * 72) * Math.PI / 180) * R;
		cxt.lineTo(X1 + x, Y1 + y);
		let X2 = Math.cos((54 + i * 72) * Math.PI / 180) * r;
		let Y2 = -Math.sin((54 + i * 72) * Math.PI / 180) * r;
		cxt.lineTo(X2 + x, Y2 + y);
	}
	cxt.closePath();
	cxt.stroke();

}