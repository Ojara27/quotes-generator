const adviceContent = document.getElementById('adviceContent')
const toggleBtn = document.getElementById('toggleBtn')
const adviceId = document.getElementById('adviceId')

const getAdvice = async () => {
    try{
        const response = await fetch(`https://api.adviceslip.com/advice`)
        const data = await response.json()
        console.log(data)
        showAdvice(data)
    }
    catch(err){
        console.log('Error' , err);
    }
}

const showAdvice = (adviceData) =>{
    adviceContent.textContent = `“${adviceData.slip.advice}”`
    adviceId.textContent = adviceData.slip.id
}

toggleBtn.addEventListener("click", getAdvice)