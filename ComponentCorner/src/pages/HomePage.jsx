import Hero from "../components/Hero";

function HomePage(){
    return(
        <div>
            <Hero
                title ="Component Corner"
                subtitle = "Here you can get anything you would like"
                calltoaction = "Shop Here"/>
            <h2>Introduction</h2>
            <p>This website is your go to shop to buy anything technology related.</p>
            <h3>Why Shop with Us?</h3>
            <p>We offer the ebst prices around and offer the baset discount on hot items.</p>
        </div>
    );
}

export default HomePage;