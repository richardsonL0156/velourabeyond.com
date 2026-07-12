type Props = {
  ingredients: string[];
};

export default function ProductIngredients({
  ingredients,
}: Props) {
  return (
    <section className="mt-20">

      <div className="mb-10">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          Ingredients
        </p>

        <h2 className="mt-3 text-4xl font-light text-[#1F1F1F]">
          Crafted With Premium Ingredients
        </h2>

      </div>

      <div className="flex flex-wrap gap-4">

        {ingredients.map((ingredient) => (

          <div
            key={ingredient}
            className="
              rounded-full
              border
              border-[#E8E0D5]
              bg-white
              px-6
              py-3
              text-sm
              font-medium
              tracking-wide
              text-[#1F1F1F]
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#C5A572]
              hover:shadow-lg
            "
          >
            {ingredient}
          </div>

        ))}

      </div>

    </section>
  );
}