import { AppContainer } from "@/components/layout/AppContainer"
import { SecBio } from "@/components/pages/profile/SecBio"
import { SecMedal } from "@/components/pages/profile/SecMedal"
import { SecProfile } from "@/components/pages/profile/SecProfile"
import { userSelector } from "@/redux/selectors/user"
import { NextPage } from "next"
import { useState } from "react"
import { useSelector } from "react-redux"

const Profile: NextPage = () => {
  const [user, setUser] = useState(useSelector(userSelector))
  return (
    <div className="my-16 min-h-screen">
      <AppContainer>
        <div className="space-y-10">
          <SecProfile user={user}/>
          <SecMedal/>
          <SecBio/>
        </div>
      </AppContainer>
    </div>
  )
}

export default Profile