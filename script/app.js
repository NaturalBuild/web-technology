function showName() {
  var xhttp = new window.XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var elm = document.querySelectorAll(".name");
      var self = this;
      elm.forEach(function(e) {
        // console.log(self);
        // console.log(this);
        e.innerHTML = self.responseText;
      });
    }
  };
  xhttp.open("GET", "data/name.php", true);
  xhttp.send();
}

function changeName() {
  var name = document.querySelector('input[name="uname"]').value;
  var elm = document.querySelectorAll(".name");
  elm.forEach(function(e) {
    e.innerHTML = name;
  });
}
