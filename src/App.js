import React from 'react'
import Home from './pages/Home'
import "./cafes.css"
import Login from './pages/Login'
import Basket from './pages/Basket'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const data=[
  {cake:false,drink:true,type:"Iced coffee",picture:"img/iced-americano.png",product:"Iced Americano",price:"65 Baht"}
  ,{cake:false,drink:true,type:"Iced coffee",picture:"img/iced-cappuccino.jpg",product:"Iced Cappuccino",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Iced coffee",picture:"img/iced-espresso.png",product:"Iced Espresso",price:"95 Baht"}
  ,{cake:false,drink:true,type:"Iced coffee",picture:"img/iced-latte.png",product:"Iced Latte",price:"70 Baht"}

  ,{cake:false,drink:true,type:"Hot coffee",picture:"img/hot-americano.png",product:"Hot Americano",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Hot coffee",picture:"img/hot-cappuccino.png",product:"Hot Cappuccino",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Hot coffee",picture:"img/hot-espresso.png",product:"Hot Espresso",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Hot coffee",picture:"img/hot-latte.png",product:"Hot Latte",price:"80 Baht"}

  ,{cake:false,drink:true,type:"Juice",picture:"img/smoothie-1.png",product:"Strawberry Smoothie",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Juice",picture:"img/smoothie-2.png",product:"Red Berry Smoothie",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Juice",picture:"img/smoothie-3.png",product:"Pineapple Smoothie",price:"80 Baht"}
  ,{cake:false,drink:true,type:"Juice",picture:"img/smoothie-4.png",product:"Watermelon Smoothie",price:"80 Baht"}

  ,{cake:true,drink:false,type:"Cake",picture:"img/special-01.jpg",product:"Strawberry Cheese Cake",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-02.jpg",product:"Blueberry Cheese Cake",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-03.jpg",product:"Strawberry Chocolate Cupcake",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-04.jpg",product:"Macaroon",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-05.jpg",product:"Cookies",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-06.jpg",product:"Waffle",price:"120 Baht"}
  ,{cake:true,drink:false,type:"Cake",picture:"img/special-07.jpg",product:"Pancake",price:"120 Baht"}
  ]

  return (
    <Router>
      <Switch>

      <Route exact path="/">
      <Home data={data}/>
      </Route>

      <Route  path="/login">
      <Login />
      </Route>

      <Route  path="/basket">
      <Basket />
      </Route>

    </Switch>
    </Router>
  )
}

export default App
