import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";

export default function Navbar() {
  const route = useRouter()
  console.log(route, 'route')
  const isAdminRoute = route.pathname.includes("admin") || route.pathname.includes("login") || route.pathname.includes("register");
  const isLoginRoute = route.pathname === "/login/admin" || route.pathname === "/login"

  const Logout = async() => {
    localStorage.removeItem('token')
    route.push('/')
}
  return (
    <div>
      {!isAdminRoute && !isLoginRoute === true ? (
        <div className="flex items-center justify-center gap-[31px] border px-7 py-1 bg-[#8A553EE5]">
          <Link href={"/"}>
            <Image src={"/assets/images/logoKabBanyumas.png"} width={95} height={95} alt="logo kab banyumas"/>
          </Link>
            <div className="flex text-2xl gap-10 font-medium items-center text-white">
                <Link href={'/info-terkini'}>Info Terkini</Link>
                <Link href={'/lapor-kejahatan'}>Lapor Kejahatan</Link>
                <Link href={'/status-laporan'}>Status Laporan</Link>
                <Link href={'/faq'}>FAQ</Link>
                <Link href={'/bantuan'}>Bantuan</Link>
                <Link href={'/kontak'}>Kontak</Link>
                <Link href={"/login"} className="px-[40px] py-[12px] bg-[#3C2621] text-white flex items-center justify-center rounded-md">Login</Link>
            </div>
        </div>
      ) : isLoginRoute == true ? (
        <div className="flex items-center justify-between  border px-7 py-1 bg-[#8A553EE5]">
          <Link href={"/"}>
            <Image src={"/assets/images/logoKabBanyumas.png"} width={95} height={95} alt="logo kab banyumas"/>
          </Link>
          <div className="flex text-2xl gap-10 font-medium items-center text-white">
              {/* <Link href={"/login"} className="px-[40px] py-[12px] bg-[#3C2621] text-white flex items-center justify-center rounded-md">Login</Link> */}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between  border px-7 py-1 bg-[#8A553EE5]">
          <Link href={"/"}>
            <Image src={"/assets/images/logoKabBanyumas.png"} width={95} height={95} alt="logo kab banyumas"/>
          </Link>
          <div className="flex text-2xl gap-10 font-medium items-center text-white">
              <button onClick={Logout} className="px-[40px] py-[12px] bg-[#3C2621] text-white flex items-center justify-center rounded-md">Logout</button>
          </div>
        </div>
      )
      }
    </div>
  )
}
