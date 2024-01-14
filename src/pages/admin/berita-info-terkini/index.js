import Modal from '@/components/Modal'
import React, { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'

export default function BeritaInfoTerkini() {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenOption, setIsOpenOption] = useState(false)
    return (
        <div>
            <Modal 
                activeModal={isOpenEditModal}
                buttonClose={ () => setIsOpenEditModal(!isOpenEditModal)}
                width={'971px'}
                content={
                    <div className='space-y-[40px] w-full'> 
                        <div className="space-y-4 md:space-y-6">
                            <h1 className='text-start mb-3 text-black text-[40px] font-medium underline'>Edit Berita</h1>
                            <div className='grid grid-cols-12 mb-10'>
                                <div className='col-span-2 text-black text-[18px] space-y-[33px]'>
                                    <h1>Judul Berita</h1>
                                    <h1 className='pb-[145px]'>Isi Berita</h1>
                                    <h1>Gambar</h1>
                                </div>
                                <div className='col-span-10 text-black text-[18px] space-y-[13px]'>
                                    <input type="text" placeholder='Nama...' className='py-[10px] px-[23px] w-full bg-white ' />
                                    <textarea name="" id="" rows="5" className='w-full resize-none px-[23px] py-[10px]' placeholder='Isi Laporan...'></textarea>
                                    <input className='pt-8 ' type="file" />
                                </div>
                            </div>
                            <div className='flex items-center justify-end gap-4 pb-4'>
                                <button onClick={() => setIsOpenEditModal(!isOpenEditModal)} className='border rounded-md bg-yellow-800 bg-opacity-90 text-white px-4 py-2 text-xl'>Cancel</button>
                                <button className='border rounded-md bg-yellow-800 bg-opacity-90 text-white px-4 py-2 text-xl'>Save</button>
                            </div>
                        </div>
                    </div>
                }
            />
            <Modal 
                activeModal={isOpenAddModal}
                buttonClose={ () => setIsOpenAddModal(!isOpenAddModal)}
                width={'971px'}
                content={
                    <div className='space-y-[40px] w-full'> 
                        <div className="space-y-4 md:space-y-6">
                            <h1 className='text-start mb-3 text-black text-[40px] font-medium underline'>Tambah Berita</h1>
                            <div className='grid grid-cols-12 mb-10'>
                                <div className='col-span-2 text-black text-[18px] space-y-[33px]'>
                                    <h1>Judul Berita</h1>
                                    <h1>Tanggal</h1>
                                    <h1 className='pb-[145px]'>Isi Berita</h1>
                                    <h1>Gambar</h1>
                                    <h1>Status</h1>
                                </div>
                                <div className='col-span-10 text-black text-[18px] space-y-[13px]'>
                                    <input type="text" placeholder='Nama...' className='py-[10px] px-[23px] w-full bg-white ' />
                                    <input type="date"  className='py-[10px] px-[23px] w-full bg-white ' />
                                    <textarea name="" id="" rows="5" className='w-full resize-none px-[23px] py-[10px]' placeholder='Isi Laporan...'></textarea>
                                    <input className='pt-8 ' type="file" />
                                    <select name="" id="" className='w-full bg-white py-[10px] px-[23px]'>
                                        <option value="Jenis Kejahatan">Status</option>
                                        <option value="Progress">Progress</option>
                                        <option value="In Review">In Review</option>
                                        <option value="Done">Done</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex items-center justify-end gap-4 pb-4'>
                                <button onClick={() => setIsOpenAddModal(!isOpenAddModal)} className='border rounded-md bg-yellow-800 bg-opacity-90 text-white px-4 py-2 text-xl'>Cancel</button>
                                <button className='border rounded-md bg-yellow-800 bg-opacity-90 text-white px-4 py-2 text-xl'>Save</button>
                            </div>
                        </div>
                    </div>
                }
            />
            <div className='px-[46px] py-[48px]'>
                <h1 className='text-center text-black text-[58px] mt-[40px] mb-[74px]'>Berita Info Terkini</h1>
                <div className='flex items-center justify-center'>
                    <div className='rounded-lg border px-4 py-2 w-[850px]'>
                        <input type="text" className='w-full outline-none' placeholder='Search...' />
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <button onClick={() => setIsOpenAddModal(!isOpenAddModal)} className='px-8 py-4 text-xl my-[31px] bg-[#8A553EE5] rounded-md text-white font-medium'>Tambah Berita</button>
                </div>
                <div className='bg-[#E2CEBD] h-fit w-full py-[32px] px-[20px] grid grid-cols-4 items-center justify-center gap-5'>
                    <div className='border-4 bg-white rounded-2xl w-[300px] h-[450px] px-[20px] py-[29px] space-y-2'>
                        <div className='flex items-center justify-end relative'>
                            <button onClick={() => setIsOpenOption(!isOpenOption)}>
                                <HiDotsVertical className='text-lg'/>
                            </button>
                            {isOpenOption &&
                            (
                                <>
                                    <div className='absolute bg-[#FFEFE0] px-3 py-1 space-y-3 text-sm border top-5 right-0 w-'>
                                        <button onClick={() => setIsOpenEditModal(!isOpenEditModal)} className='flex items-center justify-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                                                <path d="M22.75 10H3.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M22.75 6H3.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M22.75 14H3.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M22.75 18H3.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <h1 className='font-medium'>Edit</h1><br />
                                        </button>
                                        <div className='flex items-center justify-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M3 6H5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14 11V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <button className='font-medium'>Delete</button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className='flex items-center justify-center '>
                            <img className='object-fit' src="https://i.pravatar.cc/200" alt="" />
                        </div>
                        <h1 className='font-semibold text-center text-lg' >Ada minimal empat kalimat</h1>
                        <h1 className='text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum enim rem repellat sunt nostrum fuga. Corporis doloribus officiis qui accusamus! Similique minus, esse voluptate iste repudiandae dolores numquam ullam.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
