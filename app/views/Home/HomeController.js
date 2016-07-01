class HomeController  {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   */
  constructor($log) {
    this.$log = $log;
    this.nav = [
      { "name": "start",
        "headline": "Plot your garden!",
        "subhead": "Preparation is half the battle",
        "imgUrl": "",
        "url": "#!/hardiness",
        "content": `Let's organize and plot your garden. We'll plant good companions close to each other and ensure plants are spaced properly.`,
        "disabled": false
      },
      { "name": "basics",
        "headline": "Getting Started",
        "subhead": "Learn the basics",
        "imgUrl": "http://shmector.com/_ph/12/944466602.png",
        "url": "#!/",
        "content": `There's a lot to know before starting a garden. We'll break it down by category, so that you know what you're doing and have what you need.`,
        "disabled": true
      },
      { "name": "recipes",
        "headline": "Recipes",
        "subhead": "Make great dishes",
        "imgUrl": "",
        "url": "#!/",
        "content": `After you've grown all this fresh food, let's cook some delicious meals. There's nothing like eating a homegrown meal!`,
        "disabled": true

      }
    ]
  }

}

export default HomeController;
