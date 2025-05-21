let IS_PROD = true;
const server = IS_PROD ?
    "https://zoom2-ammr.onrender.com" :
    "http://localhost:8000"


export default server;