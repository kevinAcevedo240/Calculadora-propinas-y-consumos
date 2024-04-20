import type {MenuItem} from '../types'

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <>
     
      <button
        className=" border-4 rounded-lg border-gray-300 w-full p-3 
      flex justify-between hover:bg-gray-900 hover:transition-all 
      hover:duration-200 hover:text-4xl hover:text-white"
        onClick={() => addItem(item)}
      >
        <p className="text-xl font-semibold ">{item.name}</p>
        <p className="font-black text-2xl">${item.price}</p>
      </button>
    </>
  );
}
