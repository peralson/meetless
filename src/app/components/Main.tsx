export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-center pt-16 px-4">
      <div className="flex flex-col gap-8 justify-stretch text-left w-full max-w-2xl">
        {children}
      </div>
    </main>
  );
}
