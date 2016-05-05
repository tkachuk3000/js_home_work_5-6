var running = 0;
function startPause(){
	if (running == 0) {
		running =1;
		increment();
		document.getElementById('start').innerHTML = "Pause";
		document.getElementById('start').style.backgroundColor = "red";
		document.getElementById('start').style.borderColor = "red";
	}
	else{
		running = 0;
		clearInterval(timer);
		document.getElementById('start').innerHTML = "Resume";
		document.getElementById('start').style.backgroundColor = "green";
		document.getElementById('start').style.borderColor = "green";
	}
}
function reset(){
	running = 0;

	mlsecs = 0;
    secs = 0;
    mins = 0;
	hours = 0;
	
	clearInterval(timer);
	document.getElementById('start').innerHTML = "Start";
	document.getElementById('time').innerHTML = "00:00:00:00";
	document.getElementById('start').style.backgroundColor = "green";
	document.getElementById('start').style.borderColor = "green";
    
    ol.innerHTML = '';
}

var timer;
function increment(){
	if(running ==1){
	   timer = setInterval(timerId,100)
	}	
}

var wrap;
var ol;
var li;
var create_ol = 0;
function split(){
	if (create_ol == 0) {
		ol = document.createElement('ol');
	    // ol.className = 'save';
	    ol.setAttribute('id','save');
	    wrap = document.querySelector('.wrap');
	    // var wrap = document.getElementsByClassName('wrap');
	    wrap.insertAdjacentElement('beforeEnd', ol);
	    // wrap.appendChild(ol);
	    create_ol = 1;
	}
	
	if (running ==1) {
	    li = document.createElement('li');
	    li.className = 'li_class';
	    ol.insertAdjacentElement('beforeEnd', li);
	    li.insertAdjacentHTML('afterBegin', 'split ' + insert_data);
	}
}

var timer_insert = document.getElementById('time');
var insert_data;
var mlsecs = 0;
var secs = 0;
var mins = 0;
var hours = 0;
function timerId(){
    if(mlsecs < 10){
        mlsecs += 1;
    }
    if(mlsecs == 10){
		secs += 1;
        mlsecs = 0;
    }
    if(secs == 60){
        mins +=1;
        secs = 0;
    }
    if(mins == 60){
        hours +=1;
        mins = 0;
    }
    

        if (mlsecs < 10) {
        	var mlsecs_insert = "0" + mlsecs
        }
        else{
        	mlsecs_insert = mlsecs
        }
        if (secs < 10) {
        	var secs_insert = "0" + secs
        }
        else{
        	secs_insert = secs
        }
        if (mins < 10) {
        	var mins_insert = "0" + mins
        }
        else{
        	mins_insert = mins
        }
        if (hours < 10) {
        	var hours_insert = "0" + hours
        }
        else{
        	hours_insert = hours
        }        
    insert_data = hours_insert +":"+ mins_insert +":"+ secs_insert +":"+ mlsecs_insert;
    
    timer_insert.innerHTML = insert_data;
}

var start = document.getElementById('start');
var res = document.getElementById('reset');
var spl = document.getElementById('split');

start.addEventListener('click',startPause);
res.addEventListener('click',reset);
spl.addEventListener('click',split);