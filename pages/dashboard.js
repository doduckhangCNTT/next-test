import { getSession, signIn  } from "next-auth/react"
import {useState, useEffect} from "react"
function Blog({ data }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession(); // kiểm tra người dùng đã đăng nhập hay chưa nếu chưa đăng nhập thì trả về false và ngược lại trả về true
      console.log(session)
      if(!session) {
        signIn();
      } else {
        setLoading(false)
      }
    }
    securePage()
  }, []);

  if(loading) {
    return <h2>Loading...</h2>
  }

  return <h1>Blog page</h1>
}

export default Blog