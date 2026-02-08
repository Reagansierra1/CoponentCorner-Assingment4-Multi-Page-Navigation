import './Hero.css'
function Hero({title, subtitle, calltoaction}){
    return(
        <div className="hero">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <button>{calltoaction}</button>
        </div>
    );
}
export default Hero;