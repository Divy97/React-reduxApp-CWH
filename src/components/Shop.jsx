import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>DEPOSIT/WITHDRAW MONEY</h2>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(withdrawMoney(100))}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary"
        onClick={() => dispatch(depositMoney(100))}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
