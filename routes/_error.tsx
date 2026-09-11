import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function ErrorPage(ctx) {
  const status = ctx.error instanceof HttpError ? ctx.error.status : 500;
  const notFound = status === 404;
  return (
    <>
      <Head>
        <title>
          {notFound ? "404 - Page not found" : "Something went wrong"}
        </title>
      </Head>
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center text-gray-900 dark:text-gray-100">
          <h1 class="text-4xl font-bold">
            {notFound ? "404 - Page not found" : `Error ${status}`}
          </h1>
          <p class="my-4">
            {notFound
              ? "The page you were looking for doesn't exist."
              : "Something went wrong while rendering this page."}
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
});
