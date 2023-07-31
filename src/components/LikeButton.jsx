function LikeButton({likes, color, handleLike}){
    return (
        <button onClick={handleLike} style={{backgroundColor: color}}>{likes} {likes===1? "like":"likes"}</button>
    )
}

export default LikeButton