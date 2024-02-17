topButton=document.getElementsByClassName('top')
section=document.getElementsByClassName('Acc')


for(var i=0;i<section.length;i++){
    section[i].addEventListener("click",function(){
        this.classList.toggle('Accactive')
    })
}

for(var j=0;j<topButton.length;j++){
    topButton[j].addEventListener("click",function(){
        this.classList.toggle('active')
    })
}
