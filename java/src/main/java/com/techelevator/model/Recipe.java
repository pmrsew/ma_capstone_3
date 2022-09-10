package com.techelevator.model;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "recipe")
@NamedQueries({
        @NamedQuery(name = "Recipe.updateByRecipeIngredients_IngredientIdEquals",
                query = "update Recipe r set  inner" +
                " join r.recipeIngredients recipeIngredients where " +
                "recipeIngredients.ingredientId = :ingredientId")
})
public class Recipe {

    @Id
    @Column(name = "recipe_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "mp_recipe_id")
    private Long recipeId;

    @Column(name = "recipe_name", nullable = false)
    private String recipeName;

    @Column(name="category" )
    private String category;

    @Column(name="recipe_instructions")
    private String recipeInstructions;

/*     ***  RECIPE--INGREDIENTS ***
*/
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "recipe_ingredients",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id"))
    Set<Ingredient> ingredientsInRecipe = new HashSet<>();

/*     *** MEAL--RECIPE ***
*/
    @ManyToMany(mappedBy = "recipesInMeal", cascade = CascadeType.ALL)
    Set<Meal> mealsWithRecipe = new HashSet<>();

/*     *** USER--RECIPE ***
*/
    @ManyToMany(mappedBy = "userRecipes", cascade = CascadeType.ALL)
    Set<User> usersWithRecipe = new HashSet<>();

/*    ##### GETTERS AND SETTERS #####
*/
    public Long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getRecipeInstructions() {
        return recipeInstructions;
    }

    public void setRecipeInstructions(String recipeInstructions) {
        this.recipeInstructions = recipeInstructions;
    }

    public Set<Ingredient> getIngredientsInRecipe() {
        return ingredientsInRecipe;
    }

    public void setIngredientsInRecipe(Set<Ingredient> ingredientsInRecipe) {
        this.ingredientsInRecipe = ingredientsInRecipe;
    }

    public Set<Meal> getMealsWithRecipe() {
        return mealsWithRecipe;
    }

    public void setMealsWithRecipe(Set<Meal> mealsWithRecipe) {
        this.mealsWithRecipe = mealsWithRecipe;
    }

    public Set<User> getUsersWithRecipe() {
        return usersWithRecipe;
    }

    public void setUsersWithRecipe(Set<User> usersWithRecipe) {
        this.usersWithRecipe = usersWithRecipe;
    }

/*    ##### EQUALS AND HASHCODE #####
*/
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Recipe recipe = (Recipe) o;
        return recipeId != null && Objects.equals(recipeId, recipe.recipeId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

/*    ##### TO STRING #####
*/
    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "recipeId = " + recipeId + ", " +
                "recipeName = " + recipeName + ", " +
                "category = " + category + ", " +
                "recipeInstructions = " + recipeInstructions + ")";
    }
}

