import React, { useState } from 'react';


export default function FoodNutritionForm() {
  const [foodName, setFoodName] = useState("");
  const [kcal, setKcal] = useState("");
  const [fat, setFat] = useState("");
  const [saturatedFat, setsaturatedFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [sugar, setSugar] = useState("");
  const [protein, setProtein] = useState("");
  const [fiber, setFiber] = useState("");

  const handleChange = setter => event => setter(event.target.value);


  const handleSubmit = event =>{
    event.preventDefault();
    console.log(foodName, kcal, fat, saturatedFat, carbs, sugar, protein, fiber);


    setFoodName("");
    setKcal("");
    setFat("");
    setsaturatedFat("");
    setCarbs("");
    setProtein("");
    setFiber("");
    setSugar("");
  }
  
  


  return (
    <form>FoodNutritionForm
      <div className='form-row'>
        <label htmlFor="food-name">Food Name</label>
        <input
            type="text" 
            id="food-name" 
            name="food-name" 
            value={ foodName } 
            onChange={handleChange(setFoodName)}
            placeholder="Food Name" 
            required />
      </div>
      <div className="form-row">
        <label htmlFor="kcal">KCal</label>
        <input 
              type="number" 
              id='kcal-input' 
              name='kcal' 
              placeholder="KCal"
              value={kcal}
              onChange={handleChange(setKcal)}
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <label htmlFor="fat-input">Fat</label>
        <input 
              type="number" 
              id='fat-input' 
              name='fat' 
              placeholder="Fat"
              value={fat}
              onChange={handleChange(setFat)} 
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <label htmlFor="saturated-fat-input">Saturated Fat</label>
        <input 
              type="number" 
              id='saturated-fat-input' 
              name='saturated-fat' 
              placeholder="Saturated Fat" 
              value={saturatedFat}
              onChange={handleChange(setsaturatedFat)}
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <label htmlFor="carbs-input">Carbonhydrates</label>
        <input 
              type="number" 
              id='carbs-input' 
              name='carbs' 
              placeholder="Carbonhydrates"
              value={carbs}
              onChange={handleChange(setCarbs)} 
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <label htmlFor="sugar-input">Sugar</label>
        <input 
              type="number" 
              id='sugar-input' 
              name='sugar' 
              placeholder="Sugar" 
              value={sugar}
              onChange={handleChange(setSugar)}
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <label htmlFor="protein-input">Protein</label>
        <input 
            type="number" 
            id='protein-input' 
            name='protein' 
            placeholder="Protein"
            value={protein}
            onChange={handleChange(setProtein)} 
            min="0" 
            required/>
      </div>
      <div className="form-row">
        <label htmlFor="fiber-input">Fiber</label>
        <input 
              type="number" 
              id='fiber-input' 
              name='fiber' 
              placeholder="Fiber"
              value={fiber}
              onChange={handleChange(setFiber)} 
              min="0" 
              required/>
      </div>
      <div className="form-row">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
