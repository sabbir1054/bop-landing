import Swal from "sweetalert2";

const Success = () => {
  Swal.fire({
    title: "Payment Successful!",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    customClass: {
      popup: "custom-swal-popup",
    },
  });
  return <div></div>;
};

export default Success;
