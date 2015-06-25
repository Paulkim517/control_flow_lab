var securityQuestions = [{question:"When is your birthday?",expectedAnswer:"5/17/1990"},
                         {question:"What was your first car?",expectedAnswer:"SUV"},
                         {question:"What is your favorite animal?", expectedAnswer:"dog"}]

for(i=0;i<securityQuestions.length;i++){
    var interrogate = prompt(securityQuestions[i].question)
    
    if(interrogate!=securityQuestions[i].expectedAnswer){
        alert("I don't think so...");
        break

    }else{
        alert("Correct!")
    }
}


 

                                        