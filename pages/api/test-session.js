import { getSession } from "next-auth/react";

const Handler = async (req, res) => {
  const session = await getSession({req})

  if(!session) {
    res.status(404).json({error: 'Session not found'})
  } else {
    res.status(200).json({message: 'Success', session})
  }
}

export default Handler