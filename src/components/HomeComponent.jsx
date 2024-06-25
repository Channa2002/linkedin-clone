/* eslint-disable react/prop-types */
import "../Sass/HomeComponent.scss";
import PostStatus from "./common/PostUpdate"

export default function Home({currentUser}) {
    return(
        <div className="home-component">
     <PostStatus currentUser={currentUser}/>
        </div>
    )
}