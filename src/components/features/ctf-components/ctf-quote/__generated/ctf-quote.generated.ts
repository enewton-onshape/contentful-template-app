import * as Types from '../../../../../lib/__generated/graphql.types';

import { ComponentReferenceFields_AnchorLink_Fragment, ComponentReferenceFields_BillOfMaterialsTemplate_Fragment, ComponentReferenceFields_BlogTemplate_Fragment, ComponentReferenceFields_ColorfulHeader_Fragment, ComponentReferenceFields_ComponentAccordion_Fragment, ComponentReferenceFields_ComponentAnchorLinks_Fragment, ComponentReferenceFields_ComponentCarousel_Fragment, ComponentReferenceFields_ComponentCarouselCard_Fragment, ComponentReferenceFields_ComponentColorfulHeader_Fragment, ComponentReferenceFields_ComponentCta_Fragment, ComponentReferenceFields_ComponentDuplex_Fragment, ComponentReferenceFields_ComponentFaq_Fragment, ComponentReferenceFields_ComponentHeroBanner_Fragment, ComponentReferenceFields_ComponentInfoBlock_Fragment, ComponentReferenceFields_ComponentProductTable_Fragment, ComponentReferenceFields_ComponentQuote_Fragment, ComponentReferenceFields_ComponentSuggestedContent_Fragment, ComponentReferenceFields_ComponentTextBlock_Fragment, ComponentReferenceFields_FeaturePage_Fragment, ComponentReferenceFields_FooterMenu_Fragment, ComponentReferenceFields_MenuGroup_Fragment, ComponentReferenceFields_MyContentType_Fragment, ComponentReferenceFields_NavigationMenu_Fragment, ComponentReferenceFields_Page_Fragment, ComponentReferenceFields_Seo_Fragment, ComponentReferenceFields_TopContainer_Fragment, ComponentReferenceFields_TopicBusinessInfo_Fragment, ComponentReferenceFields_TopicPerson_Fragment, ComponentReferenceFields_TopicProduct_Fragment, ComponentReferenceFields_TopicProductFeature_Fragment, ComponentReferenceFields_WistiaVideo_Fragment } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragment } from '../../ctf-asset/__generated/ctf-asset.generated';
import { ComponentReferenceFieldsFragmentDoc } from '../../../../../lib/shared-fragments/__generated/ctf-componentMap.generated';
import { AssetFieldsFragmentDoc } from '../../ctf-asset/__generated/ctf-asset.generated';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '@src/lib/fetchConfig';
export type QuoteFieldsFragment = { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<(
          { __typename?: 'AnchorLink' }
          & ComponentReferenceFields_AnchorLink_Fragment
        ) | (
          { __typename?: 'BillOfMaterialsTemplate' }
          & ComponentReferenceFields_BillOfMaterialsTemplate_Fragment
        ) | (
          { __typename?: 'BlogTemplate' }
          & ComponentReferenceFields_BlogTemplate_Fragment
        ) | (
          { __typename?: 'ColorfulHeader' }
          & ComponentReferenceFields_ColorfulHeader_Fragment
        ) | (
          { __typename?: 'ComponentAccordion' }
          & ComponentReferenceFields_ComponentAccordion_Fragment
        ) | (
          { __typename?: 'ComponentAnchorLinks' }
          & ComponentReferenceFields_ComponentAnchorLinks_Fragment
        ) | (
          { __typename?: 'ComponentCarousel' }
          & ComponentReferenceFields_ComponentCarousel_Fragment
        ) | (
          { __typename?: 'ComponentCarouselCard' }
          & ComponentReferenceFields_ComponentCarouselCard_Fragment
        ) | (
          { __typename?: 'ComponentColorfulHeader' }
          & ComponentReferenceFields_ComponentColorfulHeader_Fragment
        ) | (
          { __typename?: 'ComponentCta' }
          & ComponentReferenceFields_ComponentCta_Fragment
        ) | (
          { __typename?: 'ComponentDuplex' }
          & ComponentReferenceFields_ComponentDuplex_Fragment
        ) | (
          { __typename?: 'ComponentFaq' }
          & ComponentReferenceFields_ComponentFaq_Fragment
        ) | (
          { __typename?: 'ComponentHeroBanner' }
          & ComponentReferenceFields_ComponentHeroBanner_Fragment
        ) | (
          { __typename?: 'ComponentInfoBlock' }
          & ComponentReferenceFields_ComponentInfoBlock_Fragment
        ) | (
          { __typename?: 'ComponentProductTable' }
          & ComponentReferenceFields_ComponentProductTable_Fragment
        ) | (
          { __typename?: 'ComponentQuote' }
          & ComponentReferenceFields_ComponentQuote_Fragment
        ) | (
          { __typename?: 'ComponentSuggestedContent' }
          & ComponentReferenceFields_ComponentSuggestedContent_Fragment
        ) | (
          { __typename?: 'ComponentTextBlock' }
          & ComponentReferenceFields_ComponentTextBlock_Fragment
        ) | (
          { __typename?: 'FeaturePage' }
          & ComponentReferenceFields_FeaturePage_Fragment
        ) | (
          { __typename?: 'FooterMenu' }
          & ComponentReferenceFields_FooterMenu_Fragment
        ) | (
          { __typename?: 'MenuGroup' }
          & ComponentReferenceFields_MenuGroup_Fragment
        ) | (
          { __typename?: 'MyContentType' }
          & ComponentReferenceFields_MyContentType_Fragment
        ) | (
          { __typename?: 'NavigationMenu' }
          & ComponentReferenceFields_NavigationMenu_Fragment
        ) | (
          { __typename?: 'Page' }
          & ComponentReferenceFields_Page_Fragment
        ) | (
          { __typename?: 'Seo' }
          & ComponentReferenceFields_Seo_Fragment
        ) | (
          { __typename?: 'TopContainer' }
          & ComponentReferenceFields_TopContainer_Fragment
        ) | (
          { __typename?: 'TopicBusinessInfo' }
          & ComponentReferenceFields_TopicBusinessInfo_Fragment
        ) | (
          { __typename?: 'TopicPerson' }
          & ComponentReferenceFields_TopicPerson_Fragment
        ) | (
          { __typename?: 'TopicProduct' }
          & ComponentReferenceFields_TopicProduct_Fragment
        ) | (
          { __typename?: 'TopicProductFeature' }
          & ComponentReferenceFields_TopicProductFeature_Fragment
        ) | (
          { __typename?: 'WistiaVideo' }
          & ComponentReferenceFields_WistiaVideo_Fragment
        ) | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<(
          { __typename?: 'Asset' }
          & AssetFieldsFragment
        ) | null> } } } | null, image?: (
    { __typename?: 'Asset' }
    & AssetFieldsFragment
  ) | null };

export type CtfQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
  locale?: Types.InputMaybe<Types.Scalars['String']>;
  preview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: (
    { __typename?: 'ComponentQuote' }
    & QuoteFieldsFragment
  ) | null };

export const QuoteFieldsFragmentDoc = `
    fragment QuoteFields on ComponentQuote {
  __typename
  sys {
    id
  }
  quote {
    json
    links {
      entries {
        block {
          ...ComponentReferenceFields
        }
      }
      assets {
        block {
          ...AssetFields
        }
      }
    }
  }
  quoteAlignment
  image {
    ...AssetFields
  }
  imagePosition
  colorPalette
}
    `;
export const CtfQuoteDocument = `
    query CtfQuote($id: String!, $locale: String, $preview: Boolean) {
  componentQuote(id: $id, locale: $locale, preview: $preview) {
    ...QuoteFields
  }
}
    ${QuoteFieldsFragmentDoc}
${ComponentReferenceFieldsFragmentDoc}
${AssetFieldsFragmentDoc}`;
export const useCtfQuoteQuery = <
      TData = CtfQuoteQuery,
      TError = unknown
    >(
      variables: CtfQuoteQueryVariables,
      options?: UseQueryOptions<CtfQuoteQuery, TError, TData>
    ) =>
    useQuery<CtfQuoteQuery, TError, TData>(
      ['CtfQuote', variables],
      customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables),
      options
    );

useCtfQuoteQuery.getKey = (variables: CtfQuoteQueryVariables) => ['CtfQuote', variables];
;

useCtfQuoteQuery.fetcher = (variables: CtfQuoteQueryVariables, options?: RequestInit['headers']) => customFetcher<CtfQuoteQuery, CtfQuoteQueryVariables>(CtfQuoteDocument, variables, options);