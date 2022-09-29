const load = document.querySelector(".load")
const loadSec = document.querySelectorAll(".load__ani__sec")

window.onload = () => {
    load.classList.add("loading")
    console.log(loadSec);
    loadSec.forEach((i,e) => {
        console.log(i.style);
        i.style.backgroundImage = `url("./img/${e}.jpeg")`;
    });
};

new Promise((resolve, reject) => {
    // ルーレットを回す処理
    let count = 0
    const countUp = () => {
        if (count == 0) {
            loadSec[1].classList.remove("sec__ani")
            loadSec[0].classList.toggle("sec__ani")
            count++
        }else if(count == 1){
            loadSec[0].classList.toggle("sec__ani")
            loadSec[2].classList.toggle("sec__ani")
            count++
        }else if(count == 2){
            loadSec[2].classList.toggle("sec__ani")
            loadSec[3].classList.toggle("sec__ani")
            count++
        }else if(count == 3){
            loadSec[3].classList.toggle("sec__ani")
            loadSec[1].classList.toggle("sec__ani")
            count = 0
        }
    }
    let num = Math.floor(Math.random() * 5) + 1;
    console.log(num);
    const countup = setInterval(countUp, 100);
    // ルーレットを止める処理
    let count2 = 0
    const loading = () => {
        count2++
        console.log(count2);
        if (count2 == 2) {
            clearInterval(countup)
            clearInterval(loadIng)
            console.log("clear");
        }
    }
    const loadIng = setInterval(loading,1000)
    // ルーレットを点滅させる処理
    const flash = () => {
        const secAni = document.querySelector(".sec__ani")
        secAni.classList.add("flash-ani")
    }
    setTimeout(flash,2500)
    const flashed = () => {
        const secAni = document.querySelector(".sec__ani")
        secAni.classList.remove("flash-ani")
        secAni.classList.add("flash-anied")
        resolve()
    }
    setTimeout(flashed,3800)

})
.then(() => {
    console.log("resolved");
    // 止まったルーレットの画像を取得する処理
    const secAni = document.querySelector(".sec__ani")
    const selectImg = secAni.style.backgroundImage
    const fstvImg = document.querySelector(".fstv__img")
    fstvImg.style.backgroundImage = selectImg
});
