import './App.css';
import profiles from './data/berlin.json';
import { useState } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook.jsx';

function App() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState(0);
  const [likeButtonColor, setLikeButtonColor] = useState(colors[0]);
  const [glassesOn, setGlassesOn] = useState(true);
  const [diceFace, setDiceFace] = useState(Math.floor(Math.random() * 6 + 1));
  const [carouselIndex, setCarouselIndex] = useState(0)

  const handleLike = () => {
    setLikes(likes + 1);
    setLikeButtonColor(
      colors[(colors.indexOf(likeButtonColor) + 1) % colors.length]
    );
  };
  const toggleGlasses = () => {
    setGlassesOn(!glassesOn);
  };

  const rollDice = () => {
    setDiceFace(0);
    setTimeout(() => {
      setDiceFace(Math.floor(Math.random() * 6 + 1));
    }, 1000);
  };

  const faces = {
    face1: 'dice/dice1.png',
    face2: 'dice/dice2.png',
    face3: 'dice/dice3.png',
    face4: 'dice/dice4.png',
    face5: 'dice/dice5.png',
    face6: 'dice/dice6.png',
  };

  const carouselRight = () => {
    setCarouselIndex((carouselIndex +1)%4)
  }

  const carouselLeft = () => {
    setCarouselIndex((carouselIndex + 3)%4)
  }

  return (
    <div className="App">
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>

      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div>
        <Random min={1} max={6} />
      </div>

      <div>
        <BoxColor r={255} g={0} b={0} />
      </div>

      <div>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
      </div>

      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <LikeButton
          likes={likes}
          color={likeButtonColor}
          handleLike={handleLike}
        />
      </div>
      <div>
        <ClickablePicture
          img="maxence.png"
          clickedImg="maxence-glasses.png"
          glassesOn={glassesOn}
          toggleGlasses={toggleGlasses}
        />
      </div>
      <div>
        <Dice
          faces={faces}
          faceEmpty="dice/dice-empty.png"
          diceFace={diceFace}
          rollDice={rollDice}
        />
      </div>
      <div>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
          carouselIndex = {carouselIndex}
          carouselRight = {carouselRight}
          carouselLeft = {carouselLeft}
        />
      </div>
      <div>
        <NumbersTable limit= {12} /> 
      </div>
      <div>
        <Facebook profiles={profiles}/>
      </div>
    </div>
  );
}

export default App;
