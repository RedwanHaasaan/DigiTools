const ToggleButtons = ({active,setActive,cartItem}) => {

  return (
    <div className="max-w-44 xl:max-w-56 mx-auto flex gap-2 border rounded-full border-gray-100">
      
      <button
        onClick={() => setActive("products")}
        className={`btn flex-1 rounded-full transition-all duration-300
        btn-sm xl:btn-lg
        ${active === "products"
          ? "bg-gradient text-white"
          : "btn-ghost"}`}
      >
        Products
      </button>

      <button
        onClick={() => setActive("cart")}
        className={`btn flex-1 rounded-full transition-all duration-300
        btn-sm xl:btn-lg
        ${active === "cart"
          ? "bg-gradient text-white"
          : "btn-ghost"}`}
      >
        Cart({cartItem})
      </button>

    </div>
  );
};

export default ToggleButtons;