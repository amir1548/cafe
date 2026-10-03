import { hero1 } from ".."





const Home = () => {
  return (
    <div className="bg-red-1000 h-screen flex items-center justify-center gap-10 px-10 md:px-20">
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-orange-400">Best Coffee</h1>

            <h2 className="text-4xl font-bold text-white">
                Make Your Day With Our Special Coffee</h2>
            <p className="text-lg text-white">
                welcome to our coffee paradise , where every bean tells a story and every cup sparks joy</p>

            <div className="flex gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-transparent transition duration-300">Order Now</button>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium border border-white hover:bg-transparent transition duration-300">Contact Us</button>
            </div>
        </div>

        <div className="flex justify-center">
            <img src={hero1} alt="logo"></img>
        </div>
    </div>
  )
}

export default Home