import React from 'react'
import App from './App'

export default React.createClass({

  getInitialState () {
  return {
    links: [
      "http://www.resumetem.com/wp-content/uploads/2017/10/sample-depositphotos_35186549-stock-photo-sample-grunge-red-round-stamp.jpg",
      "http://www.joshuacasper.com/contents/uploads/joshua-casper-samples-free.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Simple_random_sampling.PNG/300px-Simple_random_sampling.PNG",
      "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11405548.jpg",
      "https://cdn.xl.thumbs.canstockphoto.com/sample-blue-square-grungy-stamp-isolated-on-white-background-drawing_csp20635443.jpg",
      "https://www.myfico.com/Images/sample_overlay.gif",
      "https://previews.123rf.com/images/carmenbobo/carmenbobo1312/carmenbobo131200063/24308511-stamp-with-word-sample-inside-vector-illustration.jpg",
      "http://3.bp.blogspot.com/-8cQhL1rxNU4/VOsaEN4ofdI/AAAAAAAAHaA/11tGkd7TXEU/s1600/sample.jpg",
      "http://i.imgur.com/I86rTVl.jpg",
      "https://comps.canstockphoto.com/sample-image_csp27057271.jpg",
      "https://thumbs.dreamstime.com/z/sample-stamp-white-background-sign-90532936.jpg",
      "http://tfsassets.azureedge.net/sampletry.jpg",
      "https://keydifferences.com/wp-content/uploads/2016/06/population-vs-sample2.jpg",
      "https://thumb9.shutterstock.com/display_pic_with_logo/436114/274833056/stock-vector-sample-grunge-retro-red-isolated-ribbon-stamp-sample-stamp-sample-sample-sign-274833056.jpg",
      "http://www.alittlethingcalledlove.co.uk/wp-content/uploads/2015/01/Sample-image.jpg",
      "http://orperry.com/sample/wp-content/uploads/2015/12/sample-logo.png"
    ]
  };
},

  componentDidMount()
  {

  },

  addImage(){
    var newLinks = JSON.parse(JSON.stringify(this.state.links))
    newLinks.unshift("https://res.cloudinary.com/demo-robert/image/upload/l_text:arial_30_bold_stroke:David%20Walsh%20Blog,bo_15px_solid_rgb:000000,a_45,e_screen,o_7,co_rgb:0000FF,fl_tiled/q_90/234_72_z_qpwsct.jpg")
    this.setState({
      links: newLinks
    })
  },

  render() {
    console.log("render");
    return <div>
    <input type="button" onClick={this.addImage}/>
    <App/>
    {this.state.links.map((l, i) => <img src={l} height="300px" width="300px" key={i}/>)}
      </div>
  }
})
