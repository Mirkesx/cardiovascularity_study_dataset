// Builds a <ul> Table of Contents from all <headers> in DOM
function createTOC() {
	var toc = "";
	var level = 0;
	var levels = {}
	$('#toc').html('');

	$(":header").each(function(i){
		if (this.id=='tocheading'){return;}
	    
		var titleText = this.innerText;
		var openLevel = this.tagName[1];

		if (levels[openLevel]){
		levels[openLevel] += 1;
		} else{
		levels[openLevel] = 1;
		}

		if (openLevel > level) {
		toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
		} else if (openLevel < level) {
		toc += (new Array(level - openLevel + 1)).join("</ul>");
		for (i=level;i>openLevel;i--){levels[i]=0;}
		}

		level = parseInt(openLevel);


		if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
		var anchor = this.id;
	    
		toc += '<li><a href="#' + encodeURIComponent(anchor) + '">'
		+ /*levels[openLevel].toString() + '. ' +*/ titleText
		+ '</a></li>';
	    
	    this.innerHTML = "<a href='#toctitle'>" + titleText + "</a>";
	});
    
	if (level) {
	toc += (new Array(level + 1)).join("</ul>");
	}


	$('#toc').append(toc);

};

// Executes the createToc function
setTimeout(function () { createTOC(); }, 100);

// Rebuild to TOC every minute
//setInterval(function(){createTOC();},60000);