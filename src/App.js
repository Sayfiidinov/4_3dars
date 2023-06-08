import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div >
      <header className="shadow" >
        <div className="container-fuild text-light bg-dark ">
          <h4 class="">Company name</h4>
          <div className='header'>
      <ul class="nav justify-content-center  " >
  <li class="nav-item">
    <a class="nav-link text-light  "  href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Enterprise</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Support</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Pricing</a>
  </li>

</ul>
</div>

</div>
      </header>

      <section className='section-body'>
        <div className='text'>

          <h1>Welcome to Blog Home!</h1>
          <p>A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>

        <div class="row ">
          <div class="col-7 mt-4 ms-4">
          <div class="card">
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p>Iyun.08.2023</p>
    <h3 class="card-title">Featured Post Title</h3>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

          </div>

          <div class="col-3  mt-4">
          <div class="card">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
</div>
    
      
          <div class="card mt-3">
           <div class="card-header">
           Quote
           </div>
           <div class="card-body ">
            <blockquote class="blockquote mb-0">
           <p>A well-known quote, contained in a blockquote element.</p>
           <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
           </blockquote>
           </div>
          </div>

          <div class="card mt-3">
           <div class="card-header">
           Quote
           </div>
           <div class="card-body ">
            <blockquote class="blockquote mb-0">
           <p>A well-known quote, contained in a blockquote element.</p>
           <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
           </blockquote>
           </div>
          </div>





          </div>

          

        

          
          
        </div>

        <div class="row m-3">
        <div class="col-4">

        <div class="card width: 18rem;">
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>

        <div class="col-4">

        <div class="card width: 18rem;">
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>

        <div class="col-4">

        <div class="card width: 18rem;">
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div class="col-4 mt-3">

<div class="card width: 18rem;">
<img src={logo} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>


        </div>
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>


      </section>

      <footer>
        <div className='footer'>Copyright © Your Website 2023</div>
      </footer>
      
     
      
      
    </div>

    </div>
  );
}

export default App;
