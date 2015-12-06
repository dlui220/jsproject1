function load_page(id, page) {
  document.getElementById(id).innerHTML = '<object type="text/html" data="home.html"></object>';
}

window.onload = function() {
    var a = document.getElementById("test");
    
    a.onclick = function() {
        
        return false;
    }
};

var addItem = function addItem(item,list){
		var youngkim = document.createElement("li");
		youngkim.innerHTML = "<a>" + item + "</a>";
		list.appendChild(youngkim);
};

var itemCallback = function itemCallback(e){
		var urllist = document.getElementById("urllist");
		urllist.appendChild(this);
};

var buttonCallback = function buttonCallback(e){
		var list = document.getElementById("urllist");
		var textbox = document.getElementById("textbox");
		var input = textbox.value;
		if (input != ""){
				addItem(input,list);
				list.children[list.children.length - 1].addEventListener("click",itemCallback);
		}
		textbox.value = "";
};

var button = document.getElementById("button");
button.addEventListener("click",buttonCallback);



