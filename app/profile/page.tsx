import getCurrentUser from "../actions/getCurrentUser"
import UserInfo from "./components/UserInfo"

const profile = async() => {
  const currentUser = await getCurrentUser();
  return (
    <div className="flex items-center h-full justify-center">
        <div className="flex flex-col">
            <h1  className="text-3xl md:text-6xl text-white text-center">
                Who is watching?
            </h1>
            <div className="flex items-center justify-center gap-8 mt-10">
                <UserInfo user={currentUser}/>
            </div>
        </div>
    </div>
  )
}

export default profile