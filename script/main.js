let topic= "";
let time=""
// time
setInterval(() => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    time = `${hours}:${minutes}:${seconds}`; // Update global variable
}, 1000);
document.getElementById('parent').addEventListener("click", function(event){
    const targ = event.target
    
    if (event.target.closest("#card")) { 
        const clickedCard = event.target.closest("#card"); 
        topic = clickedCard.querySelector(".tittle").innerText;
    };
    if (targ.id === "btn"){
        // button disable
        targ.disabled= true
        // color change
        targ.style.backgroundColor ='#99aacc'
        // plus number
        const plus = document.getElementById('plusNum').innerText;
        const newPlus = parseInt(plus) + 1;
        document.getElementById('plusNum').innerText = `${newPlus}`;
        // decrease number
        const minus = document.getElementById('minusNum').innerText;
        const newminus = parseInt(minus) - 1;
        document.getElementById('minusNum').innerText = `${newminus}`;
        // add text history
        // formating
        const newSec = document.createElement("p");
        newSec.classList.add(
            "text-[0.811vw]", "w-[17.511vw]", "h-[3.744vw]", "bg-[#F4F7FF]",
            "flex", "justify-center", "items-center", "rounded-lg", "p-3", "mt-3", "mx-auto"
        );
        newSec.innerText = `You have Complete The Task ${topic} at ${time}`
        // push
        const parent = document.getElementById('contetParent')
        parent.appendChild(newSec);
        // push

    }   
})