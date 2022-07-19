export const UserList = ({user})=>{
    return(
        <div className="text-start my-5" >
       <div className="  card mb-3"  >
  <div className="row g-0">
    <div className="col-md-4" style={{width:"200px"}} >
      <img src={user.avatar_url} className="img-fluid rounded-start" alt={`${user.login}Avatar`}   />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}