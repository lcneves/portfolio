(function () {
  var Tags = React.createClass({
    render: function() {
      var tagArray = this.props.tags.map(function(tag, index) {
        return (
          <div key={index} className="tag">
            {tag}
          </div>
        );
      });
      return (
        <div className="tagsDiv">
          {tagArray}
        </div>
      );
    }
  });

  var IconImg = React.createClass({
    render: function () {
      return (
        <img src={'img/' + this.props.picture} />
      );
    }
  });

  var IconDiv = React.createClass({
    render: function () {
      return (
        <div className={'icon-div bg-' + this.props.color}>
          <i className={' fa ' + this.props.icon + ' text-' + this.props.color} />
        </div>
      );
    }
  });

  var PortfolioIcon = React.createClass({
    handleClick: function(item) {
      ReactDOM.render(
        <PortfolioDescription item={item} />,
        document.getElementById('tablet-info')
      );
      myPortfolio.openApp(item.link);
    },
    render: function () {

      /* Wake up all Heroku apps, for improved user experience
         Will cause cross-reference errors, but still works. */
      if (this.props.item.link.indexOf('herokuapp') > -1) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", this.props.item.link, true);
        xmlHttp.send(null);
      }

      var icon = this.props.item.picture ? <IconImg picture={this.props.item.picture} />
      : <IconDiv color={this.props.item.color} icon={this.props.item.icon} />;

      return (
        <div className="portfolioItem" onClick={this.handleClick.bind(null, this.props.item)}>
          {icon}
          <div className="portfolioItemName">
            {this.props.item.name}
          </div>
        </div>
      );
    }
  });

  var PortfolioDescription = React.createClass({
    render: function() {
      return (
        <div className="portfolioDescription">
          <h2>
            {this.props.item.name}
          </h2>
          <div className="descriptionContent">
            <p className="descriptionParagraph">
              {this.props.item.description}
            </p>
            <Tags tags={this.props.item.technologies} label="Showcased technologies" />
          </div>
        </div>
      );
    }
  });

  var PortfolioList = React.createClass({
    render: function() {
      var itemArray = this.props.data.map(function(item, index) {
        return (
          <PortfolioIcon key={index} item={item} />
        );
      });
      return (
        <div className="portfolioList">
          <h3 className="portfolioTitle">
            {this.props.title}
          </h3>
          <div className="portfolioFlexContainer">
            {itemArray}
          </div>
        </div>
      );
    }
  });

  var frontendPortfolioArray = [
    {
      name: "Calculator",
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
      technologies: ["CSS3 animations", "inline SVG", "jQuery", "Geolocation", "Bootstrap"]
    },
    {
      name: "Simon Game",
      picture: "Simon.png",
      description: "A replica of the classics from the 1970s. Feel the nostalgia!",
      link: "simon/",
      technologies: ["CSS3", "HTML5 Audio", "jQuery", "JS game logic"]
    },
    {
      name: "Tic-Tac-Toe",
      picture: "Tic-tac-toe.png",
      description: "Play against three levels of difficulty. The middle one is smart and fun to play. The hardest one is invincible!",
      link: "tic-tac-toe/",
      technologies: ["Artificial intelligence", "JavaScript", "Animate.js"]
    },
    {
      name: "Pomodoro",
      picture: "Pomodoro.png",
      description: "The timepiece for the office, styled like a 1990s gadget.",
      link: "pomodoro/",
      technologies: ["JavaScript", "CSS3", "HTML5 Audio"]
    }
  ];

  var fullstackPortfolioArray = [
    {
      name: 'Your Stock',
      description: 'Chart the stock market in collaboration with your colleagues! All changes to the chart are updated to all users in real time.',
      link: 'https://yourstock.herokuapp.com',
      technologies: ['Node.js', 'Express', 'WebSockets', 'Yahoo API', 'Highcharts', 'Bootstrap', 'AngularJS'],
      icon: 'fa-line-chart',
      color: 'success'
    },
    {
      name: 'Your Pin',
      description: 'A Pinterest clone demo. Add photos and images to the gallery! Open in new tab to login with Twitter, for security reasons.',
      link: 'https://yourpin.herokuapp.com',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Passport session', 'OAuth', 'Login with Twitter', 'Bootstrap', 'AngularJS', 'Masonry'],
      icon: 'fa-picture-o',
      color: 'danger'
    },
    {
      name: 'Your Book',
      description: "A book club system. Manage your library, see other people's books, propose and accept trade requests!",
      link: 'https://yourbook.herokuapp.com',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Passport session', 'Open Library API', 'Bootstrap', 'AngularJS'],
      icon: 'fa-book',
      color: 'info'
    },
    {
      name: 'Your Bar',
      description: 'See all bars in your area, check in and find out how many people are going!',
      link: 'https://yourbar.herokuapp.com',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Passport session', 'Yelp API', 'AngularJS'],
      icon: 'fa-glass',
      color: 'warning'
    }
  ];

  ReactDOM.render(
    <PortfolioList title="Front-end apps" data={frontendPortfolioArray} />,
    document.getElementById('frontend-react-container')
  );

  ReactDOM.render(
    <PortfolioList title="Full-stack websites" data={fullstackPortfolioArray} />,
    document.getElementById('fullstack-react-container')
  );

  // Render the clock in the tablet

  var Clock = React.createClass({
    render: function() {
      var dateHours = this.props.date.getHours();
      var dateMinutes = this.props.date.getMinutes().toString();
      var thisHours = dateHours < 12 ? dateHours : dateHours - 12;
      var thisMinutes = dateMinutes.length === 2 ? dateMinutes : '0' + dateMinutes;
      var amPm = dateHours < 12 ? 'AM' : 'PM';
      return (
        <span>
          {thisHours}:{thisMinutes} {amPm}
        </span>
      );
    }
  });

  setInterval(function() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('tablet-time')
    );
  }, 1000); // Try to update every second

  // Render the certificates
  var certificatesArray = [
    {
      issuer: 'Free Code Camp',
      name: 'Front End Development Program',
      duration: '400+ hours',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'APIs', 'jQuery', 'Bootstrap', 'AngularJS'],
      image: 'img/certificate-front-end.jpg',
      link: 'http://www.freecodecamp.com/lcneves/front-end-certification'
    },
    {
      issuer: 'Free Code Camp',
      name: 'Back End Development Program',
      duration: '400+ hours',
      skills: ['Node.js', 'Express', 'Git', 'MongoDB', 'WebSockets', 'User sessions'],
      image: 'img/certificate-back-end.jpg',
      link: 'http://www.freecodecamp.com/lcneves/back-end-certification'
    }
  ];

  var Certificate = React.createClass({
    render: function () {
      return (
        <div className="certificate">
          <h3 className="certificateName">
            {this.props.item.name}
          </h3>
          <a href={this.props.item.link} target="_blank">
            <img className="img-responsive" src={this.props.item.image} />
          </a>
          <p>
            Issued by {this.props.item.issuer}
          </p>
          <p>
            Duration: {this.props.item.duration}
          </p>
          <Tags tags={this.props.item.skills} label="Skills" />
        </div>
      );
    }
  });

  var CertificateList = React.createClass({
    render: function() {
      var certificateArray = this.props.data.map(function(item, index) {
        return (
          <Certificate key={index} item={item} />
        );
      });
      return (
        <div>
          <h2 className="certificatesTitle">
            My developer certificates
          </h2>
          <div className="certificatesContainer">
            {certificateArray}
          </div>
        </div>
      );
    }
  });

  ReactDOM.render(
    <CertificateList data={certificatesArray} />,
    document.getElementById('certificates-react-container')
  );
})();
