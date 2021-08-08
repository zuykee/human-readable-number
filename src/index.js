module.exports = function toReadable (number) {

let result = new String;
let beforeTwenty = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let decs = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hunds = [ 'one hundred', 'two hundred', 'three hundred','four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
let numToRead = String(number);
let numToReadLength = numToRead.length;
let twoDigSlice = Number(numToRead.slice(1));

switch(numToReadLength) {
   case 1:

        result = beforeTwenty[number];

       break;

    case 2:
       if (number < 20) {
           result = String(beforeTwenty[number]);
       } else if(number >= 20 && numToRead[1] == 0) {
           result = String(decs[numToRead[0]-2]);
       } else {
           result = decs[numToRead[0]-2] + ' ' + beforeTwenty[numToRead[1]];

       };
       break;

      case 3:
          if (twoDigSlice == 0) {
            result = hunds[numToRead[0]-1];
          } else if (twoDigSlice <= 19) {
              result = String(hunds[numToRead[0]-1] + ' ' + beforeTwenty[twoDigSlice]);
         } else if (numToRead[2] > 0){
              result = String(hunds[numToRead[0]-1] + ' ' + decs[numToRead[1]-2] +' ' +  beforeTwenty[numToRead[2]]);
         } else {
             result = String(hunds[numToRead[0]-1] + ' ' + decs[numToRead[1]-2]);
         };

          break;

    default:
        result = 'non-readable number!';



};

return result;


}
