//boilerplate
$(document).ready( function() {

	$("body"); //selecting

	$("#exampleFormControlInput1").click( function(){
		console.log("accessing name");
	});

	$("#exampleFormControlInput2").click( function(){
		console.log("accessing email");
	});

	$("#exampleDataList").click( function(){
		console.log("accessing city");
	});

	$(".sendNow").click( function(){
		alert("Success! Request sent.");
	});

	$(".off").click( function(){
		$(".off").css("display", "none");
		$(".reminder").fadeOut()
		
	});

	$(".mailing").click( function(){
		alert("Success! Request sent.");
		$(".customMailRow").html("Thank you for subscribing to the mailing list! You will be hearing from us shortly. Keep an eye out on your email inbox. (:");
		$(".customMailRow").css("font-size", "14pt");
		$(".customMailRow").css("font-style", "italic");
		$(".customMailRow").css("background-color", "#ABEBC6");
	});

	$(".contributing").click( function(){
		alert("Success! Request sent.");

	});

} );
