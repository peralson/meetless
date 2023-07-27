import Link from "next/link";

import Text from "./components/Text";
import Main from "./components/Main";

export default function Home() {
  return (
    <Main>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium">
          Your team has too many recurring meetings,
          <br />
          and you know it.
        </h1>
        <Text>
          Although recurring meetings can be productive, as companies grow,
          managers tend to create too many. And the problems are also many:
        </Text>
        <div className="flex flex-col gap-1">
          <Text>
            🏔 R. Meetings hardly get removed from your team&apos;s calendar.
          </Text>
          <Text>
            😥 R. Meetings tend to involve unnecessary employees that fear
            leaving.
          </Text>
          <Text>
            💸 R. Meetings make employees feel productive, when it might be the
            opposite.
          </Text>
        </div>
        <Text>
          Some companies,{" "}
          <a
            className="underline "
            href="https://www.youtube.com/watch?v=ADRmp8OnynE"
            target="_blank"
          >
            like Shopify
          </a>
          , have churned already.
        </Text>
      </div>
      <Link
        className="py-2 px-4 rounded w-fit bg-blue-800"
        href={"/build-report"}
      >
        Find out if you should too
      </Link>
    </Main>
  );
}
