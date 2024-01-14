import React, { useState } from 'react'

export default function index() {

  const [isSended, setIsSended] = useState(false)
  return (
    <div>
        <h1 className="text-center text-black text-[58px] font-normal my-[57px]">Laporan Kejahatan</h1>
        <div className='px-[62px]'>
            {isSended === false ? (
              <div className='w-full h-screen bg-[#E2CEBD] shadow border'>
                  <div className='grid grid-cols-12 py-[60px] px-[62px]'>
                    <div className='col-span-3 text-black text-3xl space-y-[33px]'>
                      <h1>Nama</h1>
                      <h1>Email</h1>
                      <h1>Alamat</h1>
                      <h1>Telepon</h1>
                      <h1>Jenis Kejahatan</h1>
                      <h1 className='pb-[145px]'>Isi Laporan</h1>
                      <h1>Bukti Kejahatan</h1>
                    </div>
                    <div className='col-span-9 text-black text-3xl space-y-[13px]'>
                      <input type="text" placeholder='Nama...' className='py-[10px] px-[23px] w-full bg-white ' />
                      <input type="text" placeholder='Email...' className='py-[10px] px-[23px] w-full bg-white ' />
                      <input type="text" placeholder='Alamat...' className='py-[10px] px-[23px] w-full bg-white ' />
                      <input type="text" placeholder='Telepon...' className='py-[10px] px-[23px] w-full bg-white ' />
                      <select name="" id="" className='w-full bg-white py-[10px] px-[23px]'>
                        <option value="Jenis Kejahatan">Pilih Jenis Kejahatan</option>
                        <option value="Pencurian">Pencurian</option>
                        <option value="Kejahatan Seksual">Kejahatan Seksual</option>
                        <option value="Pembullyan">Pembullyan</option>
                        <option value="Penganiayaan">Penganiayaan</option>
                        <option value="Penipuan">Penipuan</option>
                        <option value="Narkoba">Narkoba</option>
                      </select>
                      <textarea name="" id="" rows="5" className='w-full resize-none px-[23px] py-[10px]' placeholder='Isi Laporan...'></textarea>
                      <input type="file" />
                    </div>
                </div>
                <div className='flex items-center justify-end pr-20'>
                  <button onClick={() => setIsSended(true)} className='text-3xl text-white bg-[#8A553EE5] py-[13px] px-[29px]'>Kirim</button>
                </div>
              </div>
            ): (
              <div className='w-full h-screen bg-[#E2CEBD] shadow border'>
                <div className='grid grid-cols-12 py-[60px] px-[62px]'>
                  <div className='col-span-3 text-black text-3xl space-y-[33px]'>
                    <h1>Nama</h1>
                    <h1>Email</h1>
                    <h1>Nomor Pengaduan</h1>
                  </div>
                  <div className='col-span-9 text-black text-3xl space-y-[13px]'>
                    <input type="text" placeholder='Nama...' className='py-[10px] px-[23px] w-full bg-white ' />
                    <input type="text" placeholder='Email...' className='py-[10px] px-[23px] w-full bg-white ' />
                    <input type="number" placeholder='Alamat...' className='py-[10px] px-[23px] w-full bg-white ' />
                  </div>
              </div>
              
              <div className='flex items-center justify-end pr-20'>
                <button  className='text-3xl text-white bg-[#8A553EE5] py-[13px] px-[29px]'>Ok</button>
              </div>

            </div>
            )}
        </div>
    </div>
  )
}
