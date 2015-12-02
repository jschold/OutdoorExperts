checkAdventure.controller('BackpackingCtrl', function BackpackingCtrl($scope, $stateParams) {
  $scope.backpackings = [
    {"name": "Map", "sunname": "Sunscreen"},
    {"name": "Compass", "sunname": "Lip balm"},
    {"name": "Insulation", "sunname": "Sunglasses"},
    {"name": "GPS (optional)"},
    {"name": "Altimeter (optional)"}
  ]

  $scope.sunscreens = [
    {"name": "Sunscreen"},
    {"name": "Lip balm"},
    {"name": "Sunglasses"},
  ]

  $scope.insulations = [
    {"name": "Jacket, vest, pants, gloves, hat : see Clothing, below"}
  ]

  $scope.illuminations = [
    {"name": "Headlamp or flashlight"},
    {"name": "Extra batteries"},
  ]

  $scope.firstaids = [
    {"name": "First Aid Kit"},
  ]

  $scope.fires = [
    {"name": "Matches or Lighter"},
    {"name": "Waterproof Container"},
    {"name": "Fire Starter"},
  ]

  $scope.repairs = [
    {"name": "Knife or Multi-Tool"},
    {"name": "Repair Kits for stove and mattress; Duct tape strips"},
  ]

  $scope.nutritions = [
    {"name": "Extra day's supply of food"},
  ]

  $scope.hydrations = [
    {"name": "Water bottles or hydration reservoirs"},
    {"name": "Water filter or other treatment system"},
  ]

  $scope.shelters = [
    {"name": "Tent, tarp, bivy or reflective blanket"}
  ]
});
