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

	var path = event.target.getAttribute('data-content-link'),
			oReq = new XMLHttpRequest();

	if(/\/\/|;|\/\*/.test(path)){
		console.error('Y U TRY TO HACK ME!?');
		return false;
	}

	oReq.addEventListener("load", reqListener);

	console.log(window.location.toString().replace(/([^/]\/)[^/]+$/, '$1') + path);

	oReq.open("GET", window.location.toString().replace(/([^/]\/)[^/]+$/, '$1') + path);
	oReq.send();
});

console.log('... event listener made?');
