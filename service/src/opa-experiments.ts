import axios from 'axios';

const requestByAlice = {
   "method": "GET",
   "path": ["finance", "salary", "alice"],
   "user": "alice"
};

const wrapped = {
   "input": requestByAlice
}

async function doStuff() {
   const result = await axios.post('http://localhost:8181/v1/data/httpapi/authz', wrapped);
   const resultAsJson = JSON.stringify(result.data);
   console.log(`result is ${resultAsJson}`);
}

doStuff().then(() => {
   console.log(`request complete`);
});
