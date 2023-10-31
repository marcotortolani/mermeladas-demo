import imageCodeQR from "../assets/img/qr-code.png";

const userData = {
  id: 1,
  avatar: "https://tecdn.b-cdn.net/img/new/avatars/8.webp",
  nameUser: "Pepe Argento",
  adress: "Av Siempre Viva 5013",
  phone: "11-1234-5678",
};
export default function Profile() {
  return (
    <section className=" w-full h-full px-6 flex flex-col items-center justify-center gap-4">
      <div className=" w-full flex items-center justify-between gap-2">
        <div className=" w-1/3">
          <img
            src={userData.avatar}
            className="w-32 rounded-full"
            alt="Avatar"
          />
        </div>

        <div className=" w-2/3 ">
          <img src={imageCodeQR} alt="QR Code" />
        </div>
      </div>
      <div className=" w-full  flex flex-col items-start justify-center gap-4">
        <span className=" text-2xl uppercase font-medium">{userData.nameUser}</span>
        <span className=" text-xl">Socio #{userData.id}</span>
        <span className=" text-xl">{userData.adress}</span>
        <span className=" text-xl">{userData.phone}</span>
      </div>
    </section>
  );
}
