import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Entartainment App. Authorization. Login. Sign Up.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}