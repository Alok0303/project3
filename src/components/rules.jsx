import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dice1 from '/images/dice_1.png'
import dice2 from '/images/dice_2.png'
import dice3 from '/images/dice_3.png'
import dice4 from '/images/dice_4.png'
import dice5 from '/images/dice_5.png'
import dice6 from '/images/dice_6.png'


const Game = () => {

  const [count, setCount] = useState(0); 
  const [dice, setDice] = useState(dice1);
  
  const navigate = useNavigate();

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return(
    <div>
      
      <nav className='ml-[100px] mt-[50px] flex items-start justify-between'>
          <div>
            <h1 className='text-[50px] font-semibold pl-[25px] leading-none'>{count}</h1>
            <p className='-mt-1 font-semibold'>Total score</p>
          </div>
          <div className='mr-[100px] flex flex-col items-center'>
            <div>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >1</button>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >2</button>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >3</button>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >4</button>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >5</button>
              <button className='h-[50px] w-[50px] border-black border-[1px] ml-[20px] font-extrabold text-[20px]' >6</button>
            </div>
            <h1 className='ml-[280px] mt-[20px] font-bold text-[20px]'>Select Number</h1>
          </div>
      </nav>

      <div>
        <div className='flex flex-col items-center justify-center mt-[50px]'>
          <img src={dice} alt="dice1" />
          <button className='w-[230px] border-[1px] mt-[20px] h-[40px] rounded-[5px] font-bold hover:text-white hover:bg-black cursor-pointer' onClick={() => navigate('/game')}>Play Game</button>
          <div className='bg-[#FBF1F1] h-[180px] w-[600px] mt-[20px]'>
            <h1 className='font-bold text-[30px] ml-[20px]'>How to play dice game</h1>
            <p className='mt-[0px] ml-[20px]'>Select any number</p>
            <p className='mt-[0px] ml-[20px]'>Click on dice image</p>
            <p className='mt-[0px] ml-[20px]'>after click on dice if selected number is equal to dice number you will get 6 points</p>
            <p className='mt-[0px] ml-[20px]'>if you get wrong guess then 1 point will be dedcuted </p>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Game;