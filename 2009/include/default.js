/*This replaces the target="_blank" attributes to valid XHTML*/
function external() {
 if (document.getElementsByTagName) {
  var i, a;
  a = document.getElementsByTagName('a');
  for (i in a) {
   if (a[i].getAttribute('href') && 
       a[i].getAttribute('rel') == 'external') a[i].target = '_blank';
  }
 }
}

window.onload = external;

/*------------------------------------------------------------
	Document Text Sizer- Copyright 2003 - Taewook Kang.  All rights reserved.
	Coded by: Taewook Kang (txkang.REMOVETHIS@hotmail.com)
	Web Site: http://txkang.com
	Script featured on Dynamic Drive (http://www.dynamicdrive.com)
	
	Please retain this copyright notice in the script.
	License is granted to user to reuse this code on 
	their own website if, and only if, 
	this entire copyright notice is included.
--------------------------------------------------------------*/

//Specify affected tags. Add or remove from list:
var tgs = new Array( 'content>li','content>p','content>a','content>b','content>strong','content>span','h2','content>h1');

//Specify spectrum of different font sizes:
var szs = new Array( '0.8em','0.9em','1em','1.1em','1.2em' );
var startSz = 1;

function ts( trgt,inc ) {
	if (!document.getElementById) return
	var d = document,cEl = null,sz = startSz,i,j,cTags;
	
	sz += inc;
	if ( sz < 0 ) sz = 0;
	if ( sz > 6 ) sz = 6;
	startSz = sz;
		
	if ( !( cEl = d.getElementById( trgt ) ) ) cEl = d.getElementsByTagName( trgt )[ 0 ];

	cEl.style.fontSize = szs[ sz ];

	for ( i = 0 ; i < tgs.length ; i++ ) {
		cTags = cEl.getElementsByTagName( tgs[ i ] );
		for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = szs[ sz ];
	}
}
