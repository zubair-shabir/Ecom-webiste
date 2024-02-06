import {  ProductBakeryData } from "../assets/FakeData"
import ProductCard from "./ProductCard"


const FeatureSectionBakery = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div className="">
                <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
                <p className="text-gray-600 mt-2">Buy best quality breakfast online from big-basket stop near you.</p>
            </div>
            <div className="space-x-4 mt-8 lg:mt-0">
                <button className="featureButton">Eggs & Dairy</button>
                <button className="text-gray-600 hover:text-accent">Pizza</button>
                <button>Snacks</button>

            </div>

            
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div className="">
            <img src="../../public/images/feature__2.webp" alt="Banner" className="w-full h-full object-cover" />
          </div>

          {ProductBakeryData && ProductBakeryData.map(el => 
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

export default FeatureSectionBakery

