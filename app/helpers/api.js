import axios from "axios"

//apply base url for axios
const API_URL = process.env.backend_url + "api"

const axiosApi = axios.create({
  baseURL: API_URL,
  validateStatus: function (status) {
    return status >= 200 && status < 600 // default
  },
})

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") ?? ''}`
  return await axiosApi.get(url, { ...config, params: { ...data } }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") ?? ''}`
  return axiosApi
    .post(url, convertObjectToFormData(data), { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") ?? ''}`
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") ?? ''}`
  return await axiosApi
    .delete(url, { ...config, params: data })
    .then(response => response.data)
}


export const convertObjectToFormData = (object) => {
  let form_data = new FormData();
  for (let key in object) {
    if (object[key] !== null && object[key] !== undefined) {
      if (Array.isArray(object[key])) {
        object[key].forEach((item, index) => {
          if (typeof item === 'object' && !isFile(item) && item !== null && item !== undefined) {
            for (let sub_key in item) {
              form_data.append(`${key}[${index}][${sub_key}]`, item[sub_key]);
            }
          } else {
            form_data.append(`${key}[${index}]`, item);
          }
        })
      } else {
        form_data.append(key, object[key]);
      }

    }
  }
  return form_data;
};

function isFile(input) {
  return 'File' in window && input instanceof File;
}