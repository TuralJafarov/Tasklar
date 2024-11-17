import { useSelector } from "react-redux";

function CourseValue() {
  const { searchTerm, data } = useSelector(({ course }) => course);

  const filteredCourses = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = filteredCourses.reduce((acc, item) => acc + parseFloat(item.coast), 0);

  return (
    <div className="d-flex justify-content-end">
      <p>Total Price: ${totalPrice}</p> 
    </div>
  );
}

export default CourseValue;
