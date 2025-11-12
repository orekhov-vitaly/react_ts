import type { ImageProps } from "./types";
import { ImageComponent } from "./styles";

function Image({ src, alt }: ImageProps) {
    return <ImageComponent src={src} alt={alt} />;
}

export default Image;
