import Swal from "sweetalert2";

const EroorPayment = () => {
  Swal.fire({
    title: "Payment not completed!",
    icon: "error",
    timer: 1500,
    showConfirmButton: false,
    customClass: {
      popup: "custom-swal-popup",
    },
  });
  return <div></div>;
};

export default EroorPayment;
