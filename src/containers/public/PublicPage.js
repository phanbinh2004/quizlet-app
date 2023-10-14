import { Link } from "react-router-dom";
import { PATH } from "../../utils/PATH";
 
export default function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <Link to={PATH.APP}> Go to app </Link>
    </>
  );
}

