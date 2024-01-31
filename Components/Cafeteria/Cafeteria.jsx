import React, { useEffect } from "react";
import { Cards } from "../Cards/Cards.jsx";
import "./Cafeteria.css";
import { Nav } from "../Nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { asyncallProducts } from "../redux/slice.jsx";
import { VerPedido } from "../BtnBag/BtnBag.jsx";

import publi from "../assets/cafPast.jpg";


export const Cafeteria = (id) => {





  const mesa = id.match.url.slice(1, 3);
  console.log(id.match.url.slice(1, 3), "buscando ideeee");

  let dispatch = useDispatch();

  let { allProduct } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (allProduct.length === 0) dispatch(asyncallProducts());
  }, [allProduct, dispatch]);

  const Cafex = allProduct?.filter((e) => e.section === "Cafe");
  const Desayuno = allProduct?.filter((e) => e.section === "Desayuno/Merienda");
  const DELICATESSEN = allProduct?.filter((e) => e.section === "DELICATESSEN");
  const POSTRES = allProduct?.filter((e) => e.section === "POSTRES");

  return (
    <div className="containerL">
      <Nav id={mesa} />
      <div className="sectioner">
      <a href="#4">Postres</a>
      <a href="#3">Delicatessen</a>
      <a href="#2">Desayuno/Merienda</a>
      <a href="#1">Cafe</a>
    </div>
      <div className="conteinerLC ">
        <div className="conteinerLB2 animate__animated  animate__zoomIn animate__faster">
          <img src={publi} alt="promo" id="1" />
          <Cards products={Cafex} />
          <img src="https://www.elcolectivo.com.ar/u/fotografias/m/2022/10/4/f768x1-87673_87800_174.jpg" alt="promo" id="2" />
          <Cards products={Desayuno} />
          <img src="https://i.pinimg.com/originals/b5/57/59/b5575945f530d0f9b7d4ee4d470b63c6.jpg" alt="promo" id="3" />
          <Cards products={DELICATESSEN} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TipnrNFLzeSVvyG2DcXvmn6PhuPB-jK4-g&usqp=CAU" alt="promo" id="4" />
          <Cards products={POSTRES} />
        </div>
      </div>
      <VerPedido id={mesa} />
    </div>
  );
};
