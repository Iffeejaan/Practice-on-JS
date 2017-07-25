var countdown = 2;
var current_question = 0;
var score = 0;
var wrong = 0;
var questions = [
    {
        'question':'Inside which HTML element do we put the JavaScript?',
        'options':['javascript','scripting','script','js'],
        'answer':'script'
    },
    {
        'question':'Where is the correct place to insert a JavaScript?',
        'options':[
                 'both the head section and the body section are correct',
                 'the head section ',
                 'in the end of body section',
                 'none of these'
                 ],
        'answer':'in the end of body section'
    },
    {
        'question':'Write full abbr for js',
        'options':['justsure','javascript','johnsmith'],
        'answer':'javascript'
    },
    {
        'question':'Which operator is used to assign a value to a variable?',
        'options':['x','-','*','='],
        'answer':'='
    },
    {
        'question':'Is JavaScript case-sensitive?',
        'options':['yes','sometimes','no','none'],
        'answer':'yes'
    },{
        'question':'The URL property belongs to which of the following object?',
        'options':['document ','Element','Location ',' All of the mentioned'],
        'answer':'document'
    },
    {
        'question':'Javascript is _________ language.',
        'options':['Programming','Application','None of These','Scripting'],
        'answer':'Scripting'
    },
    {
        'question':'JavaScript Code is written inside file having extension __________.',
        'options':['.jvs','.javascript','.js','.jsc'],
        'answer':'yes'
    }
];
function startNow(){    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username.length >= 5 && password.length >= 5){
        document.getElementsByClassName('profile_username')[0].innerText = 'Welcome ' + document.getElementById('username').value;    
        document.getElementsByClassName('profile_username')[1].innerText = 'Welcome ' + document.getElementById('username').value;    
        document.getElementById('main_welcome').style = 'display:none';
        document.getElementById('main_instruction').style = 'display:block';
    }
    else {
        alert('Username/Password length can not be empty and less than 5');
    }

}
function startQuiz(){
    document.getElementById('main_instruction').style = 'display:none';
    document.getElementById('main').style = 'display:block';
        // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + countdown);
    // Update the count down every 1 second
    var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;    
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
            showResult();
        }
    }, 1000);
}

var q_div = document.getElementById('question');

function show_question(current_question){
    var counter = current_question+1;
    
    var qst = '<h4>Question#'+counter+': '+questions[current_question].question+'</h4>';
    var opt = '<ul>';
    for(i=0;i<questions[current_question].options.length;i++){
        opt+= '<li><label><input name="my_answer" type="radio" value="'+questions[current_question].options[i]+'">'+questions[current_question].options[i]+'</label></li>';
    }
    opt+= '</ul><br><center><button class="next-btn" onclick="check_answer('+current_question+')">Next</button></center>';
    q_div.innerHTML = qst + opt;
}

show_question(current_question);

function check_answer(current_question){
    var answer = false;
    var user_selected = false;
    var your_answer = document.getElementsByName('my_answer');
    var actual_answer = questions[current_question].answer;
    for (i=0;i<your_answer.length;i++){
        if (your_answer[i].checked){
            user_selected = true;
            my_answer = your_answer[i].value;
            if (actual_answer == my_answer){
                answer = true;
            }
        }
    }

    if (user_selected == false){
        alert('Please select one answer.');
        return false;
    }

    current_question+=1;
    if (answer) {                
        score +=10;
    } else {
        wrong +=1;
    }

    if (current_question < questions.length){
        show_question(current_question);
    } else  {
        showResult();
    }
    var q_w = document.getElementById('wrong').innerHTML = wrong;
    var q_score = document.getElementById('score').innerHTML = score;
}

function showResult(){
    q_div.innerHTML = '<center><h1>Test Completed. Your total score is :'+score+'</h1><p>With '+wrong+' wrong answers</p><center>';
}











