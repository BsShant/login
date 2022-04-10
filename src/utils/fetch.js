// export const server = 'https://thamibackend.nepalthamisociety.org';


export const server = 'http://localhost:5000';
export const token = localStorage.getItem("loginToken")


const parsedToken = JSON.parse(token);

export default parsedToken;


