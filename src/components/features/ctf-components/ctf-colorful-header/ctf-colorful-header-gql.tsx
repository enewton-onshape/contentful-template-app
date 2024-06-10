import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';

import { useCtfColorfulHeaderQuery } from './__generated/ctf-colorful-header.generated';
import { CtfColorfulHeader } from './ctf-colorful-header';

interface CtfColorfulHeaderGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

export const CtfCtaGql = ({ id, locale, preview }: CtfColorfulHeaderGqlPropsInterface) => {
  const { data, isLoading } = useCtfColorfulHeaderQuery({
    id,
    locale,
    preview,
  });

  const componentCta = useContentfulLiveUpdates(data?.componentColorfulHeader);

  if (isLoading || !componentCta) {
    return null;
  }

  return <CtfColorfulHeader {...componentCta} />;
};
