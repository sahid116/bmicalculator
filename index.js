const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height===''||height<0||isNaN(height)){
        result.innerHTML='Please Enter a valid height';
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML='Please Enter a valid weight';
    }
    else{
        const bmi= (weight*10000)/(height*height);
        result.innerHTML=`Your BODY MASS INDEX is ${bmi}`;
    }
})