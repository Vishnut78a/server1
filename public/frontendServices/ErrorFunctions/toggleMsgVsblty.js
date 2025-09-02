//TOGGLE MSG ON/OFF:-
function errMsgOFF(errElement){errElement.style.display = 'none';}
function errMsgON(errElement){errElement.style.display='block';}
function succMsgOFF(succElement){succElement.style.display = 'none';}
function succMsgON(succElement){succElement.style.display='block';}

function errorHtml(errElement,errorDesc){errElement.innerHTML = errorDesc;}
const toggleValMsg = 
{
    errMsgOFF,
    errMsgON,
    succMsgOFF,
    succMsgON,
    errorHtml
}

export default toggleValMsg;