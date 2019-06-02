$(function() {
	$("#contents").load("home.php");
	$("#home").click(function(){
		$("#contents").load("home.php");
	});
	$("#courses").click(function(){
		$("#contents").load("courses.php");
	});
	$("#projects").click(function(){
		$("#contents").load("projects.php");
		$("html,body").animate({scrollTop :0},500);
	});
	$("#resume").click(function(){
		$("#contents").load("resume.php");
	});
	$("#contact").click(function(){
		$("#contents").load("contact.php");
	});

	
	
	// copyable auto-select-all
});
