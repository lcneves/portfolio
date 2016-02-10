var PortfolioItemTag = React.createClass({
  render: function() {
    var tagArray = this.props.tags.map(function(tag, index) {
      return (
        <span key={index} className="tag">
          {tag}
        </span>
      );
    });
    return (
      <div className="tagsDiv">
        {tagArray}
      </div>
    );
  }
});

var PortfolioItem = React.createClass({
  handleClick: function(url) {
    var iframe = document.getElementById('tablet-iframe');
    iframe.src = url + 'index.html';
    iframe.style.display = 'block';
    window.setTimeout(function () {
      iframe.style.opacity = '1';
      iframe.style.width = '71em';
      iframe.style.height = '38em';
      iframe.style.top = '0';
      iframe.style.left = '0';
    }, 10);
  },
  render: function() {
    return (
      <div className="portfolioItem" onClick={this.handleClick.bind(null, this.props.item.link)}>
        <img src={'img/' + this.props.item.picture} />
        <div className="portfolioItemName">
          {this.props.item.name}
        </div>
      </div>
    );
  }
});

var PortfolioList = React.createClass({
  componentDidMount: function() {
    (function($) {
      $('.portfolioAnchor').hover(function() {
        var thisItem = $(this).children('.portfolioItem');
      });
    }(jQuery));
  },
  render: function() {
    var itemArray = this.props.data.map(function(item, index) {
      return (
        <PortfolioItem key={index} item={item} />
      );
    });
    return (
      <div className="portfolioFlexContainer">
        {itemArray}
      </div>
    );
  }
});

var frontendPortfolioArray = [
  {
    name: "Chocolate Calc",
    picture: "Calculator.png",
    description: "A calculator that looks like a chocolate bar!",
    link: "calculator/",
    technologies: ["CSS3", "JavaScript"]
  },
  {
    name: "Weather",
    picture: "Weather.png",
    description: "Displays your local weather with beautiful animations.",
    link: "weather/",
    technologies: ["CSS3 animations", "inline SVG", "jQuery", "Geolocation"]
  },
  {
    name: "Retro Pomodoro Clock",
    picture: "Pomodoro.png",
    description: "the timepiece for the office, styled like a 1990s gadget.",
    link: "pomodoro/",
    technologies: ["JavaScript", "CSS3", "HTML5 Audio"]
  },
  {
    name: "Simon Game",
    picture: "Simon.png",
    description: "A replica of the classics from the 1970s. Feel the nostalgia!",
    link: "simon/",
    technologies: ["CSS3", "HTML5 Audio", "jQuery"]
  },
  {
    name: "Tic-Tac-Toe",
    picture: "Tic-tac-toe.png",
    description: "Play against three levels of difficulty. The middle one is smart and fun to play. The hardest one is invincible!",
    link: "tic-tac-toe/",
    technologies: ["Artificial intelligence", "Animate.js"]
  }
];

ReactDOM.render(
  <PortfolioList data={frontendPortfolioArray} />,
  document.getElementById('frontend-react-container')
);
