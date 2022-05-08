// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { useParams } from "react-router-dom";
// import auth from "../../../firebase.init";
// import useItemDetail from "../../../Hooks/useItemDetail";
// const AddItems = () => {
//   const { register, handleSubmit } = useForm();

//   // const {serviceId}= useParams()
//   // const [service] = useItemDetail(serviceId)
//   const [user] = useAuthState(auth);

//   const onSubmit = (data) => {
//     console.log(data);
//     const url = `http://localhost:5000/service`;
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//   };
//   return (
//     <div className="w-50 mx-auto">
//       <h1>Please add New items</h1>
//       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           className="mb-2"
//           placeholder="Name"
//           {...register("name", { required: true, maxLength: 20 })}
//         />
//         <input
//           className="mb-2"
//           placeholder="Supply Name"
//           {...register("sname")}
//         />
//         <input
//           className="mb-2"
//           placeholder="Price"
//           type="number"
//           {...register("price")}
//         />
//         <input
//           className="mb-2"
//           placeholder="Quantity"
//           type="number"
//           {...register("quantity")}
//         />
//         <textarea
//           className="mb-2"
//           placeholder="Datail"
//           {...register("detail")}
//         />
//         <input
//           className="mb-2"
//           placeholder="Photo url"
//           {...register("picture")}
//         />

//         <input
//           className="mb-2"
//           placeholder="User Email "
//           value={user.email}
//           {...register("email")}
//         />

//         <input className="mb-2" placeholder="" type="submit" />
//       </form>
//     </div>
//   );
// };

// export default AddItems;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useItemDetail from "../../../Hooks/useItemDetail";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto mb-5">
      <h1>Please add New items</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Supply Name"
          {...register("sname")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <textarea
          className="mb-2"
          placeholder="Datail"
          {...register("detail")}
        />
        <input
          className="mb-2"
          placeholder="Photo url"
          {...register("picture")}
        />

        <input
          className="mb-2"
          placeholder="User Email "
          value={user.email}
          {...register("email")}
          readOnly
        />

        <input className="mb-2" placeholder="" type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
