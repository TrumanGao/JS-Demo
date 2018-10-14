// 获取左侧盒子
var oBox1 = document.getElementById("box1");
// 获取放大镜
var oTool = document.getElementById("tool");
// 获取右侧盒子
var oBox2 = document.getElementById("box2");
// 获取左侧小图
var oSmall = document.getElementById("small");
// 获取右侧大图
var oBig = document.getElementById("big");
// 设置右侧盒子的高度

// 添加鼠标移入事件
oBox1.onmouseenter = function(){
	oTool.className = "active";
	oBox2.className = "active";
	// 设置右侧盒子高度  注:只能用这种写法
	oBox2.style.height = oBox2.offsetWidth / oSmall.offsetWidth * oBox1.offsetHeight + "px";
}

// 添加鼠标移动事件
oBox1.onmousemove = function(e){
	// 计算放大镜的left和top值
	var toolX = e.clientX - this.offsetLeft - oTool.offsetWidth / 2;
	var toolY = e.clientY - this.offsetTop - oTool.offsetHeight / 2;
	// console.log(toolX, toolY);
	// 判断放大镜的left和top值有没有超出边界
	if(toolX < 0){
		toolX = 0;
	};
	if(toolY < 0){
		toolY = 0;
	};
	if(toolX > oBox1.offsetWidth - oTool.offsetWidth){
		toolX = oBox1.offsetWidth - oTool.offsetWidth;
	};
	if(toolY > oBox1.offsetHeight - oTool.offsetHeight){
		toolY = oBox1.offsetHeight - oTool.offsetHeight;
	}
	
	// 设置放大镜的left和top值
	oTool.style.left = toolX + "px";
	oTool.style.top = toolY + "px";
	
	// 计算移动比例：放大图片可移动最大距离 / 放大镜可移动最大距离
	var scale1 =(oBig.offsetWidth - oBox2.offsetWidth) / (oSmall.offsetWidth - oTool.offsetWidth);
	var scale2 =(oBig.offsetHeight - oBox2.offsetHeight) / (oSmall.offsetHeight - oTool.offsetHeight);
	
	oBig.style.left = - toolX * scale1 + "px";
	oBig.style.top = - toolY * scale2 + "px";
}

// 添加鼠标移出事件 (注：要用onmouseleave事件。鼠标移入放大镜区域也算onmouseout，触发display:none)
oBox1.onmouseleave = function(){
	oTool.className = "";
	oBox2.className = "";
}

// offsetWidth, offsetHeight
// 可以获取大小,无法设置大小（只读）
// offsetLeft, offsetTop
// 可以获取left值和top值（参照相对定位的位置），无法设置(只读)

// offsetParent 获取父元素
// parentNode 按照标签关系直接获取父元素
// offsetParent 按照定位的参照物获取上级元素

