// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function calculateCost() {
  const sizeOfPizza = document.getElementById("medium-size-pizza").checked
  const numberOfTopping = parseInt(document.getElementById("number-of topping").value)

  if (sizeOfPizza == true) {
    const totalCost = 6 + 0.8 * numberOfTopping
    const totalCostWithTaxes = (totalCost * 13) / 100 + totalCost
    document.getElementById("result").innerHTML =
      "The total cost with taxes is : $" + totalCostWithTaxes.toFixed(2)
  } else {
    const totalCost = 10 + 0.8 * numberOfTopping
    const totalCostWithTaxes = (totalCost * 13) / 100 + totalCost
    document.getElementById("result").innerHTML =
      "The total cost with taxes is  : $" + totalCostWithTaxes.toFixed(2)
  }
}
