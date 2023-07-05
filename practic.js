// const element = document.querySelector("button");
// element.addEventListener("click", myFunction);

const generateBtn = document.querySelector('.form button');
const textInput = document.querySelector('.form input');
var qrtext=document.getElementById('qrtext');
var imgg=document.querySelector('#imgg')
generateBtn.addEventListener('click', () => {
    const text = textInput.value;
    if(text.length===0)
    {
        document.querySelector("p").innerHTML = "⚠️Oops! please paste any url or text ";
    }
    else {
          document.querySelector("p").innerHTML = "🎉Thankyou";
          speak('Thank you! ');
          function speak(text) {
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
            }
    }
    generateqr();   
});
function generateqr()
{
    imgg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value;
}