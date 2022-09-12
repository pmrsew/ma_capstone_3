package com.techelevator.business;

import com.techelevator.exceptions.IngredientNotFoundException;
import com.techelevator.exceptions.MealNotFoundException;
import com.techelevator.exceptions.MealPlanNotFoundException;
import com.techelevator.exceptions.UserNotFoundException;
import com.techelevator.model.Ingredient;
import com.techelevator.model.Meal;
import com.techelevator.model.MealPlan;
import com.techelevator.model.User;
import com.techelevator.repository.*;
import com.techelevator.util.BasicLogger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserOwnershipService {
    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private IngredientRepository ingredientRepository;
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private MealPlanRepository mealPlanRepository;


    //TODO test
    public Set<Ingredient> addIngredientToUserPantry(Long userId, Long ingredientId) {
        Set<Ingredient> pantry = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (ingredientRepository.findByIngredientId(ingredientId) == null) {
                throw new IngredientNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                Ingredient ingredient = ingredientRepository.findByIngredientId(ingredientId);
                pantry = user.getUserPantry();

                pantry.add(ingredient);
                user.setUserPantry(pantry);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return pantry;
    }


    //TODO remove ing from pan
    public Set<Ingredient> removeIngredientFromUserPantry(Long userId, Long ingredientId) {
        Set<Ingredient> pantry = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (ingredientRepository.findByIngredientId(ingredientId) == null) {
                throw new IngredientNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                Ingredient ingredient = ingredientRepository.findByIngredientId(ingredientId);

                pantry = user.getUserPantry();
                pantry.remove(ingredient);
                user.setUserPantry(pantry);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return pantry;
    }

    //todo list pantry
    Set<Ingredient> listUserPantry(Long userId) {
        Set<Ingredient> pantry = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                pantry = user.getUserPantry();
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return pantry;
    }

    //todo add user to meal
    public Set<Meal> addMealToUser(Long userId, Long mealId) {
        Set<Meal> userMeals = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (mealRepository.findByMealId(mealId) == null) {
                throw new MealNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                Meal meal = mealRepository.findByMealId(mealId);

                userMeals = user.getUserMeals();
                userMeals.add(meal);
                user.setUserMeals(userMeals);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMeals;
    }

    //todo remove user from meal
    Set<Meal> removeMealFromUser(Long userId, Long mealId)  {
        Set<Meal> userMeals = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (mealRepository.findByMealId(mealId) == null) {
                throw new MealNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                Meal meal = mealRepository.findByMealId(mealId);

                userMeals = user.getUserMeals();
                userMeals.remove(meal);
                user.setUserMeals(userMeals);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMeals;
    }

    //todo display users meals
    Set<Meal> listUserMeals(Long userId) {
        Set<Meal> userMeals = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                userMeals = user.getUserMeals();
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMeals;
    }

    //todo add user to meal plan
    public Set<MealPlan> addMealPlanToUser(Long userId, Long mealPlanId) {
        Set<MealPlan> userMealPlans = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (mealPlanRepository.findByMealPlanId(mealPlanId) == null) {
                throw new MealPlanNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                MealPlan mealPlan = mealPlanRepository.findByMealPlanId(mealPlanId);

                userMealPlans = user.getUserMealPlans();
                userMealPlans.add(mealPlan);
                user.setUserMealPlans(userMealPlans);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMealPlans;
    }

    //todo remove user from meal plan
    Set<MealPlan> removeMealPlanFromUser(Long userId, Long mealPlanId) {
        Set<MealPlan> userMealPlans = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else if (mealPlanRepository.findByMealPlanId(mealPlanId) == null) {
                throw new MealPlanNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                MealPlan mealPlan = mealPlanRepository.findByMealPlanId(mealPlanId);

                userMealPlans = user.getUserMealPlans();
                userMealPlans.remove(mealPlan);
                user.setUserMealPlans(userMealPlans);

                userRepository.saveAndFlush(user);
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMealPlans;
    }

    //todo list/display meal plan

    Set<MealPlan> listUserMealPlans(Long userId) {
        Set<MealPlan> userMealPlans = new HashSet<>();
        User user = userRepository.findByUserId(userId);
        try {
            if (userRepository.findByUserId(userId) == null) {
                throw new UserNotFoundException();
            } else {
                user = userRepository.findByUserId(userId);
                userMealPlans = user.getUserMealPlans();
            }
        } catch (Exception e) {
            BasicLogger.log(e.getMessage());
        }
        return userMealPlans;
    }


}