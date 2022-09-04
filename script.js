// function checkempty(){
   
//   let box = document.getElementById('todoInput');
//   let pas = document.getElementById('pass');

//   if (box.value === ""){
//     document.write('Input is  required');
//     return false;
// }
// if (pas.value.length <= 6){
//     document.write('Password must be more than 6');
// }

// }



//To recognise each box, we need the following steps
const redbtn = document.getElementById("redbox")
const yellowbtn = document.getElementById("yellowbox")
const greenbtn = document.getElementById("greenbox")

// redbtn.onclick = () => console.log("you clicked red")
// yellowbtn.onclick = () => console.log("you clicked on yellow")
// greenbtn.onclick = () => console.log("you clicked on green")

//LOOPS THROUGH THE BOXES OR ITEM

const btns = document.querySelectorAll(".squareColor")

// btns.forEach(btn => {
//   btn.onclick = () => console.log(btn.value)
// })

for (const btn of btns){
  btn.onclick = () => console.log(btn.value)
}