import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CheckCircle,
  Leaf,
  ScissorsLineDashed,
} from 'lucide-react';
import Link from "next/link";

const perks = [
  {
    name: 'Unique Creations',
    Icon: ScissorsLineDashed,
    description:
      'Discover one-of-a-kind handmade treasures from Tunisian artisans, each piece telling a story of craftsmanship and tradition.',
  },
  {
    name: 'Quality Assurance',
    Icon: CheckCircle,
    description:
      'Every handmade item on SouqTunis undergoes meticulous verification to ensure it meets our highest quality standards. Your satisfaction is guaranteed, or your money back within 30 days.',
  },
  {
    name: 'Sustainable Artistry',
    Icon: Leaf,
    description:
      "Support sustainable practices! SouqTunis is committed to preserving the environment. We contribute 1% of sales to the preservation and restoration of the natural beauty of Tunisia.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Discover Unique{' '}
            <span className='text-violet-600'>
              Handmade Creations{' '}
            </span>
            at our Marketplace
          </h1>

          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Explore a curated collection of meticulously crafted,
            one-of-a-kind treasures at SouqTunis. Our team
            meticulously verifies each creation to uphold our
            commitment to excellence.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/products'
              className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant='ghost'>
              Our quality promise &rarr;
            </Button>
          </div>
        </div>

        <ProductReel href="/products" title={"Brand New"} query={{ sort:'desc', limit: 4 }} />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

    </>

  )
}
