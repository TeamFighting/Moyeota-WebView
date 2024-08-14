import type { TValues } from '@utils/type';

export const ADD_ACCOUNT_FROM = {
    CREATE_POT: 'createPot',
    MY_PAGE: 'mypage',
} as const;

export type TAddAccountFrom = TValues<typeof ADD_ACCOUNT_FROM>;