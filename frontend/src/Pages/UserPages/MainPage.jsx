import React, { Fragment } from "react"
import { Link, Routes, Route } from 'react-router-dom';

import Dashbored from './DashBored/DashBored'
import Pantry from './pantry/pantry'
import Shopping_List from './shopping-list/shopping-List'
import RecipeCard from "./recipe-card/recipe-card";
import NavBar from '../../Components/Navigation.Component/NavigationBar'

export default [
    <Route path="user-dash" element={<> <NavBar mainContent={<Dashbored />} /> </>} key='user-dash' />,
    <Route path="user-pantry" element={<> <NavBar mainContent={<Pantry />} /> </>} key='user-pantry' />,
    <Route path="user-shopping-list" element={<> <NavBar mainContent={<Shopping_List />} /> </>} key='user-shopping-list' />,
    <Route path="user-recipe-card" element={<> <NavBar mainContent={<RecipeCard />} /> </>} key='user-recipe-card' />
]