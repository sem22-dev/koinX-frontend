
import Image from "next/image";

export default function Team(){

    const teamMembers = [
        {
          id: 1,
          name: "John Smith",
          designation: "Designation here",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          imageSrc: "/image1.jpeg"
        },
        {
          id: 2,
          name: "Elina Williams",
          designation: "Designation here",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          imageSrc: "/image2.jpg"
        },
        {
          id: 3,
          name: "Don Williams",
          designation: "Designation here",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          imageSrc: "/image1.webp"
        }
      ];
      

    return(
        <div className="mt-10 bg-white px-4 py-6 rounded-lg">
            <h1 className='text-xl font-semibold'>Team</h1>
            <p className="text-sm text-gray-600 py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {teamMembers.map(member => (
                <div key={member.id} className="flex flex-col md:flex-row  items-center gap-4 bg-[#E8F4FD] rounded-lg p-4 mb-4">
                <div className="flex flex-col items-center">
                    <Image src={member.imageSrc} width={100} height={100} alt="Team member" className="rounded-lg"/>
                    <h1 className="text-lg font-medium mt-2">{member.name}</h1>
                    <p className="text-xs text-gray-600">{member.designation}</p>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-600">
                    {member.description}
                    </p>
                </div>
                </div>
            ))}
        </div>
    )
}
