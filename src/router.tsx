import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import { Home } from "./pages/Home";
import { HubIndex } from "./pages/HubIndex";
import { HubLayout } from "./pages/HubLayout";
import { HubNoteLoading } from "./pages/HubNoteLoading";
import { HubNotePage, hubNoteLoader } from "./pages/HubNotePage";
import { HubTrackIndex } from "./pages/HubTrackIndex";
import { NotFound } from "./pages/NotFound";
import { SiteLayout } from "./pages/SiteLayout";
import { WorkCaseStudy } from "./pages/WorkCaseStudy";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <SiteLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "work/:slug", element: <WorkCaseStudy /> },
          { path: "*", element: <NotFound /> },
        ],
      },
      {
        path: "hub",
        element: <HubLayout />,
        children: [
          { index: true, element: <HubIndex /> },
          { path: ":series", element: <HubTrackIndex /> },
          {
            path: ":series/*",
            loader: hubNoteLoader,
            element: <HubNotePage />,
            hydrateFallbackElement: <HubNoteLoading />,
          },
        ],
      },
    ],
  },
]);
