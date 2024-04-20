import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl text-gray-900">Consumo</h2>

      <div className=" space-y-3 mt-10">
        {order.map(item => (
            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
              <div>
                <p className="text-xl font-semibold">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p  className="mt-3">
                  Cantidad: {item.quantity} -{" "}<span className="font-black text-lg text-white rounded-lg p-1 px-2 bg-orange-400">
                  {formatCurrency(item.price * item.quantity)}</span>
                </p>
              </div>
              <button 
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-800 hover:duration-300"
              onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
        ))}
      </div>
    </div>
  )
}
