import Image from "next/image";
import { useState } from "react";
import { UserProfile } from "../../components/userprofile";

const UserDetail = ({ repos, user }) => {
  const pageLimit =6
  const [pages] = useState(Math.ceil(repos.length / pageLimit));
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * pageLimit - pageLimit;
    const endIndex = startIndex + pageLimit;
    return repos.slice(startIndex, endIndex);
  };
console.log("@@@@",currentPage)
 

  console.log(
    repos &&
      repos.sort((a, b) => (b.updated_at > a.updated_at ? 1 : -1))
  );
  console.log(user);
  return (
    <>
      <UserProfile user={user} repos={getPaginatedData()} />
     <div className="text-center" >
   {
    repos.length>0 &&  <nav aria-label="Page navigation example " className="paginateNav">
        
    <ul className="pagination">
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={goToPreviousPage}
      >
        <button className="page-link " >
          Previous
        </button>
      </li>
      {pages > 0 &&
        [...Array(pages).keys()].map((item, index) => {
          return (
            <li
              key={index}
              className={`page-item ${
                currentPage === item+1  ? "active" : null
              }`}
              onClick={changePage}
            >
              <a className="page-link">{item+1 }</a>
            </li>
          );
        })}

      <li className={`page-item ${currentPage === pages ? "disabled" : ""}`}>
        <button className="page-link" onClick={goToNextPage}>
          Next
        </button>
      </li>
    </ul>
  </nav>
   }
     </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.github.com/users/${context.query.id}/repos`
  );
  const repos = await res.json();
  const res1 = await fetch(`https://api.github.com/users/${context.query.id}`);
  const user = await res1.json();
  return {
    props: {
      repos,
      user,
    },
  };
};

export default UserDetail;
