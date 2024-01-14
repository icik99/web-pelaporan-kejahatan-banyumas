import React from 'react'

export default function DashboardAdmin() {
  return (
    <div className='flex'>
      <div className='bg-[#E2CEBD] w-[400px] h-full'>
        <div className='mb-6'>
          <div className='flex items-center justify-center'>
              <img className='mt-3' src="https://i.pravatar.cc/212" alt="" />
          </div>
          <h1 className="text-black text-[35px] text-center">Admin</h1>
          <h1 className="text-black text-[35px] text-center mb-2">Rizieq</h1>
          <div className='w-full h-4 bg-[#D0A074]'></div>
        </div>
        <div className='space-y-[40px]'>
          <div className='bg-[#3C2621BF] h-[77px] w-full px-[40px] flex items-center'>
              <h1 className='text-white text-[32px] text-start'>Dashboard</h1>
          </div>
          <h1 className='text-[#010101] text-[32px] px-[40px] text-start'>Daftar Kejahatan</h1>
          <h1 className='text-[#010101] text-[32px] px-[40px] text-start'>Pemetaan Lokasi Kejahatan</h1>
          <h1 className='text-[#010101] text-[32px] px-[40px] text-start pb-[236px]'>Berita Info Terkini</h1>
        </div>
      </div>
      <div className='px-[25px] py-[55px] w-fit'>
        <div className='flex gap-[17px] items-center justify-center'>
          <div className='w-[311px] h-32 bg-stone-200 flex items-center justify-center'>
            <div className='flex items-center text-[16px] gap-2'>
              <h1>Total Laporan Masuk:</h1>
              <h1 className='text-red-500'>2</h1>
            </div>
          </div>
          <div className='w-[311px] h-32 bg-stone-200 flex items-center justify-center'>
            <div className='flex items-center text-[16px] gap-2'>
              <h1>Total Laporan Belum Ditanggapi:</h1>
              <h1 className='text-red-500'>2</h1>
            </div>
          </div>
          <div className='w-[311px] h-32 bg-stone-200 flex items-center justify-center'>
            <div className='flex items-center text-[16px] gap-2'>
              <h1>Total Laporan Sudah Ditanggapi:</h1>
              <h1 className='text-red-500'>2</h1>
            </div>
          </div>
        </div>
        <img className='mt-[70px]' src="/assets/images/datakejahatanBanyumas.png" alt="kejahatanBanyumas" />
      </div>  
    </div>
  )
}
