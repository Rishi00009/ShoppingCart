import React, { useContext, memo } from 'react';
import { CartContext } from './Cartcontext';
import Button from './Button';

const data = {
  "1": { name: "Grey Shirt",description : "A versatile and neutral grey color that is perfect for everyday wear.", image: 'https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1168.jpg?t=st=1729702502~exp=1729706102~hmac=6e8e831d308008a289a6d297c3f7a8a7c5cfd81fa6688bf62951f7d18327b751&w=996', price: "$10" },
  "2": { name: "Black Jacket",description : " A sleek and sophisticated black color that adds a touch of elegance to any outfit.", image: 'https://img.freepik.com/free-photo/portrait-handsome-confident-model-sexy-stylish-man-dressed-biker-leather-jacket-black-jeans-fashion-hipster-male-isolated-white-studio-sunglasses_158538-22579.jpg?t=st=1729702951~exp=1729706551~hmac=d7ceaf6c584ec98427c2903454c73c1c31d9a8108a53518d920ab3306a7e787e&w=996', price: "$15" },
  "3": { name: "Red T-shirt",description : "A bold and vibrant red color that makes a statement and adds a pop of color to any outfit.", image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-model-sexy-stylish-man-dressed-red-turtleneck-sweater-jeans-fashion-hipster-male-posing-near-grey-wall-studio-isolated_158538-25131.jpg?t=st=1729703153~exp=1729706753~hmac=253d5f6dc386295c09f39de79dc8600db8d1c6fc24ab3ac20454a86c68fa1e9a&w=996', price: "$8" },
  "4": { name: "Red Suit",description : "A luxurious and eye-catching red color that exudes confidence and sophistication.", image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-red-suit-fashion-male-posing-studio-near-blue-wall-sunglasses_158538-21103.jpg?t=st=1729703207~exp=1729706807~hmac=40ed892f50f28fcd4ed9d6f37b0257187e23a2f858d0d142fd1b4bb4232667bc&w=996', price: "$30" },
  "5": { name: "Green Shirt",description : "A fresh and calming green color that is perfect for spring and summer wear.", image: 'https://img.freepik.com/free-photo/concentrated-young-man-sitting-isolated-grey_171337-10555.jpg?t=st=1729703243~exp=1729706843~hmac=61c9b86fb58ea94401c30771d59af05705224c8164b0272257fe338b55500fb1&w=996', price: "$7" },
  "6": { name: "White Hoodie",description : "A clean and crisp white color that is perfect for casual and athletic wear.", image: 'https://img.freepik.com/premium-photo/man-wearing-white-hoodie-is-standing-front-grey-background_123342-4047.jpg?w=1060', price: "$11" },
  "7": { name: "Pink Sweater",description : "A soft and feminine pink color that adds a touch of warmth and coziness to any outfit.", image: 'https://img.freepik.com/free-photo/attractive-young-smiling-stylish-woman-pink-sweater-feeling-comfortable-casual-style-posing-isolated-winter-fashion-trend_285396-908.jpg?t=st=1729703485~exp=1729707085~hmac=4429c800e715b62b8cb87754da9e8a7a01a24cedb22389719ba9f234ea1036b9&w=996', price: "$12" },
  "8": { name: "Royal blue T-Shirt ",description : "A rich and regal royal blue color that is perfect for making a statement .",image:'https://img.freepik.com/free-photo/stylish-casual-indian-man-wear-blue-tshirt-posing-against-grey-wall_627829-4727.jpg?t=st=1729703690~exp=1729707290~hmac=a9c9ecea8a962713a2e81e4ee0b2cf0afc41a486dc2eed3588390b0eadb1d9e1&w=996', price: "$6" }

};


const card = memo(() => {
  const { cartCount, setCartCount } = useContext(CartContext);
  
    
  
    return (
      
             <div className='products'>
               {Object.keys(data).map((key) => (
                 <div className='card' key={key}>
                   <div >
                      <img
                        src={data[key].image}
                        alt={data[key].name}
                        style={{
                          width: '100%', // or any other width you prefer
                          height: '200px', // or any other height you prefer
                          objectFit: 'fill', 
                        }}
                      />
                      <div className='card-details'>
                       <p className='product-name' >{data[key].name}</p>
                       <p className='product-description'>{data[key].description}</p>
                       <p className='product-price'>{data[key].price}</p>
                       <div >
                       <Button product={data[key]} cartCount={cartCount} setCartCount={setCartCount} />
                       </div>
                     </div>
                   </div>
                 </div>
               ))}
            </div>   
            
      )
    });





export default card;


    
  
  


  
  
    
  

    
