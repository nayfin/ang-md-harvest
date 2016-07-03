class HomeController  {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   */
  constructor($log) {
    this.$log = $log;
    this.gardenImgUrl = "http://thirstyrootgardens.org/wp-content/uploads/2014/06/IMAG2209.jpg";
    this.nav = [
      { "name": "basics",
        "headline": "Getting Started",
        "subhead": "Learn the basics",
        "imgUrl": "./assets/svg/shovel.svg",
        "alt": "Shovel Image",
        "url": "#!/",
        "content": `There's a lot to know before starting a garden. We'll break it down by category, so that you have what you need and know what you're doing.`,
        "disabled": true
      },
      { "name": "start",
        "headline": "Plot your garden!",
        "subhead": "Preparation is half the battle",
        "imgUrl": "./assets/svg/shovel.svg",
        "alt": "Shovel Image",
        "url": "#!/hardiness",
        "content": `Let's organize and plot your garden. We'll plant good companions close to each other and ensure plants are spaced properly.`,
        "disabled": false
      },
      { "name": "recipes",
        "headline": "Recipes",
        "subhead": "Make great dishes",
        "imgUrl": "./assets/svg/shovel.svg",
        "alt": "Shovel Image",
        "url": "#!/",
        "content": `After you've grown all this fresh food, let's cook some delicious meals. There's nothing like eating a homegrown meal!`,
        "disabled": true
      }
    ]
  }
}

export default HomeController;
