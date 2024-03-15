const NumberGene = ({ numsMap }) => {
    return (
      <div className='bg-blue-400 m-[10px] px-[10px] py-[20px]
       shadow-md text-[30px] text-center rounded-[15px]'>
        <div className="grid grid-cols-4 ">
          {numsMap}
        </div>  
      </div>
    )
  }

export default NumberGene