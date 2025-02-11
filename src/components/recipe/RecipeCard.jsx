import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

function RecipeCard({
  title,
  description,
  imageUrl,
  prepTime,
  ratings,
  ingredients,
  id,
}) {
  return (
    <Card className="overflow-hidden transition-transform duration-200 hover:scale-105">
      <Link to={`/product/${id}`} className="block relative">
        <img
          className="rounded-t-lg w-full aspect-video object-cover"
          src={imageUrl}
          alt={title}
        />
      </Link>

      <div className="p-4 flex flex-col gap-3">
        <Link to={`/product/${id}`}>
          <h1 className="text-xl font-bold tracking-tight text-primary">
            {title}
          </h1>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {ingredients?.map((ingredient) => (
            <span
              key={ingredient._id}
              className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs font-medium"
            >
              {ingredient.name}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            ⏳ {prepTime} mins
          </span>
          <span className="font-medium text-foreground">
            ⭐ {ratings.length} ratings
          </span>
        </div>
      </div>
    </Card>
  );
}

export default RecipeCard;
