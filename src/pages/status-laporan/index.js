import React from 'react'

export default function StatusLaporan() {
  return (
    <div>
        <h1 className='text-center text-black text-[58px] mt-[40px] mb-[74px]'>Status Laporan</h1>
        <div className='bg-[#E2CEBD] h-screen mx-[61px] mb-[61px] pt-[48px] px-[30px]'>
            <div className='flex items-center justify-between mb-[59px]'>
                <div className='flex items-center gap-[18px] text-[26px]'>
                    <h1>Show</h1>
                    <select className='py-[10px] px-[15px] pr-[58px] appearance-none' name="" id="">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <h1>Entries</h1>
                </div>
                <div className='flex gap-[23px] items-center text-[26px] '>
                    <h1>Search</h1>
                    <input type="text" placeholder='Search a keyword...' className='text-[18px] py-2 px-3 outline-none rounded-md shadow border' />
                </div>
            </div>
            <div className='bg-white border-2 border-black grid grid-cols-4'>
                <div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>Nomor Laporan</h1>
                    </div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>102</h1>
                    </div>
                </div>
                <div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>Jenis Kejahatan</h1>
                    </div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>Pencurian</h1>
                    </div>
                </div>
                <div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>Tanggal</h1>
                    </div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>02/11/2023</h1>
                    </div>
                </div>
                <div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl'>
                        <h1 className='text-center'>Status</h1>
                    </div>
                    <div className='border-[1px] border-black py-[25px] px-[43px] text-3xl flex items-center justify-center'>
                        <div className='bg-[#068006E5] text-white font-bold py-[8px] px-[16px] w-[132px] flex items-center justify-center rounded-md'>Progress</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
