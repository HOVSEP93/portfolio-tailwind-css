import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Offer = () => {
  return (
    <div
      id="offer"
      className="w-full py-[10rem] px-4 bg-base-content text-black"
    >
      <h1 className="font-bold text-center mb-20 text-4xl">MY OFFER TO YOU</h1>
      <div className="mx-w-[1240px] grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="w-full bg-neutral-content  shadow-2xl rounded-md flex flex-col p-4 my-4 hover:scale-105 duration-300 hover:mx-auto">
          <img
            src={Single}
            alt="single-card"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text-center py-2">Single User</h2>
          <p className="text-4xl font-bold text-center text-secondary-focus">
            $149
          </p>
          <div className="text-center text-lg">
            <p className="py-2 border-b mx-8 border-b-secondary mt-2">
              500 GB Storage
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              Send up to 2 GB
            </p>
          </div>
          <button class="btn btn-secondary mx-auto mt-4 ">Start Trial</button>
        </div>
        {/* Card 2 */}
        <div className="w-full bg-neutral-content  shadow-2xl rounded-md flex flex-col p-4  my-4 hover:scale-105 duration-300 hover:mx-auto">
          <img
            src={Double}
            alt="single-card"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text-center py-2">Single User</h2>
          <p className="text-4xl font-bold text-center text-secondary-focus">
            $149
          </p>
          <div className="text-center text-lg">
            <p className="py-2 border-b mx-8 border-b-secondary mt-2">
              500 GB Storage
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              Send up to 2 GB
            </p>
          </div>
          <button class="btn btn-secondary mx-auto mt-4">Start Trial</button>
        </div>
        {/* Card 3*/}
        <div className="w-full bg-neutral-content  shadow-2xl rounded-md flex flex-col p-4 my-4 hover:scale-105 duration-300 hover:mx-auto">
          <img
            src={Triple}
            alt="single-card"
            className="w-20 mx-auto mt-[-3rem]"
          />
          <h2 className="text-2xl font-bold text-center py-2">Single User</h2>
          <p className="text-4xl font-bold text-center text-secondary-focus">
            $149
          </p>
          <div className="text-center text-lg">
            <p className="py-2 border-b mx-8 border-b-secondary mt-2">
              500 GB Storage
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 border-b-secondary">
              Send up to 2 GB
            </p>
          </div>
          <button class="btn btn-secondary mx-auto mt-4">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;

// Cards daisyUI
{
  //   /* <div class="card w-96   shadow-xl mx-auto my-7 ">
  //             <figure>
  //               <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
  //             </figure>
  //             <div class="card-body">
  //               <h2 class="card-title">
  //                 Shoes!
  //                 <div class="badge badge-secondary">NEW</div>
  //               </h2>
  //               <p>If a dog chews shoes whose shoes does he choose?</p>
  //               <div class="card-actions justify-end">
  //                 <div class="badge badge-outline">Fashion</div>
  //                 <div class="badge badge-outline">Products</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="card w-96   shadow-xl mx-auto my-7 ">
  //             <figure>
  //               <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
  //             </figure>
  //             <div class="card-body">
  //               <h2 class="card-title">
  //                 Shoes!
  //                 <div class="badge badge-secondary">NEW</div>
  //               </h2>
  //               <p>If a dog chews shoes whose shoes does he choose?</p>
  //               <div class="card-actions justify-end">
  //                 <div class="badge badge-outline">Fashion</div>
  //                 <div class="badge badge-outline">Products</div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="card w-96   shadow-xl mx-auto my-7 ">
  //             <figure>
  //               <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
  //             </figure>
  //             <div class="card-body">
  //               <h2 class="card-title">
  //                 Shoes!
  //                 <div class="badge badge-secondary">NEW</div>
  //               </h2>
  //               <p>If a dog chews shoes whose shoes does he choose?</p>
  //               <div class="card-actions justify-end">
  //                 <div class="badge badge-outline">Fashion</div>
  //                 <div class="badge badge-outline">Products</div>
  //               </div>
  //             </div>
  //           </div> */
}
