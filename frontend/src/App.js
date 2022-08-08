
import React, { Component } from 'react';
import Header from './Components/Header';

import Feature from './Components/Feature';
import Services from './Components/Services';
import About from './Components/About';
import Presentation from './Components/Presentation';
import aboutimage from './images/about.png'
import aboutimage1 from './images/download.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer';
import ParticleBackground from './ParticleBackground';
import ReactGA from 'react-ga';
import $ from 'jquery';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
     
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }
   
  render() {
   
  
  return (
    <div className="App">
      <Header/>
    
    
      <Feature/>
      <About image={aboutimage} title='We Develop Smart Software Solutions' />
      <Presentation />
      {/* <About image={aboutimage1} title='Comes With All you Need For daily Life'/> */}
      <Services/>
      //changes made
      {/* <About image={aboutimage1} title='Comes With All you Need For daily Life'/> */}
      {/* <div className="container">
        <div className="col-md-6 offset-md-3" >
        
          <ContactForm /> 

        </div>
      </div>    */}
      <Footer />
   </div>
  );
}}

export default App;
