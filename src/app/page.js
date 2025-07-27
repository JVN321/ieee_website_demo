import Image from "next/image";


export default function Home() {
  return (
    <div className="font-primary">
      <Image src={"background/IEEE_background.svg"} alt="IEEE Background" layout="fill" objectFit="contain" className="p-[5%]"/>
      
    </div>
  );
}
