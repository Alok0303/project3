import React from 'react'
import { useNavigate } from 'react-router-dom'
import pic1 from '/images/dices 1.png'

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="flex items-center justify-center mt-[100px]">
            <div>
                <img src={pic1} alt="dice" />
            </div>
            <div className=" h-[500px] w-[500px] flex flex-col items-center justify-center">
                <h1 className='w-[500px] text-[92px] font-bold'>DICE GAME</h1>
                <button className='bg-black text-white self-end mr-[5px] w-[200px] h-[40px] text-[20px] cursor-pointer rounded-[5px] hover:bg-white hover:text-black hover: border-2 hover: border-black' onClick={() => navigate('/game')}>Play Now</button>
            </div>
        </div>
    </div>
  )
}

export default Page1