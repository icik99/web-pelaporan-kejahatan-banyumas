import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-[31px] border rounded-md p-10 bg-[#8A553EE5]">
        <Image src={"/assets/images/logoKabBanyumas.png"} width={95} height={95} alt="logo kab banyumas"/>
        <div className="flex text-3xl gap-10 font-medium items-center text-white">
            <Link href={'/info-terkini'}>Info Terkini</Link>
            <Link href={'/lapor-kejahatan'}>Lapor Kejahatan</Link>
            <Link href={'/pelaporan'}>Status Laporan</Link>
            <Link href={'/pelaporan'}>FAQ</Link>
            <Link href={'/pelaporan'}>Bantuan</Link>
            <Link href={'/pelaporan'}>Kontak</Link>
            <Link href={"/login"} className="px-[40px] py-[12px] bg-[#3C2621] text-white flex items-center justify-center rounded-[20px]">Login</Link>
        </div>
    </div>
  )
}
