const NumberGene = ({ numsMap }) => {
    return (
      <div className='bg-blue-700 m-[26px] pl-[20px] pt-[30px] shadow-md text-[30px] text-center'>
        <div className="grid grid-cols-4 w-[100]">
          {numsMap}
        </div>  
      </div>
    )
  }

export default NumberGene