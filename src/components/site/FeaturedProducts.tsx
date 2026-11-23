import { useEffect, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORE_ORIGIN = "https://adl.apaarr.com";

type Product = {
  id: number;
  slug: string;
  name: string;
  price: number | null;
  regular_price: number | null;
  on_sale: boolean;
  in_stock: boolean;
  brand: string | null;
  image: string | null;
  url: string;
};

const money = (value: number | null) =>
  value == null ? null : `AED ${Number(value).toLocaleString("en-AE")}`;

const productUrl = (product: Product) =>
  `${STORE_ORIGIN}/products/${encodeURIComponent(product.slug)}`;

export function FeaturedProducts({
  limit = 8,
  className,
  eagerImages = false,
  skeletonCount = 4,
  animated = true,
}: {
  limit?: number;
  className?: string;
  eagerImages?: boolean;
  skeletonCount?: number;
  animated?: boolean;
}) {
  const [items, setItems] = useState<Product[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`${STORE_ORIGIN}/api/public/featured-products?limit=${limit}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad response"))))
      .then((data) => {
        if (active) setItems(Array.isArray(data?.items) ? data.items : []);
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, [limit]);

  useEffect(() => {
    const node = gridRef.current;
    if (!node || !animated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [items, animated]);

  if (failed || (items && items.length === 0)) return null;

  const slots = items ?? Array.from({ length: skeletonCount }).map(() => null);

  return (
    <ul ref={gridRef} className={cn("grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {slots.map((product, index) =>
        product ? (
          <li
            key={product.id}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-lifted transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
              !animated || visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href={productUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${product.name} at ADL Automotive (opens in a new tab)`}
              className="flex h-full flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-white p-2">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={eagerImages ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : null}
              </div>

              <div className="flex flex-col p-3">
                <p className="line-clamp-2 font-display text-base font-bold uppercase leading-snug text-white">
                  {product.name}
                </p>

                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  {product.brand ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                      {product.brand}
                    </span>
                  ) : null}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      product.in_stock
                        ? "bg-primary-soft text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {product.in_stock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="mt-auto flex items-end justify-between gap-2 pt-3">
                  <div>
                    <span className="font-display text-lg font-bold text-white">
                      {money(product.price)}
                    </span>
                    {product.on_sale && product.regular_price ? (
                      <span className="ml-1.5 text-xs text-white/50 line-through">
                        {money(product.regular_price)}
                      </span>
                    ) : null}
                  </div>
                  <span className={buttonVariants({ variant: "light", size: "sm" })}>
                    View Details
                  </span>
                </div>
              </div>
            </a>
          </li>
        ) : (
          <li
            key={`skeleton-${index}`}
            className="h-80 animate-pulse rounded-2xl border border-white/10 bg-surface"
          />
        ),
      )}
    </ul>
  );
}
