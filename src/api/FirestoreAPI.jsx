import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot, doc, updateDoc, query, where, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";



let postref = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
let commentRef = collection(firestore, "comments");

export const postStatus = (object) => {

 addDoc(postref, object)
 .then(() =>{
    toast.success('Post has been added successfuly')
 })
 .catch ((err) => {
    console.log(err)
 })
}


export const getStatus = (setAllStatuses) => {
  onSnapshot(postref, (response) => {
   setAllStatuses(response.docs.map((docs) => {
     return {...docs.data(), id: docs.id}
    }));
  })
}

export const getSingleStatus = (setAllStatuses, id) => {
  const singlePostQuery = query(postref, where("userId","==",id));
  onSnapshot(singlePostQuery, (response) =>{
    setAllStatuses(
      response.docs.map((docs) => {
        return {...docs.data(), id:docs.id}
      })
    );
  });

};
export const getSingleUser = async (setUser, id) => {
  const userRefById = doc(userRef, id);
  const singleUserQuery = await getDoc(userRefById);
  setUser(singleUserQuery.data());
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  let currEmail = localStorage.getItem("userEmail");
  console.log("local storage currEmail:", currEmail);
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === currEmail;
        })[0]
    );
  });
};


export const editProfile = (id, payLoad) => {
  let userToEdit = doc(userRef,id)

  updateDoc(userToEdit, payLoad)
  .then(() => {
    toast.success('Profile has been updated successfuly')
  })
  .catch((err) => {
    console.log(err);
  });
}


export const likePost = (userId, postId, liked) => {

  try {
    let docToLike = doc(likeRef,`${userId}_${postId}`)
if(liked){
  deleteDoc(docToLike);
}
else {
  setDoc(docToLike, {userId, postId});
}
  
  }
  catch(err) {
  console.log(err)
  }
  
}


export const getLikesByUser = ( userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where("postId", "==", postId))

   onSnapshot(likeQuery, (response) => {
    let likes = response.docs.map((doc) => doc.data());
    let likesCount = likes?.length;

    const isLiked = likes.some((Like) => Like.userId === userId);


    setLikesCount(likesCount);
    setLiked(isLiked);
   });
 }
  catch(err) {
  console.log(err)
  }
}


export const postComment = (postId, comment, timestamp) =>{
  try {
   addDoc(commentRef,{
    postId, comment, timestamp
   })
  }
  catch(err) {
  console.log(err)
  }
}


export const getcomments = (postId, setComments) =>{
  try{
     let singlePostQuery = query(commentRef, where("postId", "==", postId))

     onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }) ;
      setComments(comments)
     })
  }
  catch(err) {
   console.log(err)
  }
}
