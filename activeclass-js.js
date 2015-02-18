/*
== activeclass-js == 
version: 1.0.0
author: DARTEA (http://www.dartea.com) 
*/

/*
Copyright 2015 DARTEA

This program is free software: you can redistribute it and/or modify 
it under the terms of the Apache v2 License. 

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  

You should have received a copy of the Apache v2 License 
along with this program.  If not, see http://www.apache.org/licenses/LICENSE-2.0.html
*/
window.addEventListener("load", function load(event){

window.removeEventListener("load", load, false); //remove listener, no longer needed

   (function(){

    	var currentUrl 	 = window.location.pathname;
		var linkElements = document.getElementsByTagName('a');
		var className    = 'active';

		  for (var i = 0; i < linkElements.length; i++)
		  {
		    var href = linkElements[i].getAttribute('href');

		    if(href == currentUrl)
		     {
		     
		     	linkElements[i].className = linkElements[i].className+' '+className;
		     	var strParents = linkElements[i].getAttribute('data-activeclassjs-parents');
		     	
		     	if(strParents !== null)
		     	{
		     		var parents = strParents.split(",");
		     		for(var n=0; n<parents.length;n++)
					{
						//console.log(parents[n]);
						var parentElements = document.getElementsByTagName('*');
						for (var z = 0;  z < parentElements.length; z++)
		 				{

		 					if(parentElements[z].getAttribute('data-activeclassjs-ref') == parents[n] )
		 					{
		 						parentElements[z].className = parentElements[z].className+' '+className;
		 					}
		 				}

					}

		     	}
		      
		    }
		  }


   })();
   
    
},false);


