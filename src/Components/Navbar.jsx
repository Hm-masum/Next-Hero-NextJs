"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()

    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Category",
            path: "/categories"
        }
    ]
     
    const handler = () => {
        router.push('/login')
    }
   
  if(pathName.includes('dashboard')) return(
    <div>
      <nav className="bg-green-500 px-10 py-4 flex justify-between items-center">
        <h6 className="text-3xl">Next <span className="text-purple-700">Hero</span></h6>
      </nav>
    </div>
  )

  return (
    <div>
      <nav className="bg-red-500 px-10 py-4 flex justify-between items-center">
        <h6 className="text-3xl">Next <span className="text-cyan-300">Hero</span></h6>
        <ul className="flex justify-between items-center space-x-6">
          {
            links?.map((link)=> <Link className={`${pathName === link.path && 'text-cyan-300'}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button onClick={handler} className="bg-white text-cyan-800 py-2 px-3">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
