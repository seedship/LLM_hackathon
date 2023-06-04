// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.body);
  const response = await fetch(`http://192.168.1.44:5000/?question=${question}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
  });
  return response;
}
