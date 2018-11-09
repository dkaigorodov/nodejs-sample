
document.getElementById("myNameForm").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("myNameForm", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({myName: document.getElementById("myName").value}), // body data type must match "Content-Type" header
  })
  .then(function(response) {
    return response.text();
  }).then(function(text) {
    document.getElementById("result").innerText = text;
  })  ;


});