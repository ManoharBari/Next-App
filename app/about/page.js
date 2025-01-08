// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import React from "react";

// function page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   console.log(searchParams);
//    return (
//     <div>
//       <button
//         onClick={() => {
//           router.push("/");
//         }}
//       >
//         Home
//       </button>
//     </div>
//   );
// }

// export default page;

"use client";

import { usePathname } from "next/navigation";

function page() {
  const pathname = usePathname();

  function switchLocale(locale) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, "", newPath);
  }

  return (
    <>
      <button onClick={() => switchLocale("en")}>English</button>
      <button onClick={() => switchLocale("fr")}>French</button>
    </>
  );
}

export default page;
