/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { VoucherFilterInput, VoucherSortingInput, DiscountValueTypeEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL query operation: VoucherList
// ====================================================

export interface VoucherList_vouchers_edges_node_countries {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface VoucherList_vouchers_edges_node_minSpent {
  __typename: "Money";
  currency: string;
  amount: number;
}

export interface VoucherList_vouchers_edges_node_channelListing_channel {
  __typename: "Channel";
  id: string;
  name: string;
}

export interface VoucherList_vouchers_edges_node_channelListing_minSpent {
  __typename: "Money";
  amount: number;
  currency: string;
}

export interface VoucherList_vouchers_edges_node_channelListing {
  __typename: "VoucherChannelListing";
  id: string;
  channel: VoucherList_vouchers_edges_node_channelListing_channel;
  discountValue: number;
  currency: string;
  minSpent: VoucherList_vouchers_edges_node_channelListing_minSpent | null;
}

export interface VoucherList_vouchers_edges_node {
  __typename: "Voucher";
  id: string;
  code: string;
  startDate: any;
  endDate: any | null;
  usageLimit: number | null;
  discountValueType: DiscountValueTypeEnum;
  discountValue: number | null;
  countries: (VoucherList_vouchers_edges_node_countries | null)[] | null;
  minSpent: VoucherList_vouchers_edges_node_minSpent | null;
  minCheckoutItemsQuantity: number | null;
  channelListing: VoucherList_vouchers_edges_node_channelListing[] | null;
}

export interface VoucherList_vouchers_edges {
  __typename: "VoucherCountableEdge";
  node: VoucherList_vouchers_edges_node;
}

export interface VoucherList_vouchers_pageInfo {
  __typename: "PageInfo";
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface VoucherList_vouchers {
  __typename: "VoucherCountableConnection";
  edges: VoucherList_vouchers_edges[];
  pageInfo: VoucherList_vouchers_pageInfo;
}

export interface VoucherList {
  vouchers: VoucherList_vouchers | null;
}

export interface VoucherListVariables {
  channel?: string | null;
  after?: string | null;
  before?: string | null;
  first?: number | null;
  last?: number | null;
  filter?: VoucherFilterInput | null;
  sort?: VoucherSortingInput | null;
}
