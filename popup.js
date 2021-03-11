let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.executeScript(
  tabs[0].id,
  {
    file: `./test.js`
  });
});
}



// let text = window.getSelection().toString(); 
// console.log(text);
// 


// console.log(text)

// changeColor.onclick = function(element) {
//     let text;
//     if (window.getSelection) {
//         text = window.getSelection().toString();
//     } else if (document.selection && document.selection.type != "Control") {
//         text = document.selection.createRange().text;
//     }
//     console.log(text)
//     // return text;
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });

  
  
// };


