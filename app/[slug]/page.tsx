'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import RootLayout from '@/app/componennts/layout/RootLayout';
import SearchResult from '@/app/componennts/ui/SearchResult';
import BlogDetails from '@/app/componennts/ui/BlogDetails';

const page = ( { params }: { params: Promise<{ slug: string }> } ) => {
  const searchParams = useSearchParams();
  const resolvedParams = React.use(params);
  
  // Check if this is a search page (has search parameter "s")
  const isFromSearch = searchParams.get('s');
  
  // Check if this is a blog detail page (contains hyphens, typical for blog slugs)
  const isBlogDetail = resolvedParams.slug.includes('-') && !isFromSearch;

  return (
    <RootLayout>
      {isFromSearch && (
        <SearchResult />
      )}

      {isBlogDetail && (
        <BlogDetails />
      )}
    </RootLayout>
  )
}

export default page