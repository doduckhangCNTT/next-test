import { getSession } from "next-auth/react";

function Blog({ data }) {

  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if(!session) {
    return { 
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog', // đc điều hướng tới trang đăng nhập và sau khi đăng nhập thì nó sẽ ở lại luôn trang blog , nếu ko có callbackUrl thì nó tự động chuyển hướng đến trang chủ
        permanent: false
      }
    }
  }

  return {
    props: {
      data: session ? 'List of 100 ' : 'List of free blog'
    }
  }
}