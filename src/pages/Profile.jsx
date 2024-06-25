import ProfileComponent from "../components/ProfileComponent"

// eslint-disable-next-line react/prop-types
export default function Profile ({currentUser}) {
    return <ProfileComponent currentUser={currentUser}/>
}