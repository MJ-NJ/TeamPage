import Navbar from "./Navbar";
import './team.css';

function Team() {

    const users = [
        { name: 'John Doe', role: 'CEO', image: 'https://i.ibb.co/JC4skS0/team-animate.jpg'},
        { name: 'Jane Doe', role: 'CTO', image: 'https://i.ibb.co/JC4skS0/team-animate.jpg'},
        { name: 'Jack Doe', role: 'COO', image: 'https://i.ibb.co/JC4skS0/team-animate.jpg'},
        { name: 'Jill Doe', role: 'CFO', image: 'https://i.ibb.co/JC4skS0/team-animate.jpg'},]

    return(
        
        <section>
    <section class="team-page-section">
    <Navbar />
        <div class="container">
            
            <div class="sec-title centered">
                
                <div class="separator"><span></span></div>
                <h2 class="head-text">Meet our team</h2>
            </div>

            <div class="row clearfix">
                {
                users.map((item, i) =>
                <div class="team-block col-lg-4 col-md-6 col-sm-12">
                    <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul class="social-icons">
                            <li><a href="#"><i class="fab fa-github"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>

                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                        <div class="image">
                            <a href="#"><img src={item.image} alt="" /></a>
                        </div>
                        <div class="lower-content">
                            <h3><a href="#">{item.name} </a></h3>
                            <div class="designation">{item.role} </div>
                        </div>
                    </div>
                </div>
                )}
                    
    
            </div>
        </div>
    </section>
</section>
    )
}

export default Team;