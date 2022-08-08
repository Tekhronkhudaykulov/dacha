import axios from "axios";

export const baseUrl = `https://api.dachatravel.uz`;
const url = baseUrl + `/api`;

const token = localStorage.getItem("@token");
export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
};



// let formData = (rawData) => {
//   let form = new FormData();
//   Object.keys(rawData).forEach((key) => {
//     if (rawData[key]) {
//       if (Array.isArray(rawData[key])) {
//         rawData[key].forEach((item, index) => {
//           form.append(`${key}[${index}]`, item);
//         });
//       } else {
//         form.append(key, rawData[key]);
//       }
//     }
//   });
//   return form;
// };

export const formData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof File)
      ) {
        formData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }
  return fd;
};

const api = axios.create({
  baseURL: url,
});

const requests = {
  register: (userInfo) => api.post(`/register`, userInfo),
  login: (userLogin) => api.post(`/login`, userLogin),
  topCard: () => api.get(`/top-rated`),
  fetchUser: () => api.get(`/user`, { ...config }),
  fetchIdUser: (id) => api.get(`/dacha/${id}`),
  addHome: (params) => api.post(`/dacha`, formData(params), config),
  dachaCategory: () => api.get(`/category`, { ...config }),
  searchDacha: (params) => api.get(`/dacha`, { params, ...config }),
  comforts: () => api.get(`/comfort`),
  dachaTypeList: () => api.get(`/type-list`),
  viewDacha: (id) => api.post(`/view-add/${id}`),
  userDachaList: () => api.get(`user/dacha`, { ...config }),
  dachaUpdate: (params) =>
    api.post(`dacha/${params.id}`, formData(params), config),
  deleteDacha: (id) =>
    api.post(`user/dacha/delete/${id}`, { _method: "delete" }, config),
  userUpdate: (params) =>
    api.post(`user-update`, formData(params), config, { _method: "PUT" }),
  premiumDacha: () => api.get(`dacha?premium=1`, { ...config }),
  postFavourite: (id) => api.post(`favourite-add/${id}`, {...config}),
  getFavourite: () => api.get(`favourite-list`, config),
  sms: (params) => api.post(`verify-user`, params),
  ratingDacha: (params) => api.post(`rating-add/${params.id}`, params, config),
  passwordRecover: (params) => api.post(`password-recover`, params),
  verifyRecover: (params) => api.post(`verify-recover`, params),
  passwordUpdate: (params)  => api.post(`password-update`, params,config),
  dachaLevel: (params) => api.post(`dacha-level`, params, config),
  dachaUp:(params) => api.post(`dacha-up`, params, config)
};
export default requests;
