import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  if (productsInCart.length === 0) {
    redirect("/empty");
  }

  return (
    <div className="flex justify-center items-center px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de compras" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col">
            <Link href="/home" className="underline mb-5">
              Continua agregando productos
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

                <div className="w-full">
                  <p>{product.title}</p>
                  <p>${product.price}</p>

                  <div className="flex justify-between items-center">
                    <QuantitySelector quantity={3} />
                    <button className="text-red-500/90 underline mt-3">
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
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
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
