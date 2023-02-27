function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!'
  }
   else if (feet < 2000) {
    return 'That will be twenty bucks.'
  }
  else if (feet < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else  {
    return 'No can do.'
  }
}
// // function getFee(isMember) {
//   return (isMember ? '$2.00' : '$10.00');
// }
function ternaryCheckCity(city){
  // if (city !== "NYC"){
  //   return 'No go.'
  // }
  // else if (city === "NYC") {
  //   return 'Ok, sounds good.'
  // }
return ( city === "NYC" ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(tip){
  // switch(tip) {
  //   case 'generous' :
  //     return 'Thank you so much.'
  //   case 'not as generous' :
  //     return 'Thank you.' 
  //   default :
  //     return 'Bye.'  
  //   }
      let response 
      switch(tip) {
        case 'generous' :
             response = 'Thank you so much.'
             break
            case 'not as generous' :
             response = 'Thank you.' 
             break
            default :
              response = 'Bye.'
      }
      return response 
  }