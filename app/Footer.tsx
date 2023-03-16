const footer = () => {
  return (
    <div className="flex flex-col gap-[90px] items-center text-white bg-[#140E3A] py-[42px] px-[150px] font-semibold">
        <h3 className="text-[50px]">Don’t miss out, Stay updated</h3>
          <div className='flex flex-row items-center text-white'>
            <div className="h-[55px] w-full  bg-[#222624] rounded-[28px] relative mb-3" data-te-input-wrapper-init>
              <input
              type="text"
              className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Example label" />
              <label
              htmlFor="exampleFormControlInput1"
              className="text[20px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
              >Enter your email address
              </label>
            </div>
            <button className="py-[10px] px-[34px] bg-[#6C8726] rounded-[27px] text-[20px] font-semibold">Subscribe</button>  
          </div>
        </div>
  )
}

export default footer