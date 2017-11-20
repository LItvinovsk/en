window.onload = function(){
renderData()
	function renderData(){
		for(let i=0; i<words.word.length; i++){
			let idb = "but_" + i;
			let row = `<td class="td">${words.word[i]}<button id="${idb}" type="button" class="btn btn-default glyphicon glyphicon-volume-up btn-success"></button></td><td class="td">${words.translate[i]}</td><td class="td">${words.komment[i]}</td>`;
			let tr = document.createElement('tr');
			let tbody = document.getElementById("tbody");
tbody.insertBefore(tr, tbody.firstChild);
//			tbody.appendChild(tr);
			tr.innerHTML = row;
			let but = document.getElementById(idb);
			//console.log(but);		
			but.addEventListener("click", Say)
		};
	};
	function Say(){
		//console.log(this);
		word = this.parentNode.innerText;
		responsiveVoice.speak(word, "UK English Female", {rate: 0.9});
	};




















//document.getElementsByClassName("cbalink")[0].remove()
}

