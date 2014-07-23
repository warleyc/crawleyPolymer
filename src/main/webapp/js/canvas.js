(function(window,$,undefined)
{
	var ctx=null;
	var W=300,H=300;
	var NUM_WAVES=7;
	var BLUR_RADIUS=30;
	var THETA_RESOLUTION=0.05;
	var cx=W/2,cy=H/2;
	var r0=1.1;
	var waves=[];
	var t=new Date()|0;
	window.requestAnimationFrame=(function(){
		return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback,element){window.setTimeout(callback,1000/60);};})();
	
	function Wave(){
		this.maxAlpha=Math.random()/20;
		this.alpha=0;
		this.omega=Math.floor(Math.random()*10);
		this.phi=Math.random()*2*Math.PI;
		this.deltaPhi=(0.5- Math.random())/50;
		this.life=0;
		this.lifeTime=1000+ Math.random()*1000;
		}

	function generateWaves(){
		for(var i=0;i<NUM_WAVES;++i){
			waves[i]=new Wave();
		}
	}

function transformDistance(r){return 100*r;}

function polarFunction(theta){
	var r=r0;
	for(var i=0;i<NUM_WAVES;++i){
	var wave=waves[i];r+=wave.alpha*Math.sin(wave.omega*theta+ wave.phi);
	}
return r;
}


function integrate(dt){
	for(var i=0;i<NUM_WAVES;++i){
		var wave=waves[i];
		waves[i].phi+=dt*wave.deltaPhi;
		waves[i].alpha=wave.maxAlpha*Math.sin(Math.PI*wave.life/wave.lifeTime);
		waves[i].life+=dt;
		if(wave.life>wave.lifeTime){
			waves[i]=new Wave();
		}
	}
}
	
	
function drawFrame(){
	ctx.clearRect(0,0,W,H);
	ctx.beginPath();
	for(var theta=0;theta<2*Math.PI;theta+=THETA_RESOLUTION){
		var r=transformDistance(polarFunction(theta));
		ctx.lineTo(cx+ r*Math.cos(theta),cy+ r*Math.sin(theta));
	}
	ctx.fill();
}

function mainLoop(){
	var dt=(new Date()|0)- t;
	t=new Date()|0;
	integrate(dt);
	drawFrame();
	//requestAnimationFrame(mainLoop);
}

function initFlashFallback(){

}

$(function initCanvas(){

	ctx=document.getElementById('logo').getContext('2d');
	ctx.shadowColor='black';
	ctx.shadowOffsetX=0;
	ctx.shadowOffsetY=0;
	ctx.shadowBlur=BLUR_RADIUS;
	ctx.fillStyle='rgba(0, 0, 0, 1)';
	//ctx.fillStyle='#CDE4F3';
	//ctx.fillRect(0,0,150,75);
	var img = new Image();
	img.src = '/img/projet.png';
	ctx.drawImage(img,0,0);//, sx, sy, sw, sh, dx, dy, dw, dh)
	
	//generateWaves();
	//mainLoop();
}

);
})

(window,jQuery);