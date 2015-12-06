function load_page(id, page) {
  document.getElementById(id).innerHTML = '<object type="text/html" data="home.html"></object>';
}

window.onload = function() {
    var a = document.getElementById("test");
    
    a.onclick = function() {
        
        return false;
    }
};
var counter = 0;

var addItem = function addItem(item,list,url){
		var youngkimissohandsome = document.createElement("li");

		var att1 = document.createAttribute("class");
		att1.value="listlinks";
		youngkimissohandsome.setAttributeNode(att1);

		var att2 = document.createAttribute("id");
		att2.value=url;
		youngkimissohandsome.setAttributeNode(att2);

		youngkimissohandsome.innerHTML = "<a>" + item + "</a>";
		list.appendChild(youngkimissohandsome);
};

// I got the code to store the URL in the id tag for the list elements,
// and also the class tag as "listlinks"

var itemCallback = function itemCallback(e){
		var urllist = document.getElementById("urllist");
		urllist.appendChild(this);
};

var buttonCallback = function buttonCallback(e){
		var list = document.getElementById("urllist");
		var textbox = document.getElementById("textbox");
		var urlbox = document.getElementById("urlbox");

		var input = textbox.value;
		var urlinput = urlbox.value;

		if (input != "" && urlinput!=""){
				addItem(input,list,urlinput);
				list.children[list.children.length - 1].addEventListener("click",itemCallback);
		}
		textbox.value = "";
		urlbox.value= "";

		var new_list_elements = document.getElementById("urllist").getElementsByClassName("listlinks");
		for(var i=0;i<new_list_elements.length;++i){
				var temp = new_list_elements[i].getAttribute("id");
				new_list_elements[i].addEventListener("click",youngCallback);
				// I have to figure out a way to add individual event listeners to each element
				// with it's individual URL (basically do a load_page(temp) but idk how
				// I'm using fun.com as a default for now and it works
		}
		// Also for some reason the list order keeps switching if you have multiple
		// websites added; when you click them they shuffle lol
};

var youngCallback = function youngCallback(e){
		load_page("http://www.fun.com/");
};

var load_page = function load_page(link){
		document.getElementById("content").innerHTML=('<object type="text/html" data="' +link+ '" width="800p" height="600px" style="overflow:auto;border:5px ridge blue"></object>');
};

var button = document.getElementById("button");
button.addEventListener("click",buttonCallback);

var list_elements = document.getElementById("urllist").getElementsByClassName("listlinks");
for(var i=0;i<list_elements.length;++i){
		var temp = list_elements[i].getAttribute("id");
		list_elements[i].addEventListener("click",youngCallback);
}

