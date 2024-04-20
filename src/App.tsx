import Footer from './components/Footer';
import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';
import {menuItems} from './data/db'
import useOrder from './hooks/useOrder';

function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-gray-900 py-5 text-center m-4 rounded-lg p-4">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Calculadora de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-purple-500">
            Propinas y Consumos
          </span>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          ¡Bienvenido! Esta es una calculadora de propinas y consumos, un
          proyecto de práctica creado con React, Typescript, Vite y Tailwind
        </p>
      </header>

      <main className=" max-w-7xl mx-auto py-10 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black text-gray-900">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 mx-4 md:mx-0 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipPercentageForm setTip={setTip} tip={tip} />

              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <div>
              <p className="text-center font-semibold text-xl border border-dashed border-slate-400 rounded-lg py-3">
                Actualmente la orden se encuentra vacía
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App
