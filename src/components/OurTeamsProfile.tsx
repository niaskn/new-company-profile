import { getUsers } from "@/api/user";
import Image from "next/image";
import { UserState, User } from "@/utils/interface/users";

const OurTeamsProfile = async () => {
  const user: UserState = await getUsers();
  console.log('user : ', user);
  return (
    <main className="bg-pink-200 text-black">
      <div className="mt-20 text-center font-bold text-pink-800 text-4xl">Our Teams</div>
      <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 justify-center p-10 space-x-5 ">
        {user?.results?.map((item: User, index: any) => {
          return (
            <ul key={index} className="text-center">
              <Image
                src={item?.picture.thumbnail}
                width={300}
                height={300}
                alt={"Picture"}
                className="w-52 h-52 flex items-center mx-auto p-5"
              />
              <li className="text-brown-100">
                {item?.name?.first} {item?.name?.last}
              </li>
              <li className="text-brown-100">{item?.location.street.coordinates}</li>
              <li className="text-brown-100">{item?.cell}</li>
              <li className="text-brown-100">{item?.email}</li>
              <li className="text-brown-100">{item?.gender}</li>
            </ul>
          );
        })}
      </div>
    </main>
  )
}

export default OurTeamsProfile