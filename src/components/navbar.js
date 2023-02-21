import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="p-3 flex justify-between items-center w-full flex-col sm:flex-row bg-clay-800 drop-shadow-2xl">
      <Image  onClick={() => {router.push("/")}} src="/logo.png" alt="logo" width={300} height={100} />
    
    
      <div className="flex justify-center items-center">
        <h2
        onClick={() => {router.push("/")}}
         className="p-4 text-2xl cursor-pointer font-semibold text-clay-100 hover:text-clay-300 hover:scale-95 transition-all">
          Home
        </h2>
        <h2
        onClick={() => {router.push("/hol")}}
         className="p-4 text-2xl cursor-pointer font-semibold text-clay-100  hover:text-clay-300 hover:scale-95 transition-all">
          Higher or Lower?
        </h2>
      </div>
    </div>
  );
}
