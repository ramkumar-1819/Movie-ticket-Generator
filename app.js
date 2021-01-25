var details={person0:["Ram",2,500],   //hold user details those  who are booking the tickets
            person1:["sam",14,7500],
            person2:["tom",2,300],
            person3:['Rom',3,750],
            person4:["Kumar",2,500],
            person5:["Raja",5,1500],
            person6:["Ravi",1,250],
            person7:["Mugil",2,300],
            person8:["Randy",10,4000],
            person9:["Roxx",2,500]}
console.log(details)
var $seat=document.getElementsByClassName("seat")
var btn1=document.getElementById("reserv");
var btn2=document.getElementById("un_reserv");
var arr=[];//hold the seat numbers when tickets booked in onspot
var $result=document.getElementById("result");
var count=0;//get increased when tickets are booked and max limit is equal to the the number of seats available
var i=0;//traverse through user detail object
var price=250;//price of the single ticket
btn1.addEventListener("click",fun)
btn2.addEventListener("click",fun1)
function fun(){//when user book ticket in reservation

    if(count>$seat.length-1){//if no seats are available
          $result.innerHTML="Tickets are booked"
    }
    else{
      var person="person"+i;
      if(details[person][1]>($seat.length)-count){//if availble seats are lesser than the user need seats
          $result.innerHTML=`Only ${($seat.length)-count} tickets avilable`
          i+=1;
      }
      else if(details[person][2]<price*details[person][1]){//if user amount is lesser than the movie price
              $result.innerHTML=`Your price is lesser than the movie amount`
              i+=1
      }
      else{
          $result.innerHTML="";
          for(j=0;j<details[person][1];j++){
          $seat[j+count].style.backgroundColor="red";//changing the booked seats color to red
          }
      count+=details[person][1]//increasing the count to indicate how many seats are booked
      i+=1
      //making object for reservation 
      var obj1=new tickets(details[person][0],details[person][1],details[person][2],null,0)
      }}}
    //unreserv_function
    function fun1(){
              if(count>$seat.length-1){//if no seats are available
              $result.innerHTML="Tickets are booked"
        }
        else{
          var person="person"+i;
          if(details[person][1]>($seat.length)-count){//if availble seats are lesser than the user need seats
              $result.innerHTML=`Only ${($seat.length)-count} tickets avilable`
              i+=1;
          }
          else if(details[person][2]<price*details[person][1]){//if user amount is lesser than the movie price
                  $result.innerHTML=`Your price is lesser than the movie amount`
                  i+=1
          }
          else{
            $result.innerHTML="";
              for(j=0;j<details[person][1];j++){
              arr.push( $seat[j+count].innerHTML)
              $seat[j+count].style.backgroundColor="red";//changing the booked seats color to red
              }
          count+=details[person][1]
          i+=1
          //object for unreserv
          var obj2=new tickets(details[person][0],details[person][1],details[person][2],arr,1) 
          //after object execution for one person then make the array to empty bcz it hold next unreserv_person seat details
          arr=[]
        }}}
    //making class for reservation
      class tickets{
          constructor(name,no_tickets,price,arr,type){//type 0 means reservation 1 means unresev
              this.name=name;
              this.no_tickets=no_tickets;
              this.price=price;
              this.arr=arr;
              this.type=type;
              this.generate_ticket(this.type);
          }
          generate_ticket(type){
              if(type===0){//print ticket for reservation
              $result.innerHTML="<u>YOUR TICKET</u><br><br>Name : " +this.name+"<br><br>Number_of_tickets : "
                                  +this.no_tickets+"<br><br>Price : "+this.price+`<br><br><mark>TICKET BOOKED</mark>`
                        
              }
              else{//print tickets for unreserv
                $result.innerHTML="<u>YOUR TICKET</u><br><br>Name : " +this.name+"<br><br>Number_of_tickets : "
                +this.no_tickets+"<br><br>Price : "+this.price+`<br><br>Seat No : ${this.arr}`
      
              }
           
        }


      }