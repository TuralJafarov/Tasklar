import { useDispatch, useSelector } from 'react-redux';
import CourseItem from './CourseItem';
import { clearCart } from '../slicers/cartSlice';

function CourseList() {
  const { cartItems, quantity, total} = useSelector((store) => store.cart);
  const dispatch =useDispatch()
 
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2 className="text-center">Basket</h2>
            <h4 className="text-center">Empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2 className='text-center my-2'>Basket</h2>
          </header>
          <div>
            {cartItems.map((item) => (
              <CourseItem key={item.id} {...item} />
            ))}
          </div>
          <footer className='text-center py-2'>
            <hr />
            <div>
              <h4 className='text-center'>
                Total count: <span>{total}$</span>
              </h4>
            </div>
            <button onClick={()=>dispatch(clearCart())} className='btn btn-danger'>Clean</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
