import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import CreateDetailPage from './Pages/CreatePotPage/Components/DetailPage/index';
import CreatePotPage from './Pages/CreatePotPage';
import CreateComplete from './Pages/CreatePotPage/CreateComplete';
import DestinationPage from './Pages/CreatePotPage/Components/Map/DestinationPage';
import SearchResults from './Pages/CreatePotPage/Components/Map/SearchResults';
import QuickMatch from './Pages/QuickMatch/QuickMatch';
import QuickMatchFinding from './Pages/QuickMatch/QuickMatchFinding';
import UpdateDestinationPage from './Pages/UpdatePage/Map/DestinationPage';
import UpdateSearchResults from './Pages/UpdatePage/Map/SearchResults';
import FirebaseChat from './Pages/FirebaseChat';
import ChatLists from './Pages/FirebaseChat/ChatLists';
import UpdatePotPage from './Pages/UpdatePage';
import PotPage from './Pages/PotPage';
import OwnerReimbursement from './Pages/ReimbursementPage/OwnerReimbursement';
import ApplierReimbusement from './Pages/ReimbursementPage/ApplierReimbursement';
import AddAccount from './Pages/AddAccount';
import ChatPage from './Pages/(deprecated)ChatPage';
import OwnerCalc from './Pages/ReimbursementPage/Calculation/OwnerCalc';
import ApplierCalc from './Pages/ReimbursementPage/Calculation/ApplierCalc';
import BankRecommend from './Pages/AddAccount/BankListSheet/BankRecommend';
import ChatReimbursement from './Pages/FirebaseChat/Reimbursement';
import WaitPlease from './Pages/ReimbursementPage/Calculation/WaitPlease';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/Mainpage',
        element: <MainPage />,
    },
    {
        path: '/DetailPage/:postId',
        element: <DetailPage />,
    },
    {
        path: '/CreatePotPage',
        element: <CreatePotPage />,
    },
    {
        path: '/CreateComplete',
        element: <CreateComplete />,
    },
    {
        path: '/DestinationPage',
        element: <DestinationPage />,
    },
    {
        path: '/UpdateDestinationPage',
        element: <UpdateDestinationPage />,
    },
    {
        path: '/searchresults',
        element: <SearchResults />,
    },
    {
        path: '/updatesearchresults',
        element: <UpdateSearchResults />,
    },
    {
        path: '/quickmatch',
        element: <QuickMatch />,
    },
    {
        path: '/quickmatchfinding',
        element: <QuickMatchFinding />,
    },
    {
        path: '/createdetail',
        element: <CreateDetailPage />,
    },
    {
        path: '/updatepot',
        element: <UpdatePotPage />,
    },
    {
        path: '/chat/:postId/:roomId',
        element: <FirebaseChat />,
    },
    {
        path: '/chats',
        element: <ChatPage />,
    },
    {
        path: '/chatlists',
        element: <ChatLists />,
    },
    {
        path: '/potpage',
        element: <PotPage />,
    },
    {
        path: '/reimbursement/potOwner/:postId/:userId',
        element: <OwnerReimbursement />,
    },
    {
        path: '/reimbursement/:postId/:userId',
        element: <ApplierReimbusement />,
    },
    {
        path: '/:from/addaccount/:userId',
        element: <AddAccount />,
    },
    {
        path: '/OwnerCalc/:postId/:userId',
        element: <OwnerCalc />,
    },
    {
        path: '/ApplierCalc/:postId/:userId',
        element: <ApplierCalc />,
    },
    {
        path: '/bankRecommend',
        element: <BankRecommend />,
    },
    {
        path: '/chatJsx',
        element: <ChatReimbursement />,
    },
    {
        path: '/waitPlease',
        element: <WaitPlease />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <RouterProvider router={router} />,
    // </React.StrictMode>
);
