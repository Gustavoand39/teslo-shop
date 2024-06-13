import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Gender } from "@/interfaces";

interface Props {
  params: {
    id: Gender;
  };
}

const categories: Record<Gender, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Todos",
};

const subtitles: Record<Gender, string> = {
  men: "Descubre productos excepcionales",
  women: "Encuentra los productos más deseados",
  kid: "Explora los productos más divertidos para los más pequeños",
  unisex: "Descubre productos excepcionales para todos",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const filterData = initialData.products.filter((product) => {
    return product.gender === id;
  });

  return (
    <div>
      <Title
        title={`Productos para ${categories[id] ?? "Todos"}`}
        subtitle={subtitles[id] ?? "Los mejores productos para ti"}
      />

      <ProductGrid products={filterData} />
    </div>
  );
}
