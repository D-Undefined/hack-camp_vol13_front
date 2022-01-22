import { AppContainer } from "@/components/layout/AppContainer"
import { SecBio } from "@/components/pages/profile/SecBio"
import { SecMedal } from "@/components/pages/profile/SecMedal"
import { SecProfile } from "@/components/pages/profile/SecProfile"
import { NextPage } from "next"

const Profile: NextPage = () => {
  return (
    <div className="my-16 min-h-screen">
      <AppContainer>
        <div className="space-y-10">
          <SecProfile/>
          <SecMedal/>
          <SecBio/>
        </div>
      </AppContainer>
    </div>
  )
}

export default Profile