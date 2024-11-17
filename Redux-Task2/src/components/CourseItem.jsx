import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increment, decrement } from '../slicers/cartSlice';

function CourseItem({title, price, img, quantity,id}) {
  const dispatch =useDispatch()

  return (
    <div className="cartItem d-flex align-item-center justify-content-between px-3">
      <img src={img} alt="" className="w-25" />
      <div>
        <h4>{title}</h4>
        <h4>{price}$</h4>
        <div>
          <button onClick={()=>dispatch(increment(id))} className="btn btn-danger">
          <BsChevronUp />
          </button>
          <p className="mx-3 my-2">{quantity}</p>
          <button onClick={()=>dispatch(decrement(id))} className="btn btn-danger my-2">
          <BsChevronDown />
          </button>
        </div>
        <button onClick={()=>dispatch(removeItem(id))} className="btn btn-primary">Sil</button>
      </div>
    </div>
  );
}

export default CourseItem;
