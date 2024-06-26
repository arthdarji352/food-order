const MenuItem = () => {
  return (
    <div
      className="bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
    >
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elits
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:bg-red-300 transition duration-150 ease-in-out-expo">
        Add to cart $15
      </button>
    </div>
  );
};

export default MenuItem;
