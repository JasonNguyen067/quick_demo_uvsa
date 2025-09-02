import TypewriterText from "./components/typewriter";
import Imagedescription from "./components/imagedescription"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <TypewriterText />

      <div className="flex items-center justify-center mt-10">
        <Imagedescription/>
      </div>
    </main>
  );
}
