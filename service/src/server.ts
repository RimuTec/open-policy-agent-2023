import axios from 'axios';
import express, { Request, Response } from 'express';

const port = 3000;

const server = express();

server.use(async (req, res, next) => {
   const authToken = req.headers.authorization;
   const parts = req.originalUrl.substring(1).split('/');
   const requestDetails = {
      "method": req.method,
      "path": parts,
      "user": authToken?.split(' ')[1].toLowerCase()
   };
   console.log(`loc 230507-1749: requestDetails are ${JSON.stringify(requestDetails)}`);
   const opaRequest = {
      "input": requestDetails
   };
   const response = await axios.post('http://localhost:8181/v1/data/httpapi/authz', opaRequest);
   const allowed = response.data.result.allow;
   if (allowed) {
      next();
   }
   else {
      console.log(`loc 230507-1809: request denied.`)
      res.sendStatus(403); // request denied
   }
});

server.get('/', (req: Request, res: Response) => {
   res.send(('Hello from express server'));
});

server.get('/finance/salary/:userName', (req, res) => {
   const msg = `loc 230507-1718: requested salary for user ${req.params.userName}`;
   console.log(msg);
   res.send(msg);
});

server.listen(port, () => {
   console.log(`loc 230430-1353: express is listening on port ${port}`);
});
