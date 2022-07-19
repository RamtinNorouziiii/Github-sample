 const UserDetail = ({repos,user})=>{
   console.log(repos)
   console.log(user)
    return(
        <div className="detail-container"  >
      det
        </div>
    )
}

export const getServerSideProps = async (context)=>{
const res = await fetch(`https://api.github.com/users/${context.query.id}/repos`)
const repos = await res.json()
const res1 = await fetch(`https://api.github.com/users/${context.query.id}`)
const user = await res1.json()
return{
   props:{
repos,user
   }
};
}
    



export default UserDetail