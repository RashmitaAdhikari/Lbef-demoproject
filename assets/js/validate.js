// $(document).ready(function(){
// 	$('#stagecheck').hide();
// 	$('#durationcheck').hide();
// 	$('#videotitlecheck').hide();
// 	$('#videodescheck').hide();
// 	$('#videouplcheck').hide();

// 	var stage_err = true;
// 	var duration_err = true;
// 	var videotitle_err = true;
// 	var videodes_err = true;
// 	var videoupl_err = true;

// 	$('#stagenames').keyup(function(){
// 		stagename_check();
// 	});

// 	function stagename_check(){
// 		var stage_val = $('#stagenames').val();
// 		if(stage_val.length == ''){
// 			$('#stagecheck').show();
// 			$('#stagecheck').html("Please choose stage");
// 			$('#stagecheck').focus();
// 			$('#stagecheck').css("color","red");
// 			$('#stagenames').css({"color":"red" ,"border": "1px solid red"});
// 			stage_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#stagecheck').hide();
// 		}
// 	}

// 	$('#duration').keyup(function(){
// 		durationname_check();
// 	});

// 	function durationname_check(){
// 		var duration_val = $('#duration').val();
// 		if(duration_val.length == ''){
// 			$('#durationcheck').show();
// 			$('#durationcheck').html("Please choose duration");
// 			$('#durationcheck').focus();
// 			$('#durationcheck').css("color","red");
// 			$('#duration').css({"color":"red" ,"border": "1px solid red"});
// 			duration_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#durationcheck').hide();
// 		}
// 	}

// 	$('#videodes').keyup(function(){
// 		videodes_check();
// 	});

// 	function videodes_check(){
// 		var videodes_val = $('#videodes').val();
// 		if(videodes_val.length == ''){
// 			$('#videodescheck').show();
// 			$('#videodescheck').html("Please enter video description");
// 			$('#videodescheck').focus();
// 			$('#videodescheck').css("color","red");
// 			$('#videodes').css({"color":"red" ,"border": "1px solid red"});
// 			videodes_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#videodescheck').hide();
// 		}
// 		if((videodes_val.length < 15 )){
// 			$('#videodescheck').show();
// 			$('#videodescheck').html("video description is too short");
// 			$('#videodescheck').focus();
// 			$('#videodescheck').css("color","red");
// 			videodes_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#videodescheck').hide();
// 		}
// 	}


// 	$('#videotitle').keyup(function(){
// 		videotitle_check();
// 	});

// 	function videotitle_check(){
// 		var videotitle_val = $('#videotitle').val();
// 		if(videotitle_val.length == ''){
// 			$('#videotitlecheck').show();
// 			$('#videotitlecheck').html("Please enter video title");
// 			$('#videotitlecheck').focus();
// 			$('#videotitlecheck').css("color","red");
// 			$('#videotitle').css({"color":"red" ,"border": "1px solid red"});
// 			videotitle_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#videotitlecheck').hide();
// 		}
// 		if((videotitle_val.length < 4 )){
// 			$('#videotitlecheck').show();
// 			$('#videotitlecheck').html("video title is too short");
// 			$('#videotitlecheck').focus();
// 			$('#videotitlecheck').css("color","red");
// 			videotitle_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#videotitlecheck').hide();
// 		}
// 	}

// 	$('#videoupl').keyup(function(){
// 		videoupl_check();
// 	});

// 	function videoupl_check(){
// 		var videoupl_val = $('#videoupl').val();
// 		if(videoupl_val.length == ''){
// 			$('#videouplcheck').show();
// 			$('#videouplcheck').html("Please upload video");
// 			$('#videouplcheck').focus();
// 			$('#videouplcheck').css("color","red");
// 			$('#videoupl').css({"color":"red" ,"border": "1px solid red"});
// 			videoupl_err = false;
// 			return false;
// 		}
// 		else{
// 			$('#videouplcheck').hide();
// 		}
// 	}

// 	$('#submitbtn').click(function(){
		
// 		stage_err = true;
// 		duration_err = true;
// 		videotitle_err = true;
// 		videodes_err = true;
// 		videoupl_err = true;

// 		stagename_check();
// 		durationname_check();
// 		videotitle_check();
// 		videodes_check();
// 		videoupl_check();

// 		if((stage_err == true)){
// 			return true;
// 		}
// 		else{
// 			return false;
// 		}
// 	});	
// });