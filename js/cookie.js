//cookie的功能:
//功能一:添加cookie的函数
function addCookie (cookieKey,cookieValue,cookieSeconds) {
	document.cookie = cookieKey + '=' + cookieValue 
	+ ';max-age=' + cookieSeconds;
}
//功能二:删除cookie的函数
function deleteCookie (cookieKey) {
//	方式一:
//	document.cookie = cookieKey + '=;max-age=-1';
//方式二：
 addCookie(cookieKey,"",-1);
}
//功能三：通过key值获取cookie中该key值对应的
//value值的函数
function getCookie (cookieKey) {
	//使用“ ；”进行分割
var arr = document.cookie.split(';');
for (var i = 0;i < arr.length;i++) {
//	使用"="分割
var arr2 = arr[i].split('=');
// arr2[0] 存储的key值
//trim() 函数可以去除字符串中的前后空格
if (arr2[0].trim() == cookieKey) {
	return arr2[1].trim();//返回key值对应的value
}
}
}
//判断cookie是否存在
//也就是该key值对应的键值对是否存在
function isCookieExist (cookieKey) {
	//使用;进行分割
	var arr = document.cookie.split(';');
	for (var i = 0;i < arr.length;i++) {
		//使用 = 分割
		var arr2 = arr[i].split('=');
		if (arr2[0].trim() == cookieKey) {
			return true;//存在该key值
		}
	}
	return false;
}


