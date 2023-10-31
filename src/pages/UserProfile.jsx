import imageCodeQR from "../assets/img/qr-code.png";

const userData = {
  id: 1,
  avatar: "https://tecdn.b-cdn.net/img/new/avatars/8.webp",
  nameUser: "Andrés Pérez",
  adress: "Av Siempre Viva 5013",
  phone: "11-1234-5678",
};
export default function Profile() {
  return (
    <section className=" w-full h-full px-6 flex flex-col items-center justify-center gap-4">
      <div className=" w-full h-1/2 flex items-center justify-between gap-2">
        <div className=" z-0 relative w-1/3 h-full ">
          <img
            src={userData.avatar}
            className="  w-32 shadow-md shadow-black rounded-full"
            alt="Avatar"
          />
        </div>

        <div className=" w-2/3 ">
          <img src={imageCodeQR} alt="QR Code" />
        </div>
      </div>
      <div className=" w-full p-4 border-solid border-2 border-gray-400 bg-gradient-to-br from-green-400 to-pink-400 shadow-md shadow-gray-800 flex flex-col items-start justify-center gap-4 rounded-2xl">
        <span className=" text-2xl text-white font-bold uppercase">{userData.nameUser}</span>
        <span className=" text-xl text-sky-700">Socio #{userData.id}</span>
        <span className=" text-xl">{userData.adress}</span>
        <span className=" text-xl">{userData.phone}</span>
      </div>
    </section>
  );
}
