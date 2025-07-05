const increase = document.getElementById(`increase`);
const reset = document.getElementById(`reset`);
const decrease = document.getElementById(`decrease`);
const label = document.getElementById(`myLabel`); 

let count = 0;
increase.onclick = function(){
    count++;
    label.textContent = count;
}

decrease.onclick = function(){
    count--;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}