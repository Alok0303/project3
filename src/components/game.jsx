import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dice1 from '/images/dice_1.png'
import dice2 from '/images/dice_2.png'
import dice3 from '/images/dice_3.png'
import dice4 from '/images/dice_4.png'
import dice5 from '/images/dice_5.png'
import dice6 from '/images/dice_6.png'
import dicesound from '/images/gamemisc_dice-roll-on-wood_jaku5-37414.wav'
import bgimage from '/images/background.png'
const Game = () => {

  const [count, setCount] = useState(0); 
  const [dice, setDice] = useState(dice1);
  const [first, setfirst] = useState(7);
  const [warning, setWarning] = useState(false);
  const [bestscore, setbestscore] = useState(0);
  const [showrules, setshowrules] = useState(false)

  const navigate = useNavigate();

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "en-US"
    speechSynthesis.speak(utterance)
  };
  const rollDice = () => {
    const audio = new Audio(dicesound)
    audio.play() 

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6); 
      setDice(diceImages[randomIndex]); 
      
      const alok1 = randomIndex+1;
      if(alok1===first){
        setCount(prev => {
          const newscore = prev+6;
          setbestscore(best => Math.max(best,newscore));
          return newscore
        });
        
      }
      else{
        setCount(prev => {
          const newscore = prev-1;
          setbestscore(best => Math.max(best,newscore));
          return newscore
        });
        setbestscore(Math.max(prev,bestscore));
      }
      setfirst(7);
    }, 500);
  };
  

  
  


  return(
    <div>
      { showrules ? (
         (<div className="h-screen relative">
            <div 
              className="absolute inset-0 bg-center blur-sm"
              style={{ backgroundImage: `url(${bgimage})` }}
            ></div>
      
        
            <div className="relative z-10 flex flex-col items-center justify-center ">
              <div className="bg-[#FBF1F1] h-[190px] w-[650px] mt-[70px] rounded-lg shadow-lg p-4">
                <h1 className="font-bold text-[30px]">How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get 6 points </p>
                <p>if your guess is wrong 1 point will be deduced</p>
              </div>
      
              <button className="w-[230px]  mt-[20px] h-[40px] rounded-[5px] font-bold text-white bg-black hover:text-black hover:bg-white cursor-pointer"onClick={() => setshowrules(false)}>Play Game</button>
            </div>
              </div>)
      ):(
        <div>
          <nav className='ml-[100px] mt-[50px] flex items-start justify-between'>
              <div>
                <h1 className='text-[50px] font-semibold pl-[25px] leading-none'>{count}</h1>
                <p className='-mt-1 font-semibold'>Total score</p>
              </div>
              <div className='ml-[-700px]'>
                <h1 className='text-[50px] font-semibold pl-[25px] leading-none'>{bestscore}</h1>
                <p className='-mt-1 font-semibold'>Best score</p>
              </div>
              <div className='mr-[100px] flex flex-col items-center'>
                <div>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===1){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(1)} >1</button>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===2){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(2)} >2</button>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===3){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(3)} >3</button>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===4){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(4)} >4</button>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===5){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(5)} >5</button>
                  <button className={(()=>{let alok='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px] hover:bg-black hover:text-white cursor-pointer'; if(first===6){ alok += ' bg-black text-white'}return alok})()} onClick={() =>setfirst(6)} >6</button>
                </div>
                <h1 className='ml-[280px] mt-[20px] font-bold text-[20px]'>Select Number</h1>
              </div>
          </nav>

          <div>
            <div className='flex flex-col items-center justify-center mt-[50px]'>
              <img src={dice} alt="dice1" className='cursor-pointer' onClick={()=>{if(first<7){rollDice();setWarning(false)}else{setWarning(true);speak("select a number"); }}} />
              <h1 className='text-[25px] font-bold'>Click on Dice to roll</h1>
              <button className='w-[230px] border-[1px] mt-[20px] h-[40px] rounded-[5px] font-bold hover:text-white hover:bg-black cursor-pointer' onClick={()=>{setCount(0);setbestscore(0)}}>Reset Score</button>
              <button className='w-[230px] border-[1px] mt-[20px] h-[40px] rounded-[5px] font-bold text-white bg-black hover:bg-white hover:text-black cursor-pointer' onClick={() => {setshowrules(true)}}>Show Rules</button>
              {warning && <h1 className='text-red-500 text-[20px] mt-[10px]'>You have not selected any number</h1>}
              
            </div>
          </div>
          
        </div>)}
    </div>
    
  )
}

export default Game;