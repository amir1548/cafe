

const Menu = () => {

  const menuItems = [
    {
      id: 1,
      title: "Espresso",
      description: "A strong and bold coffee made with concentrated espresso",
   
      price: "$3.50"
    },
    {
      id: 2,
      title: "Cappuccino",
      description: "Espresso with steamed milk and foam",
  
      price: "$4.00"
    },
    {
      id: 3,
      title: "Latte",
      description: "Espresso with steamed milk and a small amount of foam",
      price: "$4.50"
    },
    {
      id: 4,
      title: "Mocha",
      description: "Espresso with chocolate syrup and steamed milk",
      price: "$5.00"
    },
    {
      id: 5,
      title: "Americano",
      description: "Espresso with hot water",
      price: "$3.00"
    },
    {
      id: 6,
      title: "Macchiato",
      description: "Espresso with a small amount of steamed milk",
      price: "$3.50"
    }
  ];

  return (
    <div className="bg-[#252525]">
        

        <div className="text-white text-4xl flex flex-col items-center font-bold capitalize mb-10">
            <h1>Our Menu</h1>

            <div className="bg-red-500 w-[100px] h-[1px] mt-3"></div>
        </div>


        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 my-20">
            {menuItems.map((item) => (
                <div key={item.id} className="bg-[#1c1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center gap-4">
                    <img src={item.img} alt={item.title} className="w-[200px] h-[200px] object-cover rounded-lg" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold text-white">{item.title}</h2>
                        <p className="text-gray-300">{item.description}</p>
                        <p className="text-xl font-bold text-orange-500">{item.price}</p>
                    </div>
                </div>
            ))}

        </div>

    </div>
  )
}

export default Menu