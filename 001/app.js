const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitioned', removeTransition))
window.addEventListener('keydown',playSound)

//function playSound
function playSound(e){
    const audio = document.querySelector('.key')
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`)
    
    //if statement
    //buggy
    if(!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

//removing transition  //buggy
function removeTransition(e){
    if(e.property !== 'transform') return
    e.target.classList.remove('playing')
}