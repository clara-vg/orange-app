import "./Card.css"

const Card = () => {

  return (
    <div>
      <div className="wrapper-flex py-6">
    <div className="container">
      <img src='../images/20.jpg' alt='profile image' />
      <h1 className="name">Mountain</h1>
      <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
      <button type="button" className='btnCard'>More Info</button>
    </div>

    <div className="container">
      <img src='../images/18.jpg' alt='profile image' />
      <p className="name">Mountain</p>
      <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
      <button type="button" className='btnCard'>More Info</button>
    </div>

    <div className="container">
      <img src='../images/17.jpg' alt='profile image' />
      <p className="name">Mountain</p>
      <p className="description">Hi there! My name is Anna and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
      <button type="button" className='btnCard'>More Info</button>
    </div>
    </div>
    </div>
  )
}

export default Card
