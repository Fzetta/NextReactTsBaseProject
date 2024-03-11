import { MainLayout } from "@/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout title={""}  >
      <div className="flex flex-col gap-7">
        <div className="bg-amber-100 w-[850px] h-[530px] rounded-2xl">
          <h1 className="py-6 text-center text-black text-4xl font-bold tracking-widest uppercase" >
            Orden del Loto Blanco
          </h1>
          <div class= "flex grid items-center grid-cols-3 gap-10" >
          <div class="col-span-1 min-h-100 pl-10">
            <img class="rounded-lg h-80 w-80" src="/assets/Iroh.png" alt="Iroh"></img>
          </div>
          <div className="flex flex-col col-span-2 ml-6">
            <h3 className="text-3xl text-black m-0">{"Iroh"}</h3>
            <p className="text-black uppercase">Nombre</p>
            <h3 className="text-3xl text-black m-0 pt-4">{"Nación del Fuego"}</h3>
            <p className="text-black uppercase">Nacionalidad</p>
            <h3 className="text-3xl text-black m-0 pt-4">{"35 D.G"}</h3>
            <p className="text-black uppercase">Fecha de Nacimineto</p>
            <h3 className="text-3xl text-black m-0 pt-4">{"Gran Loto"}</h3>
            <p className="text-black uppercase">Rango</p>
            
          </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
