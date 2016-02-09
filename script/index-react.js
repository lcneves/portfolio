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
  render: function() {
    return (
      <div className="portfolioItem">
        <img src={'img/' + this.props.item.picture} />
        <div className="portfolioItemInfo">
          <h3 className="portfolioItemName">
            {this.props.item.name}
          </h3>
          <p className="portfolioItemDescription">
            {this.props.item.description}
          </p>
          <PortfolioItemTag tags={this.props.item.technologies} />
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
        thisItem.css('transform', 'rotateY(90deg)');
        window.setTimeout(function() {
          thisItem.children('img').css('display', 'none');
          thisItem.children('.portfolioItemInfo').css('display', 'block');
          thisItem.css('transform', 'rotateY(180deg)');
        }, animationDuration);
      }, function() {
        var thisItem = $(this).children('.portfolioItem');
        thisItem.css('transform', 'rotateY(270deg)');
        window.setTimeout(function() {
          thisItem.children('img').css('display', 'block');
          thisItem.children('.portfolioItemInfo').css('display', 'none');
          thisItem.css('transform', 'rotateY(0deg)');
        }, animationDuration);
      });
    }(jQuery));
  },
  render: function() {
    var itemArray = this.props.data.map(function(item, index) {
      return (
        <a key={index} className="portfolioAnchor" href={item.link} target="_blank">
          <PortfolioItem item={item} />
        </a>
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
    link: "pomodoro-clock/",
    technologies: ["JavaScript", "CSS3", "HTML5 Audio"]
  },
  {
    name: "Simon Game",
    picture: "Simon.png",
    description: "Simon Game",
    link: "A replica of the classics from the 1970s. Feel the nostalgia!",
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
