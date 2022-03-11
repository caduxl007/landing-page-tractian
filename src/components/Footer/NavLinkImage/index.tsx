import Image from 'next/image';

interface NavLinkImageProps {
  href: string;
  image_url: string;
  alt: string;
}

export function NavLinkImage({ href, image_url, alt }: NavLinkImageProps) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <Image src={image_url} width={20} height={20} alt={alt} />
    </a>
  );
}
