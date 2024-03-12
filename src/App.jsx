import './App.css';

function App() {
  return (
    <div className="App">
      <div class="headbar">
  <div class="logo">
    <img src="logo.png" alt="Logo"/>
    <h1 id="title">LearnSpace</h1>
  </div>
  <div class="buttons">
    <a class="btn">Home</a>
    <a class="btn">Pro</a>
    <a class="btn">Contact</a>
  </div>
</div>
<div class="section1">
  <div class="subSection1">
      <h1 id="section1Title">Let's learn in our space!</h1>
      <h4 id="subTitle1">This website can help you learning Web Development by learning some coding languages like HTML, CSS, JavaScript or another tools like React or Tailwind.</h4>
  </div>
  <img id="logosImage" src="/public/img-logos.png" />
  
</div>
<div class="section2">
  <div id="slider">
      <input type="radio" name="slider" id="slide1" checked/>
      <input type="radio" name="slider" id="slide2"/>
      <input type="radio" name="slider" id="slide3"/>
      <input type="radio" name="slider" id="slide4"/>
    <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_1">
               <div class="slide-content">
                  <div className="s1Text">
                      <h1 id="s1Title">HTML Courses</h1>
                      <h3 id="s1SubTitle">Hyperlink Text bla bla bla</h3>
                    </div>
                  <img id="htmlLogo" src="/public/html-logo.svg"></img>
               </div>
            </div>
            <div class="slide slide_2">
               <div class="slide-content">
               <h1 id="s1Title">CSS Courses</h1>
                      <h3 id="s1SubTitle">Styling d ala smecher hai si invata bos</h3>
                  <img id="cssLogo" src="/public/css-logo.png"></img>
               </div>
            </div>
            <div class="slide slide_3">
               <div class="slide-content">
               <h1 id="s1Title">JavaScript Courses</h1>
                      <h3 id="s1SubTitle">Asta i greu ca naiba, da se poate </h3>
                  <img id="jsLogo" src="/public/js-logo.png"></img>
               </div>
            </div>
            <div class="slide slide_4">
               <div class="slide-content">
               <h1 id="s1Title">React Courses</h1>
                      <h3 id="s1SubTitle">asta i frumix, ne plake</h3>
                  <img id="reactLogo" src="/public/react-logo.png"></img>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>
</div>
<div class="footer">
  <h3 class="footerText">All rights are reserved by LearnSpace.</h3>
  <h4 class="footerText">&copy;2024</h4>
</div>
    </div>
  );
}

export default App;
