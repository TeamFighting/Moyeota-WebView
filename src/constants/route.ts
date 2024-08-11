import type { TValues } from '@utils/type';

export const ROUTE = {
    ROOT: '/',
    BLOG: '/blog',
    MAIN_PAGE: '/Mainpage',
    DETAIL_PAGE: '/detailpage/:postId',
    CREATE_POT_PAGE: '/CreatePotPage',
    CREATE_COMPLETE: '/CreateComplete',
    DESTINATION_PAGE: '/DestinationPage/:from/:postId',
    UPDATE_DESTINATION_PAGE: '/UpdateDestinationPage',
    SEARCH_RESULTS: '/searchresults/:from/:postId',
    UPDATE_SEARCH_RESULTS: '/updatesearchresults',
    QUICK_MATCH: '/quickmatch',
    QUICK_MATC_HFINDING: '/quickmatchfinding',
    CREATEDETAIL: '/createdetail',
    UPDATEPOT: '/updatepot/:postId',
    CHAT: '/chat/:postId/:roomId',
    CHATS: '/chats',
    CHATLISTS: '/chatlists',
    POTPAGE: '/potpage',
    REIMBURSEMENT_POTOWNER: '/reimbursement/potOwner/:postId/:userId',
    REIMBURSEMENT: '/reimbursement/:postId/:userId',
    REIMBURSEMENT_CURRENT: '/reimbursement/current/:postId/:userId',
    ADD_ACCOUNT: '/:from/addaccount/:userId',
    OWNERCALC: '/OwnerCalc/:postId/:userId',
    APPLIERCALC: '/ApplierCalc/:postId/:userId',
    BANK_RECOMMEND: '/bankRecommend',
    WAIT_PLEASE: '/waitPlease',
    LOGIN: '/login',
    MYPAGE: '/mypage/:userId',
    MYPAGE_MODIFY: '/mypage/modify/:userId',
    MYPAGE_EDIT_ACCOUNT: '/mypage/editAccount/:userId',
    MYPAGE_MANAGE_PROFILE: '/mypage/manageprofile/:userId',
} as const;

export type TRoute = TValues<typeof ROUTE>;
