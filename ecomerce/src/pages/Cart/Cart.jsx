import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { deleteProduct } from "../../redux/reducers/productSlice";

const Cart = () => {
  const viewAdded = useSelector((s) => s.product.products);
  const dispatch = useDispatch();
  const handleRemoveItem = ({item,index}) =>{
    dispatch(deleteProduct(item));
  }
  console.log(viewAdded);
  return (
    <>
      <section className="cart">
        <div className="container mx-auto">
          <div className="table-warpper">
            <table className="table-auto mx-auto max-w-[1000px] border border-cyan-50 text-center">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="w-1/6 p-3">S No.</th>
                  <th className="w-1/3 p-3">Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th className="w-1/6 p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {viewAdded.map((item, i) => (
                  <tr key={i} className="view-product-box">
                    <td>{i+1}</td>
                    <td>
                      <figure className="w-64 mx-auto">
                        <img className="object-contain object-center" src={item.image} alt={item.name} />
                      </figure>
                    </td>
                    <td>
                      <h2>{item.name}</h2>
                    </td>
                    <td>
                      <h5>Rs. {item.price}</h5>
                    </td>
                    <td>
                      <span className="flex justify-center" onClick={()=>handleRemoveItem({item,i})}>
                        <BsTrash3 />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul></ul>
        </div>
      </section>
    </>
  );
};

export default Cart;
