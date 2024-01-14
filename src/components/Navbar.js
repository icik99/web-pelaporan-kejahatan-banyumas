import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Navbar() {
  const route = useRouter()
  console.log(route, 'route')
  return (
    <div className="flex items-center justify-center gap-[31px] border p-3 bg-[#8A553EE5]">
        <Image src={"/assets/images/logoKabBanyumas.png"} width={95} height={95} alt="logo kab banyumas"/>
        <div className="flex text-3xl gap-10 font-medium items-center text-white">
            <Link href={'/info-terkini'}>Info Terkini</Link>
            <Link href={'/lapor-kejahatan'}>Lapor Kejahatan</Link>
            <Link href={'/status-laporan'}>Status Laporan</Link>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/bantuan'}>Bantuan</Link>
            <Link href={'/kontak'}>Kontak</Link>
            <Link href={"/login"} className="px-[40px] py-[12px] bg-[#3C2621] text-white flex items-center justify-center rounded-[20px]">Login</Link>
        </div>
    </div>
  )
}
