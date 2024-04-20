import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


export default function OrderTotal({order, tip, placeOrder}: orderTotalProps) {
  
    const subtotalAmount = useMemo(
      () =>
        order.reduce((total, item) => total + item.quantity * item.price, 0),
      [order]
    )

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])
  
    return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales Y Propina</h2>
        <p className="text-lg">Subtotal a Pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p className="text-lg">Propina: {''}
            <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p className="text-lg">Total a Pagar: {''}
            <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>


      </div>

      <button 
      className="w-full bg-gray-900 p-3 mt-10 text-white uppercase rounded-lg font-semibold text-xl disabled:opacity-10"
      disabled={totalAmount === 0}
      onClick={placeOrder}>
        Guardar Orden
      </button>
    </>
  );
}
