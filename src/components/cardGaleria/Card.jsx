import "./Card.css"

const Card = () => {

  return (
    <div>
      <div className="wrapper-flex py-6">
    <div className="container">
      <img src='../images/20.jpg' alt='' />
      <h1 className="name">Trees</h1>
      <p className="description">Boulder.CO!</p>
    </div>

    <div className="container">
      <img src='../images/18.jpg' alt='' />
      <p className="name">Mountain</p>
      <p className="description">Boulder.CO!</p>
    </div>

    <div className="container">
      <img src='../images/17.jpg' alt='' />
      <p className="name">Clouds</p>
      <p className="description">Boulder.CO!</p>
    </div>
    </div>
    </div>
  )
}

export default Card
