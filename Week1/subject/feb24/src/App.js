import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero";
import Card from "./components/Card"

import cardImage1 from "./assets/images/card/card1.png"
import cardImage2 from "./assets/images/card/card2.png"
import cardImage3 from "./assets/images/card/card3.png"
import cardImage4 from "./assets/images/card/card4.jpg"

function App() {

  const data = [
    {
      title: "Life lessons with Katie Zaferes",
      country: "Turkey",
      isSoldOut: true,
      price: 200,
      img: cardImage1
    },
    {
      title: "Learn wedding photography",
      country: "Tokyo",
      isSoldOut: true,
      price: 50,
      img: cardImage2
    },
    {
      title: "Group Mountain Biking",
      country: "Mexico City",
      isSoldOut: true,
      price: 350,
      img: cardImage3
    },
    {
      title: "Camping with beautiful view",
      country: "Vancouver",
      isSoldOut: true,
      price: 760,
      img: cardImage4
    }
  ]

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <div className='card--list'>
          
          {
            data.map((item, index) => {
              return (
                // <Card key={index} isSoldOut={item.isSoldOut} country={item.country} price={200} title={item.title} image={item.img} />
                <Card key={index} {...item} />
              )
            })
          }
          {/* <Card isSoldOut={true} country={"Istanbul"} price={200} title={"Life lessons with Katie Zaferes"} image={cardImage1}/>
          <Card isSoldOut={false} country={"Tokyo"} price={50} title={"Learn wedding photography"} image={cardImage2}/>
          <Card isSoldOut={true} country={"Mexico City"} price={350} title={"Group Mountain Biking"} image={cardImage3}/>
          <Card isSoldOut={true} country={"Vancouver"} price={760} title={"Camping with beautiful view"} image={cardImage4}/> */}
        </div>
      </main>
      
    </div>
  );
}

export default App;
