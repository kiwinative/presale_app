import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

export const Contact = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
        <div className='flex items-center py-4'>
            <div className=" h-px bg-white w-[60px]"></div>
            <span className="flex-shrink text-white px-4 font-semibold text-[16px]">CONTACT</span>
            <div className=" h-px bg-white w-[60px]"></div>
        </div>
        <h4 className='text-[50px] font-semibold'>Contact Core Team</h4>
        <div className="flex flex-col items-center gap-[40px] mt-[54px]">
            <div className='flex flex-row justify-center gap-[250px] w-full'>
                <a href="mailto:media@privateemail.pro" className="items-center rounded-[30px] bg-[#6C8726] p-3">
                    <EnvelopeIcon className="h-[30px] w-[30px]"/>
                </a>
                <a href="tel:+234"className="rounded-[30px] bg-[#6C8726] p-3">
                    <PhoneIcon className="h-[30px] w-[30px]"/>
                </a>
                <a href="https://" className="rounded-[30px] bg-[#6C8726] p-3">
                <FontAwesomeIcon icon={faTelegram as IconProp} className="h-[30px] w-[30px]"/>
                </a>
            </div>
            <div className='flex flex-row justify-between space-x-[120px] text-white'>
                <div className="h-[55px] w-[350px] bg-[#222624] rounded-[28px] relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >First Name
                    </label>
                </div>
                <div className="h-[55px] w-[350px] bg-[#222624] rounded-[28px] relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Last Name
                    </label>
                </div>
                
            </div>
            <div className='flex flex-row justify-between space-x-[120px] text-white'>
                <div className="h-[55px] w-[350px] bg-[#222624] rounded-[28px] relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Email
                    </label>
                </div>
                <div className="h-[55px] w-[350px] bg-[#222624] rounded-[28px] relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Phone Number
                    </label>
                </div>
            
            </div>
            <div className='flex flex-row w-[820px] xl:w-[890px] text-white'>
                <div className="h-[55px] w-full  bg-[#222624] rounded-[28px] relative mb-3" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"
                    placeholder="Example label" />
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Message...
                    </label>
                </div>       
            </div>
        </div>
        <button className="py-[19px] px-[44px] bg-[#6C8726] rounded-[27px] mt-[70px] text-[18px] font-bold">SUBMIT YOUR MESSAGE</button>
    </div>
  )
}
