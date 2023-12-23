import { Button } from "react-bootstrap";
import { useCartContext } from "../Eticaret";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const cartcontext = useCartContext();
  const navigate = useNavigate();

  const buttonClick = () => {
    fetch("/siparis-kabul").then((sonuc) => navigate("/thankyou"));
  };

  return (
    <div>
      <h2>ödeme ve teslim bilgileri</h2>
      <div>Alıcı adı soyadı</div>
      <input />
      <div>Teslim adresi</div>
      <input />
      <div>Kredi kartı numarası</div>
      <input />
      <div>Karttan çekilecek tutar</div>
      <div>{cartcontext.cart.total} TL</div>
      <Button onClick={buttonClick}>Ödeme yap</Button>
    </div>
  );
}
export default CheckOut;
