import profile from './assets/avi.jpg'
function Card(){
    return(
            <div className="card">
                <img src={profile} alt="image" width="150px" height="120px" />
                <h2>Avinash</h2>
                <p>A python developer</p>


            </div>
    );
}

export default Card;