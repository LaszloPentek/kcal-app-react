import React from 'react'

export default function FoodItem( {data} ) {
  let {foodName, kcal, fat, saturatedFat, carbs, sugar, fiber, protein } = data;
  return (
    <li>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{foodName}</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>kcal</th>
            <th>{ kcal }</th>
          </tr>
          <tr>
            <th>Fat</th>
            <th>{ fat }</th>
          </tr>
          <tr>
            <th>Saturated Fat</th>
            <th>{ saturatedFat }</th>
          </tr>
          <tr>
            <th>Carbonhydrates</th>
            <th>{ carbs }</th>
          </tr>
          <tr>
            <th>Sugar</th>
            <th>{ sugar }</th>
          </tr>
          <tr>
            <th>Protein</th>
            <th>{ protein }</th>
          </tr>
          <tr>
            <th>Fiber</th>
            <th>{ fiber }</th>
          </tr>
        </tbody>
      </table>        
    </li>
  )
}
