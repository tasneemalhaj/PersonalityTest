//Helper function
function each(coll, func) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   func(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   func(coll[key], key); 
             } 
       } 
 }

// Array of all the questions and choices
var questions = [
	{
	  questionText: "Q1",
	  choices: {
	    A: "A1",
	    B: "A2", 
	    C: "A3", 
	    D:"A4"
	  }
  },

	{
	  questionText: "Q2",
	  choices: {
	    A: "w1",
	    B: "w2", 
	    C: "w3", 
	    D:"w4"
	  }
	}, 

	{
	  questionText: "Q3",
	  choices: {
	    A: "B1",
		B: "B2", 
		C: "B3", 
		D:"B4"
		}
	}, 

  {
	  questionText: 'Q4',
	  choices: {
	    A: "F1",
		B: "F2", 
		C: "F3", 
		D:"F4"
		}
	}
];

//Array of objects of characteristics
var per1 = ["A1", "W1", "B1", "F1"];
var per2 = ["A2", "W2", "B2", "F2"];
var per3 = ["A3", "W3", "B3", "F3"];
var per4 = ["A4", "W4", "B4", "F4"];

//Hide result section
$('#resultDiv').hide();
//hide radio buttons
//$('.radioButtons').hide()

// user Obj
function User(name, age, email) {
	var user = {};

	//add states
	user.name = name;
	user.age = age;
	user.email = email;
	user.characteristics = [];

	//add methods
	//user.setInfo = setInfo;

	return user;
}

// methods declaration
// var setInfo = function (name, age, email){
// 	this.name = name;
// 	this.age = age;
// 	this.email = email;
// }

// make the input fields Required 
$("#name").attr("required", true);
$("#age").attr("required", true);
$("#email").attr("required", true);



// declare global obj 
var user1 = new User();
var i = 0;

//start button
$('#start').click(function() {
	//get the user Info
	var name = $('#name').val();
	var age = $('#age').val();
	var email = $('#email').val();


	if(name !== '' && age !== '' && email !== ''){

		$('.questions').css('visibility' , 'visible');
  	$('html, body').animate({ scrollTop: $(".questions").offset().top }, 1000);

	} else {
		alert("Please Fill All the Required Fields")
	}

	// add the user info to the user obj
	user1.name = name;
	user1.age = age;
	user1.email = email;
	
	//input validation
	var nameReg = new RegExp(/[a-zA-Z]/);
	var ageReg1 = new RegExp(/[0-9]/);
	var ageReg2 = new RegExp(/[^a-zA-Z]/);
	var emailReg = new RegExp(/[^@]/);

	// if(name.match(nameReg))

	//display the first question
	$('#qText').text(questions[0]["questionText"]);

	$('#l1').text(questions[0]["choices"].A);
	$('#l2').text(questions[0]["choices"].B);
	$('#l3').text(questions[0]["choices"].C);
	$('#l4').text(questions[0]["choices"].D);

	$('#ch1').val(questions[0]["choices"].A);
	$('#ch2').val(questions[0]["choices"].B);
	$('#ch3').val(questions[0]["choices"].C);
	$('#ch4').val(questions[0]["choices"].D);

	// $('#choices').append('<input type="radio" name="ch" id="ch1" class="radioButtons">' + questions[0]["choices"].A )
	// $('#choices').append('<input type="radio" name="ch" id="ch2" class="radioButtons">' + questions[0]["choices"].B )
	// $('#choices').append('<input type="radio" name="ch" id="ch3" class="radioButtons">' + questions[0]["choices"].C )
	// $('#choices').append('<input type="radio" name="ch" id="ch4" class="radioButtons">' + questions[0]["choices"].D )
  
	
});

var answer = "";
//Next button
$('#next').click(function() {


	answer = $("input[name='ch']:checked").val();
	console.log(answer);
	user1.characteristics[i] = answer;

	//var questionsArr = questions.slice(1);

	//clear the div
	//$('#choices').empty();



	// user1.characteristics[i] = answer;
	// console.log(user1.characteristics);

	i++;
	//display the next question
	$('#qText').text(questions[i]["questionText"]);

	$('#l1').text(questions[i]["choices"].A);
	$('#l2').text(questions[i]["choices"].B);
	$('#l3').text(questions[i]["choices"].C);
	$('#l4').text(questions[i]["choices"].D);

	$('#ch1').val(questions[i]["choices"].A);
	$('#ch2').val(questions[i]["choices"].B);
	$('#ch3').val(questions[i]["choices"].C);
	$('#ch4').val(questions[i]["choices"].D);
	//show the radio buttons
	//$('.radioButtons').show();
	//$('.lables').show();

	// $('#choices').append('<input type="radio" name="ch" id="ch1" class="radioButtons">' + questions[i]["choices"].A )
	// $('#choices').append('<input type="radio" name="ch" id="ch2" class="radioButtons">' + questions[i]["choices"].B )
	// $('#choices').append('<input type="radio" name="ch" id="ch3" class="radioButtons">' + questions[i]["choices"].C )
	// $('#choices').append('<input type="radio" name="ch" id="ch4" class="radioButtons">' + questions[i]["choices"].D )

 	if(i ===  questions.length-1){
		$("#next").attr("disabled", true);
		$('#prev').attr("disabled", false);
	}

	$('#prev').attr("disabled", false);




});


// Previous Button
$('#prev').attr("disabled", true);

$('#prev').click(function() {

	answer = $("input[name='ch']:checked").val();
	console.log(answer);
	user1.characteristics[i] = answer;

	//$('#choices').empty();

	i--;

	if(i === 0){
		$('#prev').attr("disabled", true);
		$('#next').attr("disabled", false);
	}
	
	//View the prev question 
	$('#qText').text(questions[i]["questionText"]);

	$('#l1').text(questions[i]["choices"].A);
	$('#l2').text(questions[i]["choices"].B);
	$('#l3').text(questions[i]["choices"].C);
	$('#l4').text(questions[i]["choices"].D);

	$('#ch1').val(questions[i]["choices"].A);
	$('#ch2').val(questions[i]["choices"].B);
	$('#ch3').val(questions[i]["choices"].C);
	$('#ch4').val(questions[i]["choices"].D);

	// $('#choices').append('<input type="radio" name="ch" id="ch1" class="radioButtons">' + questions[i]["choices"].A )
	// $('#choices').append('<input type="radio" name="ch" id="ch2" class="radioButtons">' + questions[i]["choices"].B )
	// $('#choices').append('<input type="radio" name="ch" id="ch3" class="radioButtons">' + questions[i]["choices"].C )
	// $('#choices').append('<input type="radio" name="ch" id="ch4" class="radioButtons">' + questions[i]["choices"].D )


})


// submit button
$('#submit').click(function() {
	

	answer = $("input[name='ch']:checked").val();
	console.log(answer);
	user1.characteristics[i] = answer;
	console.log(user1.characteristics);	

	$('#quiz').hide();
	//$('#choices').hide();
	$('#resultDiv').show()

	
	each(user1.characteristics, function(element, i) {
		each(per1, function(item, index) {
			if(element === item){
				$('#personality').text("A");

			}
		});
	});

	each(user1.characteristics, function(element, i) {
		each(per1, function(item, index) {
			if(element === item){
				$('#personality').text("A");

			}
		});
	});

	each(user1.characteristics, function(element, i) {
		each(per2, function(item, index) {
			if(element === item){
				$('#personality').text("B");

			}
		});
	});

	each(user1.characteristics, function(element, i) {
		each(per3, function(item, index) {
			if(element === item){
				$('#personality').text("C");

			}
		});
	});

	each(user1.characteristics, function(element, i) {
		each(per4, function(item, index) {
			if(element === item){
				$('#personality').text("A");

			}
		});
	});



});

//retry
$('#retry').click(function() {
	i = 0 ;
	$('#resultDiv').hide();
	$('#quiz').show();

	//display the first question
	$('#qText').text(questions[0]["questionText"]);

	$('#l1').text(questions[0]["choices"].A);
	$('#l2').text(questions[0]["choices"].B);
	$('#l3').text(questions[0]["choices"].C);
	$('#l4').text(questions[0]["choices"].D);

	$('#ch1').val(questions[0]["choices"].A);
	$('#ch2').val(questions[0]["choices"].B);
	$('#ch3').val(questions[0]["choices"].C);
	$('#ch4').val(questions[0]["choices"].D);

	if(i ===  questions.length-1){
		$("#next").attr("disabled", true);
		$('#prev').attr("disabled", false);
	}

	$('#prev').attr("disabled", true);
	$("#next").attr("disabled", false);




});




