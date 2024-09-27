document.getElementById('dom').style.color='aqua'
let fon=document.getElementById('area')
let btnBold=document.getElementById('btn-bold')
let btnItalic=document.getElementById('btn-italic')
let textLeft=document.getElementById('text-left')
let textCenter=document.getElementById('text-center')
let textRight=document.getElementById('text-right')
let upperCase=document.getElementById('upper-case')
let lowerCase=document.getElementById('lower-case')
let capt=document.getElementById('cap')
let clearText=document.getElementById('clear')
let CColor=document.getElementById('btn-color')
let Color=document.getElementById('color')
let CColor1=document.getElementById('btn-color1')
let Color1=document.getElementById('color1')
let fontSize1=document.getElementById('btn-size')
let fontsize1=document.getElementById('size')
let fontFam=document.getElementById('fam')
let fonn=document.getElementById('fam1')
btnBold.addEventListener("click",function(){
    if (fon.style.fontWeight === 'bold') {
        fon.style.fontWeight = 'normal'; 
        } else {
        fon.style.fontWeight = 'bold'; 
    }

})
btnItalic.addEventListener("click",function(){
    if (fon.style.fontStyle === 'italic') {
        fon.style.fontStyle = 'normal'; 
        } else {
        fon.style.fontStyle = 'italic';
    }
})

textLeft.addEventListener('click',function(){
    if(fon.style.textAlign==='left')
        fon.style.textAlign='none'
    else{
        fon.style.textAlign='left'

    }
})
textCenter.addEventListener('click',function(){
    if(fon.style.textAlign==='center')
        fon.style.textAlign='none'
    else{
        fon.style.textAlign='center'

    }
    
})
textRight.addEventListener('click',function(){
    if(fon.style.textAlign==='right')
        fon.style.textAlign='none'
    else{
        fon.style.textAlign='right'

    }
})
upperCase.addEventListener('click',function(){
    if(fon.style.textTransform==='uppercase')
        fon.style.textTransform='none'
    else{
        fon.style.textTransform='uppercase'

    }
})
lowerCase.addEventListener('click',function(){
    if(fon.style.textTransform==='lowercase')
        fon.style.textTransform='none'
    else{
        fon.style.textTransform='lowercase'

    }
})
capt.addEventListener('click', function() {
    let text = fon.value;

    if (text === text.toLowerCase()) {
        fon.value = text.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    } else {
        fon.value = text.toLowerCase();
    }
});
clearText.addEventListener('click',function(){
    fon.value=""
})

CColor.addEventListener('click',function(){
    let check=Color.value
    fon.style.color=check
})
CColor1.addEventListener('click',function(){
    let check1=Color1.value
    fon.style.backgroundColor=check1
})
fontSize1.addEventListener('click',function(){
    let p=fontsize1.value
    fon.style.fontSize=p+'px'
})
fontFam.addEventListener('click',function(){
    let a=fonn.value
    fon.style.fontFamily=a
})




