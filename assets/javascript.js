function rand_char() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 26), 1);
}

var letter=rand_char();
var prevGuesses=[];
var winCount=0;
var loseCount=0;
var guess=10;
var wasLetter=true;
var alreadyGuessed=false;
var index=0;
var taunts=["And I wasn't even trying!", "Are you crying yet?", "Foolish human.", "That was fun!", "You're not very good at this.", "This is why you'll be replaced by a robot some day.", "<sarcasm> Wow, what a shock. </sarcasm>"];
var excuses=["The sun was in my eyes!", "I was distracted by my pet cat!", "I wasn't even really trying.", "Well yeah, I was going easy on you.", "You must have cheated!", "You just got lucky."];



      document.onkeyup=function(input){
        document.getElementById("win").innerHTML=winCount;
        document.getElementById("loss").innerHTML=loseCount;
        document.getElementById("guesses").innerHTML=guess;

        if(input.key!='a' && input.key!='b' && input.key!='c' && input.key!='d' && input.key!='e' && input.key!='f' && input.key!='g' 
          && input.key!='h' && input.key!='i' && input.key!='j' && input.key!='k' && input.key!='l' && input.key!='m' && input.key!='n' 
          && input.key!='o' && input.key!='p' && input.key!='q' && input.key!='r' && input.key!='s' && input.key!='t' && input.key!='u' 
          && input.key!='v' && input.key!='w' && input.key!='x' && input.key!='y' && input.key!='z' ){
            alert("That's... not even a letter. Still counts as a guess, though."); 
            wasLetter=false;
          //break;         
        }
        if(input.key===letter){
          document.getElementById("end").innerHTML="";
          index=(Math.floor(Math.random() * 6));
          alert("You won? "+ excuses[index]+" ...I want a rematch!");
          winCount++;
          document.getElementById("win").innerHTML=winCount;
          guess=10;
          document.getElementById("guesses").innerHTML=guess;
          letter=rand_char();
          prevGuesses=[];
          
        }
        else{
          if (wasLetter){
            for(var i=0; i<prevGuesses.length; i++){
              if (input.key===prevGuesses[i]){
                alert("You already guessed that letter. But if you insist, I'll deduct a guess again.");
                alreadyGuessed=true;
              }
            }
            if(!alreadyGuessed){
              document.getElementById("end").innerHTML=(document.getElementById("end").innerHTML)+input.key+", ";  
              prevGuesses.push(input.key); 
            }         
          }
          else{
            wasLetter=true;
          }
          guess--;
          alreadyGuessed=false;
          document.getElementById("guesses").innerHTML=guess;


          if(guess===0){
            document.getElementById("end").innerHTML="";
            index=(Math.floor(Math.random() * 7));
            alert("You lose! "+taunts[index]+" Come on, I'll give you another chance.");
            guess=10;
            loseCount++;
            document.getElementById("loss").innerHTML=loseCount;
            letter=rand_char();
            prevGuesses=[];
          }

        }
        
      }
