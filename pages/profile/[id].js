/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Pagination } from "../../components/pagination";

const UserDetail = ({ repos, user }) => {
  console.log(
    repos &&
      repos.sort((a, b) => (b.updated_at > a.updated_at ? 1 : -1)).slice(0, 6)
  );
  console.log(user);
  return (
    <div className="container-fluid ">
      <div className="row ">
        {/* userDet */}
        <div className="col-md-4 my-4">
          <div className="card profile-card-5">
            <div className="card-img-block">
              <img
                className="card-img-top rounded-circle"
                src={user.avatar_url}
                alt="Card image cap"
              />
            </div>
            <div className="card-body pt-0">
              <h3 className="card-title my-3">
                {user.name !== null ? user.name : ""}
              </h3>
              <h6 className="card-title my-3">
                {user.login !== null ? user.login : ""}
              </h6>

              <p className="card-text">{user.bio ? user.bio : ""}</p>
              <p>
                <svg
                  text="muted"
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-people"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                  ></path>
                </svg>
                <span className="mx-2 followDet ">{`${user.followers} followers`}</span>
                <span className="mx-2 followDet ">{`${user.following} following`}</span>
              </p>
              <p>
                {user.location ? (
                  <>
                    <svg
                      className="octicon octicon-location"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                    <span className="mx-2 followDet ">{`${
                      user.location ? user.location : "Unknown"
                    }`}</span>
                  </>
                ) : (
                  ""
                )}
              </p>
              <p>
                {user.blog ? (
                  <a href={user.blog}>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-link"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                      ></path>
                    </svg>
                    <span className="mx-2 followDet ">{`${
                      user.blog ? user.blog : "Unknown"
                    }`}</span>
                  </a>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
        {/* userDet */}
        {/* userReps */}
        <div className="my-4 col-lg-8 col-md-8 col-12 ">
        Popular repositories
          <div className="container">
            <div className="row row-cols-2">
              {repos &&
                repos
                  .sort((a, b) => (b.updated_at > a.updated_at ? 1 : -1))
                  .slice(0, 6)
                  .map((item, index) => {
                    return (
                      <div className="col my-4 repos " key={index}>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">
                              <a href={item.clone_url}>{item.name}</a>
                              <span className="privacy">
                                {item.private ? "Private" : "Public"}
                              </span>{" "}
                            </h5>

                            <p className="card-text">{item.description}</p>
                            <span>
                              <svg
                                aria-label="stars"
                                role="img"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-star"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                ></path>
                              </svg>
                              <span className="mx-2">
                                {item.stargazers_count}
                              </span>
                            </span>
                            <span>
                              <svg
                                aria-label="forks"
                                role="img"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                className="octicon octicon-repo-forked"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                ></path>
                              </svg>
                              <span>{item.forks_count}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    <Pagination data={repos} dataLimit={6} />
                  </div>
            </div>
          </div>
        </div>

        {/* userReps */}
      </div>
    </div>
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
