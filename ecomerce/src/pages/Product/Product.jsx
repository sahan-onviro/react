import { productData } from "../../globals/Data/productData";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/reducers/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const productInCart = useSelector((s) => s.product.products);
  const handleAddBtn = ({ item }) => {
    dispatch(addProduct(item));
  };
  const handleRemoveBtn = ({ item, index }) => {
    dispatch(deleteProduct(item));
  };

  return (
    <section className="product">
      <div className="container mx-auto">
        <div className="product-details max-w-[1200px] mx-auto mt-9">
          <div className="flex flex-wrap -mx-4">
            {productData.map((item, index) => (
              <div key={index} className="w-1/3 px-4">
                <div className="product-item bg-slate-300 rounded p-6">
                  <figure className="rounded-lg h-[250px] overflow-hidden bg-white">
                    <img
                      className="object-cover h-full object-center w-full"
                      src={item.image}
                      alt={item.name}
                    />
                  </figure>
                  <article className="mb-4">
                    <h2 className="text-4xl text-emerald-600 font-medium my-3">
                      {item.name}
                    </h2>
                    <p className="line-clamp-3">{item.desc}</p>
                    <h5 className="mt-4">Rs.{item.price}</h5>
                  </article>
                  <div>
                    {productInCart.find((product) => product.id === item.id) ===
                    undefined ? (
                      <button
                        onClick={() => handleAddBtn({ item })}
                        className="bg-slate-600 py-2 px-6 rounded-md text-white capitalize"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveBtn({ item, index })}
                        className="bg-slate-600 py-2 px-6 rounded-md text-white capitalize"
                      >
                        Remove From Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
