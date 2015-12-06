function load_page(id, page) {
  document.getElementById(id).innerHTML = '<object type="text/html" data="home.html"></object>';
}

window.onload = function() {
    var a = document.getElementById("test");
    
    a.onclick = function() {
        
        return false;
    }
};