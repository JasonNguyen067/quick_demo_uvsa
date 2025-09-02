import Image from "next/image"
import photo_vsa from "../../imgs/photo_vsa.jpg";

export default function Imagedescription () {
  return (
    <div className="flex items-center justify-center gap-8 p-8">
        <Image src={photo_vsa} alt="uvsa-event" width={300} height={300}
        className="rounded-lg shadow-lg">
        </Image>
    </div>
  );
}