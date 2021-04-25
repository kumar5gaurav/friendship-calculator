function checkfriendsper(){

  var name = document.getElementById('name').value;
  var lname = document.getElementById('lname').value;

  if(name == "")
  {
       alert('Please enter your name');   
  }
  else if (name.length <=2 )
   {
       alert('Min length is 3')                                                
  }
  else if(name.match(/[0-9]/g))
  {
       alert('Numbers are not allowed');
  }

 else if(lname == "")
  {
       alert('Please enter your friend`s name');   
  }

  else if (lname.length <=2 ) 
  {
      alert('Min lenght is 3')
  }
  else if(lname.match(/[0-9]/g))
  {
      alert('Numbers are not allowed');
  }
  else
  {  
    var nam=name.toLowerCase();                                                       /* using simple algorithm same as love calculator */
    var lnam= lname.toLowerCase();
    var i;                                                              /*algorithm idea taken from https://www.codevscolor.com/java-love-calculator  */
    var sum1=0,sum2=0,sum3=0,sum=0;
        for (i = 0; i < nam.length; i++) {                                   
       sum1 += nam.charCodeAt(i);                                      
     }
     for(i=0;i<lnam.length;i++) {
      sum2+=lnam.charCodeAt(i);
     }
    for(i=0;i<4;i++) {
      sum3+='love'.charCodeAt(i);
    }
    sum=sum1+sum2;

    var s = 0;

while (sum) {
    s += sum % 10;
    sum = Math.floor(sum / 10);
}

lsum = 0;

while (sum3) {
    lsum += sum3 % 10;
    sum3 = Math.floor(sum3 / 10);
}
var n_sum=0;

  if(s>lsum)
     n_sum= lsum-(s-lsum);
   else
     n_sum=s;


  document.getElementById('friendsvalue').value =(Math.floor((n_sum/lsum)*100))+ "%"; 
  }
  
 }
