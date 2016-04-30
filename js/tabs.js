function addEventListeners(selector, callback){

	var elems = document.querySelectorAll(selector);
	for(var i = 0; i < elems.length; i++){
			elems[ i ].addEventListener( 'click', callback, false );
	}

}

function reqListener () {
	console.log(this.responseText);
	document.getElementById('text-dropzone').innerHTML = this.responseText;
}


addEventListeners('.content-link', function(event){
	event.preventDefault();

	var links = document.getElementsByClassName('content-link')

	for(var i = 0; i < links.length; i++){
		links[i].className = 'content-link';  
	}

	event.target.className += ' active';

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	console.log(window.location.toString().replace(/([^/]\/)[^/]+$/, '$1') + event.target.getAttribute('data-content-link'));
	oReq.open("GET", window.location.toString().replace(/([^/]\/)[^/]+$/, '$1') + event.target.getAttribute('data-content-link'));
	oReq.send();  
});

console.log('... event listener made?');

