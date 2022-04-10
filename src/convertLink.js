/*var convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', function(){
  convertLink();
});

function convertLink() {
  var helperdiv = document.createElement("div");
  document.body.appendChild(helperdiv);
  helperdiv.contentEditable = true;  
  helperdiv.focus();

  document.execCommand("Paste");

  var clipboardContents = helperdiv.innerHTML.trim();

  helperdiv.remove();
  
  if (clipboardContents.includes('>' || '<')) {
    clipboardContents = clipboardContents.split('>')[1].split('<')[0];
  } 

  if (!clipboardContents.includes('zoom.us')) {
    console.log(clipboardContents + ' is not a valid zoom link.');
    return alert('invalid zoom link.');
  }

  var joinID = clipboardContents.split('/j/')[1];
  
  if (!joinID) {
    console.log(clipboardContents + ' is not a valid zoom link.');
    return alert('invalid zoom link.');
  }

  var password = joinID.split('pwd=')[1];

  if (password) {
    joinID = "zoommtg://zoom.us/join?action=join&confno=" + joinID.split('pwd=')[0] + '&pwd=' + password;
  } else {
    joinID = "zoommtg://zoom.us/join?action=join&confno=" + joinID;
  }

  console.log(joinID);
  //chrome.tabs.create({ url: joinID });
  alert('the smart zoom link is: ' + joinID);
}*/

var convertForm = document.getElementById('convert');
var convUrl = document.getElementById('convUrl');
var results = document.getElementById('resultBox');
var zoomUrl = document.getElementById('zoomUrl');

convertForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (convUrl.value) {
    var convUrlValue = convUrl.value;
    if (convUrlValue.includes('>' || '<')) {
      convUrlValue = convUrlValue.split('>')[1].split('<')[0];
    }

    if (!convUrlValue.includes('zoom.us')) {
      console.log(convUrlValue + ' is not a valid zoom link.');
      return alert('invalid zoom link.');
    }

    var joinID = convUrlValue.split('/j/')[1];

    if (!joinID) {
      joinID = convUrlValue.split('confno=')[1];
      if (!joinID) {
        console.log(convUrlValue + ' is not a valid zoom link.');
        return alert('invalid zoom link.');
      }
    }

    var password = joinID.split('pwd=')[1];

    if (password) {
      joinID = "zoommtg://zoom.us/join?action=join&confno=" + joinID.split('pwd=')[0] + '&pwd=' + password;
    } else {
      joinID = "zoommtg://zoom.us/join?action=join&confno=" + joinID;
    }

    console.log(joinID);
    //chrome.tabs.create({ url: joinID });
    results.innerHTML = joinID;
    zoomUrl.value = joinID;
  }
});
