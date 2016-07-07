function PlantDataservice($q){
  var plants = [
    {
      "name": "beet",
      "sun": "Full",
      "soil": "Loamy",
      "daycount": 80,
      "compatibleZones":[3,4,5,6,7]
    },
    {
      "name": "blueberry",
      "sun": "Full Sun",
      "soil": "Sandy",
      "daycount": 75,
      "compatibleZones":  [3,4,5,6,7]
    },
    {
      "name": "carrot",
      "sun": "Full Sun",
      "soil": "Sandy",
      "daycount": 75,
      "compatibleZones": [4,5,6,7,8,9,10]
    },
    {
      "name": "kiwi",
      "sun": "Part Sun",
      "soil": "Loamy",
      "daycount": 75,
      "compatibleZones": [4,5,6,7,8]
    },
    {
      "name": "lettuce",
      "sun": "Light Shade",
      "soil": "Loamy",
      "daycount": 75,
      "compatibleZones": [4,5,6,7,8,9]
    },
    {
      "name": "peach",
      "sun": "Full Sun",
      "soil": "Sandy",
      "daycount": 75,
      "compatibleZones": [5,6,7,8]
    },
    {
      "name": "pineapple",
      "sun": "Light Shade",
      "soil": "Sandy",
      "daycount": 75,
      "compatibleZones": [5,6,7]
    },
    {
      "name": "strawberry",
      "sun": "Full Sun",
      "soil": "Loamy",
      "daycount": 75,
      "compatibleZones": [3,4,5,6,7,8,9,10]
    },
    {
      "name": "tomato",
      "sun": "Full Sun",
      "soil": "Loamy",
      "daycount": 75,
      "compatibleZones": [5,6,7]
    },
    {
      "name": "watermelon",
      "sun": "Light Shade",
      "soil": "Sandy",
      "daycount": 75,
      "compatibleZones": [3,4,5,6,7,8,9,10]
    }
  ];

  this.loadAllPlants = function(){
    return $q.when(plants);

  }
}

export default [ '$q', PlantDataservice ];
