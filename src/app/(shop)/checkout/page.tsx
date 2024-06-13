import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="mr-5 rounded"
                />

                <div className="flex flex-col justify-evenly">
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7 h-auto">
            <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-lg">Juan Pérez</p>
              <p>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcadía Cuauhtémoc</p>
              <p>Ciudad de México</p>
              <p>CP 123123</p>
              <p>123 1234 123</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl font-bold mb-2">Resumen de compra</h2>

            <div className="grid grid-cols-2">
              <span className="font-semibold">No. de artículos:</span>
              <span className="text-right">3 artículos</span>

              <span className="font-semibold">Subtotal:</span>
              <span className="text-right">$100</span>

              <span className="font-semibold">Impuestos (15%):</span>
              <span className="text-right">$100</span>

              <span className="text-2xl font-bold mt-5">Total:</span>
              <span className="text-2xl mt-5 text-right">$100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5 text-gray-500">
                <span>
                  Al hacer clic en &quot;Continuar&quot;, aceptas nuestros{" "}
                  <a href="#" className="underline">
                    términos y condiciones
                  </a>{" "}
                  y nuestra{" "}
                  <a href="#" className="underline">
                    política de privacidad
                  </a>
                  .
                </span>
              </p>

              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
