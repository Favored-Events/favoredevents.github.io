import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { EngagementProposals } from "./pages/EngagementProposals";
import { LuxuryEventDecor } from "./pages/LuxuryEventDecor";
import { Gallery } from "./pages/Gallery";
import { Photography } from "./pages/Photography";

// Use import.meta.env.BASE_URL which Vite provides automatically
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/engagement-proposals",
    Component: EngagementProposals,
  },
  {
    path: "/luxury-event-decor",
    Component: LuxuryEventDecor,
  },
  {
    path: "/photography",
    Component: Photography,
  },
  {
    path: "/gallery",
    Component: Gallery,
  },
], {
  basename: import.meta.env.BASE_URL
});