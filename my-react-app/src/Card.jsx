import profile from './assets/avi.jpg'
function Card(){
    return(
            <div className="card">
                <img  className='card-image' src={profile} width='150px' alt="image" />
                <h2 className='card-title'>Avinash</h2>
                <p className='card-text'>A python developer</p>


            </div>
    );
}

export default Card;