import {  ProductData } from "../assets/FakeData"
import ProductCard from "./ProductCard"


const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div className="">
                <h3 className="font-medium text-2xl">Fruits & Vagetables</h3>
                <p className="text-gray-600 mt-2">Buy farm fresh fruits and vegetables online at the best prices</p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="featureButton">Fruits</button>
                <button className="text-gray-600 hover:text-accent">Vegetables</button>
                <button>Bread & Bakery</button>

            </div>

            
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div className="">
            <img src="../../public/images/feature__1.webp" alt="Banner" className="w-full h-full object-cover" />
          </div>

          {ProductData && ProductData.map(el => 
            <ProductCard 
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.price}
            
            />)}
        </div>
    </div>
  )
}

export default FeatureSectionFruits