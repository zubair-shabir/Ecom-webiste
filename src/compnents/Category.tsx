import { CategoryData } from "../assets/FakeData"
import CategoryCard from "./CategoryCard"



const Category = () => {

   
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CategoryData.map(el => 
        <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
        />
        )}
        </div>
    </div>
  )
}

export default Category