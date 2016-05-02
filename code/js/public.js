console.log(localStorage.flag)
if(localStorage.flag == 1){
	// 已经登录
	$("#login").hide();
	$("#user").html(localStorage.username);
	$("#user").css("display","block");
}else{
	localStorage.flag=0;	
}
//登录
$("#index_loginBtn").bind("click",function(){
var username = $("#username").val();
var password = $("#password").val();
console.log(localStorage.username);
console.log(localStorage.password);
if((username == localStorage.username) && (password == localStorage.password)){
localStorage.flag=1
}else{
localStorage.flag=0
}
console.log(localStorage.flag);
if(localStorage.flag == 1){
//登录成功
$("#login").hide();
$("#user").html($("#username").val());
$("#user").css("display","block");

$(".login_modal").modal("hide");
}else{
//登录失败
$("#index_loginFalse").show();
}
});
$("#index_loginOut").bind("click",function(){
//退出成功
localStorage.flag=0
$("#user").css("display","none");
$("#login").show();
});