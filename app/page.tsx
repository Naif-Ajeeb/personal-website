import Hello from "@/app/components/hello";

console.log('what am i doing here? -- SERVER/CLIENT?');
export default function Home() {
  return (
    <>
    <h1 className="text-3xl">Hey there m8</h1>
    <Hello />
    </>
  );
}
