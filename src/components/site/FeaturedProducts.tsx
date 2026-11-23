import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
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
  browsing = false,
}: {
  limit?: number;
  className?: string;
  eagerImages?: boolean;
  skeletonCount?: number;
  animated?: boolean;
  browsing?: boolean;
}) {
  const [items, setItems] = useState<Product[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [moreBelow, setMoreBelow] = useState(false);

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

  useEffect(() => {
    const node = gridRef.current;
    if (!node || !browsing) return;
    const update = () => {
      const cards = Array.from(node.children);
      const left = node.getBoundingClientRect().left;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, index) => {
        const delta = Math.abs(card.getBoundingClientRect().left - left);
        if (delta < distance) { distance = delta; nearest = index; }
      });
      setActiveIndex(nearest);
      setMoreBelow(node.scrollHeight - node.clientHeight - node.scrollTop > 4);
    };
    update();
    node.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => { node.removeEventListener("scroll", update); observer.disconnect(); };
  }, [items, browsing]);

  const goTo = (index: number) => {
    const node = gridRef.current;
    const card = node?.children[index];
    if (!node || !(card instanceof HTMLElement)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollTo({ left: card.offsetLeft - node.offsetLeft, behavior: reduced ? "instant" : "smooth" });
  };

  if (failed || (items && items.length === 0)) return null;

  const slots = items ?? Array.from({ length: skeletonCount }).map(() => null);

  return (
    <div className="min-w-0">
    <div className="relative">
    <ul ref={gridRef} aria-label="ADL Automotive products" tabIndex={browsing ? 0 : undefined} className={cn(browsing ? "store-product-track" : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {slots.map((product, index) =>
        product ? (
          <li
            key={product.id}
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`section-dark group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-ink shadow-lifted transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${browsing ? "store-product-card" : "hover:-translate-y-1"} ${
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
              <div className={cn("chip-light w-full overflow-hidden p-2", browsing ? "aspect-[4/3]" : "aspect-square")}>
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
                <p className="line-clamp-2 font-display text-base font-bold uppercase leading-snug text-foreground">
                  {product.name}
                </p>

                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  {product.brand ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
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

                <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-3">
                  <div>
                    <span className="whitespace-nowrap font-display text-lg font-bold text-foreground">
                      {money(product.price)}
                    </span>
                    {product.on_sale && product.regular_price ? (
                      <span className="ml-1.5 text-xs text-muted-foreground line-through">
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
            className={cn("h-80 animate-pulse rounded-2xl border border-border bg-surface", browsing && "store-product-card")}
          />
        ),
      )}
    </ul>
    {browsing && moreBelow ? <div aria-hidden="true" className="store-scroll-fade pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 lg:block" /> : null}
    </div>
    {browsing && items && items.length > 1 ? (
      <nav aria-label="Product browsing" className="mx-auto mt-1 flex h-11 max-w-60 items-center justify-between gap-1 lg:hidden">
        <Button variant="ghost" size="icon" aria-label="Previous product" title="Previous product" disabled={activeIndex === 0} onClick={() => goTo(activeIndex - 1)} className="shrink-0 text-accent"><ChevronLeft /></Button>
        <div className="flex min-w-0 items-center justify-center overflow-x-auto no-scrollbar">
          {items.map((product, index) => <Button key={product.id} variant="ghost" size="icon" aria-label={`Show product ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} title={`Product ${index + 1}`} onClick={() => goTo(index)} className="h-9 w-6 shrink-0"><span className={cn("h-1.5 rounded-full transition-all motion-reduce:transition-none", activeIndex === index ? "w-4 bg-accent" : "w-1.5 bg-muted-foreground/50")} /></Button>)}
        </div>
        <Button variant="ghost" size="icon" aria-label="Next product" title="Next product" disabled={activeIndex === items.length - 1} onClick={() => goTo(activeIndex + 1)} className="shrink-0 text-accent"><ChevronRight /></Button>
      </nav>
    ) : null}
    </div>
  );
}
