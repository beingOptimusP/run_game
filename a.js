score=0;
cross=true;
audio=new Audio('mario.mp3');
gameO=new Audio('gameOver.mp3');
setTimeout(()=>{
    audio.play();
},100)

document.onkeydown=function(e){
    if(e.keyCode==38)
    {
        const dino=document.querySelector('.dino');
        dino.classList.add('animate');
        setTimeout(()=>{
            dino.classList.remove('animate')
        },800);
        
    }

    if(e.keyCode==39)
    {
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx+100+'px';
    }
    if(e.keyCode==37)
    {
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dx-200+'px';

    }
}

var handle=setInterval(()=>{
    audio.play();
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(ox-dx);
    offsetY=Math.abs(dy-oy);

    console.log(offsetX,offsetY)
    if(offsetX<90 && offsetY<100){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleDrag');
        setTimeout(()=>{
            gameO.play();
            audio.pause();
            clearInterval(handle);
        },100)
    }
    else if(cross&&offsetX<145){
        score=score+10;
        update(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=anidur-0.1;
            obstacle.style.animationDuration=newDur+'s';
        },1000);
        
    }

},100)
function update(score){
    scoreCount=document.querySelector('.scoreCount');
    scoreCount.innerHTML='Your score '+score;
}