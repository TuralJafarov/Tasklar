import { CiShoppingBasket } from "react-icons/ci";
import { useSelector } from "react-redux"; 

function Navbar() {
  const totalQuantity = useSelector((store) => store.cart.quantity);

  return (
    <div className="d-flex align-items-center justify-content-between px-3 bg-primary p-2">
      <h3>The Courses</h3>
      <div className="d-flex align-items-center bg-white rounded p-2">
        <p className="mb-0 me-2">{totalQuantity}</p>
        <CiShoppingBasket className="fs-2" />
      </div>
    </div>
  );
}

export default Navbar;
