import axios from 'axios';

const client = axios.create({
    baseURL: "https://api.github.com/users/",
});

// export const getUserData = async (name) => {
//     try {
//         const {data} = await axios.get(baseURL + name);

//     }
// }

// export는 따로 해줘도 되고, 함수 앞에 붙여줘도 됨
// export const getUserData = async (name) => { // 비동기 처리를 위한 async, await
//     // data는 객체로 받아오기 때문에 중괄호 안에 넣어줘야 함
//     const { data } = await axios.get("https://api.github.com/users/" + name);
//     // console.log(data);
//     return data;
// }

export const getUserData = async (name) => {
    try {
      const { data } = await client.get(name);
      console.log("[SUCCESS] GET user data", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET user data", e);
      return null;
    }
  };