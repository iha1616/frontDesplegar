import Swal from "sweetalert2"
// eslint-disable-next-line
const url = process.env.REACT_APP_URL_API // http://localhost:3000/api

const get = async (accessPath) => {
   return fetch(`http://localhost:3000/api/${accessPath}`, {
      method: "GET"
   })
      .then((res) => {
         if (!res.ok) {
            console.error("a")
         }
         return res.json()
      })
      .catch((err) => console.log(err))
}


const eliminar = async (accessPath) => {
   try {
      const response = await fetch(`http://localhost:3000/api/${accessPath}`, {
         method: "DELETE",
      })
      const data = await response.json()
      return data
   } catch (error) {
      return await Swal.fire({
         position: "center",
         icon: "error",
         title: "ERROR",
         text: `${error}`,
         showConfirmButton: false,
         timer: 1500,
      })
   }
}

const create = async (accessPath, body) => {
   try {
      const response = await fetch(`http://localhost:3000/api/${accessPath}`, {
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
   } catch (error) {
      return await Swal.fire({
         position: "center",
         icon: "error",
         title: "ERROR",
         text: `${error}`,
         showConfirmButton: false,
         timer: 1500,
      })
   }
}

const update = async (accessPath, body) => {
   try {
      const response = await fetch(`http://localhost:3000/api/${accessPath}`, {
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify(body)
      })
      const data = await response.json();
      return data;
   } catch (error) {
      return await Swal.fire({
         position: "center",
         icon: "error",
         title: "ERROR",
         text: `${error}`,
         showConfirmButton: false,
         timer: 1500,
      })
   }
}

const loginValidate = async (body) => {
   try {
      const response = await fetch(`http://localhost:3000/api/acceso/auth`, {
         method: "POST",
         headers: { "Content-type": "application/json" },
         body: JSON.stringify(body)
      })
      const data = await response.json()
      return data
   } catch (error) {
      return await Swal.fire({
         position: "center",
         icon: "error",
         title: "ERROR",
         text: `${error}`,
         showConfirmButton: false,
         timer: 1500,
      })
   }
}

const uploadFiles = async (accessPath, body) => {
   try {
      const response = await fetch(`http://localhost:3000/api/${accessPath}`, {
         method: "POST",
         body: body
      })
      const data = await response.json()
      return data
   } catch (error) {
      return await Swal.fire({
         position: "center",
         icon: "error",
         title: "ERROR",
         text: `${error}`,
         showConfirmButton: false,
         timer: 1500,
      })
   }
}

const downloadFiles = async (accessPath) => {
   return fetch(`http://localhost:3000/api/${accessPath}`, {
      method: "GET"
   })
      .then((res) => {
         if (!res.ok) {
            console.error("a")
         }
         return res.json()
      })
      .catch((err) => console.log(err))
}

export {
   get,
   eliminar,
   create,
   update,
   loginValidate,
   uploadFiles,
   downloadFiles,
}
