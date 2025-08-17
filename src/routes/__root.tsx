import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsInProd } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => <div>Not Found</div>,
  shellComponent: RootDocument,
  ssr: true,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const links = [
    {
      link: "/a",
      label: "Collection A",
    },
    { link: "/b", label: "Collection B" },
    { link: "/c", label: "Collection C" },
    { link: "/d", label: "Collection D" },
  ];

  const router = useRouterState();

  const path = router.location.pathname;

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="grid place-items-center bg-gray-100 min-h-dvh">
          <div className="space-y-4">
            <div className="flex gap-4">
              {links.map((link) => (
                <Link
                  to={link.link}
                  key={link.link}
                  className={
                    path === link.link
                      ? "bg-blue-500 text-white p-2"
                      : "bg-gray-200 p-2"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {children}
            <b>
              Just keep this tab open in background for 5m+ until every
              collection is broken.
            </b>
          </div>
        </div>
        <TanStackRouterDevtoolsInProd />
        <Scripts />
      </body>
    </html>
  );
}
