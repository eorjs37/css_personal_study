const touchStartEvent = (event) => {
    console.log('start : ', event)
}

const toucheEndEvnet = (event) => {
    console.log('end : ', event)
}

const touchMoveEvent = (event) => {
    console.log('move : ', event)
}

//window.addEventListener("touchstart", touchStartEvent);
//window.addEventListener('touchend', toucheEndEvnet);
//window.addEventListener('touchmove', touchMoveEvent)

const btnClick = () => {
    const elenave = document.querySelector('.nav');
    const elemusicbox = document.querySelector('.music_box');

    // @ts-ignore
    if (elenave.classList.contains('on')) {
        // @ts-ignore
        elenave.classList.remove('on');
        elenave.classList.add("extend")
        // @ts-ignore
        elemusicbox.classList.remove('on');
        elemusicbox.classList.add("extend")
    } else {
        // @ts-ignore
        elenave.classList.remove("extend")
        elenave.classList.add("on");
        // @ts-ignore
        elemusicbox.classList.remove("extend")
        elemusicbox.classList.add("on")
    }
}