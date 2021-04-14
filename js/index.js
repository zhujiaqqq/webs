//获取banner元素
var a = document.getElementById('banner');
//定义图片的路径，存放到数组
var url = [
	'url(img/banner_1.jpg)', 'url(img/banner_2.jpg)', 'url(img/banner_3.jpg)', 'url(img/banner_4.jpg)',
	'url(img/banner_5.jpg)'
];

//定义显示函数
function pic(index) {
	a.style.backgroundImage = url[index];
}
