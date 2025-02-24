import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-dvh">
      <span>
        No default page yet, visit{" "}
        <Link href="/dashboard" className="text-blue-500">
          dashboard
        </Link>{" "}
        page
      </span>
    </div>
  );
};

export default Page;
