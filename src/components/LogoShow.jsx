import Image from "next/image";

const LogoShow = () => {
  return (
    <div className="px-2 py-1 border-[6px] border-background rounded-3xl bg-primary shadow-lg flex justify-center items-center">
      <Image
        src="/logo-3.png"
        alt="casalalla"
        width={1000}
        height={1000}
        className="w-24 lg:w-28"
      />
    </div>
  );
};

export default LogoShow;
